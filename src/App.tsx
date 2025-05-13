import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import AgentDetail from "./pages/AgentDetail";
import AgentsSection from "./components/Agents";
import Buy from "./pages/Buy";
import BuyDetails from "./pages/BuyDetails";
import Rent from "./pages/Rent";
import RentDetails from "./pages/RentDetails";
import OffPlan from "./pages/OffPlan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/buy/:title" element={<BuyDetails />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/rent/:title" element={<RentDetails />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
        <Route path="/AgentsSection" element={<AgentsSection />} />
        <Route path="/offplan" element={<OffPlan />} />
      </Routes>
    </Router>
  );
}

export default App;
