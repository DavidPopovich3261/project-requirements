import axios from "axios";


export function Me() {
    const data = async () => {
        const res = axios.get('http://localhost:8080/auth/login',{Headers: { 'Authorization': token }})
        const data = (await res).data
        return data
    }
    return data
}