import React from "react";
import { Shield, Search, AlertTriangle, Image, Calendar, CheckSquare } from "lucide-react";

const PrecautionsPage = () => {
  const precautions = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Check the Source",
      description: "Ensure the news is from a reputable source and avoid unverified websites."
    },
    {
      icon: <Search className="w-12 h-12 text-green-500 mb-4" />,
      title: "Look for Multiple Sources",
      description: "Cross-check the information with other reliable sources before believing it."
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-amber-500 mb-4" />,
      title: "Beware of Clickbait Headlines",
      description: "Misleading headlines are common; read the full article before forming an opinion."
    },
    {
      icon: <Image className="w-12 h-12 text-purple-500 mb-4" />,
      title: "Verify Images & Videos",
      description: "Use reverse image search to check if visuals are manipulated or taken out of context."
    },
    {
      icon: <Calendar className="w-12 h-12 text-red-500 mb-4" />,
      title: "Check the Date",
      description: "Old news articles or manipulated dates can mislead people; always verify the publishing date."
    },
    {
      icon: <CheckSquare className="w-12 h-12 text-teal-500 mb-4" />,
      title: "Use Fact-Checking Tools",
      description: "Websites like Snopes and FactCheck.org help verify questionable claims."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 mt-10">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Precautions While Reading News
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Stay informed but be cautious! Follow these steps to avoid misinformation and make better judgments about the news you consume.
      </p>
      
      {/* Precautions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {precautions.map((precaution, index) => (
          <div
            key={index}
            className="p-8 bg-white shadow-lg rounded-xl text-center border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex justify-center items-center mb-4">
              {precaution.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{precaution.title}</h3>
            <p className="text-gray-600">{precaution.description}</p>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="bg-gray-900 text-white p-10 rounded-2xl shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Informed, Stay Safe!</h2>
          <p className="text-lg mb-6">
            By following these precautions, you can become a more critical news consumer and avoid falling for misinformation. Remember that verifying information before sharing is equally important.
          </p>
          <button
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Learn More About Fact Checking
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrecautionsPage;