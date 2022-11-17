import { useMutation, useQuery } from "react-query";
import { verifyAuth, authenticateUser, addUser } from "../utils/api/user";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useEffect } from "react";
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
      onError: (data) => {
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
  } = useMutation(async (data) => await authenticateUser(data), {
    onSuccess: (data) => {
      Cookies.set("l_auth", data.token);
      if (router.pathname === "/" && data.userType === "Admin") {
        toast.success("You are now authenticated", {
          id: "authenticateUser",
          duration: 3000,
        });
        router.push("/students");
      } else {
        toast.error("You are not authorized to do that action", {
          id: "authenticateUserError",
          duration: 3000,
        });
        router.push("/");
      }
    },
    onError: (err) => {
      toast.error(err, {
        id: "authenticateUser",
        duration: 5000,
      });
    },
  });
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
