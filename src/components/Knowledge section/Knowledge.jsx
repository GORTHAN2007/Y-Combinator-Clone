import "../../styles/Knowledge.css";

import LeftImg1 from "../../assets/knowledge&NewSection/LeftImg1.jpg";
import LeftImg2 from "../../assets/knowledge&NewSection/LeftImg2.jpg";
import LeftImg3 from "../../assets/knowledge&NewSection/LeftImg3.jpg";
import CenterImg from "../../assets/knowledge&NewSection/CenterImg.jpg";
import Strip1 from "../../assets/knowledge&NewSection/Strip1.jpg";
import Strip2 from "../../assets/knowledge&NewSection/Strip2.jpg";
import Strip3 from "../../assets/knowledge&NewSection/Strip3.jpg";
import Strip4 from "../../assets/knowledge&NewSection/Strip4.jpg";
import Strip5 from "../../assets/knowledge&NewSection/Strip5.jpg";

function Knowledge() {
  const leftData = [
    { img: LeftImg1, text: "Andrej Karpathy: Software Is Changing (Again)" },
    { img: LeftImg2, text: "How To Build The Future: Sam Altman" },
    { img: LeftImg3, text: "YC Partners Answer Your Questions" },
  ];

  const galleryImages = [
    "src/assets/knowledge&NewSection/Strip1.jpg", "src/assets/knowledge&NewSection/Strip2.jpg", "src/assets/knowledge&NewSection/Strip3.jpg", "src/assets/knowledge&NewSection/Strip4.jpg", "src/assets/knowledge&NewSection/Strip5.jpg", 
  ];

  return (
    <>
      <section className="knowledge-wrapper">
        <h1 className="knowledge-title">Knowledge & News</h1>

        <div className="knowledge-layout">
          <div className="left-col">
            {leftData.map((item, i) => (
              <div className="card" key={i}>
                <img src={item.img} alt="" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="center-col">
            <div className="hero-img-wrapper">
              <img src={CenterImg} alt="" />
              <div className="play-btn">▶</div>
            </div>

            <span className="tag">LIGHTCONE PODCAST</span>

            <h2>Billion-Dollar Unpopular Startup Ideas</h2>

            <p className="excerpt">
              Lightcone is a twice-monthly podcast where YC's Garry Tan,
              Diana Hu, Harj Taggar, and Jared Friedman talk about the newest
              tech and how it could change the world.
            </p>
          </div>

          <div className="right-col">
            <div className="block">
              <h4>Startup News</h4>
              <p>Announcing the YC AI Stack</p>
              <p>Emergent Raises $70M Series B</p>
              <p>Govdash Raises $30M Series B</p>
              <p>Fleetzero Raises $43M Series A</p>
              <p>Deepgram Raises $130M Series C</p>
            </div>

            <div className="block">
              <h4>Paul Graham Essays</h4>
              <p>Default Alive or Default Dead</p>
              <p>Do Things that Don't Scale</p>
              <p>Be Relentlessly Resourceful</p>
              <p>How to Get Startup Ideas</p>
              <p>Startup = Growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="apply-section">
        <h1 className="apply-title">It's never too early to apply.</h1>
        <p className="apply-sub">
          We fund companies with no revenue, product, or fully baked idea.
        </p>
        <button className="apply-btn">Apply</button>

        <div className="image-strip">
          {galleryImages.map((img, i) => (
            <div className="img-box" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Knowledge;