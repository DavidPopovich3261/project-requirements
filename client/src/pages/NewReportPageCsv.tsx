import { useState } from "react";
import { sendReportCSV } from "../utils/sendReport";

function NewReportPageCsv() {
    const [uploadFile, setUploadFile] = useState<File | null>(null);

    return (
        <div>
            <form>
                <input type="file" onChange={(e) => {
                    if (e.target.files != null) {
                        setUploadFile(e.target.files[0])
                    }
                }} />
                <button onClick={(e) => {
                    sendReportCSV(e, uploadFile)
                }}>Upload</button>
            </form>
        </div>
    )
}

export default NewReportPageCsv