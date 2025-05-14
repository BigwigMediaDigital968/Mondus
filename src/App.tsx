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
import Sell from "./pages/Sell";
import Blog from "./pages/Blog";
import OffPlanDetails from "./pages/OffPlanDetails";
import BlogDetails from "./pages/BlogDetails";
import CatalogSection from "./components/CatalogSection";
import Developers from "./pages/Developers";

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
        <Route path="/offplan/:slug" element={<OffPlanDetails />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/chronicle" element={<Blog />} />
        <Route path="/chronicle/:slug" element={<BlogDetails />} />
        <Route path="/catalogs" element={<CatalogSection />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
    </Router>
  );
}

export default App;
