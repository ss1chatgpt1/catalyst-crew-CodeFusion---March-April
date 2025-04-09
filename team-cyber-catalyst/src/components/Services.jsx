import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fa-robot',
      title: 'AI-Powered Threat Intelligence',
      description: 'Our AI systems analyze global threat data in real-time to predict and prevent attacks before they reach your network.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Enterprise Network Security',
      description: 'Advanced protection for complex enterprise networks with zero-trust architecture and continuous monitoring.'
    },
    {
      icon: 'fa-lock',
      title: 'Data Protection & Compliance',
      description: 'Comprehensive data security with encryption, DLP, and compliance automation for GDPR, HIPAA, and other regulations.'
    },
    {
      icon: 'fa-cloud-upload-alt',
      title: 'Secure Cloud Transformation',
      description: 'Securely migrate and manage multi-cloud environments with our cloud-native security platform and DevSecOps practices.'
    },
    {
      icon: 'fa-user-shield',
      title: 'Identity & Access Management',
      description: 'Enterprise IAM solutions with multi-factor authentication, SSO, and privileged access management for zero-trust security.'
    },
    {
      icon: 'fa-shield-virus',
      title: 'Security Operations Center',
      description: 'Our 24/7 SOC combines human expertise with AI to provide continuous monitoring, incident response, and threat hunting.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Enterprise Security Solutions</h2>
          <p>Advanced protection for modern organizations in a rapidly evolving threat landscape</p>
        </div>

        <div className="services-grid grid grid-3">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
