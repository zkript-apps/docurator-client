import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect } from "react"
import toast from "react-hot-toast"
import Dashboard from "../components/Dashboard"

const Settings = () => {
    const authCookie = Cookies.get('l_auth')
    const router = useRouter();
    if (authCookie) {
        return (
            <Dashboard />
        )
    } else {
        useEffect(() => {
            router.push('/')
            toast.error("You are not authorized", {
                id: "noAuth",
                duration: 3000
            });
        })
    }

}

export default Settings
