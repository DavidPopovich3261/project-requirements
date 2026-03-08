import AgentDashboard from "./pages/AgentDashboard";
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="AgentDashboard" element={<AgentDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App