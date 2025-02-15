import { useState, useEffect } from "react";
import { Search, Shield, Clock, Users, Newspaper, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
    const [newsText, setNewsText] = useState("");
    const [animatedText, setAnimatedText] = useState("");
    const [selectedType, setSelectedType] = useState(null);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {
        setLoading(true);
        if (!selectedType) {
            alert("Please select a content type first");
            return;
        }
        if (!newsText.trim()) {
            alert("Please enter a URL or text");
            return;
        }
        if (selectedType == "news") {
            try {
                const response = await fetch("https://6e4c-103-14-233-220.ngrok-free.app/predict", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ url: newsText }),
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch analysis results.");
                }

                const result = await response.json();
                console.log(result);

                // Extract the key (true/false) and score
                const [prediction, score] = Object.entries(result)[0];

                // Format the result
                const isFake = prediction === "false";
                const formattedResult = {
                    label: isFake ? "Fake News" : "Real News",
                    status: isFake ? "fake" : "real",
                    score: (score * 100).toFixed(2) + "%",
                    icon: isFake ? "⚠️" : "✅"
                };
                setLoading(false);
                // Update UI state with the result
                setAnalysisResult(formattedResult);

            } catch (error) {
                console.error("Error analyzing content:", error);
                alert("Error analyzing content. Please try again.");
            }
        }
        else if (selectedType == "socials") {
            try {
                const response = await fetch("https://fa3d-103-14-233-220.ngrok-free.app/socials", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ url: newsText }),
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch analysis results.");
                }

                const result = await response.json();
                console.log(result);

                // Extract the key (true/false) and score
                const [prediction, score] = Object.entries(result)[0];

                // Format the result
                const isFake = prediction === "false";
                const formattedResult = {
                    label: isFake ? "Fake News" : "Real News",
                    status: isFake ? "fake" : "real",
                    score: (score * 100).toFixed(2) + "%",
                    icon: isFake ? "⚠️" : "✅"
                };

                // Update UI state with the result
                setAnalysisResult(formattedResult);

            } catch (error) {
                console.error("Error analyzing content:", error);
                alert("Error analyzing content. Please try again.");
            }
        }

    };

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


            {/* Main Content */}
            <main className="flex-1 mt-16">
                {/* Hero Section */}
                <header className="h-screen relative w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white pt-32 pb-40 text-center px-6">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Animated Typing Text */}
                        <motion.h1
                            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {animatedText}
                            <span className="text-primary">{animatedText.length === 21 ? "" : " |"}</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 font-light"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Verify news articles, social media content, and online discussions in real-time with AI-powered detection.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold text-lg shadow-lg hover:bg-yellow-300 transition-colors duration-200"
                            ><a href="#selection">Start Verifying Now</a>   
                            </motion.button>
                        </motion.div>
                    </div>
                </header>

                {/* Content Type Selection Section */}
                <section id="selection" className="w-full max-w-5xl mx-auto px-6 pt-30">
                    <div className="bg-white shadow-xl rounded-2xl p-10 mt-[-64px] border border-gray-200 transition-all duration-300">
                        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Select Content Type for Analysis</h2>

                        {/* Content Type Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            {contentTypes.map((content) => (
                                <div
                                    key={content.type}
                                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-md ${selectedType === content.type
                                        ? 'border-black bg-gray-100'
                                        : 'border-gray-300 hover:border-gray-500'
                                        }`}
                                    onClick={() => setSelectedType(content.type)}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        {content.icon}
                                        <h3 className="text-xl font-semibold mt-3">{content.title}</h3>
                                        <p className="text-gray-600 text-sm mt-1">{content.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* URL Input */}
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <input
                                type="text"
                                placeholder={selectedType ? contentTypes.find(c => c.type === selectedType).placeholder : "Select a content type above..."}
                                className="w-full outline-none text-lg px-5 py-3 rounded-lg border-2 border-gray-300 focus:border-black transition-colors duration-300 shadow-sm"
                                value={newsText}
                                onChange={(e) => setNewsText(e.target.value)}
                                disabled={!selectedType}
                            />
                            <button
                                onClick={handleAnalyze}
                                disabled={!selectedType || !newsText}
                                className={`w-full md:w-auto px-8 py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-medium transition-all duration-300 shadow-lg ${!selectedType || !newsText
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-black hover:bg-gray-900 text-white'
                                    }`}
                            >
                                <Search size={22} /> Analyze
                            </button>
                        </div>

                        {/* Loading Indicator */}
                        {loading && <span className="loading loading-spinner loading-lg mt-6"></span>}

                        {/* Analysis Result */}
                        {analysisResult && (
                            <div
                                className={`mt-10 p-8 rounded-2xl border-2 shadow-md text-center transition-all duration-300 ${analysisResult.status === 'fake' ? 'bg-red-50 border-red-300' : 'bg-green-50 border-green-300'
                                    }`}
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-5xl mb-4">{analysisResult.icon}</span>
                                    <h3
                                        className={`text-2xl font-bold ${analysisResult.status === 'fake' ? 'text-red-700' : 'text-green-700'
                                            }`}
                                    >
                                        {analysisResult.label}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-gray-600 text-lg">Confidence:</span>
                                        <span
                                            className={`text-xl font-semibold ${analysisResult.status === 'fake' ? 'text-red-600' : 'text-green-600'
                                                }`}
                                        >
                                            {analysisResult.score}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-4">
                                        This analysis was performed using our advanced AI algorithms.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12 text-gray-900">Features</h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                {
                                    icon: <Shield className="w-16 h-16 text-blue-600" />,
                                    title: "AI-Powered Verification",
                                    description:
                                        "Our advanced AI scans content patterns, cross-references multiple trusted sources, and detects potential misinformation with precision.",
                                },
                                {
                                    icon: <Clock className="w-16 h-16 text-green-600" />,
                                    title: "Instant Credibility Score",
                                    description:
                                        "Receive real-time analysis with a trust score, helping you quickly determine the authenticity of news, articles, and social media content.",
                                },
                                {
                                    icon: <Users className="w-16 h-16 text-purple-600" />,
                                    title: "Community-Driven Insights",
                                    description:
                                        "Engage with expert opinions and community feedback to verify claims, fostering a transparent and informed digital space.",
                                },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-2xl text-center border-2 border-gray-300 bg-white shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 hover:border-gray-500"
                                >
                                    <div className="flex justify-center mb-5">{feature.icon}</div>
                                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">{feature.description}</p>
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