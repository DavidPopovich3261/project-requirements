import AgentDashboard from "./pages/AgentDashboard";
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NewReportPage from "./pages/NewReportPage";
import MyReportsPage from "./pages/MyReportsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="AgentDashboard" element={<AgentDashboard />} />
          <Route path="/NewReportPage" element={<NewReportPage />} />
          <Route path="/MyReportsPage" element={<MyReportsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App