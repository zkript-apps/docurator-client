import StudentDashboard from "../components/StudentDashboard"

const StudentSettings = () => {
    return (
        <StudentDashboard currentPage='Settings' />
    )
}

StudentSettings.rolesAllowed = "Students"
export default StudentSettings
