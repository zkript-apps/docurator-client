import Dashboard from "../components/Dashboard"

const Schools = () => {
    return (
        <Dashboard currentPage={"Schools"} />
    )
}

Schools.rolesAllowed = "Admin"
export default Schools
