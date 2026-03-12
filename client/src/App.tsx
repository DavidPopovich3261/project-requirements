import AgentDashboard from "./pages/AgentDashboard";
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NewReportPage from "./pages/NewReportPage";
import MyReportsPage from "./pages/MyReportsPage";
import Auth from "./utils/Auth";
import NewReportPageCsv from "./pages/NewReportPageCsv";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="AgentDashboard" element={
            <Auth>
              <AgentDashboard />
            </Auth>} />
          <Route path="/NewReportPage" element={
            <Auth>
              <NewReportPage />
            </Auth>
          } />
          <Route path="/NewReportPageCsv" element={
            <Auth>
              <NewReportPageCsv />
            </Auth>
          } />
          <Route path="/MyReportsPage" element={
            <Auth>
              <MyReportsPage />
            </Auth>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App