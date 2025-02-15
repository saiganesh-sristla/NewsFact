# NewsFact

## Overview

NewsFact is a powerful AI-driven application designed to analyze and detect fake news from various sources such as social media, news articles, and online discussions. Users can input URLs of content they want to verify, and the system returns a credibility score along with an assessment of whether the content is likely real or fake.

## Features

- **AI-Powered Analysis**: Uses advanced algorithms to analyze content and detect misinformation.
- **Multiple Content Types**: Supports social media posts, news articles, and discussion forums.
- **Real-Time Verification**: Provides instant results with a confidence score.
- **User-Friendly Interface**: Simple and intuitive design for easy navigation.

## Tech Stack

### Frontend:

- React.js (Vite)
- Tailwind CSS
- Zustand (State Management)
- Lucide Icons

### Backend:

- Node.js (Express.js)
- MongoDB (for storing analysis results)
- AI Model for Fake News Detection

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 16.x)
- npm or yarn

### Frontend Setup

```sh
# Clone the repository
git clone https://github.com/your-repo/newsfact.git
cd newsfact/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Backend Setup

```sh
cd ../backend

# Install dependencies
npm install

# Start the backend server
npm start
```

## API Integration

The frontend sends a request to the backend API with the URL or text for analysis.

### Request:

```json
POST /analyze
{
  "type": "news",  // or "social", "discussion"
  "content": "https://example.com/article"
}
```

### Response:

```json
{
  "isFake": true,
  "score": 85
}
```

## How It Works

1. Select the content type (Social Media, News Article, or Discussion Forum).
2. Enter the URL of the content you want to analyze.
3. Click "Analyze" to send a request to the AI-powered backend.
4. View the credibility score and analysis result.

## Future Enhancements

- **User Authentication**: Allow users to save analysis history.
- **Report Generation**: Download reports based on analysis.
- **Integration with Chrome Extension**: Verify news directly from the browser.

## Contributors

- **Saiganesh Sristla** (Frontend Developer)
- **Your Team Members Here**

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, reach out to [your email or GitHub profile].


