import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";
import HomePage from "@/react-app/pages/HomePage";
import StartHerePage from "@/react-app/pages/StartHerePage";
import UnderstandingAIPage from "@/react-app/pages/UnderstandingAIPage";
import FirstConversationsPage from "@/react-app/pages/FirstConversationsPage";
import PracticalApplicationsPage from "@/react-app/pages/PracticalApplicationsPage";
import PracticePage from "@/react-app/pages/PracticePage";
import ToolsPage from "@/react-app/pages/ToolsPage";
import ContactPage from "@/react-app/pages/ContactPage";
import AboutPage from "@/react-app/pages/AboutPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/start-here" element={<StartHerePage />} />
            <Route path="/start-here/understanding-ai" element={<UnderstandingAIPage />} />
            <Route path="/start-here/first-conversations" element={<FirstConversationsPage />} />
            <Route path="/start-here/practical-applications" element={<PracticalApplicationsPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
