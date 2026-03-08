import jwt from 'jsonwebtoken'
import 'dotenv/config'

const secret = process.env.SECRET
export function creatToken(name, role) {
    const token = jwt.sign({ name, role }, secret, { expiresIn: '1h' })
    return token
}

export function verifyToken(token) {
    const res = jwt.verify(token, secret)
    return res
}