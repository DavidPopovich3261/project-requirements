import express from "express"
import cors from 'cors'
import { auth } from "./routs/auth.js"
import { reports } from "./routs/reports.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/auth", auth)
app.use("/reports", reports)

app.listen(8080, () => {
    console.log('server run...');
})