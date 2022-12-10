import { useQuery } from "react-query";
import { getBirthCertificatesWithAccess } from "../utils/api/birthCertificates";

const useBirthCertificates = () => {
  const {
    data: birthCertificatesData,
    isLoading: isBirthCertificateLoading,
    refetch: refetchBirthCertificates,
  } = useQuery("birth-certificates-with-access", async () => {
    return await getBirthCertificatesWithAccess();
  });

  return {
    birthCertificatesData,
    isBirthCertificateLoading,
    refetchBirthCertificates,
  };
};

export default useBirthCertificates;
