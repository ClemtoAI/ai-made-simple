import { useNavigate } from "react-router";
import HeroSection from "@/react-app/components/HeroSection";
import StepCard from "@/react-app/components/StepCard";
import { BookOpen, MessageCircle, Lightbulb, Zap, User, TrendingUp } from "lucide-react";

export default function StartHerePage() {
  const navigate = useNavigate();

  const learningSteps = [
    {
      stepNumber: 1,
      title: "Understanding AI",
      description: "Learn what AI actually is, how it works, and why it matters for your daily life. No technical jargon - just clear, simple explanations.",
      features: [
        "What is artificial intelligence?",
        "Different types of AI tools",
        "Real-world applications",
        "Common myths debunked"
      ],
      buttonText: "Start Learning",
      buttonAction: () => navigate("/start-here/understanding-ai"),
      icon: <BookOpen className="w-5 h-5" />,
      stepColor: "bg-blue-500"
    },
    {
      stepNumber: 2,
      title: "First AI Conversations",
      description: "Practice having your first conversations with AI. Learn how to ask questions, give instructions, and get helpful responses.",
      features: [
        "How to start a conversation",
        "Basic prompting techniques",
        "Getting better responses",
        "Common beginner mistakes"
      ],
      buttonText: "Try It Now",
      buttonAction: () => navigate("/start-here/first-conversations"),
      icon: <MessageCircle className="w-5 h-5" />,
      stepColor: "bg-green-500"
    },
    {
      stepNumber: 3,
      title: "Practical Applications",
      description: "Discover specific ways to use AI in your work, studies, and personal projects. Real examples you can apply immediately.",
      features: [
        "Writing and editing help",
        "Research and learning",
        "Creative projects",
        "Problem-solving techniques"
      ],
      buttonText: "Explore Ideas",
      buttonAction: () => navigate("/start-here/practical-applications"),
      icon: <Lightbulb className="w-5 h-5" />,
      stepColor: "bg-purple-500"
    },
    {
      stepNumber: 4,
      title: "Advanced Techniques",
      description: "Master more sophisticated prompting strategies and learn how to get exactly what you need from AI tools.",
      features: [
        "Advanced prompting strategies",
        "Context and specificity",
        "Iterative conversations",
        "Professional use cases"
      ],
      buttonText: "Coming Soon",
      icon: <Zap className="w-5 h-5" />,
      stepColor: "bg-gray-400",
      disabled: true
    },
    {
      stepNumber: 5,
      title: "Your AI Assistant",
      description: "Learn how to personalise AI tools to work best for you. Create your own templates and workflows.",
      features: [
        "Personalisation techniques",
        "Creating custom templates",
        "Building workflows",
        "Saving time and effort"
      ],
      buttonText: "Coming Soon",
      icon: <User className="w-5 h-5" />,
      stepColor: "bg-gray-400",
      disabled: true
    },
    {
      stepNumber: 6,
      title: "Track Your Progress",
      description: "Monitor your AI learning journey and celebrate your achievements as you become more confident.",
      features: [
        "Progress tracking",
        "Skill assessments",
        "Achievement badges",
        "Learning recommendations"
      ],
      buttonText: "Coming Soon",
      icon: <TrendingUp className="w-5 h-5" />,
      stepColor: "bg-gray-400",
      disabled: true
    }
  ];

  return (
    <>
      <HeroSection
        title="Start Your AI Learning Journey"
        subtitle="From complete beginner to confident user."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningSteps.map((step) => (
            <StepCard key={step.stepNumber} {...step} />
          ))}
        </div>
      </div>
    </>
  );
}
