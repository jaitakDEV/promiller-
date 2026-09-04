import React from "react";
import "./CompareTable.css";

const ROWS = [
  {
    capability: "Remote monitoring & control",
    manual: { type: "no", text: "✕ None" },
    basic: { type: "partial", text: "Limited" },
    promiller: "✓ Full remote access",
  },
  {
    capability: "Real-time energy tracking",
    manual: { type: "no", text: "✕ None" },
    basic: { type: "partial", text: "Basic meters" },
    promiller: "✓ Live optimization",
  },
  {
    capability: "Automatic fault alerts",
    manual: { type: "no", text: "✕ Manual checks" },
    basic: { type: "partial", text: "Alarm only" },
    promiller: "✓ Alarm → remedy → shutdown",
  },
  {
    capability: "Upfront investment",
    manual: { type: "yes", text: "Low" },
    basic: { type: "no", text: "High" },
    promiller: "✓ Zero upfront*",
  },
  {
    capability: "Data & performance reports",
    manual: { type: "no", text: "✕ None" },
    basic: { type: "partial", text: "Basic logs" },
    promiller: "✓ Full MIS dashboard",
  },
];

export default function CompareTable() {
  return (
    <section className="alt-bg" id="compare">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">Why ProMiller</div>
          <h2>
            Manual Chakki vs <span className="grad">Basic Automation</span> vs
            ProMiller
          </h2>
          <p>See exactly what you get with the complete digital system.</p>
        </div>

        {/* Desktop / tablet table */}
        <div className="compare-wrap">
          <table className="compare">
            <thead>
              <tr>
                <th>Capability</th>
                <th>Manual Chakki</th>
                <th>Basic Automation</th>
                <th className="hl-cell">ProMiller System</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.capability}>
                  <td>{row.capability}</td>
                  <td>
                    <span className={`badge ${row.manual.type}`}>
                      {row.manual.text}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${row.basic.type}`}>
                      {row.basic.text}
                    </span>
                  </td>
                  <td className="hl-cell">
                    <span className="badge promiller-col">{row.promiller}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="compare-cards">
          {ROWS.map((row) => (
            <div className="compare-card" key={row.capability}>
              <div className="cc-title">{row.capability}</div>
              <div className="cc-row">
                <span className="cc-label">Manual Chakki</span>
                <span className={`badge ${row.manual.type}`}>
                  {row.manual.text}
                </span>
              </div>
              <div className="cc-row">
                <span className="cc-label">Basic Automation</span>
                <span className={`badge ${row.basic.type}`}>
                  {row.basic.text}
                </span>
              </div>
              <div className="cc-row cc-row-hl">
                <span className="cc-label">ProMiller System</span>
                <span className="badge promiller-col">{row.promiller}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="compare-footnote">
          *Applicable to 100 TPD &amp; above. T&amp;C apply.
        </p>
      </div>
    </section>
  );
}
