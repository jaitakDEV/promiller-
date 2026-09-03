// import React from 'react';
// import './ProductShowcase.css';
// import cash from './assets/cash.jpeg'; 
// import year from './assets/year.png'; 
// import lapphone from './assets/lapphone.png';

// const ProductShowcase = () => {
//   return (
//     <section className="mm-combined-section">

//       {/* AREA 1: Mavian Brand Ad Header & Full-Width Green Strip */}
//       <div className="mm-mavian-ad-block">

//         {/* Top White Area */}
//         <div className="mm-mavian-top-white">
//           <div className="mm-mavian-brand-row">
//             <h1 className="mm-brand-mavian">mavian</h1>
//             <div className="mm-brand-badge-promiller">Pro Miller</div>
//           </div>
//           <p className="mm-brand-subtitle">Revolutionary Solution for Mill Management</p>
//         </div>

//         {/* Complete Full-Width Area Green Strip */}
//         <div className="mm-mavian-green-patti-full">
//           <div className="mm-patti-content-container">
//             <div className="mm-patti-text-side">
//               <h2 className="mm-patti-main-title">
//                 Proven Profit<br />Peak Performance
//               </h2>
//             </div>
//             <div className="mm-patti-image-side">
//               <img src={lapphone} alt="Mavian Pro Miller Display" className="mm-patti-lapphone-overlap" />
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* AREA 2: Cash Flow Banner */}
//       <div className="mm-cash-banner" style={{ backgroundImage: `linear-gradient(rgba(1, 77, 42, 0.88), rgba(1, 77, 42, 0.88)), url(${cash})` }}>
//         <div className="mm-cash-container">
//           <h2 className="mm-cash-title">Zero Impact on Your Existing Cash Flow</h2>
//           <p className="mm-cash-desc">
//             With ProMiller, your current cash flow remains fully protected. You will never pay more 
//             than what you are already spending—our earnings come only from the additional 
//             value and profit we create for you.
//           </p>
//         </div>
//       </div>

//       {/* AREA 3: Trusted Performance Assurance (70% Width) */}
//       <div className="mm-assurance-banner">
//         <div className="mm-assurance-container">
//           <div className="mm-assurance-logo-side">
//             <img src={year} alt="60 Years experience" className="mm-year-img" />
//           </div>
//           <div className="mm-assurance-text-side">
//             <h2 className="mm-assurance-title">60+ Years of Trusted Performance Assurance</h2>
//             <p className="mm-assurance-desc">
//               ProMiller stands behind its technology with long-term reliability, 
//               delivering consistent performance and dependable system support for decades.
//             </p>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default ProductShowcase;

import React from "react";
import "./ProductShowcase.css";

import laptop from "../../../assets/lapphone.webp";
import year from "../../../assets/year.webp";

const ProductShowcase = () => {
  return (
    <section className="pm-section">

      {/* Background Elements */}
      <div className="pm-bg-circle pm-circle-one"></div>
      <div className="pm-bg-circle pm-circle-two"></div>

      <div className="pm-container">

        {/* Heading */}
        <div className="pm-heading">

          <div className="pm-brand-row">

            <h2 className="pm-brand">
              Mavian
            </h2>

            <span className="pm-badge">
              Pro Miller
            </span>

          </div>

          <p className="pm-subtitle">
            Revolutionizing Flour Mill Management with intelligent automation,
            production insights and decades of engineering excellence.
          </p>

        </div>

        {/* Showcase */}
        <div className="pm-showcase">

          {/* Left Card */}
          <div className="pm-card pm-card-left">

            <div className="pm-icon green">
              ₹
            </div>

            <h3>
              Zero Impact on Cash Flow
            </h3>

            <p>
              You never pay more than what you're already spending.
              Our success comes only from the additional value we create.
            </p>

          </div>

          {/* Center Image */}
          <div className="pm-device">

            <div className="pm-glow"></div>

            <img
              src={laptop}
              alt="Mavian Pro Miller"
            />

          </div>

          {/* Right Card */}
          <div className="pm-card pm-card-right">

            <div className="pm-icon orange">
              %
            </div>

            <h3>
              Revenue Sharing Model
            </h3>

            <p>
              We grow together. Our earnings are directly tied to the
              additional profitability generated for your mill.
            </p>

          </div>

        </div>

        {/* Bottom Card */}

        <div className="pm-bottom-card">

          <div className="pm-bottom-left">

            <img
              src={year}
              alt="60 Years"
            />

          </div>

          <div className="pm-bottom-right">

            <h2>
              60+ Years of Trusted Performance
            </h2>

            <div className="pm-heading-line"></div>

            <p>
              Built on decades of milling expertise, Pro Miller combines
              innovation, reliability and intelligent automation to help mills
              achieve higher productivity, improved efficiency and long-term
              sustainable growth.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductShowcase;
