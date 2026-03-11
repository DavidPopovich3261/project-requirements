import { promises as fs } from "fs"
import { me } from "./me.js"

export async function pushReports(token, reports) {
    const user = await me(token)
    const newReports = reports.map((report) => {
        if (!(report.category != "" && report.urgency != "" && report.message != "")) {
            throw new Error("Bad Request");
        }
        report.createdAt = new Date().toLocaleString()
        report.userid = user.id
        report.id = Math.random().toString(16).slice(2)
        return report
    })
    try {
        const oldeReports = JSON.parse(await fs.readFile("data/reports.json", "utf8"))
        console.log(JSON.stringify([...oldeReports, ...newReports]))
        await fs.writeFile("data/reports.json", JSON.stringify([...oldeReports, ...newReports]))
    } catch (error) {
        if (error.code == "ENOENT") {
            await fs.writeFile("data/reports.json", JSON.stringify([...newReports]))
        }
        else {
            console.error(error);
        }
    } return newReports
}