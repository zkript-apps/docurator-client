import Dashboard from "../components/Dashboard"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Home = () => {
    const authCookie = Cookies.get('l_auth')
    const router = useRouter();
    if (authCookie) {
        return (
            <>
                <Dashboard />
            </>
        )
    } else {
        useEffect(() => {
            router.push('/')
        })

    }
}

export default Home 