import express from "express"
import cors from 'cors'
import { auth } from "./routs/auth.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/auth", auth)


app.get('/', (req, res) => {
    res.json({"fxzfgzf":"gzzgfgfdf"})
})


app.listen(8080, () => {
    console.log('server run...');
})