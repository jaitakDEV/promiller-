import Operationsflow from "../../components/sections/Operationsflow/Operationsflow";
import "./Operations.css";
import image1 from "../../assets/automation mill control.png"
import image2 from "../../assets/live monitoring.png"
import image3 from "../../assets/automation mill control.png"
import image4 from "../../assets/automation tools.png"

export default function Operations() {

  const cards = [
    {
      title: "Remote Mill Control",
      image: image1,
      desc: "Operate and monitor your mill from anywhere using your phone or tablet — start/stop control, live status, and remote diagnostics, so you're never tied to the mill floor."
    },
    {
      title: "Energy & Performance Monitoring",
      image: image2,
      desc: "Track live power consumption, running hours, and load in real time, with load-based optimization that automatically helps reduce your power cost per kg."
    },
    {
      title: "Safety & Alerts",
      image: image3,
      desc: "A three-step alarm → remedy → shutdown system protects your equipment. If one unit has an issue, it isolates automatically — the rest of the mill keeps running"
    },
    {
      title: "Automation Tools",
      image: image4,
      desc: "Set timers, run calibration checks, and let the system automatically adjust for stone wear — reducing manual oversight and labor dependency."
    }
  ];

  return (
    <>
      <section className="operations-hero">
      <Operationsflow />
      </section>

      <section className="operations-cards">
        <div className="card-header">
          <h2>Why Choose Promiller Operations</h2>
        </div>
     
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-click-hint">
  <span>Click here</span>
  <span className="click-arrow">↗</span>
</div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="operations-cta">
  <div className="cta-overlay">

    <h2>Unlock the Power of ProMiller</h2>

    <p>
      Access your ProMiller dashboard to manage your operations with speed, precision, and confidence.
    </p>

    <a
      href="https://rscg.statstream.app/authui/login "
      target="_blank"
      rel="noopener noreferrer"
      className="glass-btn"
    >
      Access Your Dashboard →
    </a>

  </div>
</section>
    </>
  );
}