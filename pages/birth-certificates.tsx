import Dashboard from "../components/Dashboard"

const BirthCertificates = () => {
    return (
        <Dashboard currentPage={"Birth Certificates"} />
    )
}

BirthCertificates.rolesAllowed = "Admin"
export default BirthCertificates
