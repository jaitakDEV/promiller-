import { useState } from "react";
import "./TechPage.css";
import product1 from "../../assets/wondermill.png";
import product2 from "../../assets/WonderMiller.webp";
import product3 from "../../assets/wondermiller.png";
import product4 from "../../assets/dressermachine.png";
import product5 from "../../assets/floura_bg.png";
import product6 from "../../assets/quadra.webp";
import banner from "../../assets/image.png";

const products = [
  {
    id: 1,
    name: "Wonder Mill",
    image: product1,
    description: "Fully automatic digital stone flour mill (chakki) — the core hardware ProMiller installs in every partner mill, replacing manual chakki operation with precision digital control.",
  },
  {
    id: 2,
    name: "WonderMiller",
    image: product2,
    description: "A touch-screen control device for the Stone Flour Mill — the interface operators use to run, monitor, and adjust the mill in real time."

  },
  {
    id: 3,
    name: "Miller Lite",
    image: product3,
    description: "Touch-screen-enabled software that controls the complete plant — combining hardware, PLC, VFD, servo drives, and electrical panel into single-touch operation."

  },
  {
    id: 4,
    name: "Automatic Stone Dresser Machine",
    image: product4,
    description: "Automates the dressing (resurfacing) of emery stones — a job traditionally done by hand — cutting each groove in 3–4 minutes and extending stone life with far more consistency than manual work."

  },
  {
    id: 5,
    name: "Floura",
    image: product5,
    description:"Floura is the world’s first flour grinding & vending machine. It uses stone ground technology and is specifically designed for grocery stores. It’s size allows it to easily become part of the store."
  },
  {
    id: 6,
    name: "iQuadra",
    image: product6,
    description:"For mills prioritizing efficiency above all, iQuadra is Choyal's most advanced digital stone mill, delivering up to 40% power savings with intelligent grain feeding, data logging, and hydraulic auto-pressure control."
  },
  // {
  //   id: 5,
  //   name: "Choyal Support",
  //   image: product5,
  //   description: "A web-enabled remote control and support system for Wonder Mills, allowing diagnostics and assistance without needing an engineer on-site."


  // },
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
      <div className="tech-hero">
  <img src={banner} alt="Patented Innovations" />

  <div className="tech-overlay">
    {/* <span className="tech-tag">
      PATENTED TECHNOLOGY
    </span> */}

    <h1>OUR PATENTED INNOVATIONS</h1>

    <p>
      Driven by continuous innovation, RS Choyal Group’s R&D excellence has transformed industry challenges into patented solutions that improve efficiency, reliability, and performance across modern milling operations.
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