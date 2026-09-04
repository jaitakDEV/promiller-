import React from "react";
import "./AnywhereYouWork.css";

const FEATURES = [
  {
    id: "desktop",
    accent: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="2" />
        <path d="M8 20h8M12 16v4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Full Desktop Dashboard",
    text: "Deep-dive analytics and reports built for the bigger screen in your office",
  },
  {
    id: "tablet",
    accent: "mint",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="2.5" strokeWidth="2" />
        <path d="M9 20h6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Floor-Ready Tablet View",
    text: "Large touch targets and readable stats, built for shop-floor use",
  },
  {
    id: "phone",
    accent: "pink",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" strokeWidth="2" />
      </svg>
    ),
    title: "Instant Phone Alerts",
    text: "Push notifications the second something needs your attention",
  },
  {
    id: "sync",
    accent: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 0 1 13.66-5.66L20 8" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 4v4h-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12a8 8 0 0 1-13.66 5.66L4 16" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 20v-4h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Always In Sync",
    text: "Switch devices mid-task — your dashboard picks up exactly where you left it",
  },
];

const APP_TILES = [
  { icon: "🏭", label: "Flour Mill", bg: "var(--orange-bg)" },
  { icon: "📦", label: "Inventory", bg: "var(--pink-bg)" },
  { icon: "🚚", label: "Logistics", bg: "var(--mint-bg)" },
  { icon: "🛒", label: "Purchase", bg: "var(--purple-bg)" },
  { icon: "💰", label: "Sales", bg: "#eef0f5" },
  { icon: "👤", label: "HRM", bg: "#eef0f5" },
  { icon: "🧑‍🤝‍🧑", label: "Distributor", bg: "#eef0f5" },
  { icon: "🔔", label: "Alerts", bg: "#eef0f5" },
];

function BrandBar() {
  return (
    <div className="dsp-topbar">
      <div className="dsp-brand">
        <div className="dsp-brand-mark">
          <span></span>
        </div>
        <b>ProMiller</b>
      </div>
      <div className="dsp-avatar"></div>
    </div>
  );
}

export default function AnywhereYouWork() {
  return (
    <section className="alt-bg" id="mobile-app">
      <div className="wrap">
        <div className="app-wrap">
          <div className="dsp-stage" id="dspStage">
            <div className="dsp-glow"></div>
            <div className="dsp-shelf"></div>
            <div className="dsp-live-tag">
              <i></i>LIVE ON 3 DEVICES
            </div>

            {/* Tablet : floor view */}
            <div className="dsp-item dsp-tablet-wrap">
              <div className="dsp-float dsp-float-tablet">
                <div className="ds-tablet-body">
                  <div className="ds-tablet-screen">
                    <BrandBar />
                    <div className="ds-tablet-body-content">
                      <div className="ds-tab-stat">
                        <div className="lbl">Live power draw</div>
                        <div className="val grad">62.4 kW</div>
                      </div>
                      <div className="ds-tab-stat">
                        <div className="lbl">Efficiency today</div>
                        <div className="val">91%</div>
                      </div>
                      <div className="ds-tab-bottombar">
                        <i className="active"></i>
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop : full dashboard */}
            <div className="dsp-item dsp-laptop-wrap">
              <div className="dsp-float dsp-float-laptop">
                <div className="ds-laptop-top">
                  <div className="ds-laptop-screen">
                    <BrandBar />
                    <div className="ds-laptop-body">
                      <div className="ds-crumb">
                        🏠 Home / <b>Master Dashboard</b>
                      </div>
                      <div className="ds-app-grid">
                        {APP_TILES.map((tile) => (
                          <div className="ds-app-tile" key={tile.label}>
                            <div className="ds-app-ic" style={{ background: tile.bg }}>
                              {tile.icon}
                            </div>
                            <span>{tile.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ds-laptop-base"></div>
              </div>
            </div>

            {/* Phone : alerts + live status */}
            <div className="dsp-item dsp-phone-wrap">
              <div className="dsp-float dsp-float-phone">
                <div className="ds-phone-body">
                  <div className="ds-phone-screen">
                    <div className="ds-phone-camera"></div>
                    <div className="dsp-topbar ds-phone-topbar">
                      <div className="dsp-brand">
                        <div className="dsp-brand-mark">
                          <span></span>
                        </div>
                        <b>ProMiller</b>
                      </div>
                      <div className="dsp-avatar"></div>
                    </div>
                    <div className="ds-phone-content">
                      <div className="ds-phone-stat">
                        <div className="lbl">Live power draw</div>
                        <div className="val grad">62.4 kW</div>
                        <div className="ds-phone-trend">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M4 15l6-6 4 4 6-8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          12% better than yesterday
                        </div>
                      </div>
                      <div className="ds-phone-alert">
                        <div className="ds-phone-alert-ic">
                          <svg viewBox="0 0 24 24" fill="none" stroke="#ea6c1f" strokeWidth="2.4">
                            <path
                              d="M12 2a6 6 0 00-6 6c0 5-2 6-2 6h16s-2-1-2-6a6 6 0 00-6-6z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path d="M10.3 21a1.7 1.7 0 003.4 0" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <div className="ds-phone-alert-title">Roller 3 running hot</div>
                          <div className="ds-phone-alert-sub">2 min ago</div>
                        </div>
                      </div>
                      <div className="ds-phone-alert mint">
                        <div className="ds-phone-alert-ic">
                          <svg viewBox="0 0 24 24" fill="none" stroke="#0f9d74" strokeWidth="2.6">
                            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <div className="ds-phone-alert-title">Shift target reached</div>
                          <div className="ds-phone-alert-sub">18 min ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="ds-tab-bottombar ds-phone-bottombar">
                      <i className="active"></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <div className="ds-phone-navbar">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <circle cx="12" cy="12" r="7" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <rect x="6" y="6" width="12" height="12" rx="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="app-copy">
            <div className="section-tag">Anywhere You Work</div>
            <h2 className="app-heading">
              Your Mill, <span className="grad">On Every Screen</span>
            </h2>
            <p className="app-sub">
              One ProMiller dashboard, perfectly at home on your office desktop,
              the floor tablet and your phone — always in sync, always up to
              date.
            </p>

            <div className="app-features">
              {FEATURES.map((f) => (
                <div className={`app-feature c-${f.accent}`} key={f.id}>
                  <div className="aicon">{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>

            <div className="device-sync-strip">
              <span className="pill">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Desktop
              </span>
              <span className="sep">•</span>
              <span className="pill">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="3" width="16" height="18" rx="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
                Tablet
              </span>
              <span className="sep">•</span>
              <span className="pill">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="7" y="2" width="10" height="20" rx="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
                Phone
              </span>
              <span className="sep">•</span>
              <span className="pill pill-synced">
                <i className="sync-dot"></i>
                Always Synced
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
