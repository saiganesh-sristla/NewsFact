import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-10">
            <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        About NewsFact.AI
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        NewsFact is an AI-powered fact-checking platform designed to help users verify the authenticity of news articles, social media posts, and online discussions. Our mission is to combat misinformation and promote truth in digital media.
                    </p>
                </div>

                {/* Vision Section */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 rounded-2xl shadow-xl mb-16">
                    <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                    <p className="text-lg leading-relaxed text-gray-200">
                        In an era of rapid information sharing, false news spreads faster than the truth. NewsFact empowers individuals and organizations with a tool to analyze content credibility and make informed decisions.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <span className="text-3xl mr-4">🔍</span>
                            <h3 className="text-2xl font-bold">AI-Powered Analysis</h3>
                        </div>
                        <p className="text-gray-600 text-lg">
                            We use advanced machine learning models to detect misinformation in real time, providing accurate and reliable results.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <span className="text-3xl mr-4">📊</span>
                            <h3 className="text-2xl font-bold">Data-Driven Insights</h3>
                        </div>
                        <p className="text-gray-600 text-lg">
                            Get comprehensive credibility scores and supporting fact-checking sources to make informed decisions.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        We are a passionate team of developers, data scientists, and researchers dedicated to fighting misinformation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Saiganesh Sristla", role: "Frontend Developer", emoji: "👨‍💻" },
                            { name: "Abhay Jaiswal", role: "Backend Developer", emoji: "🛠️" },
                            { name: "Abhay Shinde", role: "ML Engineer", emoji: "🤖" },
                            { name: "Shobit Singh", role: "Intern", emoji: "🎓" }
                        ].map((member) => (
                            <div 
                                key={member.name} 
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                            >
                                <div className="text-4xl mb-4 text-center">{member.emoji}</div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                                    <p className="text-gray-600 font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gray-50 rounded-2xl p-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Join Us in Fighting Misinformation!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Together, we can create a more informed world. Get started by analyzing your first news article.
                    </p>
                    <Link 
                        to="/precautions" 
                        className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        Check This
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;