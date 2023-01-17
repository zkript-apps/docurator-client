import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { updateClaimAccess, deleteClaimAccess } from "../utils/api/claimAccess";

const useAcceptStudent = () => {
  const { mutate: triggerAcceptStudent, isLoading: isAcceptStudentLoading } =
    useMutation(
      async (data: any[]) => await updateClaimAccess(data[0], data[1]),
      {
        onSuccess: () => {
          toast.success("Successfully accepted student's records", {
            id: "acceptStudent",
            duration: 3000,
          });
        },
        onError: (err: any) => {
          toast.error(err, {
            id: "acceptStudent",
            duration: 5000,
          });
        },
      }
    );
  useEffect(() => {
    if (isAcceptStudentLoading) {
      toast.loading("Loading...", {
        id: "acceptStudent",
      });
    }
  }, [isAcceptStudentLoading]);

  const { mutate: triggerRejectStudent, isLoading: isRejectStudentLoading } =
    useMutation(async (data: any) => await deleteClaimAccess(data), {
      onSuccess: () => {
        toast.success("Student was rejected", {
          id: "acceptStudent",
          duration: 3000,
        });
      },
      onError: (err: any) => {
        toast.error(err, {
          id: "acceptStudent",
          duration: 5000,
        });
      },
    });
  useEffect(() => {
    if (isRejectStudentLoading) {
      toast.loading("Loading...", {
        id: "acceptStudent",
      });
    }
  }, [isRejectStudentLoading]);

  return {
    triggerAcceptStudent,
    isAcceptStudentLoading,
    triggerRejectStudent,
    isRejectStudentLoading,
  };
};

export default useAcceptStudent;
