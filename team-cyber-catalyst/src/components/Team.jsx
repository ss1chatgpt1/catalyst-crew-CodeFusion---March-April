import '../styles/Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'David Wilson',
      position: 'Chief Security Officer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Emily Rodriguez',
      position: 'Network Security Specialist',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'James Chen',
      position: 'Cybersecurity Analyst',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Sophia Kim',
      position: 'Data Protection Expert',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <h2>Our Expert Team</h2>
          <p>Meet the security professionals who protect your business</p>
        </div>
        
        <div className="team-grid grid grid-4">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-social">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
