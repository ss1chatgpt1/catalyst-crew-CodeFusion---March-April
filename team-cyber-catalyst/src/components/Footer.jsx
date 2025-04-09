import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content grid grid-4">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="/">
                  <span className="logo-text">Cyber Catalyst</span>
                </a>
              </div>
              <p>
                Providing advanced cyber security solutions to protect your business
                from evolving digital threats. Your security is our priority.
              </p>
              <div className="footer-social">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="footer-widget">
              <h3>Our Services</h3>
              <ul className="footer-links">
                <li><a href="#services">Network Security</a></li>
                <li><a href="#services">Data Protection</a></li>
                <li><a href="#services">Threat Detection</a></li>
                <li><a href="#services">Cloud Security</a></li>
                <li><a href="#services">Identity Management</a></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Solutions</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for the latest security updates and news.</p>
              <form className="footer-subscribe">
                <input type="email" placeholder="Your Email" required />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Cyber Catalyst. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
