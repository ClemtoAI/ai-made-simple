import { useNavigate } from "react-router";
import HeroSection from "@/react-app/components/HeroSection";
import { Bot, ArrowRight } from "lucide-react";

export default function AssistantPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="AI Assistant"
        subtitle="Get personalised help with your AI learning journey."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-12 border border-gray-200 text-center">
          <Bot className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          
          <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            We're building an AI assistant to help answer your questions and guide you through learning AI tools. Check back soon!
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate("/start-here")}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <div className="text-sm text-gray-500">
              or{" "}
              <button
                onClick={() => navigate("/contact")}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                contact us
              </button>
              {" "}with questions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
