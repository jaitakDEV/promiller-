
import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

import heroVideo from "../../../assets/choyal.mp4";
import vloogo from "../../../assets/vloogo.webp";
import logo1 from "../../../assets/logo1.webp";
import factor from "../../../assets/factor.webp";

const STATS_DATA = [
  { target: 275, suffix: "+", label: "Turnkey Projects" },
  { target: 6, suffix: "+", label: "Patented Products" },
  { target: 25, suffix: "+", label: "Countries Covered" },
  { target: 42, suffix: "+", label: "Technologies" },
];

// COUNTER COMPONENT
function StatCounter({ target, suffix, label, animate }) {
  const [count, setCount] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!animate || done.current) return;

    done.current = true;

    const duration = 1800;
    const start = performance.now();

    const run = (t) => {
      const progress = Math.min((t - start) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(run);
      else setCount(target);
    };

    requestAnimationFrame(run);
  }, [animate, target]);

  return (
    <div className="hero__stat-col">
      <h2>
        {count}
        {suffix}
      </h2>
      <p>{label}</p>
    </div>
  );
}

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      {/* VIDEO */}
      <div className="hero__frame">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={factor}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* OVERLAY TEXT */}
        <div className="hero__overlay">
          {/* LOGOS */}
          <div className="hero__logo-wrapper">
            <img src={vloogo} alt="logo" className="logo-left" />
            <img src={logo1} alt="logo" className="logo-right" />
          </div>

          {/* CENTER CONTENT */}
          <div className="hero__content">
            <h1>
             <span className="text_1">FLOUR MILLING</span>{" "}
             <span className="text_2">WITHOUT</span>{" "}
             <span className="text_1">THE INVESTMENT</span>
             <br/>
              <span className="text_2">SAVING</span>{" "}
              <span className="text_1">WITHOUT</span>{" "} 
              <span className="text_2">THE HASSLE</span>
            </h1>

            <p>MARKET LEADING RANGE, QUALITY AND CHOICE</p>

            <button className="hero__btn">KNOW MORE</button>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="hero__stats" ref={ref}>
        {STATS_DATA.map((s, i) => (
          <StatCounter key={i} {...s} animate={animate} />
        ))}
      </div>
    </section>
  );
}
