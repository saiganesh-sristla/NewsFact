import { useState, useEffect } from "react";
import { Search, Shield, Clock, Users, Newspaper, MessageSquare, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { text } from "framer-motion/client";
import ModernLoader from "../components/ModernLoader";

export default function HomePage() {
    const [newsText, setNewsText] = useState("");
    const [animatedText, setAnimatedText] = useState("");
    const [selectedType, setSelectedType] = useState(null);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);

    const handleAnalyze = async () => {
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
                setIsLoading(true)
                const response = await fetch("https://16e5-103-14-233-220.ngrok-free.app/news", {
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
                alert("Please enter a valid URL");
            }
            finally {
                setIsLoading(false)
            }
        }
        else if (selectedType == "social") {
            try {
                setIsLoading(true)
                const socialText = newsText.replace("")
                const response = await fetch("https://16e5-103-14-233-220.ngrok-free.app/social", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ text: newsText }),
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
                    label: isFake ? "Fake Information" : "Real Information",
                    status: isFake ? "fake" : "real",
                    score: (score * 100).toFixed(2) + "%",
                    icon: isFake ? "⚠️" : "✅"
                };

                // Update UI state with the result
                setAnalysisResult(formattedResult);

            } catch (error) {
                console.error("Error analyzing content:", error);
            } finally {
                setIsLoading(false)
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
            type: "news",
            icon: <Newspaper className="w-8 h-8 mb-3 text-green-500" />,
            title: "News Article",
            description: "Verify news articles from various sources",
            placeholder: "Paste a news article URL..."
        },
        {
            type: "social",
            icon: <MessageSquare className="w-8 h-8 mb-3 text-purple-500" />,
            title: "Discussion Forum / Social Media",
            description: "Check content from Reddit, forums, blogs",
            placeholder: "Paste a discussion thread Content..."
        }
    ];

    const handleImageUpload = (event) => {
        const file = event.target.files[0] || null;
        setSelectedImage(file);
    };
    const handleImageAnalyze = () => {
        setIsLoading(true);
        if (!selectedImage) {
            alert("Please upload an image first!");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedImage);

        // Simulating API call to verify misinformation
        fetch("https://16e5-103-14-233-220.ngrok-free.app/getimage", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                const [prediction, score] = Object.entries(data)[0];

                // Format the result
                const isFake = prediction === "false";
                const formattedResult = {
                    label: isFake ? "Fake Information" : "Real Information",
                    status: isFake ? "fake" : "real",
                    score: (score * 100).toFixed(2) + "%",
                    icon: isFake ? "⚠️" : "✅"
                };
                // Update UI state with the result
                setAnalysisResult(formattedResult);
            })
            .catch(error => {
                console.error("Error verifying image:", error);
            }).finally(() => {
                setIsLoading(false)
            });
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex flex-col text-gray-900">


            {/* Main Content */}
            <main className="flex-1 mt-16">
                {/* Hero Section */}
                <header className="h-screen relative w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-32 pb-40 text-center px-6 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                    {/* Floating Animation for Hero Section */}
                    <motion.div
                        className="relative max-w-5xl mx-auto my-[8%]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Animated Typing Text */}
                        <motion.h1
                            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {animatedText}
                            <span className="text-primary animate-pulse">{animatedText.length === 21 ? "" : " |"}</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 font-light"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            Verify news articles, social media content, and online discussions in real-time with AI-powered detection.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(255, 193, 7, 0.7)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold text-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 animate-bounce"
                            >
                                <a href="#selection">Start Verifying Now</a>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </header>


                {/* Content Type Selection Section */}
                <section id="selection" className="w-full max-w-5xl mx-auto px-6 pt-40 pb-14">
                    <div className="bg-white shadow-xl rounded-2xl p-10 mt-[-64px] border border-gray-200 transition-all duration-300">
                        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Select Content Type for Analysis</h2>

                        {/* Content Type Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                            {contentTypes.map((content) => (
                                <div
                                    key={content.type}
                                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-md ${selectedType === content.type
                                        ? 'border-black bg-gray-300 shadow-2xl'
                                        : 'border-gray-300 hover:border-gray-500'
                                        }`}
                                    onClick={() => {
                                        setNewsText("");
                                        setAnalysisResult(null);
                                        setSelectedType(content.type)}}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        {content.icon}
                                        <h3 className="text-xl font-semibold mt-3">{content.title}</h3>
                                        <p className="text-gray-600 text-sm mt-1">{content.description}</p>
                                    </div>
                                </div>
                            ))}

                            {/* New Card for Image Upload */}
                            <div
                                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-md ${selectedType === 'image'
                                    ? 'border-black bg-gray-300 shadow-2xl'
                                    : 'border-gray-300 hover:border-gray-500'
                                    }`}
                                onClick={() => setSelectedType('image')}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <Camera className="w-8 h-8 mb-3 text-red-500" />
                                    <h3 className="text-xl font-semibold mt-3">Verify Image</h3>
                                    <p className="text-gray-600 text-sm mt-1">Upload an image to verify misinformation</p>
                                </div>
                            </div>
                        </div>

                        {/* URL Input or Image Upload */}
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            {selectedType !== 'image' ? (
                                <input
                                    type="text"
                                    placeholder={selectedType ? contentTypes.find(c => c.type === selectedType).placeholder : "Select a content type above..."}
                                    className="w-full outline-none text-lg px-5 py-3 rounded-lg border-2 border-gray-300 focus:border-black transition-colors duration-300 shadow-sm"
                                    value={newsText}
                                    onChange={(e) => setNewsText(e.target.value)}
                                    disabled={!selectedType}
                                />
                            ) : (
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:border-black transition-colors duration-300 shadow-sm"
                                    onChange={handleImageUpload}
                                />
                            )}
                            <button
                                onClick={selectedType === 'image' ? handleImageAnalyze : handleAnalyze}
                                disabled={!selectedType || (selectedType !== 'image' && !newsText)}
                                className={`w-full md:w-auto px-8 py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-medium transition-all duration-300 shadow-lg ${!selectedType || (selectedType !== 'image' && !newsText)
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-black hover:bg-gray-900 text-white'
                                    }`}
                            >
                                <Search size={22} /> Analyze
                            </button>
                        </div>

                        {/* Loading Indicator */}
                        <ModernLoader isLoading={isLoading} />

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