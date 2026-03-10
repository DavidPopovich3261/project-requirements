import axios from "axios";

export async function Me() {
    let token = localStorage.getItem('token');
    if (!token) {
        return
    }
    const res = axios.get('http://localhost:8080/auth/me', { 'headers': { 'Authorization': token } })
    const data = ((await res).data)
    return data
}