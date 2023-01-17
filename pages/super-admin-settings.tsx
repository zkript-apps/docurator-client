import SuperAdminDashboard from "../components/SuperAdminDashboard"

const SuperAdminSettings = () => {
    return (
        <SuperAdminDashboard currentPage='Settings' />
    )
}

SuperAdminSettings.rolesAllowed = "Super Admin"
export default SuperAdminSettings
