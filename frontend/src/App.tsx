import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Feed from "./pages/feed/Feed.tsx";
import Clients from "./pages/clients/Clients.tsx";
import Maintenance from "./pages/maintenance/Maintenance.tsx";
import Management from "./pages/management/Management.tsx";
import Reports from "./pages/reports/Reports.tsx";
import "./glob-components/icons.ts";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/management" element={<Management />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}
