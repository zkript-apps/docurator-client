import { useMutation } from "react-query";
import { claimStudentRecord } from "../utils/api/students";
import toast from "react-hot-toast";
import { useEffect } from "react";

const useClaimStudentRecord = () => {
  const {
    mutate: triggerClaimStudentRecord,
    isLoading: isClaimStudentRecordLoading,
  } = useMutation(async (data) => await claimStudentRecord(data[0], data[1]), {
    onSuccess: () => {
      toast.success("Successfully claimed your student record", {
        id: "updateStudent",
        duration: 3000,
      });
    },
    onError: (err) => {
      toast.error(err, {
        id: "updateStudent",
        duration: 5000,
      });
    },
  });
  useEffect(() => {
    if (isClaimStudentRecordLoading) {
      toast.loading("Loading...", {
        id: "updateStudent",
      });
    }
  }, [isClaimStudentRecordLoading]);

  return {
    triggerClaimStudentRecord,
    isClaimStudentRecordLoading,
  };
};

export default useClaimStudentRecord;
