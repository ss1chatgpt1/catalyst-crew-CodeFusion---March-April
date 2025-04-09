import { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      position: 'CTO, Tech Solutions Inc.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Securex has transformed our approach to cybersecurity. Their team provided us with a comprehensive security assessment and implemented solutions that have significantly reduced our vulnerability to cyber threats.'
    },
    {
      name: 'Sarah Johnson',
      position: 'CEO, Digital Innovations',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'We\'ve been working with Securex for over three years now, and their service has been exceptional. Their proactive approach to security has helped us stay ahead of potential threats and maintain our customers\' trust.'
    },
    {
      name: 'Michael Chen',
      position: 'IT Director, Global Finance',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      text: 'In the financial sector, security is paramount. Securex understood our unique challenges and delivered tailored solutions that meet our strict compliance requirements while ensuring our systems remain secure.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>Trusted by businesses worldwide</p>
        </div>
        
        <div className="testimonials-slider">
          <div className="testimonials-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item" key={index}>
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
