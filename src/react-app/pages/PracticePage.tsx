import { useState } from "react";
import HeroSection from "@/react-app/components/HeroSection";
import { Copy, Zap, ArrowRight, CheckCircle } from "lucide-react";

export default function PracticePage() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const copyToClipboard = (text: string, promptId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const easyPrompts = [
    {
      id: "thank-you",
      category: "Work & Tasks",
      difficulty: "Beginner",
      title: "Write a thank-you message",
      prompt: "Write a warm and professional thank-you message for someone who helped me with a work project.",
      description: "Create professional thank-you messages for colleagues, clients, or collaborators."
    },
    {
      id: "news-summary",
      category: "Learning & Research",
      difficulty: "Beginner",
      title: "Summarise a news article",
      prompt: "Please summarise this news article in 3-4 bullet points, focusing on the key facts and main takeaways: [paste article here]",
      description: "Quickly understand complex news stories and research papers."
    },
    {
      id: "dinner-recipe",
      category: "Creative Projects",
      difficulty: "Beginner",
      title: "Generate a dinner recipe from what's in your fridge",
      prompt: "Create a simple dinner recipe using these ingredients I have at home: [list your ingredients]. Please include cooking time and basic instructions.",
      description: "Turn whatever ingredients you have into delicious meals."
    },
    {
      id: "email-reply",
      category: "Work & Tasks",
      difficulty: "Beginner",
      title: "Write a professional email reply",
      prompt: "Help me write a professional email reply to this message. I want to be polite but clear: [paste the email you're replying to]",
      description: "Craft professional email responses that strike the right tone."
    },
    {
      id: "explain-concept",
      category: "Learning & Research",
      difficulty: "Beginner",
      title: "Explain a complex concept simply",
      prompt: "Explain [topic] in simple terms as if you're talking to someone who's never heard of it before. Use everyday examples.",
      description: "Break down complex topics into easy-to-understand explanations."
    },
    {
      id: "social-media",
      category: "Creative Projects",
      difficulty: "Beginner",
      title: "Write engaging social media posts",
      prompt: "Write 3 engaging social media posts about [your topic]. Make them informative but fun, and include relevant hashtags.",
      description: "Create compelling content for your social media channels."
    }
  ];

  const skillExercises = [
    {
      id: "iterative-prompting",
      title: "Iterative Prompting",
      description: "Learn to refine your requests through follow-up questions",
      prompt: "Start with a basic request, then practice asking follow-up questions to improve the response",
      buttonText: "Try This Exercise"
    },
    {
      id: "context-setting",
      title: "Context Setting",
      description: "Practice providing background information for better results",
      prompt: "Give AI context about your role, audience, and goals before making your request",
      buttonText: "Try This Exercise"
    },
    {
      id: "specific-formatting",
      title: "Specific Formatting",
      description: "Learn to request exactly the format you need",
      prompt: "Practice asking for responses in specific formats: lists, tables, emails, etc.",
      buttonText: "Try This Exercise"
    }
  ];

  const promptTemplate = `I'm a [your role] working on [project] for [audience]...

Please help me [specific task] that [specific requirements]...

Format this as [list/email/table/etc.] with [length/style]...`;

  return (
    <>
      <HeroSection
        title="Practice Using AI Chatbots"
        subtitle="Build confidence with real examples. Copy our prompts and see AI work."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Step 1 - Easy Prompts */}
        <section>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-4">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Step 1</div>
              <h2 className="text-2xl font-bold text-gray-900">Practice with Easy Prompts</h2>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8 text-lg">
            Try these one-click prompts to see what AI can do. No setup needed - just copy and paste into your favourite AI tool.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {easyPrompts.map((prompt) => (
              <div key={prompt.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {prompt.difficulty}
                  </span>
                  <span className="text-xs text-gray-500">{prompt.category}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{prompt.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{prompt.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4 flex-grow">
                  <code className="text-sm text-gray-700 leading-relaxed">{prompt.prompt}</code>
                </div>
                
                <div className="mt-auto">
                  <button
                    onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    {copiedPrompt === prompt.id ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Try This Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step 2 - Improve Skills */}
        <section>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center mr-4">
              <ArrowRight className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Step 2</div>
              <h2 className="text-2xl font-bold text-gray-900">Improve Your Skills</h2>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8 text-lg">
            Practice these essential techniques to get better results from AI tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillExercises.map((exercise) => (
              <div key={exercise.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{exercise.title}</h3>
                <p className="text-gray-600 mb-4">{exercise.description}</p>
                <p className="text-sm text-gray-500 mb-4 italic flex-grow">{exercise.prompt}</p>
                
                <div className="mt-auto">
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-lg font-medium cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step 3 - Build Your Own */}
        <section>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-purple-500 text-white rounded-lg flex items-center justify-center mr-4">
              <span className="font-bold">3</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Step 3</div>
              <h2 className="text-2xl font-bold text-gray-900">Build Your Own Prompts</h2>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Prompt Builder</h3>
            <p className="text-gray-600 mb-6">
              Follow this simple formula to create effective prompts for any task:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">1. Set the Context</h4>
                <p className="text-blue-800 text-sm">Tell AI your role, audience, and situation</p>
                <code className="block mt-2 text-xs bg-blue-100 p-2 rounded">
                  "I'm a [your role] working on [project] for [audience]..."
                </code>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">2. Make Your Request</h4>
                <p className="text-green-800 text-sm">Be specific about what you want</p>
                <code className="block mt-2 text-xs bg-green-100 p-2 rounded">
                  "Please help me [specific task] that [specific requirements]..."
                </code>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">3. Specify the Format</h4>
                <p className="text-purple-800 text-sm">Tell AI exactly how you want the response</p>
                <code className="block mt-2 text-xs bg-purple-100 p-2 rounded">
                  "Format this as [list/email/table/etc.] with [length/style]..."
                </code>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={() => copyToClipboard(promptTemplate, "template")}
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                {copiedPrompt === "template" ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Template to Clipboard</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
