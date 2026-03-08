import express from "express"
import cors from 'cors'
import { auth } from "./routs/auth.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/auth", auth)


app.listen(8080, () => {
    console.log('server run...');
})