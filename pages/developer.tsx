import Dashboard from "../components/Dashboard"

const Developer = () => {
    return (
        <Dashboard currentPage={"Developer"} />
    )
}

Developer.rolesAllowed = "Admin"
export default Developer
