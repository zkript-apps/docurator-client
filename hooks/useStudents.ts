import { useState } from "react";
import { useQuery } from "react-query";
import { getPaginatedStudents } from "../utils/api/students";

const useStudents = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [paginatedUserId, setPaginatedUserId] = useState(null);
  const {
    data: studentsPaginatedData,
    isLoading: isStudentPaginatedLoading,
    refetch: refetchStudentsPaginated,
  } = useQuery(["students", pageNumber], async () => {
    const condition = paginatedUserId ? `{"userId":"${paginatedUserId}"}` : ``;
    return await getPaginatedStudents(condition, pageNumber, "10");
  });
  const handleStudentRequest = (newPageNumber, newUserId) => {
    setPageNumber(newPageNumber);
    setPaginatedUserId(newUserId);
  };

  return {
    studentsPaginatedData,
    isStudentPaginatedLoading,
    refetchStudentsPaginated,
    handleStudentRequest,
  };
};

export default useStudents;
