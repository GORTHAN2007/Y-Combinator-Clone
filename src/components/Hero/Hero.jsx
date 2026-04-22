import React from "react";
import "../../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        <h1 className="hero-title">
          YC turns builders <br />into
          <em> formidable founders</em>
        </h1>

        <p className="hero-quote">
          [1] “A formidable person is one who seems like they'll get what they want,
          regardless of whatever obstacles are in the way.”
        </p>

        <p className="hero-author">— Paul Graham</p>

      </div>
    </section>
  );
}