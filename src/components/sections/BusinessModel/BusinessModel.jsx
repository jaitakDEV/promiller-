import React, { useState, useEffect, useRef } from "react";
import "./BusinessModel.css";

const orbitItems = [
  {
    id: 1,
    title: "Revenue Sharing",
    desc: "From additional production",
    color: "#22c55e",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Shared Benefits",
    desc: "From power efficiency",
    color: "#3b82f6",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Ongoing Service",
    desc: "& maintenance support (AMC)",
    color: "#ef4444",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Digital Monitoring",
    desc: "Performance tracking (SaaS)",
    color: "#f59e0b",
    icon: (
      <svg
        width="18"     
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const SPEED = 0.3;

const getOrbitRadius = () => {
  const width = window.innerWidth;

  if (width <= 360) return 95;
  if (width <= 480) return 110;
  if (width <= 768) return 130;
  if (width <= 1024) return 160;

  return 200;
};

export default function BusinessModel() {
  const angleRef = useRef(0);
  const rafRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [positions, setPositions] = useState([]);
  const [orbitRadius, setOrbitRadius] = useState(getOrbitRadius());

  useEffect(() => {
    const handleResize = () => {
      setOrbitRadius(getOrbitRadius());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const count = orbitItems.length;

    const animate = () => {
      if (paused) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      angleRef.current = (angleRef.current + SPEED) % 360;

      const angle = angleRef.current;

      const pts = orbitItems.map((item, index) => {
        const deg = (360 / count) * index + angle;
        const rad = (deg * Math.PI) / 180;

        return {
          ...item,
          x: Math.cos(rad) * orbitRadius,
          y: Math.sin(rad) * orbitRadius,
          deg: ((deg % 360) + 360) % 360,
        };
      });

      setPositions(pts);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, orbitRadius]);

  const containerSize = (orbitRadius + 160) * 2;

  return (
    <div className="orbit-page-wrapper">
      <div className="orbit-heading-section">
        <h1 className="orbit-main-title">
          Our Business Model
        </h1>

        <p className="orbit-tagline">
          A cyclical framework engineered for shared value and sustainable
          scaling
        </p>
      </div>

      <div
        className="orbit-system-container"
        style={{
          width: containerSize,
          // height: containerSize,
        }}
      >
        <div
          className="orbit-track-ring"
          style={{
            width: orbitRadius * 2,
            height: orbitRadius * 2,
          }}
        />

        <svg
          className={`center-bolt-svg ${paused ? "paused" : ""}`}
          width="48"
          height="70"
          viewBox="0 0 44 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="26,2 4,36 20,36 18,62 40,28 24,28"
            fill="#004D2C"
            stroke="#004D2C"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
                {positions.map((item) => {
          const depthScale =
            0.85 +
            0.3 *
              ((Math.sin(((item.deg - 90) * Math.PI) / 180) + 1) / 2);

          return (
            <div
              key={item.id}
              className="orbiting-node-wrapper"
              style={{
                transform: `translate(calc(-50% + ${item.x}px), calc(-50% + ${item.y}px)) scale(${depthScale})`,
                zIndex: Math.round(depthScale * 10),
              }}
            >
              <div
                className="orbit-item-capsule"
                style={{
                  opacity: 0.45 + depthScale * 0.3,
                }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div
                  className="item-icon-circle"
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <div className="item-text-stack">
                  <span className="item-text-title">
                    {item.title}
                  </span>

                  <span className="item-text-desc">
                    {item.desc}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}