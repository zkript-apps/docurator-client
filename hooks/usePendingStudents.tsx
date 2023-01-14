import { useQuery } from "react-query";
import { getAllPendingClaimAccess } from "../utils/api/claimAccess";

const usePendingStudents = () => {
  const {
    data: pendingClaimAccessData,
    isLoading: isPendingClaimAccessLoading,
    refetch: refetchPendingClaimAccess,
  } = useQuery("pending-claim-access", async () => {
    return await getAllPendingClaimAccess();
  });

  return {
    pendingClaimAccessData,
    isPendingClaimAccessLoading,
    refetchPendingClaimAccess,
  };
};

export default usePendingStudents;
