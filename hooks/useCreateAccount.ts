import { useMutation, useQuery, QueryClient } from "react-query";
import { createAccount } from "../utils/api/user";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useCreateAccount = () => {
  const router = useRouter();
  const { mutate: triggerCreateAccount, isLoading: isCreateAccountLoading } =
    useMutation(async (data) => await createAccount(data), {
      onSuccess: () => {
        toast.success("Successfully created! You can now login", {
          id: "addUser",
          duration: 3000,
        });
        router.push("/");
      },
      onError: (err) => {
        toast.error(err, {
          id: "addUser",
          duration: 5000,
        });
      },
    });
  useEffect(() => {
    if (isCreateAccountLoading) {
      toast.loading("Loading...", {
        id: "addUser",
      });
    }
  }, [isCreateAccountLoading]);

  return {
    triggerCreateAccount,
    isCreateAccountLoading,
  };
};

export default useCreateAccount;
