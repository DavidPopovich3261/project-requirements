import { useState } from "react"
import axios from "axios";


function Login() {
  const [password, setPassword] = useState('')
  const [agentCode, setAgentCode] = useState('')
  const [fullName, setFullName] = useState('')
  const send = async () => {
    const res = axios.post('http://localhost:8080/auth/login', { password, agentCode })
    const data = (await res).data
    if (data.token) {
      localStorage.setItem('token', data.token)
      setFullName(data.user.fullName)
    }

  }
  return (
    <div>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      <input type="text" value={agentCode} onChange={(e) => setAgentCode(e.target.value)} placeholder="agentCode" />
      <button onClick={send}>login</button>
      {fullName && <div>walcome :{fullName}</div>}

    </div>
  )
}

export default Login