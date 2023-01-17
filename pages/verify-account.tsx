import SuperAdminDashboard from "../components/SuperAdminDashboard"

const VerifyAccount = () => {
    return (
        <SuperAdminDashboard currentPage={"Verify Accounts"} />
    )
}
VerifyAccount.rolesAllowed = "Super Admin"
export default VerifyAccount
