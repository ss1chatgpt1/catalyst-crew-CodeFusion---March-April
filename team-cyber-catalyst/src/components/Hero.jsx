import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-particles"></div>
      <div className="container">
        <div className="hero-content">
          <h1>
            <span className="text-gradient">Cyber Catalyst</span>
          </h1>
          <p className="tagline">
            Accelerating Your Digital Defense
          </p>
          <p>
            Protect your digital assets with our comprehensive security services.
            We provide cutting-edge solutions to safeguard your business from cyber threats.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn">Get Started</a>
            <a href="#services" className="btn btn-outline">Our Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Clients Protected</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>Success Rate</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape"></div>
    </section>
  );
};

export default Hero;
