import React from "react";
import { useInView } from "react-intersection-observer";
import "./HowItWorks.css";

// Import your asset images here
import WonderMillImg from "../../../assets/wonder.webp";
import FlouraImg from "../../../assets/WonderMill.webp";
import AttaImg from "../../../assets/atta.webp";
import PowerImg from "../../../assets/new.png";
import GrowthImg from "../../../assets/growth.webp";

const steps = [
  { id: 1, title: "Mill", img: WonderMillImg },
  { id: 2, title: "Technology Upgrade", img: FlouraImg },
  { id: 3, title: "Higher Output", img: AttaImg },
  { id: 4, title: "Lower Power Cost", img: PowerImg },
  { id: 5, title: "Shared Growth", img: GrowthImg },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({
    triggerOnce:true,
    threshold: 0.15,
  });

  return (
    <section className="process-section" ref={ref}>
      <div className="process-header">
        <h2>From Grain to Growth: How It Works</h2>
        <p className="subtitle">
          Smarter Milling. Lower Energy. Higher Values.
        </p>
      </div>

      <div className={`process-container ${inView ? "is-visible" : ""}`}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="process-step">
              <div className="image-wrapper">
                <img src={step.img} alt={step.title} className="step-img" />
              </div>
              <div className="step-card">
                <h3>{step.title}</h3>
              </div>
            </div>
            {/* Changed from <div> to <span /> so it doesn't break nth-of-type(div) layout sequences */}
            {index < steps.length - 1 && <span className="process-arrow">➔</span>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
