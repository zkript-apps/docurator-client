import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect } from "react"
import toast from "react-hot-toast"

const Form137 = () => {
    const authCookie = Cookies.get('l_auth')
    const router = useRouter();
    if (authCookie) {
        return (
            <h1 className="text-6xl font-bold tracking-tight text-indigo-500">Form 137</h1>
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