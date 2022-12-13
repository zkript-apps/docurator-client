import { useQuery } from "react-query";
import { getAllForm138WithAccess } from "../utils/api/form138";

const useGoodMoralCertificates = () => {
  const {
    data: form138Data,
    isLoading: isForm138Loading,
    refetch: refetchForm138,
  } = useQuery("form-138-with-access", async () => {
    return await getAllForm138WithAccess();
  });

  return {
    form138Data,
    isForm138Loading,
    refetchForm138,
  };
};

export default useGoodMoralCertificates;
