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
    }
  ];

  return (
    <>
      <HeroSection
        title="Start Learning AI"
        subtitle="Three steps from beginner to confident."
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
