import React, { useState } from "react";
import { sendFile } from "../utils/sendFile";

function NewReportPage() {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [Fields, setFields] = useState({
    category: "",
    urgency: "",
    message: ""
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
          <input type="text" value={Fields.category}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFields({ ...Fields, category: e.target.value }) }}
          />
          <input type="text" value={Fields.urgency}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFields({ ...Fields, urgency: e.target.value }) }}
          />
          <input type="text" value={Fields.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFields({ ...Fields, message: e.target.value }) }}
          />
          <button onClick={() => { sendFile(uploadFile, Fields) }}>Upload</button>
        </form>
      </div>
    </>
  )
}

export default NewReportPage