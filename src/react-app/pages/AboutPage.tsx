import { useNavigate } from "react-router";
import { Target, Users, Heart } from "lucide-react";
import HeroSection from "@/react-app/components/HeroSection";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="About AI Made Simple"
        subtitle="Our mission is to make AI accessible to everyone."
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why We Exist</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              AI tools like ChatGPT, Claude, and Gemini are transforming how we work, learn, and create. But for many people, getting started feels overwhelming. Technical jargon, confusing interfaces, and fear of doing something wrong can stop people from discovering how helpful these tools can be.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              AI Made Simple exists to change that. We believe everyone should feel confident using AI tools, regardless of their technical background. Our guides are written in plain English, with step-by-step instructions and real examples you can use immediately.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <Target className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-700 text-sm">
                  Make AI accessible to everyday people through clear, practical guidance
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <Users className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Who We Help</h3>
                <p className="text-gray-700 text-sm">
                  Complete beginners who want to learn AI without technical complexity
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <Heart className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Approach</h3>
                <p className="text-gray-700 text-sm">
                  Friendly, jargon-free teaching with practical examples you can use today
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We're not trying to teach you computer science or turn you into a prompt engineering expert. We're here to help you use AI tools confidently for everyday tasks - writing emails, planning meals, learning new skills, or solving problems at work.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Every guide is written for complete beginners. We use simple language, show you exactly what to do, and give you prompts you can copy and use immediately. No technical background needed.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-4">
                Start with our beginner-friendly learning path and discover how AI can help you in your daily life.
              </p>
              <button
                onClick={() => navigate("/start-here")}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
