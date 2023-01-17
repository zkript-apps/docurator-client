import StudentDashboard from "../components/StudentDashboard"

const ClaimStudentRecords = () => {
    return (
        <StudentDashboard currentPage={"Claim Student Records"} />
    )
}

ClaimStudentRecords.rolesAllowed = "Admin"
export default ClaimStudentRecords
