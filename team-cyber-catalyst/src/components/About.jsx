import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-bg"></div>
            </div>
          </div>

          <div className="about-text">
            <h2>About <span className="text-gradient">Cyber Catalyst</span></h2>
            <p>
              At Cyber Catalyst, we're on a mission to accelerate your digital defense capabilities.
              We combine cutting-edge AI technology with human expertise to provide enterprise-grade
              security solutions that stay ahead of evolving cyber threats in today's rapidly changing landscape.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="feature-text">
                  <h4>AI-Powered Security</h4>
                  <p>Our intelligent systems continuously learn and adapt to new threats in real-time.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="feature-text">
                  <h4>Enterprise-Grade Solutions</h4>
                  <p>Scalable security architecture designed for businesses of all sizes with zero compromise.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-check"></i>
                </div>
                <div className="feature-text">
                  <h4>Seamless Integration</h4>
                  <p>Our solutions integrate effortlessly with your existing infrastructure and workflows.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
