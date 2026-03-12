import { Router } from "express";
import bcrypt from "bcrypt"

const admin = Router()

admin.post("users", admin, async (req, res) => {
    const { agentCode, fullName, role, password } = req.body
    const users = await readcsv("data/users.csv")
    for (let i of users) {
        
    }
    const user = { agentCode, fullName, role, password: await bcrypt.hash(password, 10) }
    res.status(200).json({ 'messege': "Created", user })
})