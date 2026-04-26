import React, { useState, useEffect, useRef } from 'react';
import '../../styles/CompanyShowcase.css';

import openaiBefore from '../../assets/JourneySection/OpenAI/before.png';
import openaiAfter from '../../assets/JourneySection/OpenAI/after.png';
import airbnbBefore from '../../assets/JourneySection/Airbnb/before.jpg';
import airbnbAfter from '../../assets/JourneySection/Airbnb/after.png';
import stripeBefore from '../../assets/JourneySection/Stripe/before.png';
import stripeAfter from '../../assets/JourneySection/Stripe/after.png';
import coinbaseBefore from '../../assets/JourneySection/CoinBase/before.png';
import coinbaseAfter from '../../assets/JourneySection/CoinBase/after.png';
import doordashBefore from '../../assets/JourneySection/DoorDash/before.png';
import doordashAfter from '../../assets/JourneySection/DoorDash/after.png';
import scaleaiBefore from '../../assets/JourneySection/ScaleAI/scale.png';
import scaleaiAfter from '../../assets/JourneySection/ScaleAI/after.png';
import dropboxBefore from '../../assets/JourneySection/DropBox/before.png';
import dropboxAfter from '../../assets/JourneySection/DropBox/after.png';
import leftGrid from '../../assets/JourneySection/CompanyList/left.png';
import rightGrid from '../../assets/JourneySection/CompanyList/right.png';

const companies = [
  {
    id: 'openai',
    name: 'OpenAI',
    beforeText: "Sam was part of YCs inaugural batch in S05 and founded OpenAl as YC Research in 2015.",
    afterText: 'Sam built OpenAI into a $500B company.',
    beforeImage: openaiBefore, 
    afterImage: openaiAfter,
  },
  {
    id: 'airbnb',
    name: 'Airbnb',
    beforeText: 'Brian, Joe and Nate did YC in W09.',
    afterText: 'Airbnb went public in 2020 at an over $100B valuation.',
    beforeImage: airbnbBefore,
    afterImage: airbnbAfter,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    beforeText: 'The Collison brothers did YC twice-first in WO7 and then in S09, wh they started Stripe.',
    afterText: "Stripe is now the internet's $107B payments backbone.",
    beforeImage: stripeBefore,
    afterImage: stripeAfter,
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    beforeText: 'Fred and Brian met on Reddit and did YC in S12.',
    afterText: 'Coinbase went public in 2021 at a $86B valuation.',
    beforeImage: coinbaseBefore,
    afterImage: coinbaseAfter,
  },
  {
    id: 'doordash',
    name: 'DoorDash',
    beforeText: 'Andy, Stanley, Tony, and Evan did YC in S13.',
    afterText: 'DoorDash went public in 2020 at a valuation of $39B.',
    beforeImage: doordashBefore,
    afterImage: doordashAfter,
  },
  {
    id: 'scaleai',
    name: 'Scale AI',
    beforeText: 'Alexandr and Lucy did YC S16 and pivoted during the batch.',
    afterText: 'In 2025, Meta acquired 49% of Scale for over $14B.',
    beforeImage: scaleaiBefore,
    afterImage: scaleaiAfter,
  },
  {
    id: 'dropbox',
    name: 'DropBox',
    beforeText: 'Arash and Drew started Dropbox at MIT and did YC in S07.',
    afterText: 'Dropbox had the biggest tech IPO of 2018 at a $9B valuation.',
    beforeImage: dropboxBefore,
    afterImage: dropboxAfter,
  }
];

export default function CompanyShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.company-name-item, .valuation-stat');
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
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="company-showcase" ref={scrollRef}>
      <div className="showcase-content">
        
        <div className="side-column before-column">
          <h3 className={`column-title ${activeIndex === companies.length ? 'hidden' : ''}`}>During YC</h3>
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
            <div 
              className={`image-card ${companies.length === activeIndex ? 'active' : ''}`}
              style={{ zIndex: companies.length === activeIndex ? 10 : 1 }}
            >
              <img src={leftGrid} alt="YC companies grid left" style={{ objectFit: 'contain', backgroundColor: 'transparent', boxShadow: 'none' }} />
            </div>
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
          <h3 className={`column-title ${activeIndex === companies.length ? 'hidden' : ''}`}>Now</h3>
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
            <div 
              className={`image-card ${companies.length === activeIndex ? 'active' : ''}`}
              style={{ zIndex: companies.length === activeIndex ? 10 : 1 }}
            >
              <img src={rightGrid} alt="YC companies grid right" style={{ objectFit: 'contain', backgroundColor: 'transparent', boxShadow: 'none' }} />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
