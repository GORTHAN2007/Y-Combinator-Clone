import "../../styles/FoundersComments.css";

import Img1 from "../../assets/FoundersComments/FounderImg1.jpg";
import Img2 from "../../assets/FoundersComments/FounderImg2.jpg";
import Img3 from "../../assets/FoundersComments/FounderImg3.jpg";
import Img4 from "../../assets/FoundersComments/FounderImg4.jpg";
import Img5 from "../../assets/FoundersComments/FounderImg5.jpg";

function FoundersComments() {
  const images = [Img1, Img2, Img3, Img4, Img5];

  return (
    <section className="founders-comments-section">
      
      <div className="image-strip">
        {images.map((img, i) => (
          <div className="img-box" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      <div className="comments-wrapper">
        <p className="small-title">IN FOUNDERS’ WORDS</p>

        <p className="comment-text">
          YC compresses months of growth into weeks. The sense of urgency is so infectious among founders that it becomes the most productive period in most people's lives. It's a community of founders that you can't find anywhere else. It feels like having the entire world at your back—from Partners to batchmates. Being surrounded by the top 1% of founders in the world just completely resets the bar. You leave with a completely new sense of how fast 'fast' can be.
        </p>
      </div>

    </section>
  );
}

export default FoundersComments;