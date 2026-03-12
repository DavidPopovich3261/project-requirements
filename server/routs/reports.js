import { Router } from "express";
import { upload } from "../utils/multer.js"
import { agent } from "../Middleware/token.js";
import { pushReports } from "../utils/pushReports.js";
import fs from "fs"
import { readcsv } from "../utils/readcsv.js";
import { sherch } from "../utils/sherch.js";


export const reports = Router()

reports.post("/", agent, upload.single("image"), async (req, res) => {
    if (req.body.Fields) {
        const Fields = JSON.parse(req.body.Fields)
        if (req.file) {
            Fields.imagePath = req.file.path
        }
        try {
            const repo = await pushReports(req.headers.authorization, [Fields])
            res.status(200).json({ repo });
            return
        } catch (error) {
            fs.unlinkSync(req.file.path)
            res.status(400).json({ 'messege': 'Bad Request' })
            return
        }
    }
})

reports.post("/csv", agent, upload.single("csv"), async (req, res) => {
    if (req.file == undefined) {
        res.status(400).json({ 'messege': 'missing file' })
        return
    }
    let reports = await readcsv(req.file.path)
    try {
        reports = await pushReports(req.headers.authorization, reports)
        res.status(200).json({ reports });
        return
    } catch (error) {
        fs.unlinkSync(req.file.path)
        res.status(400).json({ 'messege': 'Bad Request' })
        return
    }
})


reports.get("/", agent, async (req, res) => {
    console.log("get");
    
    try {
        const reports = await sherch(req)
        res.status(200).json({ reports });
        return
    } catch (error) {
        console.error(error);
        res.status(404).json({ "messege": "not found" })
    }
})