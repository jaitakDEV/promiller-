import { useState } from "react";
import "./Services.css";
import product1 from "../../assets/wondermill.png";
import product2 from "../../assets/quadra.webp";
import product3 from "../../assets/WonderMiller.webp";
import product4 from "../../assets/wondermiller.png";
import product5 from "../../assets/floura_bg.png";
import product6 from "../../assets/spare.png";
import product7 from "../../assets/AMC.png";
import product8 from "../../assets/saas.png";
import banner from "../../assets/services.png";

const products = [
  {
    id: 1,
    name: "Wonder Mill — Core Upgrade",
    image: product1,
    description: "The flagship product: a fully automatic digital stone flour mill that replaces your existing chakkis. Installed at zero upfront cost under the ProMiller partnership, it's the foundation every mill starts with — choose from 10–7, 10–8, 10–10, or 10–12 configurations based on your output and power-saving goals.",
  },
  {
    id: 2,
    name: "iQuadra — Maximum Power Saving",
    image: product2,
    description: "For mills prioritizing efficiency above all, iQuadra is Choyal's most advanced digital stone mill, delivering up to 40% power savings with intelligent grain feeding, data logging, and hydraulic auto-pressure control."
  },
  {
    id: 3,
    name: "Miller Lite — Full Plant Control",
    image: product3,
    description: "Touch-screen software that runs your entire plant — hardware, PLC, VFD, servo drives, and electrical panel — from a single touch. Ideal for mills that want centralized, one-point control."

  },
  {
    id: 4,
    name: "Wonder Miller — Smart Dashboard",
    image: product4,
    description:"The everyday interface for your team: monitor output, energy use, and alerts from a touch screen or mobile app, with role-based logins for operators, supervisors, and admins."

  },
  {
    id: 5,
    name: "Floura",
    image: product5,
    description:"Floura is the world’s first flour grinding & vending machine. It uses stone ground technology and is specifically designed for grocery stores. It’s size allows it to easily become part of the store."
  },
  {
    id: 6,
    name: "Spares",
    image: product6,
    description:"Genuine WonderMill components, supplied directly so your system stays at rated performance without downtime or third-party guesswork."
  },
  {
    id: 7,
    name: "AMC (Annual Maintenance Contract)",
    image: product7,
    description: "Ongoing service, inspection, and calibration support built into the partnership — keeping your mill running at peak output for the life of the system."


  },
  {
    id: 8,
    name: "SaaS Layer",
    image: product8,
    description:"The cloud and connectivity backbone behind every installation: remote operation, live energy monitoring, automated safety alerts (alarm → remedy → shutdown), and MIS reporting — accessible from anywhere."


  },
];
function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-content">
        <h2>{product.name}</h2>

        <p className={expanded ? "expanded" : ""}>
          {product.description}
        </p>

        <button
          className="read-more-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
function Services() {
  return (
    <section className="products-section">

  <div className="services-hero">
    <img src={banner} alt="Products & Services" />

    <div className="services-overlay">
      {/* <span className="services-tag">PRODUCTS & SERVICES</span> */}

      <h1>PRODUCTS & SERVICES</h1>

      <p>
        Transform your milling operations with a flexible ecosystem that grows with your business. ProMiller combines advanced upgrades, intelligent digital tools, and expert support to deliver sustainable productivity and operational excellence.
      </p>
    </div>
  </div>

  <div className="container">
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>

</section>
  );
}

export default Services;