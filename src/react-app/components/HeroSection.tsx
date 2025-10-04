interface HeroSectionProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function HeroSection({ title, subtitle, className = "" }: HeroSectionProps) {
  return (
    <div className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-95">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
