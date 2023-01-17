import Dashboard from "../components/Dashboard"

const PendingStudents = () => {
    return (
        <Dashboard currentPage={"Pending Students"} />
    )
}

PendingStudents.rolesAllowed = "Admin"
export default PendingStudents
