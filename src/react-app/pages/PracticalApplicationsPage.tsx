import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Copy, CheckCircle } from "lucide-react";
import HeroSection from "@/react-app/components/HeroSection";

export default function PracticalApplicationsPage() {
  const navigate = useNavigate();
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const copyToClipboard = (text: string, promptId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const workPrompts = [
    {
      id: "work-1",
      title: "Write a professional email",
      prompt: "Help me write a professional email to my manager requesting holiday leave from [start date] to [end date]. Keep it polite and concise.",
      context: "Perfect for requesting time off, following up on meetings, or responding to colleagues."
    },
    {
      id: "work-2",
      title: "Summarise meeting notes",
      prompt: "Summarise these meeting notes into 3-4 key action points and decisions: [paste your notes here]",
      context: "Turn rambling notes into clear takeaways you can share with your team."
    },
    {
      id: "work-3",
      title: "Improve your CV",
      prompt: "Review this CV bullet point and make it more impactful and results-focused: [paste your bullet point]",
      context: "Make your achievements sound more professional and compelling."
    }
  ];

  const homePrompts = [
    {
      id: "home-1",
      title: "Plan weekly meals",
      prompt: "Create a simple 5-day dinner plan for a family of [number]. We like [foods you enjoy] and want to avoid [foods to avoid]. Include a shopping list.",
      context: "Take the stress out of meal planning with realistic, practical suggestions."
    },
    {
      id: "home-2",
      title: "Write a complaint letter",
      prompt: "Help me write a polite but firm complaint letter to [company] about [issue]. I want a [refund/replacement/apology].",
      context: "Get your point across professionally without sounding aggressive."
    },
    {
      id: "home-3",
      title: "Explain something to a child",
      prompt: "Explain [topic] in simple terms that a [age]-year-old would understand, using everyday examples they can relate to.",
      context: "Help your children learn about the world in ways they'll actually understand."
    }
  ];

  const creativePrompts = [
    {
      id: "creative-1",
      title: "Write a birthday message",
      prompt: "Write a warm and personal birthday message for my [relationship] who loves [their interests]. Make it heartfelt but not overly formal.",
      context: "Create memorable messages that feel genuine and thoughtful."
    },
    {
      id: "creative-2",
      title: "Generate story ideas",
      prompt: "Give me 5 creative story ideas for a [genre] story set in [setting]. Include a brief description of each plot.",
      context: "Overcome writer's block with fresh ideas and interesting plot hooks."
    },
    {
      id: "creative-3",
      title: "Plan a special occasion",
      prompt: "Help me plan a [occasion] for [number] people with a budget of [amount]. Include activity ideas, food suggestions, and a rough timeline.",
      context: "Organise parties, celebrations, or special events without the stress."
    }
  ];

  const learningPrompts = [
    {
      id: "learning-1",
      title: "Learn a new skill",
      prompt: "Create a 30-day beginner's learning plan for [skill]. Break it down into daily tasks that take 15-20 minutes each.",
      context: "Get structured guidance for learning anything from languages to hobbies."
    },
    {
      id: "learning-2",
      title: "Understand a topic",
      prompt: "Explain [topic] in simple terms with practical examples. Assume I'm a complete beginner and avoid jargon.",
      context: "Break down complex subjects into digestible, easy-to-understand explanations."
    },
    {
      id: "learning-3",
      title: "Practice a language",
      prompt: "Give me 10 useful [language] phrases for [situation - e.g. ordering food, asking directions]. Include pronunciation guidance.",
      context: "Build practical vocabulary for real-world situations when travelling or learning."
    }
  ];

  const PromptCard = ({ prompt }: { prompt: any }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col" style={{ minHeight: '380px' }}>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{prompt.title}</h3>
    <p className="text-sm text-gray-600 mb-4">{prompt.context}</p>
    
    <div className="bg-gray-50 rounded-lg p-4 mb-4 flex-grow">
      <code className="text-sm text-gray-700 leading-relaxed block">{prompt.prompt}</code>
    </div>
    
    <button
      onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 mt-auto"
    >
      {copiedPrompt === prompt.id ? (
        <>
          <CheckCircle className="w-4 h-4" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span>Copy & Try This</span>
        </>
      )}
    </button>
  </div>
);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Practical AI Applications"
        subtitle="Real prompts you can use right now for work, home, creativity, and learning. Just copy, paste, and customise."
      />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
            <li className="text-gray-900">Practical Applications</li>
          </ol>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use These Prompts</h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-blue-500 mr-3 flex-shrink-0 font-medium">1.</span>
              <span><strong>Copy the prompt</strong> by clicking the blue button</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 mr-3 flex-shrink-0 font-medium">2.</span>
              <span><strong>Replace text in [brackets]</strong> with your specific details</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 mr-3 flex-shrink-0 font-medium">3.</span>
              <span><strong>Paste into ChatGPT, Claude, or Gemini</strong> and see the results</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 mr-3 flex-shrink-0 font-medium">4.</span>
              <span><strong>Ask follow-up questions</strong> if you want to refine the response</span>
            </div>
          </div>
        </div>

        {/* Work Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Work & Professional Tasks</h2>
              <p className="text-gray-600">Emails, documents, and workplace communication</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workPrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} category="work" />
            ))}
          </div>
        </section>

        {/* Home Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Home & Family Life</h2>
              <p className="text-gray-600">Meal planning, household tasks, and family communication</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homePrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} category="home" />
            ))}
          </div>
        </section>

        {/* Creative Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Creative Projects</h2>
              <p className="text-gray-600">Writing, celebrations, and personal projects</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creativePrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} category="creative" />
            ))}
          </div>
        </section>

        {/* Learning Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Learning & Development</h2>
              <p className="text-gray-600">Skills, languages, and personal growth</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} category="learning" />
            ))}
          </div>
        </section>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-10 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Keep Exploring</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            You've now got practical prompts you can use every day. The more you practise, the better you'll get at customising these prompts for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/tools")}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Explore AI Tools</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/practice")}
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Try More Practice Prompts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate("/start-here/first-conversations")}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>First AI Conversations</span>
          </button>
          
          <button
            onClick={() => navigate("/tools")}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>AI Tools Directory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
