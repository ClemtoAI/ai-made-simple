import { useNavigate } from "react-router";
import { useEffect } from "react";
import HeroSection from "@/react-app/components/HeroSection";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Get in Touch - Easy AI Guide";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="We're here to help you feel confident using AI."
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="flex items-center mb-6">
            <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">We'd Love to Hear From You</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Easy AI Guide exists to help everyday people feel confident using AI tools. Whether you have questions about our guides, suggestions for new content, or just want to share your AI learning journey, we'd love to hear from you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Can Help</h3>
            
            <ul className="space-y-3 mb-8 list-none">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                <span>Answer questions about using AI tools</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                <span>Help you find the right guide for your needs</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                <span>Hear your feedback on our content</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                <span>Consider your suggestions for new topics</span>
              </li>
            </ul>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-700 mb-3">
                    The best way to reach us is by email. We typically respond within 1-2 business days.
                  </p>
                  <a 
                    href="mailto:clemtoai@gmail.com" 
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    clemtoai@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm italic">
              Your feedback helps us create better guides and make AI more accessible for everyone. Every question you ask helps us understand what beginners need most.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">New to AI?</h3>
            <p className="text-gray-600 mb-4">Start with our beginner-friendly learning path</p>
            <button
              onClick={() => navigate("/start-here")}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Go to Start Here →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Practice?</h3>
            <p className="text-gray-600 mb-4">Try our collection of ready-to-use prompts</p>
            <button
              onClick={() => navigate("/practice")}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Practice Prompts →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
