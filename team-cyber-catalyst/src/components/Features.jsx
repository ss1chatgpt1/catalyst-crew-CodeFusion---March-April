import '../styles/Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          <h2>Our Security Solutions</h2>
          <p>Comprehensive protection for your digital infrastructure</p>
        </div>
        
        <div className="features-content">
          <div className="features-tabs">
            <div className="tabs-container">
              <div className="tab active">
                <div className="tab-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="tab-content">
                  <h3>Network Protection</h3>
                  <p>Secure your entire network infrastructure</p>
                </div>
              </div>
              
              <div className="tab">
                <div className="tab-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="tab-content">
                  <h3>Data Encryption</h3>
                  <p>Keep your sensitive data protected</p>
                </div>
              </div>
              
              <div className="tab">
                <div className="tab-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
                <div className="tab-content">
                  <h3>Identity Security</h3>
                  <p>Manage access to your systems securely</p>
                </div>
              </div>
              
              <div className="tab">
                <div className="tab-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="tab-content">
                  <h3>Endpoint Security</h3>
                  <p>Protect all devices in your network</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="features-details">
            <div className="feature-detail active">
              <h3>Advanced Network Protection</h3>
              <p>
                Our comprehensive network security solutions provide robust protection against 
                external threats and unauthorized access attempts. We implement multiple layers 
                of security to ensure your network remains secure at all times.
              </p>
              
              <ul className="feature-list">
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Firewall Configuration and Management</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Intrusion Detection and Prevention</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>VPN Implementation for Secure Remote Access</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Network Traffic Monitoring and Analysis</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>DDoS Attack Protection</span>
                </li>
              </ul>
              
              <a href="#contact" className="btn">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
