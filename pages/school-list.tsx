import StudentDashboard from "../components/StudentDashboard"

const SchoolList = () => {
    return (
        <StudentDashboard currentPage={"School List"} />
    )
}

SchoolList.rolesAllowed = "Student"
export default SchoolList
