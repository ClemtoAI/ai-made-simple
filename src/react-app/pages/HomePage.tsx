import { useNavigate } from "react-router";
import HeroSection from "@/react-app/components/HeroSection";
import StepCard from "@/react-app/components/StepCard";
import { BookOpen, MessageSquare, Wrench, HelpCircle } from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();

  const steps = [
    {
      stepNumber: 1,
      title: "Start Here",
      description: "Don't understand AI? No problem. Start here and learn step-by-step with our beginner-friendly guide.",
      features: [
        "What is artificial intelligence?",
        "How AI can help you daily",
        "Simple explanations, no jargon",
        "Build confidence step by step"
      ],
      buttonText: "Get Started",
      buttonAction: () => navigate("/start-here"),
      icon: <BookOpen className="w-5 h-5" />,
      stepColor: "bg-blue-500"
    },
    {
      stepNumber: 2,
      title: "Practice",
      description: "Copy our best prompts and watch AI help with your daily tasks. Real examples you can use immediately.",
      features: [
        "Ready-to-use prompt templates",
        "Writing and editing assistance",
        "Problem-solving examples",
        "Creative project ideas"
      ],
      buttonText: "Start Practising",
      buttonAction: () => navigate("/practice"),
      icon: <MessageSquare className="w-5 h-5" />,
      stepColor: "bg-red-500"
    },
    {
      stepNumber: 3,
      title: "Tools",
      description: "Not sure which AI tool to try? Here are the best ones to start with, plus how to use them effectively.",
      features: [
        "Beginner-friendly tool reviews",
        "Step-by-step setup guides",
        "Best practices and tips",
        "Free and paid options"
      ],
      buttonText: "Explore Tools",
      buttonAction: () => navigate("/tools"),
      icon: <Wrench className="w-5 h-5" />,
      stepColor: "bg-green-500"
    },
    {
      stepNumber: 4,
      title: "Get Help",
      description: "Stuck? Find templates, prompts, and answers to common questions. Get personalised help when you need it.",
      features: [
        "AI assistant chat support",
        "Comprehensive FAQ section",
        "Video tutorials and guides",
        "Community help resources"
      ],
      buttonText: "Get Support",
      buttonAction: () => navigate("/assistant"),
      icon: <HelpCircle className="w-5 h-5" />,
      stepColor: "bg-orange-500"
    }
  ];

  return (
    <>
      <HeroSection
        title="AI Made Simple"
        subtitle="Learn AI without being a tech expert. Start today."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <StepCard key={step.stepNumber} {...step} />
          ))}
        </div>
      </div>
    </>
  );
}
