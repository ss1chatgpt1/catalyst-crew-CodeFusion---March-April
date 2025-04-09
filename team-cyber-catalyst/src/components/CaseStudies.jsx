import { useState } from 'react';
import '../styles/CaseStudies.css';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  
  const caseStudies = [
    {
      id: 1,
      title: 'Global Financial Institution Secures Multi-Cloud Environment',
      client: 'Major International Bank',
      industry: 'Financial Services',
      challenge: 'A leading global bank with operations in 30+ countries needed to secure their complex multi-cloud environment while maintaining regulatory compliance across different jurisdictions.',
      solution: 'We implemented our Enterprise Cloud Security Platform with custom compliance modules for each region. The solution included automated security posture management, real-time threat detection, and a centralized dashboard for global security operations.',
      results: [
        '85% reduction in security incidents',
        '60% faster threat detection and response',
        'Achieved compliance across all regulatory frameworks',
        '$2.3M annual savings in security operations costs'
      ],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Healthcare Provider Prevents Ransomware Attack with AI-Powered Security',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      challenge: 'A healthcare network with 12 hospitals and 40+ clinics faced increasing ransomware threats targeting patient data and critical systems. Their legacy security infrastructure was unable to detect sophisticated attacks.',
      solution: 'We deployed our AI-Powered Threat Intelligence platform with specialized healthcare security modules. The solution included behavioral analysis, zero-day threat protection, and automated incident response capabilities.',
      results: [
        'Successfully blocked 3 major ransomware attempts',
        '94% reduction in false positive alerts',
        'Improved threat detection speed by 75%',
        'Maintained 100% uptime for critical patient systems'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <div className="section-title">
          <h2>Success Stories</h2>
          <p>Real-world security transformations for enterprise organizations</p>
        </div>
        
        <div className="case-studies-container">
          <div className="case-tabs">
            {caseStudies.map((caseStudy, index) => (
              <div 
                key={caseStudy.id}
                className={`case-tab ${activeCase === index ? 'active' : ''}`}
                onClick={() => setActiveCase(index)}
              >
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.industry}</p>
              </div>
            ))}
          </div>
          
          <div className="case-content">
            <div className="case-image">
              <img src={caseStudies[activeCase].image} alt={caseStudies[activeCase].title} />
            </div>
            
            <div className="case-details">
              <div className="case-header">
                <h3>{caseStudies[activeCase].title}</h3>
                <div className="case-meta">
                  <span><strong>Client:</strong> {caseStudies[activeCase].client}</span>
                  <span><strong>Industry:</strong> {caseStudies[activeCase].industry}</span>
                </div>
              </div>
              
              <div className="case-section">
                <h4>The Challenge</h4>
                <p>{caseStudies[activeCase].challenge}</p>
              </div>
              
              <div className="case-section">
                <h4>Our Solution</h4>
                <p>{caseStudies[activeCase].solution}</p>
              </div>
              
              <div className="case-section">
                <h4>Results</h4>
                <ul className="case-results">
                  {caseStudies[activeCase].results.map((result, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a href="#contact" className="btn">Discuss Your Security Challenges</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
