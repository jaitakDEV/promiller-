import { useState } from "react";
import "./Products.css";

import eligible from "../../../assets/new1.webp";
import upload from "../../../assets/upload.webp";
import approve from "../../../assets/new3.webp";
import install from "../../../assets/new4.webp";

const steps = [
  {
    id: 1,
    title: "Check Eligibility",
    image: eligible,
    description:
      "Verify whether your business qualifies for our industrial solutions. Our team evaluates your requirements and suggests the best system for your operations.",
  },
  {
    id: 2,
    title: "Upload Documents",
    image: upload,
    description:
      "Upload the required technical drawings, documents and specifications. Our experts review every submission carefully before moving ahead.",
  },
  {
    id: 3,
    title: "Get Approved",
    image: approve,
    description:
      "Once all documentation is complete, our engineers verify the project and prepare the implementation plan for installation.",
  },
  {
    id: 4,
    title: "System Installation",
    image: install,
    description:
      "Our experienced technicians install, configure and test the complete system ensuring smooth commissioning and operator training.",
  },
];

export default function ProcessTimeline() {
  const [hovered, setHovered] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <section className="process">
      <div className="container">
        <h2 className="process__title">Simple Steps to Get Started</h2>

        <p className="process__subtitle">
          Follow our streamlined process from eligibility verification to
          successful installation.
        </p>

        <div className="process__timeline">
          {steps.map((step, index) => {
            const isHovered = hovered === step.id;
            const isExpanded = expanded === step.id;

            // First two cards always open right
            // Last two cards always open left
            const sideClass = index < 2 ? "card-right" : "card-left";

            return (
              <div
                key={step.id}
                className={`process__step ${isHovered ? "process__step--hovered" : ""
                  } ${isExpanded ? "process__step--expanded" : ""}`}
                onMouseEnter={() => setHovered(step.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  if (window.innerWidth <= 1024) {
                    toggleCard(step.id);
                  }
                }}
              >
                {/* Timeline Number */}
                <div className="process__number">{step.id}</div>

                {/* Vertical Label */}
                <div className="process__label">{step.title}</div>

                {/* Hover / Expand Card */}
                <div
                  className={`process__hover-card ${sideClass} ${isExpanded ? "expanded" : ""
                    }`}
                >
                  {/* IMAGE */}
                  <div
                    className="process__card-image"
                    onClick={() => toggleCard(step.id)}
                  >
                    <img src={step.image} alt={step.title} />

                    {/* <div className="process__image-overlay">
                      <h4 className="vertical-text">{step.title}</h4>
                    </div> */}
                  </div>

                  {/* CONTENT */}
                  {isExpanded && (
                    <div className="process__card-content">
                      <button
                        className="process__close"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpanded(null);
                        }}
                      >
                        &times;
                      </button>

                      <h3>{step.title}</h3>

                      <p>{step.description}</p>

                      {/* <div className="process__card-links">
                        <a href="/">→ Learn More</a>

                        <a href="/">→ Download Brochure</a>

                        <a href="/">→ Contact Expert</a>
                      </div> */}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="process-mobile">
  {steps.map((step) => (
    <div className="process-mobile-card" key={step.id}>

      <div className="mobile-step-number">
        {step.id}
      </div>

      <div className="mobile-card-image">
        <img src={step.image} alt={step.title}/>
      </div>

      <div className="mobile-card-content">
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>

    </div>
  ))}
</div>
      </div>
    </section>
  );
}
