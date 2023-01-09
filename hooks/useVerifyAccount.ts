import { useMutation } from "react-query";
import { updateUser, deleteUser } from "../utils/api/user";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useVerifyaccount = () => {
  const { mutate: triggerVerifyAccount, isLoading: isVerifyAccountLoading } =
    useMutation(async (data) => await updateUser(data[0], data[1]), {
      onSuccess: () => {
        toast.success("Successfully Verified the School Account", {
          id: "verifyAccount",
          duration: 3000,
        });
      },
      onError: (err) => {
        toast.error(err, {
          id: "verifyAccount",
          duration: 5000,
        });
      },
    });
  useEffect(() => {
    if (isVerifyAccountLoading) {
      toast.loading("Loading...", {
        id: "verifyAccount",
      });
    }
  }, [isVerifyAccountLoading]);

  const {
    mutate: triggerCancelVerification,
    isLoading: isCancelVerificationLoading,
  } = useMutation(async (data) => await deleteUser(data), {
    onSuccess: () => {
      toast.success(
        "The verification has been cancelled. The account was deleted",
        {
          id: "verifyAccount",
          duration: 3000,
        }
      );
    },
    onError: (err) => {
      toast.error(err, {
        id: "verifyAccount",
        duration: 5000,
      });
    },
  });
  useEffect(() => {
    if (isCancelVerificationLoading) {
      toast.loading("Loading...", {
        id: "verifyAccount",
      });
    }
  }, [isCancelVerificationLoading]);

  return {
    triggerVerifyAccount,
    isVerifyAccountLoading,
    triggerCancelVerification,
    isCancelVerificationLoading,
  };
};

export default useVerifyaccount;
