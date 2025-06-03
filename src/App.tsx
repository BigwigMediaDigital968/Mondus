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

import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import NewsletterPage from "./pages/admin/AdminNewsletter";
import EmailerPage from "./pages/admin/AdminEmailer";
import AdminSubscriber from "./pages/admin/AdminSubscriber";
import AdminContactRequest from "./pages/admin/AdminContactRequest";
import AwardsPage from "./pages/AwardsPage";
import AdminNotify from "./pages/admin/AdminNotify";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/buy/:id" element={<BuyDetails />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/rent/:id" element={<RentDetails />} />
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
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="emailer" element={<EmailerPage />} />
          <Route path="subscriber" element={<AdminSubscriber />} />
          <Route path="contacts" element={<AdminContactRequest />} />
          <Route path="request" element={<AdminNotify />} />
        </Route>
      </Routes>
      <Chatbot />
    </Router>
  );
}

export default App;
