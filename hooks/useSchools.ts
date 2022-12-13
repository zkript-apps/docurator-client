import { useEffect } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { addSchools, getSchools } from "../utils/api/schools";

const useSchools = () => {
  const {
    data: schoolsData,
    isLoading: isSchoolsLoading,
    refetch: refetchSchools,
  } = useQuery("schools", async () => {
    return await getSchools();
  });

  const { mutate: triggerAddSchool, isLoading: isAddSchoolLoading } =
    useMutation(async (data) => await addSchools(data), {
      onError: (err) => {
        toast.error(err, {
          id: "useSchool",
          duration: 5000,
        });
      },
    });
  const {
    data: createdSchoolData,
    isLoading: isCreatedSchoolLoading,
    refetch: refetchCreatedSchool,
  } = useQuery("createdSchool", async () => {
    return addSchools();
  });
  useEffect(() => {
    if (isAddSchoolLoading) {
      toast.loading("Loading...", {
        id: "useSchool",
      });
    }
  }, [isAddSchoolLoading]);

  return {
    schoolsData,
    isSchoolsLoading,
    refetchSchools,
    triggerAddSchool,
    isAddSchoolLoading,
    createdSchoolData,
    isCreatedSchoolLoading,
    refetchCreatedSchool,
  };
};

export default useSchools;
