import { useState, useEffect } from 'react';
import '../styles/News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch real-time news from NewsAPI.org
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // NewsAPI.org API key
        const apiKey = 'bf2678a5b3e44862a930f6b7aae71e19';

        // Fetch cybersecurity related news
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=cybersecurity+OR+hacking+OR+"data+breach"&language=en&sortBy=publishedAt&pageSize=4&apiKey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();

        // Format the news data
        const formattedNews = data.articles.map((article, index) => ({
          id: index + 1,
          title: article.title,
          summary: article.description || 'Click to read more about this cybersecurity news.',
          date: new Date(article.publishedAt).toLocaleDateString(),
          source: article.source.name,
          url: article.url
        }));

        setNews(formattedNews);
      } catch (error) {
        console.error('Error fetching news:', error);

        // Fallback to mock data if API fails
        const mockNews = [
          {
            id: 1,
            title: 'Critical Vulnerability Discovered in Popular Enterprise Software',
            summary: 'Security researchers have identified a zero-day vulnerability affecting thousands of businesses worldwide. Patch available now.',
            date: '2023-10-15',
            source: 'Cyber Security News',
            url: '#'
          },
          {
            id: 2,
            title: 'Ransomware Attacks Targeting Healthcare Sector Increase by 300%',
            summary: 'New report shows alarming rise in targeted attacks against hospitals and healthcare providers. Learn how to protect your organization.',
            date: '2023-10-12',
            source: 'Threat Intelligence Weekly',
            url: '#'
          },
          {
            id: 3,
            title: 'New AI-Based Defense System Stops Advanced Persistent Threats',
            summary: 'Revolutionary security system uses machine learning to identify and neutralize sophisticated attacks before data breaches occur.',
            date: '2023-10-10',
            source: 'Enterprise Security Today',
            url: '#'
          },
          {
            id: 4,
            title: 'Global Cybersecurity Summit Addresses Supply Chain Vulnerabilities',
            summary: 'Industry leaders gather to develop new standards for securing complex supply chains against emerging cyber threats.',
            date: '2023-10-08',
            source: 'Security Standards Journal',
            url: '#'
          }
        ];

        setNews(mockNews);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section id="news" className="news">
      <div className="container">
        <div className="section-title">
          <h2>Latest Cyber Security News</h2>
          <p>Stay informed about the latest threats and security developments</p>
        </div>

        <div className="news-container">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading latest security news...</p>
            </div>
          ) : (
            <div className="news-grid">
              {news.map((item) => (
                <div className="news-card" key={item.id}>
                  <div className="news-content">
                    <span className="news-date">{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <div className="news-footer">
                      <span className="news-source">{item.source}</span>
                      <a href={item.url} className="news-link" target="_blank" rel="noopener noreferrer">
                        Read More <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="news-cta">
            <p>Want to receive security alerts and updates directly?</p>
            <a href="#contact" className="btn">Subscribe to Our Newsletter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
