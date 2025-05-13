import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import AgentDetail from "./pages/AgentDetail";
import AgentsSection from "./components/Agents";
import Buy from "./pages/Buy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
        <Route path="/AgentsSection" element={<AgentsSection />} />
      </Routes>
    </Router>
  );
}

export default App;
