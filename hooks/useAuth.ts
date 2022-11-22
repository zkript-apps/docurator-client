import { useMutation, useQuery } from "react-query";
import { verifyAuth, authenticateUser } from "../utils/api/user";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { STALE_TIME } from "../utils/constants";

const useAuth = () => {
  const router = useRouter();
  const {
    data: verifyLoginData,
    isLoading: isVerifyLoginLoading,
    refetch: refetchVerifyLogin,
  } = useQuery(
    "verifyAuth",
    async () => {
      const token = Cookies.get("l_auth");
      return await verifyAuth(token);
    },
    {
      onError: (data: any) => {
        if (router.pathname !== "/") {
          toast.error(data, {
            id: "authenticateUser",
            duration: 3000,
          });
          router.push("/");
        }
      },
      enabled: false,
      staleTime: STALE_TIME,
    }
  );
  const {
    mutate: triggerAuthenticateUser,
    isLoading: isAuthenticateUserLoading,
  } = useMutation(async (data: any) => await authenticateUser(data), {
    onSuccess: (data) => {
      Cookies.set("l_auth", data.token);
      toast.success("You are now authenticated", {
        id: "authenticateUser",
        duration: 3000,
      });
      if (router.pathname === "/" && data.userType === "Admin") {
        router.push("/students");
      } else {
        router.push("/");
      }
    },
    onError: (err: any) => {
      toast.error(err, {
        id: "authenticateUser",
        duration: 5000,
      });
    },
  });
  useEffect(() => {
    if (isAuthenticateUserLoading) {
      toast.loading("Logging in...", {
        id: "authenticateUser",
      });
    }
  }, [isAuthenticateUserLoading]);
  useEffect(() => {
    if (router.pathname !== "/" && router.pathname !== "/create") {
      refetchVerifyLogin();
    }
  }, [refetchVerifyLogin, router]);
  return {
    verifyLoginData,
    triggerAuthenticateUser,
    isVerifyLoginLoading,
    refetchVerifyLogin,
    isAuthenticateUserLoading,
  };
};

export default useAuth;
