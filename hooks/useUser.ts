import { useMutation, useQuery, QueryClient } from "react-query";
import { addUser, updateUserPassword, updateUser } from "../utils/api/user";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useUser = () => {
  const queryClient = new QueryClient();
  const router = useRouter();
  const { mutate: triggerAddUser, isLoading: isAddUserLoading } = useMutation(
    async (data) => await addUser(data),
    {
      onSuccess: () => {
        toast.success("Successfully created an account", {
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

  const { mutate: triggerUpdateUser, isLoading: isUpdateUserLoading } =
    useMutation(async (data) => await updateUser(data[0], data[1]), {
      onSuccess: () => {
        queryClient.invalidateQueries("verifyAuth");
        toast.success("Successfully updated", {
          id: "updateUser",
          duration: 3000,
        });
      },
      onError: (err) => {
        toast.error(err, {
          id: "updateUser",
          duration: 5000,
        });
      },
    });
  useEffect(() => {
    if (isUpdateUserLoading) {
      toast.loading("Loading...", {
        id: "updateUser",
      });
    }
  }, [isUpdateUserLoading]);

  const {
    mutate: triggerUpdateUserPassword,
    isLoading: isUpdateUserPasswordLoading,
  } = useMutation(async (data) => await updateUserPassword(data[0], data[1]), {
    onSuccess: () => {
      toast.success("Successfully updated", {
        id: "useUserPassword",
        duration: 3000,
      });
    },
    onError: (err) => {
      toast.error(err, {
        id: "useUserPassword",
        duration: 5000,
      });
    },
  });
  useEffect(() => {
    if (isUpdateUserPasswordLoading) {
      toast.loading("Loading...", {
        id: "useUserPassword",
      });
    }
  }, [isUpdateUserPasswordLoading]);

  return {
    triggerAddUser,
    isAddUserLoading,
    triggerUpdateUser,
    isUpdateUserLoading,
    triggerUpdateUserPassword,
    isUpdateUserPasswordLoading,
  };
};

export default useUser;
