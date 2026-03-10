import { verifyToken } from "../utils/jwt.js"

export function agent(req, res, next) {
    if (!(req.headers && req.headers.authorization)) {
        res.status(400).json({ 'messege': 'Bad Request' })
    }
    const { role } = verifyToken(req.headers.authorization)
    if (role) next()
}

export function admin(req, res, next) {
    if (!(req.headers && req.headers.authorization)) {
        res.status(400).json({ 'messege': 'Bad Request' })
    }
    const { role } = verifyToken(req.headers.authorization)
    if (role == "admin") { next() }
    else {
        res.status(401).json({ 'messege': 'Unauthorized' })
    }

}