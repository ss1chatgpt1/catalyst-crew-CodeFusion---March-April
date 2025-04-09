import { useState } from 'react';
import '../styles/Resources.css';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('whitepapers');
  
  const resources = {
    whitepapers: [
      {
        id: 1,
        title: 'Enterprise Security Architecture for Zero Trust',
        description: 'A comprehensive guide to implementing zero trust security models in enterprise environments.',
        fileSize: '3.2 MB',
        fileType: 'PDF',
        downloadCount: 1245
      },
      {
        id: 2,
        title: 'AI-Powered Threat Detection: The Future of Cybersecurity',
        description: 'How artificial intelligence is transforming threat detection and response capabilities.',
        fileSize: '2.8 MB',
        fileType: 'PDF',
        downloadCount: 987
      },
      {
        id: 3,
        title: 'Securing Multi-Cloud Environments: Best Practices',
        description: 'Essential strategies for maintaining security across diverse cloud infrastructures.',
        fileSize: '4.1 MB',
        fileType: 'PDF',
        downloadCount: 756
      }
    ],
    brochures: [
      {
        id: 1,
        title: 'Cyber Catalyst Enterprise Security Solutions',
        description: 'Overview of our comprehensive enterprise security services and solutions.',
        fileSize: '1.5 MB',
        fileType: 'PDF',
        downloadCount: 2341
      },
      {
        id: 2,
        title: 'Security Operations Center as a Service',
        description: 'How our 24/7 SOC services can protect your organization from evolving threats.',
        fileSize: '1.8 MB',
        fileType: 'PDF',
        downloadCount: 1532
      }
    ],
    knowledge: [
      {
        id: 1,
        title: 'OWASP Top 10 Web Application Security Risks',
        description: 'Detailed analysis of the most critical web application security risks according to OWASP.',
        link: '#'
      },
      {
        id: 2,
        title: 'Common Vulnerability Scoring System (CVSS) Guide',
        description: 'Understanding how vulnerabilities are scored and prioritized for remediation.',
        link: '#'
      },
      {
        id: 3,
        title: 'Incident Response Playbook',
        description: 'Step-by-step guide for responding to common security incidents effectively.',
        link: '#'
      },
      {
        id: 4,
        title: 'Security Compliance Framework Comparison',
        description: 'Comparing major security frameworks including ISO 27001, NIST, and SOC 2.',
        link: '#'
      }
    ]
  };

  return (
    <section id="resources" className="resources">
      <div className="container">
        <div className="section-title">
          <h2>Resource Center</h2>
          <p>Access our library of security resources, guides, and documentation</p>
        </div>
        
        <div className="resources-tabs">
          <button 
            className={activeTab === 'whitepapers' ? 'active' : ''} 
            onClick={() => setActiveTab('whitepapers')}
          >
            <i className="fas fa-file-alt"></i> Whitepapers
          </button>
          <button 
            className={activeTab === 'brochures' ? 'active' : ''} 
            onClick={() => setActiveTab('brochures')}
          >
            <i className="fas fa-book"></i> Brochures
          </button>
          <button 
            className={activeTab === 'knowledge' ? 'active' : ''} 
            onClick={() => setActiveTab('knowledge')}
          >
            <i className="fas fa-graduation-cap"></i> Knowledge Base
          </button>
        </div>
        
        <div className="resources-content">
          {activeTab === 'whitepapers' && (
            <div className="resources-grid">
              {resources.whitepapers.map(item => (
                <div className="resource-card" key={item.id}>
                  <div className="resource-icon">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <div className="resource-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="resource-meta">
                      <span><i className="fas fa-file"></i> {item.fileType}</span>
                      <span><i className="fas fa-weight"></i> {item.fileSize}</span>
                      <span><i className="fas fa-download"></i> {item.downloadCount}</span>
                    </div>
                  </div>
                  <a href="#" className="resource-download">
                    <i className="fas fa-download"></i> Download
                  </a>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'brochures' && (
            <div className="resources-grid">
              {resources.brochures.map(item => (
                <div className="resource-card" key={item.id}>
                  <div className="resource-icon">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <div className="resource-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="resource-meta">
                      <span><i className="fas fa-file"></i> {item.fileType}</span>
                      <span><i className="fas fa-weight"></i> {item.fileSize}</span>
                      <span><i className="fas fa-download"></i> {item.downloadCount}</span>
                    </div>
                  </div>
                  <a href="#" className="resource-download">
                    <i className="fas fa-download"></i> Download
                  </a>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'knowledge' && (
            <div className="knowledge-base">
              {resources.knowledge.map(item => (
                <div className="knowledge-item" key={item.id}>
                  <div className="knowledge-icon">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <div className="knowledge-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <a href={item.link} className="knowledge-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              ))}
              
              <div className="knowledge-search">
                <h3>Looking for something specific?</h3>
                <div className="search-box">
                  <input type="text" placeholder="Search knowledge base..." />
                  <button><i className="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resources;
