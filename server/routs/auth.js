import { Router } from "express";
import { creatToken, verifyToken } from '../utils/jwt.js'
import { readcsv } from "../utils/readcsv.js";
import { login } from "../utils/login.js";
import { me } from "../utils/me.js";


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


auth.get('/me', async (req, res) => {
    if (!(req.headers && req.headers.authorization)) {
        res.status(400).json({ 'messege': 'Bad Request' })
    }
    const { name, role } = verifyToken(req.headers.authorization)
    const user = await me(name, role)
    if (!user) {
        res.status(401).json({ 'messege': 'Unauthorized' })
        return
    }
    res.status(200).json({ user })

})