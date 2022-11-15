import { useQuery } from "react-query";
import { getBirthCertificates } from "../utils/api/birthCertificates";

const useBirthCertificates = () => {
  const {
    data: birthCertificatesData,
    isLoading: isBirthCertificateLoading,
    refetch: refetchBirthCertificates,
  } = useQuery("birth-certificates", async () => {
    return await getBirthCertificates();
  });

  return {
    birthCertificatesData,
    isBirthCertificateLoading,
    refetchBirthCertificates,
  };
};

export default useBirthCertificates;
