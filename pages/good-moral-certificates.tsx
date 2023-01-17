import Dashboard from "../components/Dashboard"

const GoodMoralCertificates = () => {
    return (
        <Dashboard currentPage={"Good Moral Certificates"} />
    )
}

GoodMoralCertificates.rolesAllowed = "Admin"
export default GoodMoralCertificates
