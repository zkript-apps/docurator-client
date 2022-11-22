import { useQuery } from "react-query";
import { getClaimAccess } from "../utils/api/claimAccess";

const useClaimAccess = () => {
  const {
    data: claimAccessData,
    isLoading: isClaimAccessLoading,
    refetch: refetchClaimAccess,
  } = useQuery("claim-access", async () => {
    return await getClaimAccess();
  });

  return {
    claimAccessData,
    isClaimAccessLoading,
    refetchClaimAccess,
  };
};

export default useClaimAccess;
