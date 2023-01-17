import { useMutation, useQuery, QueryClient } from "react-query";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { updateSchool } from "../utils/api/schools";

const useUpdateSchools = () => {
  const queryClient = new QueryClient();

  const { mutate: triggerUpdateSchool, isLoading: isUpdateSchoolLoading } =
    useMutation(async (data: any[]) => await updateSchool(data[0], data[1]), {
      onSuccess: () => {
        queryClient.invalidateQueries("verifyAuth");
        toast.success("Successfully updated school information", {
          id: "updateSchool",
          duration: 3000,
        });
      },
      onError: (err: any) => {
        toast.error(err, {
          id: "updateSchool",
          duration: 5000,
        });
      },
    });
  useEffect(() => {
    if (isUpdateSchoolLoading) {
      toast.loading("Loading...", {
        id: "updateSchool",
      });
    }
  }, [isUpdateSchoolLoading]);

  return {
    triggerUpdateSchool,
    isUpdateSchoolLoading,
  };
};

export default useUpdateSchools;
