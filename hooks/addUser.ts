import { useMutation, useQuery } from "react-query";
import { addUser } from "../utils/api/user";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useAuth = () => {
  const router = useRouter();
  const { mutate: triggerAddUser, isLoading: isAddUserLoading } = useMutation(
    async (data) => await addUser(data),
    {
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
    }
  );
  useEffect(() => {
    if (isAddUserLoading) {
      toast.loading("Loading...", {
        id: "addUser",
      });
    }
  }, [isAddUserLoading]);
  return {
    triggerAddUser,
    isAddUserLoading,
  };
};

export default useAuth;
