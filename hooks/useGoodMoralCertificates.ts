import { useQuery } from "react-query";
import { getGoodMoralCertificates } from "../utils/api/goodMoralCertificates";

const useGoodMoralCertificates = () => {
  const {
    data: goodMoralCertificatesData,
    isLoading: isGoodMoralCertificatesLoading,
    refetch: refetchGoodMoralCertificates,
  } = useQuery("birth-certificates", async () => {
    return await getGoodMoralCertificates();
  });

  return {
    goodMoralCertificatesData,
    isGoodMoralCertificatesLoading,
    refetchGoodMoralCertificates,
  };
};

export default useGoodMoralCertificates;
