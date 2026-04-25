import '../../styles/Partners.css';

import garryAfter from '../../assets/PartnersGrid/GarryTan/after.webp';
import garryBefore from '../../assets/PartnersGrid/GarryTan/before.webp';
import harjAfter from '../../assets/PartnersGrid/HarjTaggar/after.jpeg';
import harjBefore from '../../assets/PartnersGrid/HarjTaggar/before.webp';
import jaredAfter from '../../assets/PartnersGrid/JaredFriedman/after.webp';
import jaredBefore from '../../assets/PartnersGrid/JaredFriedman/before.png';
import aaronAfter from '../../assets/PartnersGrid/AaronEpstein/after.jpeg';
import dianaAfter from '../../assets/PartnersGrid/DianaHu/after.jpg';
import gustafAfter from '../../assets/PartnersGrid/GustafAlstromer/after.jpeg';

const partners = [
    {
        id: 1,
        name: 'Garry Tan',
        company: 'Posterous, S08',
        description: 'Co-founder of Posterous (acquired by Twitter) and Initialized Capital. Early engineer at Palantir, designed company logo.',
        afterImg: garryAfter,
        beforeImg: garryBefore,
    },
    {
        id: 2,
        name: 'Harj Taggar',
        company: 'Auctomatic, W07',
        description: 'Co-founder and CEO of Triplebyte (acquired by Karat) and Auctomatic (acquired by Live Current Media). Graduated from Oxford.',
        afterImg: harjAfter,
        beforeImg: harjBefore,
    },
    {
        id: 3,
        name: 'Jared Friedman',
        company: 'Scribd, S06',
        description: 'Co-founder of Scribd, one of the top 100 sites on the web. Harvard CS dropout.',
        afterImg: jaredAfter,
        beforeImg: jaredBefore,
    },
    {
        id: 4,
        name: 'Aaron Epstein',
        company: 'Creative Market, W10',
        description: 'Co-founder of Creative Market, generating over $100M in sales for independent creators worldwide.',
        afterImg: aaronAfter,
        beforeImg: null,
    },
    {
        id: 5,
        name: 'Diana Hu',
        company: 'Escher Reality, S17',
        description: 'Co-founder and CTO of Escher Reality (acquired by Niantic). Shipped AR tech for Pokémon GO to 100M+ users and grew up in Chile.',
        afterImg: dianaAfter,
        beforeImg: null,
    },
    {
        id: 6,
        name: 'Gustaf Alströmer',
        company: 'Heysan, W07',
        description: 'Led Growth at Airbnb for 4.5 years. Co-founder of Heysan. Previously Head of Growth at Voxer.',
        afterImg: gustafAfter,
        beforeImg: null,
    }
];

function PartnersGrid() {
    return (
        <section className="partners-section">
            <h2 className="partners-heading">
                <em>All partners were YC founders first</em>
            </h2>
            <div className="partners-grid">
                {partners.map((partner) => (
                    <div key={partner.id} className="partner-card">
                        {partner.beforeImg ? (
                            <>
                                <img src={partner.afterImg} alt={`${partner.name} normally`} className="partner-img after-img" />
                                <img src={partner.beforeImg} alt={`${partner.name} before`} className="partner-img before-img" />
                            </>
                        ) : (
                            <img src={partner.afterImg} alt={partner.name} className="partner-img bw-hover" />
                        )}
                        <div className="partner-overlay">
                            <h3 className="partner-name">{partner.name}</h3>
                            <p className="partner-company">{partner.company}</p>
                            <p className="partner-description">{partner.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PartnersGrid;