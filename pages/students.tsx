import Dashboard from "../components/Dashboard"

const Students = () => {
    return (
        <Dashboard currentPage={"Students"} />
    )
}
Students.rolesAllowed = "Admin"
export default Students
