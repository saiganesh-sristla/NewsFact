import { FaSearch, FaCheckCircle, FaShieldAlt, FaNewspaper, FaRobot, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-5xl text-blue-500 mb-3" />,
      title: "Analyze Content",
      description: "Our AI scans and analyzes news articles and social media content.",
    },
    {
      icon: <FaCheckCircle className="text-5xl text-green-500 mb-3" />,
      title: "Verify Accuracy",
      description: "Cross-checks information with trusted sources to verify authenticity.",
    },
    {
      icon: <FaShieldAlt className="text-5xl text-red-500 mb-3" />,
      title: "Flag Fake News",
      description: "Identifies and flags misleading or false information for users.",
    },
  ];

  const features = [
    {
      icon: <FaNewspaper className="text-4xl text-yellow-500 mb-3" />,
      title: "Real-time News Analysis",
      description: "Get instant results on whether an article is fake or authentic.",
    },
    {
      icon: <FaRobot className="text-4xl text-purple-500 mb-3" />,
      title: "AI-Powered Detection",
      description: "Advanced AI models analyze content with high accuracy.",
    },
    {
      icon: <FaInfoCircle className="text-4xl text-teal-500 mb-3" />,
      title: "Reliable Sources",
      description: "We verify content with trusted and legitimate news platforms.",
    },
  ];

  const faqs = [
    {
      question: "How does the AI detect fake news?",
      answer: "Our AI cross-references multiple data points, including credibility scores, sentiment analysis, and source reliability.",
    },
    {
      question: "Is this tool free to use?",
      answer: "Yes, our basic version is free. However, premium features offer deeper analysis and reports.",
    },
    {
      question: "What sources does NewsFact use?",
      answer: "We use a combination of fact-checking databases, government sources, and reputable news agencies.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 mt-5">
      {/* Header Section */}
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        How It Works
      </h2>

      {/* Steps Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-8 bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl text-center border border-gray-100 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mt-2 text-gray-800">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Key Features
      </h3>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl text-center border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold mt-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        FAQs
      </h3>
      <div className="space-y-6 mb-16">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-lg transition-transform transform hover:scale-105"
          >
            <h4 className="text-lg font-semibold text-gray-800">{faq.question}</h4>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Call to Action (CTA) */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 text-center rounded-2xl shadow-2xl">
        <h3 className="text-2xl font-semibold mb-2">Stay Informed, Stay Safe!</h3>
        <p className="text-lg mb-6">Start analyzing news articles now with NewsFact.</p>
        <Link
          to="/"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;