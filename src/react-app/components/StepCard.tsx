import { ReactNode } from "react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  features?: string[];
  buttonText: string;
  buttonAction?: () => void;
  icon?: ReactNode;
  stepColor?: string;
  disabled?: boolean;
}

export default function StepCard({
  stepNumber,
  title,
  description,
  features = [],
  buttonText,
  buttonAction,
  icon,
  stepColor = "bg-blue-500",
  disabled = false
}: StepCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 h-full flex flex-col ${disabled ? 'opacity-60' : ''}`}>
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 ${stepColor} text-white rounded-lg flex items-center justify-center mr-3`}>
          {icon || stepNumber}
        </div>
        <div>
          <div className="text-sm font-medium text-gray-500">Step {stepNumber}</div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <button
        onClick={buttonAction}
        disabled={disabled}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
          disabled 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
