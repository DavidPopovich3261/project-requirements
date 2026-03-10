import React, { useState } from "react";
import axios from "axios";

function NewReportPage() {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [Fields, setFields] = useState({
    category: "",
    urgency: "",
    message: ""
  })

  function sendFile() {
    const send = async () => {
      const formData = new FormData();
      if (uploadFile != null) {
        formData.append('image', uploadFile);
      }
      formData.append('Fields', JSON.stringify(Fields))
      const res = await axios.post("http://localhost:8080/reports", formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      console.log(res);
    }
    send()
  }
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
          <input type="text" value={Fields.urgency} />
          <input type="text" value={Fields.message} />
          <button onClick={sendFile}>Upload</button>
        </form>
      </div>
    </>
  )
}

export default NewReportPage