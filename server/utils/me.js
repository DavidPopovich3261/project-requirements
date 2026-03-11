import { readcsv } from "../utils/readcsv.js";
import { verifyToken } from "./jwt.js";

export async function me(token) {
    const { name, role } = verifyToken(token)
    const users = await readcsv('./data/users.csv')
    for (let user of users) {
        if (user["fullName"] == name && user["role"] == role) {
            return user
        }
    }
}