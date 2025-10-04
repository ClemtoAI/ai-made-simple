import { useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, MessageCircle, Globe, CheckCircle } from "lucide-react";
import HeroSection from "@/react-app/components/HeroSection";

export default function UnderstandingAIPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Understanding AI"
        subtitle="What AI is, how it works, why it matters. No jargon."
      />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        <nav className="text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <button onClick={() => navigate("/")} className="hover:text-blue-600">
                Home
              </button>
            </li>
            <li>&gt;</li>
            <li>
              <button onClick={() => navigate("/start-here")} className="hover:text-blue-600">
                Start Here
              </button>
            </li>
            <li>&gt;</li>
            <li className="text-gray-900">Understanding AI</li>
          </ol>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <article className="prose prose-lg max-w-none">
          
          {/* What Is AI Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-0">What Is AI?</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Think of AI as a helpful assistant you can chat with anytime - like texting a knowledgeable friend who's always available to help.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Unlike regular computer programs that follow strict rules, AI can understand what you're asking and respond naturally. Want help writing a tricky email? Need to plan a quick dinner menu? Just ask in plain English.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              The most popular AI tools are called <strong>chatbots</strong> - programs you type to, like texting. The main ones for beginners are ChatGPT, Claude and Gemini. You can use them on your phone, tablet, or computer.
            </p>
          </div>

          {/* How Does It Work Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-0">How Does It Work? (The Simple Version)</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              AI recognises patterns in how people use words. It's been trained by reading books, websites, and articles - like how you learn language by reading and listening.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              When you ask a question, it figures out the most helpful words to say based on those patterns.
            </p>

            {/* Simple Flow Diagram */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
              <div className="flex items-center justify-between text-center">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MessageCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">You ask a question</p>
                </div>
                <div className="flex-shrink-0 px-4">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">AI processes your question</p>
                </div>
                <div className="flex-shrink-0 px-4">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">AI responds helpfully</p>
                </div>
              </div>
            </div>

            {/* Important Callout Box */}
            <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-lg mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-800 leading-relaxed">
                    <span className="font-semibold text-gray-900">Important to know:</span> AI doesn't think or feel like humans do. It's more like a very clever text predictor that's learned to be helpful.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Can AI Actually Do For You?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Everyday tasks</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Write emails and messages</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Explain difficult topics simply</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Plan meals and create shopping lists</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Summarise long documents</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Translate languages</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Creative help</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Generate ideas for projects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Draft stories or presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Suggest solutions to problems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Help with homework or work tasks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Learning support</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Answer questions on almost any topic</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provide step-by-step instructions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Break down complex information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Offer multiple perspectives</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.762 0L3.052 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Things to Know</h3>
                <div className="text-yellow-700 space-y-3">
                  <p><span className="font-semibold">AI isn't perfect.</span> It can make mistakes or give incorrect information - sometimes sounding very confident even when it's wrong. Always double-check important facts.</p>
                  <p><span className="font-semibold">It can't do everything.</span> Free versions usually can't look things up online in real-time or remember past conversations between different chat sessions. Some paid versions can browse the internet.</p>
                  <p><span className="font-semibold">Your privacy matters.</span> AI doesn't automatically know your personal information. Don't share passwords, bank details, or personal addresses.</p>
                  <p><span className="font-semibold">You're still in control.</span> AI is a tool to help you work faster and smarter - it doesn't replace your judgement or creativity.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your First Steps</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Here's how to get started without feeling overwhelmed:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Choose one tool</h3>
                  <p className="text-gray-600 text-sm">We recommend ChatGPT or Claude (both have free versions)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Try something simple</h3>
                  <p className="text-gray-600 text-sm">Ask it to "Explain how email works in simple terms" or "Help me write a thank you message"</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Talk naturally</h3>
                  <p className="text-gray-600 text-sm">No special commands needed. Write like you're texting someone helpful</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Be mindful of privacy</h3>
                  <p className="text-gray-600 text-sm">Don't share passwords, bank details, or personal addresses</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Start small</h3>
                  <p className="text-gray-600 text-sm">Master one simple task before moving to more complex ones</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Next?</h2>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            You now understand the basics of what AI is and what it can do.
          </p>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            The next step? Actually trying it out. Our next guide walks you through having your first real conversation with an AI tool - we'll show you exactly what to type and what to expect.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Remember: everyone starts as a beginner. You don't need to master everything at once.
          </p>

          {/* Call-to-Action Section */}
          <div className="bg-blue-50 rounded-lg p-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your First AI Conversation?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Now that you understand the basics, it's time to put this knowledge into practice. Our next guide will walk you through having your first conversation with an AI tool, step by step.
            </p>
            <button
              onClick={() => navigate("/start-here/first-conversations")}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <span>Continue to First AI Conversations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <button
              onClick={() => navigate("/start-here")}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Your AI Learning Journey Starts Here</span>
            </button>
            
            <button
              onClick={() => navigate("/start-here/first-conversations")}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>First AI Conversations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
