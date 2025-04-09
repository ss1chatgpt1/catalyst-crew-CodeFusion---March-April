# Cyber Catalyst - Documentation

## Project Overview

Cyber Catalyst is an enterprise-grade cybersecurity website built for the CodeFusion Hackathon. The project showcases a modern, responsive design with advanced features including AI-powered chatbot integration, real-time cybersecurity news, interactive blog, and comprehensive resource center.

## Full Project Setup

The complete React project can be found in the `src` directory. To run the full project:

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

## Project Structure

```
cyber-catalyst/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Chatbot.jsx
│   │   ├── Contact.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── News.jsx
│   │   ├── Resources.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   └── Testimonials.jsx
│   ├── styles/
│   │   ├── About.css
│   │   ├── Blog.css
│   │   ├── CaseStudies.css
│   │   ├── Chatbot.css
│   │   ├── Contact.css
│   │   ├── Features.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── News.css
│   │   ├── Resources.css
│   │   ├── SearchBar.css
│   │   ├── Services.css
│   │   ├── Team.css
│   │   ├── Testimonials.css
│   │   └── main.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Key Features

### 1. AI-Powered Chatbot

The chatbot component (`Chatbot.jsx`) provides an interactive assistant that simulates integration with OpenRouter LLM. It can answer questions about cybersecurity topics and provide information about the company's services.

### 2. Real-Time Cyber News

The News component (`News.jsx`) integrates with NewsAPI.org to fetch and display the latest cybersecurity news. It includes error handling and fallback to mock data if the API fails.

### 3. Interactive Blog

The Blog component (`Blog.jsx`) provides an interactive blog section with category filtering, social interactions (likes, comments, shares), and responsive design.

### 4. Resource Center

The Resources component (`Resources.jsx`) offers downloadable whitepapers, brochures, and a knowledge base with OWASP Top 10 documentation.

### 5. Case Studies

The CaseStudies component (`CaseStudies.jsx`) showcases success stories with detailed information about challenges, solutions, and results.

### 6. Site-Wide Search

The SearchBar component (`SearchBar.jsx`) provides advanced search functionality across the entire website.

## API Integration

### NewsAPI.org

The News component integrates with NewsAPI.org using the following endpoint:

```javascript
const response = await fetch(
  `https://newsapi.org/v2/everything?q=cybersecurity+OR+hacking+OR+"data+breach"&language=en&sortBy=publishedAt&pageSize=4&apiKey=${apiKey}`
);
```

## Responsive Design

The website is fully responsive and optimized for all device sizes using CSS media queries. The design follows a mobile-first approach with breakpoints at 768px and 992px.

## Future Enhancements

1. Implement user authentication and personalized dashboards
2. Add a threat intelligence feed with real-time alerts
3. Integrate a vulnerability scanner tool
4. Develop a security assessment questionnaire
5. Create an interactive security training module
