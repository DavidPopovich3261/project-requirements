import { readcsv } from "../utils/readcsv.js";

export async function login(agentCode, password) {
    const users = await readcsv('./data/users.csv')
    for (let user of users) {
        if (user["agentCode"] == agentCode && user["password"] == password) {
            return user
        }
    }
}