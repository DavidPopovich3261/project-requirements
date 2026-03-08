import { Router } from "express";
import { creatToken, verifyToken } from '../utils/jwt.js'
import { readcsv } from "../utils/readcsv.js";
import { login } from "../utils/login.js";
export const auth = Router()



auth.post('/Login', async (req, res) => {
    if (!(req.body && req.body.agentCode && req.body.password)) {
        res.status(400).json({ 'messege': 'Bad Request' })
        return
    }
    const { agentCode, password } = req.body
    const user = await login(agentCode, password)

    if (!user) {
        res.status(401).json({ 'messege': 'Unauthorized' })
        return
    }
    const token = creatToken(user.fullName, user.role)
    res.status(200).json({ token, user })
})

auth.get('me', (req, res) => {
    if (!(req.headers && req.headers.authorization)) {

    }
    verifyToken(req.headers.authorization)
})