import { useQuery } from "react-query";
import { getAllGoodMoralCertificatesWithAccess } from "../utils/api/goodMoralCertificates";

const useGoodMoralCertificates = () => {
  const {
    data: goodMoralCertificatesData,
    isLoading: isGoodMoralCertificatesLoading,
    refetch: refetchGoodMoralCertificates,
  } = useQuery("birth-certificates-with-access", async () => {
    return await getAllGoodMoralCertificatesWithAccess();
  });

  return {
    goodMoralCertificatesData,
    isGoodMoralCertificatesLoading,
    refetchGoodMoralCertificates,
  };
};

export default useGoodMoralCertificates;
