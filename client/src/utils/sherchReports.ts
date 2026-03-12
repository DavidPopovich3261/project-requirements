import axios from "axios";
import type { sherch } from "../typse/typeSherch";

export function sherchReports(filter: sherch) {
    const sherch = async () => {
        const token = localStorage.getItem('token')
        const res = await axios.get(`http://localhost:8080/reports`, {
            params: {
                userid: filter.userid,
                category: filter.category,
                urgency: filter.urgency
            },
            headers: { 'Authorization': token }
        })
        const reports = res.data
        return reports
    }
    const reports = sherch()
    return (reports)
}