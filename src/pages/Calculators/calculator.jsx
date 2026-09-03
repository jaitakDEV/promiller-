import React, { useState } from "react";
import "./calculator.css";
import atta from "../../assets/jobgrinding_services.png";

export default function Calculators() {
  const [activeTab, setActiveTab] = useState("atta");

  const calculatorData = {
    atta: {
      title:
        "Know your real atta price — before the wheat reaches your chakki.",
      overview:
        "Atta pricing isn't just wheat cost. Between power bills, labour, bran recovery, stone wear, packaging, freight, and margin — a wrong calculation means you're selling at a loss without knowing it. The Atta Price Calculator puts every variable in one place, so you can price with confidence every single day.",

      quickFacts: [
        "30 Second Calculation",
        "Free to Use",
        "No Login Required",
        "Built for Flour Mills",
      ],

      button: "Launch Atta Calculator",
    },

    conveying: {
      title:
        "Right-size your conveyors and elevators. Stop overpaying for power you don't need.",

      overview:
        "Undersized conveyors bottleneck your production. Oversized ones waste power and capital. The Conveying Capacity Calculator solves both — enter your mill's throughput requirements and it outputs accurate motor sizing, belt/bucket specifications, and drive requirements for screw conveyors, belt conveyors, chain conveyors, and bucket elevators.",

      quickFacts: [
        "30 Second Calculation",
        "Free to Use",
        "No Login Required",
        "Built for Flour Mills",
      ],

      button: "Coming Soon",
    },

    power: {
      title:
        "See exactly how much power — and money — ProMiller technology puts back in your pocket.",

      overview:
        "Power is typically 40–55% of a flour mill's variable operating cost. WonderMill and iQuadra technology, combined with VFD-controlled drives and load-optimized operation, consistently deliver 25–40% power savings over conventional chakki systems. This calculator turns that claim into a number specific to your mill.",

      quickFacts: [
        "30 Second Calculation",
        "Free to Use",
        "No Login Required",
        "Built for Flour Mills",
      ],

      button: "Coming Soon",
    },
  };

  const data = calculatorData[activeTab];

  return (
    <div className="calculator-page">
      {/* ================= HERO ================= */}

      <section
        className="calculator-hero"
        style={{ backgroundImage: `url(${atta})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>MILLING CALCULATORS</h1>

            <p>
              Calculate atta pricing, conveying capacity, and power savings with
              precision engineering tools designed specifically for flour mills.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TOP TABS ================= */}

      <section className="calculator-tabs">
        <button
          className={activeTab === "atta" ? "active" : ""}
          onClick={() => setActiveTab("atta")}
        >
          Atta Price Calculator
        </button>

        <button
          className={activeTab === "conveying" ? "active" : ""}
          onClick={() => setActiveTab("conveying")}
        >
          Conveying Capacity Calculator
        </button>

        <button
          className={activeTab === "power" ? "active" : ""}
          onClick={() => setActiveTab("power")}
        >
          Power Saving Calculator
        </button>
      </section>

      {/* ================= MAIN LAYOUT ================= */}

      <section className="calculator-layout">
        <div className="content">
          {/* ================= INTRO CARD ================= */}

          <div className="intro-card">
            <div className="intro-header">
              <div>
                <h2>{data.title}</h2>

                <p>{data.overview}</p>
              </div>

              {/* ================= LAUNCH / COMING SOON BUTTON ================= */}

              {activeTab === "atta" ? (
                <a
                  href="https://rscgroup-calculators.promiller.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="launch-btn"
                >
                  Launch Atta Calculator
                </a>
              ) : (
                <button className="launch-btn coming-soon-btn" disabled>
                  Coming Soon
                </button>
              )}
            </div>
          </div>

          {/* ================= QUICK FACTS ================= */}

          <div className="quick-facts">
            {data.quickFacts.map((item, index) => (
              <div className="fact-card" key={index}>
                <div className="fact-icon">✓</div>

                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* ================= WHAT IT CALCULATES ================= */}

          <section className="content-section">
            <div className="section-title">
              <span></span>
              <h3>What It Calculates</h3>
            </div>

            <div className="calculate-grid">
              {/* ================= ATTA ================= */}

              {activeTab === "atta" && (
                <>
                  <div className="calculate-box">
                    <h4>Raw Material</h4>
                    <p>Wheat input cost.</p>
                  </div>

                  <div className="calculate-box">
                    <h4>By-product Credit</h4>
                    <p>Bran recovery percentage and bran sale value.</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Variable Cost</h4>
                    <p>Power consumption and electricity cost per quintal.</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Fixed Overhead</h4>
                    <p>Labour, supervision and indirect operating costs.</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Per-unit Costs</h4>
                    <p>Stone wear, packaging and handling charges.</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Distribution Cost</h4>
                    <p>Transport and freight per delivery zone.</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Profit Centre</h4>
                    <p>Target margin / profit percentage.</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Output</h4>
                    <p>Resulting net atta price per kg / per bag.</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Risk View</h4>
                    <p>Break-even analysis.</p>
                  </div>
                </>
              )}

              {/* ================= CONVEYING ================= */}

              {activeTab === "conveying" && (
                <>
                  <div className="calculate-box">
                    <h4>Throughput</h4>
                    <p>Required conveying capacity (tonnes per hour).</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Motor Sizing</h4>
                    <p>
                      Drive motor power (kW/HP) — exact, not over-engineered.
                    </p>
                  </div>

                  <div className="calculate-box">
                    <h4>Mechanical Spec</h4>
                    <p>Belt width, chain pitch or bucket dimensions.</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Speed Spec</h4>
                    <p>Conveyor speed (RPM / m per second).</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Engineering Correction</h4>
                    <p>
                      Inclination factor and material angle of repose
                      adjustment.
                    </p>
                  </div>

                  <div className="calculate-box">
                    <h4>Drive Type</h4>
                    <p>
                      Recommended drive type — direct, gearbox or
                      VFD-controlled.
                    </p>
                  </div>

                  <div className="calculate-box">
                    <h4>Economics</h4>
                    <p>Estimated power cost per tonne conveyed.</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Layout Options</h4>
                    <p>
                      Alternative configurations for space-constrained layouts.
                    </p>
                  </div>
                </>
              )}

              {/* ================= POWER ================= */}

              {activeTab === "power" && (
                <>
                  <div className="calculate-box">
                    <h4>Baseline</h4>
                    <p>
                      Current monthly power consumption from your existing
                      setup.
                    </p>
                  </div>

                  <div className="calculate-box">
                    <h4>Post-upgrade</h4>
                    <p>
                      Expected consumption after WonderMill / iQuadra
                      installation.
                    </p>
                  </div>

                  <div className="calculate-box">
                    <h4>Energy Saving</h4>
                    <p>Monthly unit savings (kWh).</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Financial Saving</h4>
                    <p>Monthly cost saving at your actual power tariff (₹).</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Annual Impact</h4>
                    <p>Annual saving projection (₹).</p>
                  </div>

                  <div className="calculate-box">
                    <h4>Sustainability</h4>
                    <p>Carbon footprint reduction (CO₂ kg saved per year).</p>
                  </div>

                  <div className="calculate-box">
                    <h4>ROI View</h4>
                    <p>
                      Payback scenario modelling — how long savings take to
                      compound.
                    </p>
                  </div>

                  <div className="calculate-box">
                    <h4>Config Comparison</h4>
                    <p>
                      Compare 10-7 / 10-8 / 10-10 / 10-12 ProMiller
                      configurations.
                    </p>
                  </div>
                </>
              )}
            </div>
          </section>

          {/* ================= CONVEYING DETAILS ================= */}

          {activeTab === "conveying" && (
            <section className="content-section">
              <div className="section-title">
                <span></span>
                <h3>Conveyor And Elevator Types Covered</h3>
              </div>

              <ul className="chevron-list">
                <li>
                  <strong>Screw conveyors</strong> — Horizontal and inclined
                  wheat/flour transfer.
                </li>

                <li>
                  <strong>Belt conveyors</strong> — Bulk grain and bag handling.
                </li>

                <li>
                  <strong>Chain conveyors</strong> — Heavy-duty grain movement.
                </li>

                <li>
                  <strong>Bucket elevators</strong> — Vertical grain and flour
                  lifting.
                </li>

                <li>
                  <strong>Pneumatic conveying</strong> — Dustless flour
                  transfer.
                </li>
              </ul>

              <div className="highlight-note">
                Most mills oversize conveyors by <strong>20–35%</strong>, paying
                for unused capacity in every electricity bill. This calculator
                fixes that.
              </div>

              <div className="technical-info">
                <h4>Technical Basis</h4>

                <p>
                  Calculations follow{" "}
                  <strong>
                    CEMA (Conveyor Equipment Manufacturers Association)
                  </strong>{" "}
                  standard engineering formulae, adapted for Indian mill
                  operating conditions — specifically the material bulk
                  densities, moisture ranges, and ambient temperatures relevant
                  to wheat, atta, maida, and bran.
                </p>
              </div>
            </section>
          )}

          {/* ================= POWER DETAILS ================= */}

          {activeTab === "power" && (
            <section className="content-section">
              <div className="section-title">
                <span></span>
                <h3>Input Variables</h3>
              </div>

              <ul className="chevron-list">
                <li>Number of chakkis currently running.</li>

                <li>Average daily run hours.</li>

                <li>Motor HP per chakki (25 HP / 18.5 kW).</li>

                <li>Your electricity tariff (₹ / kWh).</li>

                <li>
                  Target ProMiller configuration (10-7, 10-8, 10-10 or 10-12).
                </li>
              </ul>

              <div className="highlight-note">
                A <strong>10-chakki</strong> mill running
                <strong> 18 hours/day </strong> at
                <strong> ₹8/kWh </strong> typically saves
                <strong> ₹45,000–₹75,000 per month.</strong>
                Enter your numbers and see yours.
              </div>

              <div className="technical-info">
                <h4>Why This Matters</h4>

                <p>
                  The Power Saving Calculator is not a marketing estimate — it
                  is a decision tool. When a mill owner runs this before an
                  eligibility check, the monthly saving figure often becomes the
                  single most compelling number in the entire ProMiller
                  conversation. It makes the zero-investment model
                  self-explanatory.
                </p>
              </div>
            </section>
          )}

          {/* ================= ATTA DETAILS ================= */}

          {activeTab === "atta" && (
            <>
              {/* ================= WHO IT IS FOR ================= */}

              <section className="content-section">
                <div className="section-title">
                  <span></span>
                  <h3>Who It Is For</h3>
                </div>

                <p className="section-text">
                  Chakki atta mill owners, branded flour producers, bulk flour
                  suppliers, and any mill running an atta profit centre —
                  including mills selling to retailers, wholesalers, or direct
                  consumers.
                </p>

                <div className="highlight-note">
                  Enter today's wheat rate, your power tariff, and your bran
                  price — the calculator gives you your atta floor price in
                  under <strong>30 seconds.</strong>
                </div>
              </section>

              {/* ================= WHY IT IS DIFFERENT ================= */}

              <section className="content-section">
                <div className="section-title">
                  <span></span>
                  <h3>Why It Is Different</h3>
                </div>

                <ul className="chevron-list">
                  <li>
                    Designed around chakki-atta economics — not generic food
                    manufacturing models.
                  </li>

                  <li>
                    Separates fixed and variable costs the way a mill actually
                    tracks them.
                  </li>

                  <li>
                    Accounts for bran credit, which most calculators ignore.
                  </li>

                  <li>
                    Updates dynamically — change wheat price, everything
                    recalculates instantly.
                  </li>

                  <li>
                    Printable daily price sheet output for dealer and wholesale
                    communication.
                  </li>
                </ul>
              </section>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
