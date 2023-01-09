import { useQuery } from "react-query";
import { getAllClaimAccess } from "../utils/api/claimAccess";

const useGetAllClaimAccess = () => {
  const {
    data: allClaimAccessData,
    isLoading: isAllClaimAccessLoading,
    refetch: refetchAllClaimAccess,
  } = useQuery("all-claim-access", async () => {
    return await getAllClaimAccess();
  });

  return {
    allClaimAccessData,
    isAllClaimAccessLoading,
    refetchAllClaimAccess,
  };
};

export default useGetAllClaimAccess;
