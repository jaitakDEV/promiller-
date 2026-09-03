import React from "react";
import { useInView } from "react-intersection-observer";
import { 
  Smartphone, 
  Activity, 
  ShieldAlert, 
  Cloud, 
  Users, 
  Wrench 
} from "lucide-react";
import "./FeatureGrid.css";

const featuresData = [
  {
    id: 1,
    title: "Operate & Control Anywhere",
    variant: "dark-green",
    points: [
      "Operate and monitor via mobile phone & tablet",
      "Remote access for diagnostics and monitoring*"
    ],
    icon: Smartphone
  },
  {
    id: 2,
    title: "Energy & Performance Monitoring",
    variant: "light-green",
    points: [
      "Live energy consumption tracking",
      "On-time mill running data",
      "Load-based power optimization"
    ],
    icon: Activity
  },
  {
    id: 3,
    title: "Safety & Alerts",
    variant: "dark-green",
    points: [
      "Alarm generation for all critical conditions",
      "Three-step logic: Alarm ➔ Remedy ➔ Shutdown",
      "Individual mill isolation to avoid total shutdown"
    ],
    icon: ShieldAlert
  },
  {
    id: 4,
    title: "Data, MIS & Cloud",
    variant: "light-green",
    points: [
      "Advanced data logging: Running hours, Energy consumption, Output flour temperature",
      "Cloud-based system for MIS updates & reporting*",
      "Trend analysis for performance improvement"
    ],
    icon: Cloud
  },
  {
    id: 5,
    title: "User Management",
    variant: "dark-green",
    points: [
      "Login credentials for every operator",
      "Role-based access (Operator / Supervisor / Admin)",
      "Secure and user-friendly interface"
    ],
    icon: Users
  },
  {
    id: 6,
    title: "Automation Tools",
    variant: "light-green",
    points: [
      "Timer setting",
      "Calibration support",
      "Automatic adjustment for stone wear"
    ],
    icon: Wrench
  }
];

export default function FeaturesGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="features-section" ref={ref}>
        <div className="features-header">
      <h2>Smart Infrastructure. Absolute Control.</h2>
      </div>
      <div className={`features-container ${inView ? "is-visible" : ""}`}>
        {featuresData.map((feat) => {
          // Dynamic Lucide assignment declaration
          const IconComponent = feat.icon;
          
          return (
            <div key={feat.id} className={`feature-card ${feat.variant}`}>
              <div className="card-inner-content">
                {/* Dynamic Responsive Vector Core */}
                <div className="feature-icon-wrapper">
                  <IconComponent 
                    size={46} 
                    strokeWidth={1.5} 
                    className="lucide-vector"
                  />
                </div>
                
                <h3>{feat.title}</h3>
                
                <ul className="feature-points">
                  {feat.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}