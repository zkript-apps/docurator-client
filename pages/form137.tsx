import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect } from "react"
import toast from "react-hot-toast"
import Dashboard from "../components/Dashboard"

const Form137 = () => {
    const authCookie = Cookies.get('l_auth')
    const router = useRouter();
    if (authCookie) {
        return (
            <Dashboard currentPage={"Form 137"} />
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

export default Form137
