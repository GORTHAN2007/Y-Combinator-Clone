import '../../styles/FoundersGrid.css';

import img1 from '../../assets/FoundersGrid/1.jpg';
import img2 from '../../assets/FoundersGrid/2.jpg';
import img3 from '../../assets/FoundersGrid/3.jpg';
import img4 from '../../assets/FoundersGrid/4.jpg';
import img5 from '../../assets/FoundersGrid/5.jpg';
import img6 from '../../assets/FoundersGrid/6.jpg';

const founders = [
    { id: 1, name: 'Brian Chesky', company: 'Airbnb', img: img1 },
    { id: 2, name: 'Sam Altman', company: 'OpenAI', img: img2 },
    { id: 3, name: 'Greg Brockman', company: 'OpenAI', img: img3 },
    { id: 4, name: 'Micheal Truell', company: 'Cursor', img: img4 },
    { id: 5, name: 'Paul Graham', company: 'Y Combinator', img: img5 },
    { id: 6, name: 'Guillermo Rauch', company: 'Vercel', img: img6 },
];

function FoundersGrid() {
    return (
        <section className="founders-section">
            <h2 className="founders-heading">
                <em>Be in the room with ...</em>
            </h2>
            <div className="founders-grid">
                {founders.map((founder) => (
                    <div key={founder.id} className="founder-card">
                        <img src={founder.img} alt={founder.name} className="founder-img" />
                        <div className="founder-overlay">
                            <h3 className="founder-name">{founder.name}</h3>
                            <p className="founder-company">{founder.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FoundersGrid;