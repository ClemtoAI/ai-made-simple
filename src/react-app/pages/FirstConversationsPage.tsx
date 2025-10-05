import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Copy, CheckCircle } from "lucide-react";
import HeroSection from "@/react-app/components/HeroSection";

export default function FirstConversationsPage() {
  const navigate = useNavigate();
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const copyToClipboard = (text: string, promptId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Your First AI Chat"
        subtitle="Step-by-step guide to your first conversation with AI."
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
            <li className="text-gray-900">First AI Conversations</li>
          </ol>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="text-gray-400">Understanding</span>
          <ArrowRight className="w-3 h-3 text-gray-400" />
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Step 2 of 3</span>
          <ArrowRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-400">Practical Use</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <article className="prose prose-lg max-w-none">
          {/* Step 1: Choose Your AI Tool */}
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow mb-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">1</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-0">Choose Your AI Tool</h2>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Pick one of these three beginner-friendly options:
            </p>

            {/* Tool Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">ChatGPT</h3>
                  <p className="text-sm text-gray-600 mb-6">by OpenAI</p>
                </div>
                <a
                  href="https://chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Go to ChatGPT</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Claude</h3>
                  <p className="text-sm text-gray-600 mb-6">by Anthropic</p>
                </div>
                <a
                  href="https://claude.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Go to Claude</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Gemini</h3>
                  <p className="text-sm text-gray-600 mb-6">by Google</p>
                </div>
                <a
                  href="https://gemini.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Go to Gemini</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            
          </div>

          {/* Step 2: What You'll See */}
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow mb-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">2</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-0">What You'll See</h2>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Once signed in, you'll see:
            </p>

            <ul className="space-y-3 mb-4 list-none">
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                <span><strong>A text box at the bottom</strong> (where you type)</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                <span><strong>An empty chat area above</strong> (where conversation appears)</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-500 mr-3 flex-shrink-0">•</span>
                <span><strong>A send button</strong> (arrow or paper plane icon)</span>
              </li>
            </ul>

            <p className="text-gray-700 font-medium">
              That's it. No complicated settings to worry about.
            </p>
          </div>

          {/* Privacy and Safety */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Safety</h2>
          
          <div className="border-l-4 border-amber-500 p-6 mb-8 rounded-lg" style={{backgroundColor: '#FFF9E6'}}>
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.762 0L3.052 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <span className="font-semibold text-gray-900">Remember:</span>
                </p>
                <ul className="space-y-2 text-gray-700 list-none">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 flex-shrink-0">•</span>
                    <span>Treat AI like a public conversation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 flex-shrink-0">•</span>
                    <span>Don't share passwords, bank details, or personal addresses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 flex-shrink-0">•</span>
                    <span>Double-check important information AI provides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 flex-shrink-0">•</span>
                    <span>AI helps with tasks but doesn't replace your judgement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3: Your First Message */}
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow mb-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">3</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-0">Your First Message</h2>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Type one of these simple prompts:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 relative">
                <p className="text-gray-800 italic pr-10">"Hello! I'm new to AI. Can you explain what you are in simple terms?"</p>
                <button
                  onClick={() => copyToClipboard("Hello! I'm new to AI. Can you explain what you are in simple terms?", "prompt-1")}
                  className="absolute top-3 right-3 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  {copiedPrompt === "prompt-1" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 relative">
                <p className="text-gray-800 italic pr-10">"Help me write a short thank you message to someone who helped me today."</p>
                <button
                  onClick={() => copyToClipboard("Help me write a short thank you message to someone who helped me today.", "prompt-2")}
                  className="absolute top-3 right-3 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  {copiedPrompt === "prompt-2" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 relative">
                <p className="text-gray-800 italic pr-10">"What are three easy dinner ideas I can make with chicken?"</p>
                <button
                  onClick={() => copyToClipboard("What are three easy dinner ideas I can make with chicken?", "prompt-3")}
                  className="absolute top-3 right-3 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  {copiedPrompt === "prompt-3" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-gray-800">
                <span className="font-semibold text-blue-800">Important tip:</span> Be specific. Instead of "help with writing," try "help me write a polite email to my boss about taking holiday leave."
              </p>
            </div>
          </div>

          {/* Step 4: Understanding the Response */}
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow mb-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">4</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-0">Understanding the Response</h2>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              After you hit send:
            </p>

            <ul className="space-y-2 text-gray-700 list-none mb-6">
              <li className="flex items-start">
                <span className="text-amber-600 mr-3 flex-shrink-0">•</span>
                <span>AI will respond within seconds</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3 flex-shrink-0">•</span>
                <span>The response appears in the chat area below your message</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3 flex-shrink-0">•</span>
                <span>You can continue the conversation by typing another message</span>
              </li>
            </ul>

            <p className="text-gray-700 font-medium">
              AI remembers what you've said in the same chat, so you can have a back-and-forth conversation naturally.
            </p>
          </div>

          {/* Step 5: Making It Better */}
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow mb-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-4 font-semibold">5</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-0">Making It Better</h2>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              If the response isn't quite right, you can:
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ask for changes:</h3>
              <div className="space-y-2 mb-4">
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 relative">
                  <p className="text-gray-800 italic text-sm pr-10">"Can you make that shorter?"</p>
                  <button
                    onClick={() => copyToClipboard("Can you make that shorter?", "change-1")}
                    className="absolute top-2 right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "change-1" ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 relative">
                  <p className="text-gray-800 italic text-sm pr-10">"Explain it more simply please"</p>
                  <button
                    onClick={() => copyToClipboard("Explain it more simply please", "change-2")}
                    className="absolute top-2 right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "change-2" ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 relative">
                  <p className="text-gray-800 italic text-sm pr-10">"Give me three different versions"</p>
                  <button
                    onClick={() => copyToClipboard("Give me three different versions", "change-3")}
                    className="absolute top-2 right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "change-3" ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Add more detail:</h3>
              <div className="space-y-2 mb-4">
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 relative">
                  <p className="text-gray-800 italic text-sm pr-10">"Make it sound more professional"</p>
                  <button
                    onClick={() => copyToClipboard("Make it sound more professional", "detail-1")}
                    className="absolute top-2 right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "detail-1" ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 relative">
                  <p className="text-gray-800 italic text-sm pr-10">"I need it for someone who's never done this before"</p>
                  <button
                    onClick={() => copyToClipboard("I need it for someone who's never done this before", "detail-2")}
                    className="absolute top-2 right-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "detail-2" ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <p className="text-gray-700 font-medium">
              It's completely normal to go back and forth - that's how you get the best results.
            </p>
          </div>

          {/* Quick Practice Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Practice: Try These 3 Prompts</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Build confidence with these simple examples:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 relative">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-500 text-white rounded-lg flex items-center justify-center mr-3 font-semibold">1</div>
                <h3 className="text-lg font-semibold text-gray-900">Creative</h3>
              </div>
              <p className="text-gray-700 italic pr-12">"Write me a short poem about morning coffee"</p>
              <button
                onClick={() => copyToClipboard("Write me a short poem about morning coffee", "practice-1")}
                className="absolute top-6 right-6 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                {copiedPrompt === "practice-1" ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 relative">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center mr-3 font-semibold">2</div>
                <h3 className="text-lg font-semibold text-gray-900">Practical</h3>
              </div>
              <p className="text-gray-700 italic pr-12">"Give me a simple 3-day meal plan for busy weekdays"</p>
              <button
                onClick={() => copyToClipboard("Give me a simple 3-day meal plan for busy weekdays", "practice-2")}
                className="absolute top-6 right-6 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                {copiedPrompt === "practice-2" ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 relative">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-3 font-semibold">3</div>
                <h3 className="text-lg font-semibold text-gray-900">Learning</h3>
              </div>
              <p className="text-gray-700 italic pr-12">"Explain what WiFi is, like I'm 10 years old"</p>
              <button
                onClick={() => copyToClipboard("Explain what WiFi is, like I'm 10 years old", "practice-3")}
                className="absolute top-6 right-6 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                {copiedPrompt === "practice-3" ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Use AI Every Day?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You've had your first conversation. Now see how to use AI for real tasks - work, home, creativity, and learning.
            </p>
            <button
              onClick={() => navigate("/start-here/practical-applications")}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
            >
              <span>Explore Practical Applications</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <button
              onClick={() => navigate("/start-here/understanding-ai")}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Understanding AI</span>
            </button>
            
            <button
              onClick={() => navigate("/start-here/practical-applications")}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>Practical Applications</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
