import { useState } from "react";
import HeroSection from "@/react-app/components/HeroSection";
import { Star, Search, ExternalLink, Filter } from "lucide-react";

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const beginnerTools = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      description: "The most popular AI chatbot for conversations, writing, and problem-solving.",
      rating: 4.8,
      category: "Chatbot",
      price: "Free + Paid",
      pros: ["Easy to use", "Great for writing", "Excellent support"],
      url: "https://chat.openai.com",
      logo: "🤖"
    },
    {
      id: "claude",
      name: "Claude",
      description: "Helpful, harmless, and honest AI assistant. Excellent for analysis and creative writing.",
      rating: 4.7,
      category: "Chatbot", 
      price: "Free + Paid",
      pros: ["Very safe", "Great reasoning", "Long conversations"],
      url: "https://claude.ai",
      logo: "🧠"
    },
    {
      id: "grammarly",
      name: "Grammarly",
      description: "AI-powered writing assistant that helps with grammar, spelling, and style improvements.",
      rating: 4.6,
      category: "Writing",
      price: "Free + Paid",
      pros: ["Easy setup", "Works everywhere", "Real-time help"],
      url: "https://grammarly.com",
      logo: "✍️"
    }
  ];

  const moreTools = [
    {
      id: "notion-ai",
      name: "Notion AI",
      description: "AI writing assistant built into Notion for notes, documents, and project management.",
      rating: 4.5,
      category: "Productivity",
      price: "Paid",
      url: "https://notion.so",
      logo: "📝"
    },
    {
      id: "midjourney",
      name: "Midjourney",
      description: "Create stunning AI-generated images and artwork from text descriptions.",
      rating: 4.4,
      category: "Creative",
      price: "Paid",
      url: "https://midjourney.com",
      logo: "🎨"
    },
    {
      id: "jasper",
      name: "Jasper",
      description: "AI marketing copywriter for businesses. Creates ads, emails, and marketing content.",
      rating: 4.3,
      category: "Marketing",
      price: "Paid",
      url: "https://jasper.ai",
      logo: "📢"
    },
    {
      id: "copy-ai",
      name: "Copy.ai",
      description: "AI writing tool specifically designed for marketing copy and business content.",
      rating: 4.2,
      category: "Marketing",
      price: "Free + Paid",
      url: "https://copy.ai",
      logo: "✨"
    },
    {
      id: "otter-ai",
      name: "Otter.ai",
      description: "AI meeting assistant that records, transcribes, and summarises your meetings.",
      rating: 4.4,
      category: "Productivity",
      price: "Free + Paid",
      url: "https://otter.ai",
      logo: "🎤"
    },
    {
      id: "canva-ai",
      name: "Canva AI",
      description: "AI-powered design tools built into Canva for creating graphics, presentations, and more.",
      rating: 4.3,
      category: "Creative",
      price: "Free + Paid",
      url: "https://canva.com",
      logo: "🎨"
    }
  ];

  const categories = ["all", "Chatbot", "Writing", "Productivity", "Creative", "Marketing"];

  const filteredTools = moreTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <>
      <HeroSection
        title="AI Tools Directory"
        subtitle="Beginner-friendly AI tools with honest reviews to help you choose."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Perfect for Beginners */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Perfect for Beginners</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Start with these three tools - they're the easiest to learn and most useful for everyday tasks.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {beginnerTools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col" style={{ minHeight: '420px' }}>
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{tool.logo}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {renderStars(tool.rating)}
                      </div>
                      <span className="text-sm text-gray-600">{tool.rating}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{tool.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {tool.category}
                  </span>
                  <span className="text-sm font-medium text-green-600">{tool.price}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Why it's great:</h4>
                  <ul className="space-y-1">
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
  
                  <a href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Try It Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explore More Tools */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore More Tools</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Ready to explore? Here are more specialised AI tools for specific needs.
          </p>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* More AI Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col" style={{ minHeight: '270px' }}>
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{tool.logo}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {renderStars(tool.rating)}
                      </div>
                      <span className="text-xs text-gray-600">{tool.rating}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {tool.category}
                  </span>
                  <span className="text-xs font-medium text-green-600">{tool.price}</span>
                </div>
                
                <div className="mt-auto">
                  
                  <a href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-sm"
                  >
                    <span>Try It Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
