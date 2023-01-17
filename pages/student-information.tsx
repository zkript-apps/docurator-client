import StudentDashboard from "../components/StudentDashboard"


const StudentsInformation = () => {
    return (
        <StudentDashboard currentPage={"Student's Information"} />
    )
}

StudentsInformation.rolesAllowed = "Students"
export default StudentsInformation