import { useQuery } from "react-query";
import { getForm138 } from "../utils/api/form138";

const useGetStudentsForm138 = () => {
  const {
    data: studentsForm138Data,
    isLoading: isStudentsForm138Loading,
    refetch: refetchStudentsForm138,
  } = useQuery("students-form-138", async () => {
    return await getForm138();
  });

  return {
    studentsForm138Data,
    isStudentsForm138Loading,
    refetchStudentsForm138,
  };
};

export default useGetStudentsForm138;
