import { Router } from "express";
import { upload } from "../utils/multer.js"
import { agent } from "../Middleware/token.js";
import { pushReports } from "../utils/pushReports.js";
import { promises as fs } from "fs"


export const reports = Router()

reports.post("/", agent, upload.single("image"), async (req, res) => {
    if (req.body.Fields) {
        const Fields = JSON.parse(req.body.Fields)
        if (req.file) {
            Fields.imagePath = req.file.path
        }
        else {
            Fields.imagePath = null
        }
        try {
            const repo = await pushReports(req.headers.authorization, [Fields])
            res.status(200).json({ repo });
        } catch (error) {
            res.status(400).json({ 'messege': 'Bad Request' })
        }
    }
})

reports.post("/csv", agent, upload.single("csv"), async (req, res) => {
    let reports = readcsv(req.file.path)
    try {
        reports = await pushReports(req.headers.authorization, reports)
        res.status(200).json({ reports });
    } catch (error) {
        res.status(400).json({ 'messege': 'Bad Request' })
    }
})
reports.get("/", async (req, res) => {
    try {
        const reports = JSON.parse(await fs.readFile("data/reports.json", "utf8"))
        res.status(200).json({ reports });

    } catch (error) {
        console.error(error);
        res.status(404).json({ "messege": "not found" })
    }
})