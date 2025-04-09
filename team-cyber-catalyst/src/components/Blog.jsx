import { useState } from 'react';
import '../styles/Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Rise of Zero Trust Security in Enterprise Environments',
      excerpt: 'How zero trust architecture is transforming enterprise security postures and why it matters for your organization.',
      category: 'strategy',
      author: 'David Wilson',
      date: 'October 15, 2023',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      comments: 24
    },
    {
      id: 2,
      title: 'Securing Cloud Environments: Best Practices for 2023',
      excerpt: 'Essential security measures every organization should implement to protect their cloud infrastructure.',
      category: 'cloud',
      author: 'Emily Rodriguez',
      date: 'October 10, 2023',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      comments: 18
    },
    {
      id: 3,
      title: 'AI in Cybersecurity: Friend or Foe?',
      excerpt: 'Exploring the dual role of artificial intelligence in both defending against and enabling cyber attacks.',
      category: 'ai',
      author: 'James Chen',
      date: 'October 5, 2023',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      comments: 32
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-title">
          <h2>Security Insights Blog</h2>
          <p>Expert perspectives on the latest cybersecurity trends and challenges</p>
        </div>
        
        <div className="blog-categories">
          <button 
            className={activeCategory === 'all' ? 'active' : ''} 
            onClick={() => setActiveCategory('all')}
          >
            All Posts
          </button>
          <button 
            className={activeCategory === 'strategy' ? 'active' : ''} 
            onClick={() => setActiveCategory('strategy')}
          >
            Security Strategy
          </button>
          <button 
            className={activeCategory === 'cloud' ? 'active' : ''} 
            onClick={() => setActiveCategory('cloud')}
          >
            Cloud Security
          </button>
          <button 
            className={activeCategory === 'ai' ? 'active' : ''} 
            onClick={() => setActiveCategory('ai')}
          >
            AI & Security
          </button>
        </div>
        
        <div className="blog-grid">
          {filteredPosts.map(post => (
            <div className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <i className="fas fa-user"></i> {post.author}
                  </div>
                  <div className="blog-date">
                    <i className="fas fa-calendar-alt"></i> {post.date}
                  </div>
                  <div className="blog-comments">
                    <i className="fas fa-comments"></i> {post.comments}
                  </div>
                </div>
                <a href="#" className="blog-read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              
              {/* Interactive Comment Section */}
              <div className="blog-interaction">
                <div className="interaction-buttons">
                  <button className="like-button">
                    <i className="far fa-thumbs-up"></i> Like
                  </button>
                  <button className="share-button">
                    <i className="fas fa-share"></i> Share
                  </button>
                  <button className="comment-button">
                    <i className="far fa-comment"></i> Comment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-cta">
          <a href="#" className="btn">View All Articles</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
