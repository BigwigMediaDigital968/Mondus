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
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import AreaGuide from "./pages/AreaGuide";
import AreaGuideDetails from "./pages/AreaGuideDetails";
import About from "./pages/About";
import NewsletterForm from "./pages/Newsletter";
import Emailer from "./pages/Emailer";

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
        <Route path="/insights" element={<Blog />} />
        <Route path="/insights/:slug" element={<BlogDetails />} />
        <Route path="/catalogs" element={<CatalogSection />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/area-guides" element={<AreaGuide />} />
        <Route path="/area-guides/:title" element={<AreaGuideDetails />} />
        <Route path="/newsletter" element={<NewsletterForm />} />
        <Route path="/emailer" element={<Emailer />} />
      </Routes>
    </Router>
  );
}

export default App;
