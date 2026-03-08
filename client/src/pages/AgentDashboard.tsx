import { Link } from 'react-router-dom';

function AgentDashboard() {
    
    return (
        <div>
            <button ><Link to="/NewReportPage" />New Report Page</button>
            <button ><Link to="/MyReportsPage" />My Reports Page</button>
        </div>
    )
}

export default AgentDashboard