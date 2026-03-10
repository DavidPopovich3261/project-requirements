import axios from "axios";
import type { Fields } from "../typse/reportsfieldstype";

export function sendFile(uploadFile: File | null, Fields: Fields) {
    const send = async () => {
        let token = localStorage.getItem('token');
        if (!token) {
            return
        }
        const formData = new FormData();
        if (uploadFile != null) {
            formData.append('image', uploadFile);
        }
        formData.append('Fields', JSON.stringify(Fields))
        const res = await axios.post("http://localhost:8080/reports", formData, { headers: { 'Content-Type': 'multipart/form-data', 'Authorization': token } })
        console.log(res);
    }
    send()
}