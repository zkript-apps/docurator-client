import { useMutation } from "react-query";
import { addClaimAccess } from "../utils/api/claimAccess";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useAddClaimAccess = () => {
  const { mutate: triggerAddClaimAccess, isLoading: isAddClaimAccessLoading } =
    useMutation(async (data) => await addClaimAccess(data), {
      onSuccess: () => {
        toast.success("Successfully Sent your records", {
          id: "addClaimAccess",
          duration: 3000,
        });
      },
      onError: (err) => {
        toast.error(err, {
          id: "addClaimAccess",
          duration: 5000,
        });
      },
    });
  useEffect(() => {
    if (isAddClaimAccessLoading) {
      toast.loading("Loading...", {
        id: "addClaimAccess",
      });
    }
  }, [isAddClaimAccessLoading]);

  return {
    triggerAddClaimAccess,
    isAddClaimAccessLoading,
  };
};

export default useAddClaimAccess;
