import React from "react";

const PrecautionsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
        Precautions While Reading News
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Stay informed but be cautious! Follow these steps to avoid misinformation.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-2">Check the Source</h2>
          <p className="text-gray-600">Ensure the news is from a reputable source and avoid unverified websites.</p>
        </div>
        
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-2">Look for Multiple Sources</h2>
          <p className="text-gray-600">Cross-check the information with other reliable sources before believing it.</p>
        </div>
        
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-2">Beware of Clickbait Headlines</h2>
          <p className="text-gray-600">Misleading headlines are common; read the full article before forming an opinion.</p>
        </div>
        
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-2">Verify Images & Videos</h2>
          <p className="text-gray-600">Use reverse image search to check if visuals are manipulated or taken out of context.</p>
        </div>
        
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-2">Check the Date</h2>
          <p className="text-gray-600">Old news articles or manipulated dates can mislead people; always verify the publishing date.</p>
        </div>
        
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-xl font-semibold mb-2">Use Fact-Checking Tools</h2>
          <p className="text-gray-600">Websites like Snopes and FactCheck.org help verify questionable claims.</p>
        </div>
      </div>
    </div>
  );
};

export default PrecautionsPage;
