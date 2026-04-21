import React, { useState, useEffect, useRef } from 'react';
import './CompanyShowcase.css';

const companies = [
  {
    id: 'reddit',
    name: 'Reddit',
    beforeText: 'Steve and Alexis did YC in S05.',
    afterText: 'Reddit went public in 2024 at a $6.4B valuation.',
    beforeImage: '/replit_before.png', // Temporary placeholder until image limits allow
    afterImage: '/replit_after.png',   // Temporary placeholder until image limits allow
  },
  {
    id: 'instacart',
    name: 'Instacart',
    beforeText: 'Apoorva did YC in S12.',
    afterText: 'Instacart went public in 2023 at a $9.9B valuation.',
    beforeImage: '/replit_before.png',
    afterImage: '/replit_after.png',
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    beforeText: 'Sid and Dmytro did YC in S14.',
    afterText: 'GitLab went public in 2021 at an $11B valuation.',
    beforeImage: '/replit_before.png',
    afterImage: '/replit_after.png',
  },
  {
    id: 'kalshi',
    name: 'Kalshi',
    beforeText: 'Tarek and Luana did YC in W19.',
    afterText: 'Kalshi reached an $11B valuation in 2025.',
    beforeImage: '/replit_before.png',
    afterImage: '/replit_after.png',
  },
  {
    id: 'replit',
    name: 'Replit',
    beforeText: 'Haya and Amjad interviewing for the YC W18 batch.',
    afterText: 'Replit became a leading AI coding platform valued at over $9B.',
    beforeImage: '/replit_before.png', // The genuinely generated images
    afterImage: '/replit_after.png',
  },
  {
    id: 'twitch',
    name: 'Twitch',
    beforeText: 'Michael, Justin, Kyle, and Emmett in YC W07.',
    afterText: 'Twitch was acquired by Amazon for nearly $1B.',
    beforeImage: '/replit_before.png',
    afterImage: '/replit_after.png',
  }
];

export default function CompanyShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.company-name-item');
      if (items.length === 0) return;
      
      let closestIndex = 0;
      let minDistance = Infinity;
      
      const centerY = window.innerHeight / 2;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      
      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="company-showcase" ref={scrollRef}>
      <div className="showcase-content">
        
        <div className="side-column before-column">
          <h3 className="column-title">During YC</h3>
          <div className="image-stack">
            {companies.map((company, index) => (
              <div 
                key={`before-${company.id}`} 
                className={`image-card ${index === activeIndex ? 'active' : ''}`}
                style={{ zIndex: index === activeIndex ? 10 : 1 }}
              >
                <img src={company.beforeImage} alt={`${company.name} during YC`} />
                <p className="caption">{company.beforeText}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="center-column">
          <div className="company-names-list">
            {companies.map((company, index) => (
              <div 
                key={`name-${company.id}`} 
                className={`company-name-item ${index === activeIndex ? 'active' : ''}`}
              >
                {company.name}
              </div>
            ))}
          </div>
          
          <div className="valuation-stat">
            <h2 className="valuation-amount">$1.3 Trillion</h2>
            <p className="valuation-subtitle">in combined valuation</p>
            <a href="#" className="all-companies-link">All companies &gt;</a>
          </div>
        </div>

        <div className="side-column after-column">
          <h3 className="column-title">Now</h3>
          <div className="image-stack">
            {companies.map((company, index) => (
              <div 
                key={`after-${company.id}`} 
                className={`image-card ${index === activeIndex ? 'active' : ''}`}
                style={{ zIndex: index === activeIndex ? 10 : 1 }}
              >
                <img src={company.afterImage} alt={`${company.name} now`} />
                <p className="caption">{company.afterText}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
