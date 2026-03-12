import { Link } from 'react-router-dom';


function AgentDashboard() {
    return (
        <div>
            <Link to="/NewReportPage" >New Report Page</Link>
            <Link to="/MyReportsPage" >My Reports Page</Link>
            <Link to="/NewReportPageCsv">New Report Page Csv</Link>
        </div>
    )
}

export default AgentDashboard