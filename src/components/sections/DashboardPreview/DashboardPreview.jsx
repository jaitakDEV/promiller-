import React, { useState } from "react";
import "./DashboardPreview.css";

const TABS = [
  { id: "panel-monitor", label: "Live Monitoring" },
  { id: "panel-energy", label: "Energy" },
  { id: "panel-safety", label: "Safety Alerts" },
];

export default function DashboardPreview() {
  const [activePanel, setActivePanel] = useState("panel-monitor");

  return (
    <section id="dashboard-preview">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">Product Preview</div>
          <h2>
            One Dashboard. <span className="grad">Every Machine.</span>
          </h2>
          <p>
            Click through to see what your team would actually look at every
            day.
          </p>
        </div>

        <div className="dash-tabs">
          {TABS.map((tab) => (
            <div
              key={tab.id}
              className={`dash-tab${activePanel === tab.id ? " active" : ""}`}
              data-panel={tab.id}
              role="button"
              tabIndex={0}
              onClick={() => setActivePanel(tab.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActivePanel(tab.id);
                }
              }}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className="dash-panel-wrap">
          <div
            className={`dash-panel${activePanel === "panel-monitor" ? " active" : ""}`}
            id="panel-monitor"
          >
            <div className="dash-info">
              <h3>See Every Unit, Live</h3>
              <p>
                RPM, load and output across all your mill units, updating
                every few seconds from wherever you are.
              </p>
              <div className="dash-chip">⬤ Unit 01 — Running</div>
              <div className="dash-chip">⬤ Unit 02 — Running</div>
              <div className="dash-chip">⬤ Unit 03 — Idle</div>
            </div>
            <div className="bars-viz">
              {Array.from({ length: 6 }).map((_, i) => (
                <div className="bar" key={i}></div>
              ))}
            </div>
          </div>

          <div
            className={`dash-panel${activePanel === "panel-energy" ? " active" : ""}`}
            id="panel-energy"
          >
            <div className="dash-info">
              <h3>Track Load In Real Time</h3>
              <p>
                See power draw per unit and where the system is optimizing
                automatically to cut cost per kg.
              </p>
              <div className="dash-chip">⚡ 18.6 kW current draw</div>
              <div className="dash-chip">↓ 34% vs. baseline</div>
            </div>
            <div className="dash-gauge-viz">
              <div className="dash-gauge-row">
                <span>Power Draw</span>
                <b>18.6 kW</b>
              </div>
              <div className="dash-track">
                <div className="dash-fill"></div>
              </div>
              <div className="dash-gauge-row">
                <span>Efficiency Score</span>
                <b>92 / 100</b>
              </div>
              <div className="dash-track">
                <div className="dash-fill" style={{ animationDelay: "0.3s" }}></div>
              </div>
            </div>
          </div>

          <div
            className={`dash-panel${activePanel === "panel-safety" ? " active" : ""}`}
            id="panel-safety"
          >
            <div className="dash-info">
              <h3>Nothing Slips Through</h3>
              <p>
                Alarm → remedy → shutdown. If a unit has an issue, it's
                isolated automatically before it spreads.
              </p>
              <div className="dash-chip">🛡 3-step protection active</div>
            </div>
            <div className="dash-alert-viz">
              <div className="dash-alert">
                <span className="dot"></span>Unit 03 — Bearing temp nominal
              </div>
              <div className="dash-alert warn">
                <span className="dot"></span>Unit 05 — Vibration slightly
                elevated
              </div>
              <div className="dash-alert">
                <span className="dot"></span>Unit 01 — All systems normal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
