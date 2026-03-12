import axios from "axios";
import type { Fields } from "../typse/reportsfieldstype";

export function sendReport(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    uploadFile: File | null,
    Fields: Fields,
) {
    e.preventDefault()
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
        const res = axios.post("http://localhost:8080/reports", formData, { headers: { 'Authorization': token } })
        console.log((await res).data);
    }
    send()
}


export function sendReportCSV(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    uploadFile: File | null,
) {
    e.preventDefault()
    const sendCSV = async () => {
        let token = localStorage.getItem('token');
        if (!token) {
            return
        }
        const formData = new FormData();
        if (uploadFile != null) {
            console.log(uploadFile);
            formData.append('csv', uploadFile);
        }
        const res = axios.post("http://localhost:8080/reports/csv", formData, { headers: { 'Authorization': token } })
        console.log((await res).data);
    }
    sendCSV()

}