import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Me } from "./Me"

type LayoutProps = {
    children: React.ReactNode
}

function Auth({ children }: LayoutProps) {
    const Navigate = useNavigate()
    useEffect(() => {
        const a = async () => {
            const user = await Me()
            if (!user) {
                Navigate('/')
            }
        }
        a()
    }, [])
    return (
        <>{children}</>
    )

}

export default Auth