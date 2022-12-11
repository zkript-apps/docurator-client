import { useQuery } from "react-query";
import { getStudents, getStudent } from "../utils/api/students";

const useStudents = () => {
  const {
    data: studentsData,
    isLoading: isStudentsLoading,
    refetch: refetchStudents,
  } = useQuery("students", async () => {
    return await getStudents();
  });

  const {
    data: studentData,
    isLoading: isStudentLoading,
    refetch: refetchStudent,
  } = useQuery("student", async () => {
    return await getStudent();
  });

  return {
    studentsData,
    isStudentsLoading,
    refetchStudents,
    studentData,
    isStudentLoading,
    refetchStudent,
  };
};

export default useStudents;
