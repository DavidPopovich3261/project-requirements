import { readcsv } from "../utils/readcsv.js";

export async function me(name, role) {
    const users = await readcsv('./data/users.csv')
    for (let user of users) {
        if (user["fullName"] == name && user["role"] == role) {
            return user
        }
    }
}