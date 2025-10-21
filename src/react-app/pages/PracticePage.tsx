import { useState } from "react";
import { useEffect } from "react";
import HeroSection from "@/react-app/components/HeroSection";
import { Copy, Zap, ArrowRight, CheckCircle } from "lucide-react";

export default function PracticePage() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Practice with AI - Easy AI Guide";
  }, []);

  const copyToClipboard = (text: string, promptId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const easyPrompts = [
    {
      id: "customer-service",
      category: "Work & Professional",
      difficulty: "Beginner",
      title: "Draft a customer service response",
      prompt: "Draft a professional response to this customer complaint: [paste complaint]. Acknowledge their frustration, explain what went wrong, and offer a solution.",
      description: "Handle customer complaints professionally and empathetically."
    },
    {
      id: "meeting-agenda",
      category: "Work & Professional",
      difficulty: "Beginner",
      title: "Create a meeting agenda",
      prompt: "Create an agenda for a 30-minute team meeting about [topic]. Include discussion points and time allocations.",
      description: "Organize productive meetings with clear structure."
    },
    {
      id: "task-priority",
      category: "Work & Professional",
      difficulty: "Beginner",
      title: "Prioritize your tasks",
      prompt: "I have these tasks: [list tasks]. Help me prioritize them by urgency and importance. Show which to do today vs this week.",
      description: "Get help deciding what to tackle first."
    },
    {
      id: "email-drafting",
      category: "Work & Professional",
      difficulty: "Beginner",
      title: "Write a professional email",
      prompt: "Write a professional email to [recipient] about [topic]. Tone should be [polite/direct/friendly]. Keep it under 150 words.",
      description: "Draft clear, appropriate workplace emails."
    },
    {
      id: "report-summary",
      category: "Work & Professional",
      difficulty: "Beginner",
      title: "Summarize a report",
      prompt: "Summarize this report in 5 bullet points focusing on key findings and action items: [paste report]",
      description: "Extract key information from long documents."
    },
    {
      id: "project-planning",
      category: "Work & Professional",
      difficulty: "Beginner",
      title: "Break down a project",
      prompt: "Break down this project into weekly milestones: [describe project]. Show deliverables for each week.",
      description: "Turn big projects into manageable steps."
    },
    {
      id: "linkedin-post",
      category: "Work & Professional",
      difficulty: "Beginner",
      title: "Write a LinkedIn post",
      prompt: "Write a LinkedIn post about [achievement/topic]. Keep it professional but personable. Around 100 words.",
      description: "Share professional updates on social media."
    },
    {
      id: "followup-email",
      category: "Work & Professional",
      difficulty: "Beginner",
      title: "Send a follow-up email",
      prompt: "Write a polite follow-up email for [situation]. Reference our previous conversation about [topic] and ask for an update.",
      description: "Check in professionally without being pushy."
    },
    {
      id: "shopping-list",
      category: "Home & Personal",
      difficulty: "Beginner",
      title: "Create a shopping list",
      prompt: "Create a shopping list for these meals: [list meals]. Organize by grocery store section.",
      description: "Plan efficient grocery shopping trips."
    },
    {
      id: "budget-planning",
      category: "Home & Personal",
      difficulty: "Beginner",
      title: "Plan your monthly budget",
      prompt: "Help me create a monthly budget. Income: [amount]. Fixed expenses: [list]. Show how much is left for savings and discretionary spending.",
      description: "Get your finances organized simply."
    },
    {
      id: "gift-ideas",
      category: "Home & Personal",
      difficulty: "Beginner",
      title: "Find gift ideas",
      prompt: "Suggest 5 gift ideas for [person description, age, interests]. Budget around [amount]. Explain why each would suit them.",
      description: "Get personalized gift suggestions."
    },
    {
      id: "travel-itinerary",
      category: "Home & Personal",
      difficulty: "Beginner",
      title: "Plan a trip itinerary",
      prompt: "Plan a 3-day itinerary for [city]. I like [interests]. Include timing, must-see spots, and meal suggestions.",
      description: "Create organized travel plans."
    },
    {
      id: "fitness-plan",
      category: "Home & Personal",
      difficulty: "Beginner",
      title: "Get a beginner fitness plan",
      prompt: "Create a simple 4-week beginner fitness plan. Goal: [your goal]. Equipment: [what you have]. 3 days per week, 30 minutes each.",
      description: "Start exercising with a realistic plan."
    },
    {
      id: "home-organization",
      category: "Home & Personal",
      difficulty: "Beginner",
      title: "Organize a space",
      prompt: "Give me a step-by-step plan to organize [room/space]. I have [time available]. Break it into manageable tasks.",
      description: "Tackle clutter systematically."
    },
    {
      id: "story-ideas",
      category: "Creative & Learning",
      difficulty: "Beginner",
      title: "Generate story ideas",
      prompt: "Generate 5 short story ideas about [theme/genre]. Include a brief premise for each.",
      description: "Get creative writing inspiration."
    },
    {
      id: "learn-topic",
      category: "Creative & Learning",
      difficulty: "Beginner",
      title: "Learn something new",
      prompt: "Explain [topic] to me like I'm a complete beginner. Use simple examples and break it into 5 key concepts I should understand first.",
      description: "Understand new topics in plain English."
    },
    {
      id: "book-recommendations",
      category: "Creative & Learning",
      difficulty: "Beginner",
      title: "Find books to read",
      prompt: "Recommend 5 books similar to [book you liked]. Explain why each matches and what makes it different.",
      description: "Discover your next favorite read."
    },
    {
      id: "hobby-guide",
      category: "Creative & Learning",
      difficulty: "Beginner",
      title: "Start a new hobby",
      prompt: "I want to learn [hobby]. Create a beginner's roadmap: what equipment I need, first steps, and how to progress over 3 months.",
      description: "Get started with a new interest."
    },
    {
      id: "conversation-starters",
      category: "Creative & Learning",
      difficulty: "Beginner",
      title: "Break the ice socially",
      prompt: "Give me 10 conversation starters for [situation/event]. Make them interesting but not awkward.",
      description: "Feel confident in social situations."
    },
    {
      id: "creative-challenge",
      category: "Creative & Learning",
      difficulty: "Beginner",
      title: "Try a creative challenge",
      prompt: "Give me a creative writing/art/music challenge for today. Something I can complete in 30 minutes with [available materials].",
      description: "Practice creativity with quick exercises."
    },
    {
      id: "thank-you",
      category: "Original Examples",
      difficulty: "Beginner",
      title: "Write a thank-you message",
      prompt: "Write a warm and professional thank-you message for someone who helped me with a work project.",
      description: "Create professional thank-you messages for colleagues, clients, or collaborators."
    },
    {
      id: "news-summary",
      category: "Original Examples",
      difficulty: "Beginner",
      title: "Summarise a news article",
      prompt: "Please summarise this news article in 3-4 bullet points, focusing on the key facts and main takeaways: [paste article here]",
      description: "Quickly understand complex news stories and research papers."
    },
    {
      id: "dinner-recipe",
      category: "Original Examples",
      difficulty: "Beginner",
      title: "Generate a dinner recipe from what's in your fridge",
      prompt: "Create a simple dinner recipe using these ingredients I have at home: [list your ingredients]. Please include cooking time and basic instructions.",
      description: "Turn whatever ingredients you have into delicious meals."
    },
    {
      id: "email-reply",
      category: "Original Examples",
      difficulty: "Beginner",
      title: "Write a professional email reply",
      prompt: "Help me write a professional email reply to this message. I want to be polite but clear: [paste the email you're replying to]",
      description: "Craft professional email responses that strike the right tone."
    },
    {
      id: "explain-concept",
      category: "Original Examples",
      difficulty: "Beginner",
      title: "Explain a complex concept simply",
      prompt: "Explain [topic] in simple terms as if you're talking to someone who's never heard of it before. Use everyday examples.",
      description: "Break down complex topics into easy-to-understand explanations."
    },
    {
      id: "social-media",
      category: "Original Examples",
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
      examples: [
        {
          id: "iterative-1",
          prompt: "Write a thank you email to my manager",
          followUp: "Then ask: 'Make it more casual and friendly'"
        },
        {
          id: "iterative-2", 
          prompt: "Explain photosynthesis",
          followUp: "Then ask: 'Now explain it like I'm 10 years old'"
        }
      ]
    },
    {
      id: "context-setting",
      title: "Context Setting",
      description: "Provide background information for better results",
      examples: [
        {
          id: "context-1",
          prompt: "I'm planning a birthday party for 8-year-olds. Suggest 5 games that work indoors."
        },
        {
          id: "context-2",
          prompt: "I'm a complete beginner at Excel. Show me how to create a simple budget spreadsheet."
        }
      ]
    },
    {
      id: "specific-formatting",
      title: "Specific Formatting",
      description: "Request exactly the format you need",
      examples: [
        {
          id: "format-1",
          prompt: "List 5 healthy breakfast ideas as a numbered list with prep time for each"
        },
        {
          id: "format-2",
          prompt: "Write a professional email declining a meeting invitation. Keep it under 50 words."
        }
      ]
    }
  ];

  const promptTemplate = `I'm a [your role] working on [project] for [audience]...

Please help me [specific task] that [specific requirements]...

Format this as [list/email/table/etc.] with [length/style]...`;

  // Group prompts by category
  const categories = [
    { name: "Work & Professional", color: "blue" },
    { name: "Home & Personal", color: "green" },
    { name: "Creative & Learning", color: "purple" },
    { name: "Original Examples", color: "orange" }
  ];

  return (
    <>
      <HeroSection
        title="Practice with AI"
        subtitle="Build confidence with real examples. Copy our prompts."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        {/* Step 1 - Easy Prompts */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-4">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Step 1</div>
              <h2 className="text-2xl font-bold text-gray-900">Practice with Ready-to-Use Prompts</h2>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg">
            Try these prompts to see what AI can do. No setup needed - just copy and paste into your favourite AI tool.
          </p>

          {categories.map((category) => {
            const categoryPrompts = easyPrompts.filter(p => p.category === category.name);
            if (categoryPrompts.length === 0) return null;

            return (
              <div key={category.name} className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryPrompts.map((prompt) => (
                    <div key={prompt.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {prompt.difficulty}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{prompt.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{prompt.description}</p>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-4 flex-grow">
                        <code className="text-sm text-gray-700 leading-relaxed">{prompt.prompt}</code>
                      </div>
                      
                      <button
                        onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 mt-auto"
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
              </div>
            );
          })}
        </section>

        {/* Step 2 - Improve Skills */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center mr-4">
              <ArrowRight className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Step 2</div>
              <h2 className="text-2xl font-bold text-gray-900">Improve Your Skills</h2>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg">
            Practice these essential techniques to get better results from AI tools. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillExercises.map((exercise) => (
              <div key={exercise.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{exercise.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{exercise.description}</p>
                
                <div className="space-y-3 mb-4 flex-grow">
                  {exercise.examples.map((example) => (
                    <div key={example.id} className="bg-gray-50 rounded-lg p-3">
                      <code className="text-sm text-gray-700 block">{example.prompt}</code>
                      {example.followUp && (
                        <code className="text-sm text-blue-600 block mt-2 italic">{example.followUp}</code>
                      )}
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => copyToClipboard(exercise.examples[0].prompt, exercise.id)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 mt-auto"
                >
                  {copiedPrompt === exercise.id ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy First Example</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Step 3 - Build Your Own */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-purple-500 text-white rounded-lg flex items-center justify-center mr-4">
              <span className="font-bold">3</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Step 3</div>
              <h2 className="text-2xl font-bold text-gray-900">Build Your Own Prompts</h2>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <p className="text-gray-600 mb-6">
              Use this simple formula to create effective prompts for any task:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">1. Set the Context</h4>
                <p className="text-blue-800 text-sm mb-2">Tell AI your role, audience, and situation</p>
                <code className="block text-sm bg-blue-100 p-3 rounded text-blue-900">
                  I'm a [your role] working on [project] for [audience]...
                </code>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">2. Make Your Request</h4>
                <p className="text-green-800 text-sm mb-2">Be specific about what you want</p>
                <code className="block text-sm bg-green-100 p-3 rounded text-green-900">
                  Please help me [specific task] that [specific requirements]...
                </code>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">3. Specify the Format</h4>
                <p className="text-purple-800 text-sm mb-2">Tell AI exactly how you want the response</p>
                <code className="block text-sm bg-purple-100 p-3 rounded text-purple-900">
                  Format this as [list/email/table/etc.] with [length/style]...
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
                    <span>Copy Template</span>
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
