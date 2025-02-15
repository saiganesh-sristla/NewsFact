import { useState, useEffect } from "react";
import { Search, Menu, X, Shield, Clock, Users, Newspaper,MessageSquare, Globe } from "lucide-react";

export default function HomePage() {
  const [newsText, setNewsText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const [selectedType, setSelectedType] = useState(null);

  const handleAnalyze = async () => {
    if (!selectedType) {
      alert("Please select a content type first");
      return;
    }
    if (!newsText.trim()) {
      alert("Please enter a URL or text");
      return;
    }
  
    try {
      const response = await fetch("https://fa3d-103-14-233-220.ngrok-free.app/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: newsText,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch analysis results.");
      }
  
      const result = await response.json(); 
  
      // Prepare the result message
      let message = result.false;
      console.log(result);
  
      alert(message); // Replace this with UI rendering later
  
    } catch (error) {
      console.error("Error analyzing content:", error);
      alert("Error analyzing content. Please try again.");
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Typing effect
  useEffect(() => {
    const text = "Detect Misinformation";
    let index = 0;

    const interval = setInterval(() => {
      setAnimatedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const contentTypes = [
    {
      type: "social",
      icon: <Users className="w-8 h-8 mb-3 text-blue-500" />,
      title: "Social Media",
      description: "Analyze posts from Twitter, Facebook, Instagram",
      placeholder: "Paste a social media URL..."
    },
    {
      type: "news",
      icon: <Newspaper className="w-8 h-8 mb-3 text-green-500" />,
      title: "News Article",
      description: "Verify news articles from various sources",
      placeholder: "Paste a news article URL..."
    },
    {
      type: "discussion",
      icon: <MessageSquare className="w-8 h-8 mb-3 text-purple-500" />,
      title: "Discussion Forum",
      description: "Check content from Reddit, forums, blogs",
      placeholder: "Paste a discussion thread URL..."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex flex-col text-gray-900">
      {/* Navbar */}
      <nav className="w-full bg-black text-white py-4 fixed top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">NewsFact</h1>
            
            <button 
              className="md:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-gray-800"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <ul className="hidden md:flex space-x-8">
              {["Home", "How It Works", "Trending Alerts", "About"].map((item) => (
                <li key={item} className="hover:text-gray-300 transition-colors duration-200 cursor-pointer font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu - Fixed position */}
          <div 
            className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 shadow-xl transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            } ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            <ul className="py-4 px-6 space-y-4">
              {["Home", "How It Works", "Trending Alerts", "About"].map((item) => (
                <li 
                  key={item} 
                  className="hover:text-gray-300 transition-colors duration-200 cursor-pointer font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 mt-16">
        {/* Hero Section */}
        <header className="w-full bg-gradient-to-r from-black to-gray-900 text-white pt-24 pb-32 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              {animatedText}
              {animatedText.length === 21 ? "" : <span className="animate-blink">|</span>}
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 font-light">
              Verify news articles, social media content, and online discussions in real-time with AI-powered detection.
            </p>
          </div>
        </header>

        {/* Content Type Selection Section */}
        <section className="w-full max-w-5xl mx-auto px-4">
          <div className="bg-white shadow-2xl rounded-xl p-8 mt-[-64px] transform transition-all duration-300 border border-gray-200">
            <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">Select Content Type for Analysis</h2>
            
            {/* Content Type Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contentTypes.map((content) => (
                <div
                  key={content.type}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
                    selectedType === content.type 
                    ? 'border-black bg-gray-50' 
                    : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedType(content.type)}
                >
                  <div className="text-center">
                    {content.icon}
                    <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
                    <p className="text-sm text-gray-600">{content.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* URL Input */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder={selectedType ? contentTypes.find(c => c.type === selectedType).placeholder : "Select a content type above..."}
                className="w-full outline-none text-lg px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-400 transition-colors duration-200"
                value={newsText}
                onChange={(e) => setNewsText(e.target.value)}
                disabled={!selectedType}
              />
              <button 
                onClick={handleAnalyze}
                disabled={!selectedType || !newsText}
                className={`w-full md:w-auto px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-lg ${
                  !selectedType || !newsText 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-black hover:bg-gray-900 text-white'
                }`}
              >
                <Search size={20} /> Analyze
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-12 h-12 text-blue-600" />,
                  title: "AI-Powered Analysis",
                  description: "Advanced algorithms analyze content patterns and cross-reference with verified sources."
                },
                {
                  icon: <Clock className="w-12 h-12 text-green-600" />,
                  title: "Real-Time Results",
                  description: "Get instant verification results and credibility scores for any content."
                },
                {
                  icon: <Users className="w-12 h-12 text-purple-600" />,
                  title: "Community Insights",
                  description: "Access community feedback and expert opinions on trending topics."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 pb-12">
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">© 2025 NewsFact. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}