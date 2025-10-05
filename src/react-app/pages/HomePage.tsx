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
      description: "Try ready-to-use prompts for everyday tasks. Copy, paste, and see AI work in real situations.",
      features: [
        "Ready-to-use prompt examples",
        "Work, home, and creative tasks",
        "One-click copy buttons",
        "Real examples you can try now"
      ],
      buttonText: "Start Practising",
      buttonAction: () => navigate("/practice"),
      icon: <MessageSquare className="w-5 h-5" />,
      stepColor: "bg-red-500"
    },
    {
      stepNumber: 3,
      title: "Tools",
      description: "Find the right AI tools for your needs. Compare beginner-friendly options with honest reviews.",
      features: [
        "ChatGPT, Claude, and Grammarly",
        "Beginner-friendly ratings",
        "Free and paid options",
        "Direct links to try each tool"
      ],
      buttonText: "Explore Tools",
      buttonAction: () => navigate("/tools"),
      icon: <Wrench className="w-5 h-5" />,
      stepColor: "bg-green-500"
    },
    {
      stepNumber: 4,
      title: "Get Help",
      description: "Questions about using AI? Get in touch and we'll help you understand it better.",
      features: [
        "Ask questions about AI",
        "Get clear, simple answers",
        "No question too basic",
        "Friendly, jargon-free help"
      ],
      buttonText: "Contact Us",
      buttonAction: () => navigate("/contact"),
      icon: <HelpCircle className="w-5 h-5" />,
      stepColor: "bg-orange-500"
    }
  ];

  return (
    <>
      <HeroSection
        title="Making AI Simple and Accessible"
        subtitle="Learn AI without being a tech expert. Start today."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <StepCard key={step.stepNumber} {...step} />
          ))}
        </div>
      </div>
    </>
  );
}
