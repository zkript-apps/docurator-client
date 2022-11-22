import { useQuery } from "react-query";
import { getSchools } from "../utils/api/schools";

const useSchools = () => {
  const {
    data: schoolsData,
    isLoading: isSchoolsLoading,
    refetch: refetchSchools,
  } = useQuery("schools", async () => {
    return await getSchools();
  });

  return {
    schoolsData,
    isSchoolsLoading,
    refetchSchools,
  };
};

export default useSchools;
