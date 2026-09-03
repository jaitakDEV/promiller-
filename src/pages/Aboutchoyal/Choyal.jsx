import { useState } from "react";
import "./Choyal.css";

import start from "../../assets/about1.webp";
import vishwakarma from "../../assets/about2.webp";
import emerystone from "../../assets/emerystone.png";
import start1 from "../../assets/about4.webp";
import automation from "../../assets/2010.png";
import wm from "../../assets/WonderMill.webp";
import eleven from "../../assets/about7.webp";
import thirteen from "../../assets/emerystonedresser.png";
import eighteen from "../../assets/2018.webp";
import twentyone from "../../assets/2021.webp";
import twentyfive from "../../assets/about11.webp";
import twentysix from "../../assets/2026.jpg";

export default function Choyal() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timeline = [
    {
      year: "1951",
      title: "Foundation of Choyal Group",
      text: "B.M. Choyal along with R.D. Sharma lays the foundation of our legacy by starting the company with a vision to revolutionize the grain milling industry in India.",
      image: start,
    },
    {
      year: "1965",
      title: "Our Journey Begins",
      text: "The company is formally incorporated as Shri Vishvakarma Industries, marking the beginning of industrial excellence and innovation.",
      image: vishwakarma,
    },
    {
      year: "1970",
      title: "International Outreach",
      text: "We became the first company from India in the grain milling sector to export emery stone globally, earning recognition for excellence in exports.",
      image: emerystone,
    },
    {
      year: "1978",
      title: "First Manufacturing Unit",
      text: "Our first factory unit was established at Saradhana, Ajmer under SVIPL, marking a major milestone in industrial growth.",
      image: start1,
    },
    {
      year: "2000",
      title: "Automation Era Begins",
      text: "Launch of automated modeling workshop, enhancing precision, consistency, and efficiency in production systems.",
      image: automation,
    },
    {
      year: "2010",
      title: "Digital Flour Mill Innovation",
      text: "Development of the world's first fully automatic digital stone mill, revolutionizing traditional milling technology.",
      image: wm,
    },
    {
      year: "2011",
      title: "Turnkey Solutions Expansion",
      text: "Introduction of complete turnkey solutions with successful delivery of 250+ projects worldwide.",
      image: eleven,
    },
    {
      year: "2013",
      title: "Patented Engineering Solutions",
      text: "Launch of patented emery stone dressing machine, improving maintenance efficiency and industrial performance.",
      image: thirteen,
    },
    {
      year: "2018",
      title: "Diversification Phase",
      text: "Expansion into the grocery sector, strengthening business understanding and market adaptability.",
      image: eighteen,
    },
    {
      year: "2021",
      title: "Smart Technology Innovation",
      text: "Introduction of world's first digital fresh flour grinding machine powered by smart automation.",
      image: twentyone,
    },
    {
      year: "2025",
      title: "New Era Begins",
      text: "Choyal legacy evolves into independent entities including Choyal Grinding Solutions Pvt. Ltd., focusing on advanced grinding technologies.",
      image: twentyfive,
    },
    {
      year: "2026",
      title: "Promiller Launched",
      text: "A next-generation milling ecosystem by R.S. Choyal Group, empowering flour mills with smart automation, advanced engineering, and intelligent management for greater efficiency, lower costs, and sustainable growth.",
      image: twentysix,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? timeline.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === timeline.length - 1 ? 0 : prev + 1));
  };

  const activeItem = timeline[activeIndex];

  return (
    <div className="journey-slider-section">
      <div className="journey-about-section">
        <div className="journey-about-container">
          <div className="journey-about-content">
            <span className="journey-stage__subtitle">ABOUT</span>

            <h2 className="journey-about-title">RS Choyal Group</h2>

            <p className="journey-about-text">
              RS Choyal Group is a 60-year-old name in flour milling technology,
              known for turning traditional chakki milling into a modern,
              efficient, and scalable operation. Through advanced engineering
              and patented technologies, the group has completed 275+ turnkey
              projects and 1200+ digital mill installations for clients
              including Patanjali, ITC, and India Gate, with exports to 25+
              countries. Mavian ProMiller is the group's next step — bringing
              that six-decade engineering legacy directly to individual mill
              owners through a zero-investment modernization model.
              <br />
              <br/>
              <a
                href=" https://www.rschoyalgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="director-btn"
              >
                Know More 
              </a>
            </p>
          </div>

          <div className="journey-about-image">
            <img src={twentyfive} alt="RS Choyal Group Factory" />
          </div>
        </div>
      </div>
      <div className="journey-slider-container">
        <div className="journey-stage">
          <div className="journey-stage__content">
            <span className="journey-stage__subtitle">OUR JOURNEY</span>
            <h1 className="journey-stage__year-big">{activeItem.year}</h1>
            <h2 className="journey-stage__title">{activeItem.title}</h2>
            <p className="journey-stage__desc">{activeItem.text}</p>
          </div>

          <div className="journey-stage__media">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="journey-stage__free-image"
            />
          </div>
        </div>

        <div className="journey-controls-row">
          <div className="journey-timeline-track">
            <div className="track-line-bg"></div>

            <div className="track-nodes-container">
              {timeline.map((item, idx) => (
                <div
                  key={item.year}
                  className={`timeline-tick-wrapper ${idx === activeIndex ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="timeline-year-label">{item.year}</span>
                  <div className="timeline-tick-mark"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="journey-nav-arrows">
            <button className="nav-arrow prev" onClick={handlePrev}>
              &#10094;
            </button>
            <button className="nav-arrow next" onClick={handleNext}>
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
