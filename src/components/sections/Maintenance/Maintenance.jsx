import React from "react";
import "./Maintenance.css";

const CARDS = [
  {
    icon: "📈",
    title: "Wear Trend Detection",
    text: "Vibration and temperature drift is flagged weeks before it becomes a failure.",
  },
  {
    icon: "🛠️",
    title: "Auto-Scheduled Service",
    text: "Maintenance windows are suggested during your lowest-demand hours automatically.",
  },
  {
    icon: "🧩",
    title: "Spare Parts Alerts",
    text: "Get notified to reorder rollers, belts and bearings before stock runs out.",
  },
  {
    icon: "📜",
    title: "Full Service History",
    text: "Every repair, part swap and technician visit logged against each machine.",
  },
  {
    icon: "🎯",
    title: "Machine Health Score",
    text: "A single 0–100 score per unit, so you know at a glance what needs attention first.",
  },
  {
    icon: "⏳",
    title: "Downtime Reduced ~28%",
    text: "Average across mills that adopted predictive alerts over reactive repairs.",
  },
];

export default function Maintenance() {
  return (
    <section id="maintenance">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">Fewer Surprises</div>
          <h2>
            Catch Problems
            <span className="grad"> Before They Cost You a Shift</span>
          </h2>
          <p>
            ProMiller watches wear patterns quietly in the background, so
            breakdowns stop feeling sudden.
          </p>
        </div>

        <div className="integ-grid">
          {CARDS.map((card) => (
            <div className="integ-card" key={card.title}>
              <div className="integ-icon">{card.icon}</div>
              <div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
