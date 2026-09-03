import React from "react";
import "./AboutUs.css";

import wm from "../../../assets/promiller.webp";

const BENEFITS = [
  {
    title: "Production Capacity",
    desc: "Increase production capacity by up to 40% with optimized milling operations.",
    icon: "📈",
  },
  {
    title: "Lower Power Usage",
    desc: "Reduce electricity consumption through intelligent engineering.",
    icon: "⚡",
  },
  {
    title: "Smart Mill Management",
    desc: "Digitally manage production, inventory and operations from one platform.",
    icon: "🏭",
  },
  {
    title: "Revenue Sharing",
    desc: "Performance-driven business model aligned with your growth.",
    icon: "🤝",
  },
  {
    title: "Reduced Labour",
    desc: "Automate repetitive operations while improving overall productivity.",
    icon: "👨‍🏭",
  },
  {
    title: "Scalable Growth",
    desc: "Future-ready technology built to expand with your business.",
    icon: "🚀",
  },
];

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* ---------- TOP SECTION ---------- */}
        <div className="about-top">
          <div className="about-content">
            <h2 className="about-title">About Promiller</h2>

            <div className="about-title-line"></div>

            <p>
              <strong>ProMiller</strong> is a next-generation milling ecosystem
              developed by the <strong>R.S. Choyal Group</strong> to transform
              traditional flour mills into highly efficient, technology-driven
              operations.
            </p>

            <p>
              Combining advanced engineering, automation and intelligent mill
              management, ProMiller enables higher productivity, lower operating
              costs and sustainable long-term growth.
            </p>

            <a href="#blank" className="about-btn">
              Explore More
            </a>
          </div>
          <div className="about-image-wrapper">
            <img src={wm} alt="ProMiller" className="about-main-image" />
          </div>
        </div>

        {/* ---------- BENEFITS ---------- */}
        <div className="benefits-section">
          <div className="section-heading">
            <span>WHY PROMILLER</span>
            <h2>Everything Your Mill Needs to Grow</h2>
          </div>

          <div className="benefits-grid">
            {BENEFITS.map((item, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="about-cta">
          <div className="about-cta-content">
            <span className="cta-tag">
              READY TO MODERNIZE YOUR MILL?
            </span>
            <h2>
              Performance You Can Measure.
              <br />
              Growth You Can Sustain.
            </h2>
            <p>
              With decades of engineering expertise and a performance-driven
              business model, ProMiller helps flour mills improve efficiency,
              reduce operational costs and achieve long-term profitability.
            </p>
          </div>

          <div className="about-cta-right">
            <div className="cta-feature">
              <span className="feature-number">40%</span>
              <span className="feature-text">Higher Production</span>
            </div>

            <div className="cta-feature">
              <span className="feature-number">↓</span>
              <span className="feature-text">Lower Power Cost</span>
            </div>

            <div className="cta-feature">
              <span className="feature-number">✓</span>
              <span className="feature-text">Managed Performance</span>
            </div>

            <a href="#contact" className="cta-button">
              Talk to Our Experts →
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
