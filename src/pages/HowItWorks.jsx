import { FaSearch, FaCheckCircle, FaShieldAlt, FaNewspaper, FaRobot, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-6xl text-blue-500 mb-6" />,
      title: "Analyze Content",
      description: "Our AI scans and analyzes news articles and social media content.",
    },
    {
      icon: <FaCheckCircle className="text-6xl text-green-500 mb-6" />,
      title: "Verify Accuracy",
      description: "Cross-checks information with trusted sources to verify authenticity.",
    },
    {
      icon: <FaShieldAlt className="text-6xl text-red-500 mb-6" />,
      title: "Flag Fake News",
      description: "Identifies and flags misleading or false information for users.",
    },
  ];

  const features = [
    {
      icon: <FaNewspaper className="text-5xl text-yellow-500 mb-4" />,
      title: "Real-time News Analysis",
      description: "Get instant results on whether an article is fake or authentic.",
    },
    {
      icon: <FaRobot className="text-5xl text-purple-500 mb-4" />,
      title: "AI-Powered Detection",
      description: "Advanced AI models analyze content with high accuracy.",
    },
    {
      icon: <FaInfoCircle className="text-5xl text-teal-500 mb-4" />,
      title: "Reliable Sources",
      description: "We verify content with trusted and legitimate news platforms.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 text-gray-900 mt-10">
      {/* Header Section */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">How NewsFact Works</h2>

      {/* Steps Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-xl shadow-lg text-center border border-gray-200 hover:shadow-2xl transition-all"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{step.title}</h3>
            <p className="text-gray-600 mt-3">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h3>
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-xl shadow-lg text-center border border-gray-200 hover:shadow-2xl transition-all"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold mt-4 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-3">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action (CTA) */}
      <div className="bg-gray-900 text-white p-12 text-center rounded-xl shadow-lg">
        <h3 className="text-3xl font-semibold mb-4">Stay Informed, Stay Safe!</h3>
        <p className="text-gray-200 mb-6">Start analyzing news articles now with NewsFact.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition-all"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
