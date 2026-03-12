import { promises } from "fs"
import { me } from "./me.js"

export async function sherch(req) {
    const { userid, category, urgency } = req.query
    const user = await me(req.headers.authorization)
    let reports = JSON.parse(await promises.readFile("data/reports.json", "utf8"))
    if (req.user.role != "admin") {
        reports = reports.filter((repo) => {
            if (repo.userid == user.id) {
                return repo
            }
        })
    }
    reports = reports.filter((repo) => {
        if ((repo.userid.includes(userid) || userid == undefined) &&
            (repo.category.includes(category) || category == undefined) &&
            (repo.urgency.includes(urgency) || urgency == undefined)) {
            return repo
        }
    })
    return reports
}