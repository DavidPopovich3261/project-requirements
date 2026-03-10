import { Router } from "express";
import { upload } from "../utils/multer.js"
import { agent } from "../Middleware/token.js";

export const reports = Router()


reports.post("/", upload.single("image"), (req, res) => {
    if (req.file) {
        const image = req.file;
        console.log(image);
    }
    if (req.body) {
        console.log(req.body);

    }
})