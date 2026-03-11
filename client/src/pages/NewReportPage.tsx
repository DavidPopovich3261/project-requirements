import React, { useState } from "react";
import { sendReport } from "../utils/sendReport";
import type { Fields } from "../typse/reportsfieldstype";

function NewReportPage() {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [Fields, setFields] = useState<Fields>({
    category: "intelligence",
    urgency: "low",
    message: "",
  })

  return (
    <>
      <div className="App">
        <form>
          <input type="file" onChange={(e) => {
            if (e.target.files != null) {
              setUploadFile(e.target.files[0])
            }
          }}
          />
          <select value={Fields.category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setFields({ ...Fields, category: e.target.value }) }}>
            <option value="intelligence">intelligence</option>
            <option value="logistics">logistics</option>
            <option value="alert">alert</option>
          </select>

          <select value={Fields.urgency}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setFields({ ...Fields, urgency: e.target.value }) }}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>

          <textarea value={Fields.message} placeholder="message"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setFields({ ...Fields, message: e.target.value }) }}
          />
          <button onClick={(e) => {
            sendReport(e, uploadFile, Fields,
              // setFields
            )
          }}>Upload</button>
        </form>
      </div>
    </>
  )
}

export default NewReportPage