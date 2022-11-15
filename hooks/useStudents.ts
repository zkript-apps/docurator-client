import { useQuery } from "react-query";
import { getStudents } from "../utils/api/students";

const useStudents = () => {
  const {
    data: studentsData,
    isLoading: isStudentLoading,
    refetch: refetchStudents,
  } = useQuery("students", async () => {
    return await getStudents();
  });

  return {
    studentsData,
    isStudentLoading,
    refetchStudents,
  };
};

export default useStudents;
