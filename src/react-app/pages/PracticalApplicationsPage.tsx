import { useState } from "react";
import { useNavigate } from "react-router";
import HeroSection from "@/react-app/components/HeroSection";
import { Copy, CheckCircle, Briefcase, Home, Lightbulb, GraduationCap, ArrowRight } from "lucide-react";

export default function PracticalApplicationsPage() {
  const navigate = useNavigate();
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const copyToClipboard = (text: string, promptId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const promptsByCategory = {
    work: [
      {
        id: "work-1",
        title: "Write a professional email",
        prompt: "Write a professional email to [recipient] about [topic]. Keep it polite and concise.",
        description: "Create clear, professional emails quickly"
      },
      {
        id: "work-2",
        title: "Summarise meeting notes",
        prompt: "Summarise these meeting notes into key points and action items: [paste your notes here]",
        description: "Turn rambling notes into clear summaries"
      },
      {
        id: "work-3",
        title: "Draft a project plan",
        prompt: "Create a simple project plan for [project name] that needs to be completed in [timeframe]. Include main tasks and milestones.",
        description: "Structure projects with clear steps"
      },
      {
        id: "work-4",
        title: "Improve writing clarity",
        prompt: "Make this text clearer and more professional: [paste your text]",
        description: "Polish your writing instantly"
      }
    ],
    home: [
      {
        id: "home-1",
        title: "Weekly meal planning",
        prompt: "Create a simple 5-day dinner plan using [ingredients you have]. Include cooking times.",
        description: "Plan meals with what you already have"
      },
      {
        id: "home-2",
        title: "Gift ideas",
        prompt: "Suggest 5 gift ideas for [person] who is [age] and likes [interests]. Budget around [amount].",
        description: "Find thoughtful gift suggestions"
      },
      {
        id: "home-3",
        title: "Organise tasks",
        prompt: "Help me organise these tasks by priority: [list your tasks]",
        description: "Sort your to-do list by importance"
      },
      {
        id: "home-4",
        title: "Party planning",
        prompt: "Help me plan a [type of party] for [number] people. I need a shopping list and simple timeline.",
        description: "Organise events step by step"
      }
    ],
    creative: [
      {
        id: "creative-1",
        title: "Story ideas",
        prompt: "Give me 3 creative story ideas about [theme or topic]. Keep them simple and interesting.",
        description: "Spark your creative writing"
      },
      {
        id: "creative-2",
        title: "Social media captions",
        prompt: "Write 3 engaging social media captions for a photo of [describe photo]. Make them friendly and natural.",
        description: "Create engaging social posts"
      },
      {
        id: "creative-3",
        title: "Blog post outline",
        prompt: "Create a simple outline for a blog post about [topic] aimed at [audience].",
        description: "Structure your blog content"
      },
      {
        id: "creative-4",
        title: "Hobby project ideas",
        prompt: "Suggest 5 beginner-friendly [hobby] projects I can try. Include what materials I'll need.",
        description: "Find new creative projects"
      }
    ],
    learning: [
      {
        id: "learning-1",
        title: "Explain like I'm 10",
        prompt: "Explain [complex topic] in simple terms, like you're talking to a 10-year-old.",
        description: "Break down complex topics simply"
      },
      {
        id: "learning-2",
        title: "Study notes summary",
        prompt: "Summarise these study notes into the most important points: [paste notes]",
        description: "Extract key information for revision"
      },
      {
        id: "learning-3",
        title: "Learn a new skill",
        prompt: "Create a simple 30-day plan to learn [skill] as a complete beginner. Include daily practice ideas.",
        description: "Structure your learning journey"
      },
      {
        id: "learning-4",
        title: "Research starting points",
        prompt: "I'm researching [topic]. Give me 5 key questions I should explore and where to start looking.",
        description: "Focus your research efforts"
      }
    ]
  };

  const categories = [
    { id: "work", name: "Work & Tasks", icon: Briefcase, color: "bg-blue-500" },
    { id: "home", name: "Home & Life", icon: Home, color: "bg-green-500" },
    { id: "creative", name: "Creative Projects", icon: Lightbulb, color: "bg-purple-500" },
    { id: "learning", name: "Learning & Research", icon: GraduationCap, color: "bg-orange-500" }
  ];

  return (
    <>
      <HeroSection
        title="Use AI Every Day"
        subtitle="Ready-to-use prompts for work, home, creativity, and learning. Copy and customise."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        {categories.map((category) => {
          const CategoryIcon = category.icon;
          const prompts = promptsByCategory[category.id as keyof typeof promptsByCategory];

          return (
            <section key={category.id}>
              <div className="flex items-center mb-6">
                <div className={`${category.color} text-white rounded-lg p-3 mr-4`}>
                  <CategoryIcon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prompts.map((prompt) => (
                  <div
                    key={prompt.id}
                    className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{prompt.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{prompt.description}</p>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <code className="text-sm text-gray-700 leading-relaxed">{prompt.prompt}</code>
                    </div>

                    <button
                      onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      {copiedPrompt === prompt.id ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA at bottom */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want More Practice?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
            Try our guided practice section with step-by-step examples and skill-building exercises.
          </p>
          <button
            onClick={() => navigate("/practice")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
          >
            <span>Go to Practice</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
