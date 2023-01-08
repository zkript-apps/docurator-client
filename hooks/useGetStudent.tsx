import { useQuery } from "react-query";
import { getStudent } from "../utils/api/students";

const useGetStudent = () => {
    const {
        data: studentInformation,
        isLoading: isStudentInformation,
        refetch: refetchStudentInformation,
    } = useQuery("student-information", async () => {
        return await getStudent();
    });

    return {
        studentInformation,
        isStudentInformation,
        refetchStudentInformation,
    };
};

export default useGetStudent;
