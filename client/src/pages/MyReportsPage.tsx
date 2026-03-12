import { useEffect, useState } from "react"
import { sherchReports } from "../utils/sherchReports"

function MyReportsPage() {
    const [filter, setFilter] = useState({
        userid: "",
        category: "",
        urgency: ""
    })
    const [reports, setReports] = useState({
        reports: []
    })
    useEffect(() => {
        const timer = setTimeout(() => {
            const sherch = async () => {
                setReports(await sherchReports(filter))
            }
            sherch()
        }, 1000)
        return () => clearTimeout(timer)
    }, [filter])
    return (
        <div>
            <form >
                {/* <input type="text" placeholder="userid" onChange={(e) => { setFilter({ ...filter, userid: e.target.value }) }} /> */}
                <input type="text" placeholder="category" onChange={(e) => { setFilter({ ...filter, category: e.target.value }) }} />
                <input type="text" placeholder="urgency" onChange={(e) => { setFilter({ ...filter, urgency: e.target.value }) }} />
            </form>
            {reports["reports"][0] != undefined ? JSON.stringify(reports) : <div>not found</div>}
        </div>
    )
}

export default MyReportsPage