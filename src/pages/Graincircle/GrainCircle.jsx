// import React from "react";
// import "./GrainCircle.css";
// import { useState } from "react";

// import {
//   FaWarehouse,
//   FaChartLine,
//   FaWhatsapp,
//   FaCalculator,
//   FaFileInvoiceDollar,
//   FaCloud,
// } from "react-icons/fa";

// const problems = [
//   {
//     icon: <FaWarehouse />,
//     title: "Paper-Based Procurement",
//     description:
//       " Mandi purchase records and quality tests exist on paper — often lost, never searchable",
//   },
//   {
//     icon: <FaChartLine />,
//     title: "Manual Production & MIS",
//     description:
//       "Mill production data and daily MIS are calculated manually or not at all",
//   },
//   {
//     icon: <FaWhatsapp />,
//     title: "Dealer Orders on WhatsApp",
//     description:
//       "Dealer orders come in on WhatsApp, stock is checked by phone, and disputes are frequent",
//   },
//   {
//     icon: <FaCalculator />,
//     title: "Fragmented Financial Records",
//     description:
//       " Multiple bank accounts, multiple transporters, and multiple product lines with no unified ledger",
//   },
//   {
//     icon: <FaFileInvoiceDollar />,
//     title: "Separate Compliance Systems",
//     description:
//       "Government compliance — GST, mandi tax, e-way bills — is done in a separate system that doesn't connect to operations",
//   },
//   {
//     icon: <FaCloud />,
//     title: "No Real-Time Visibility",
//     description:
//       "  Business owners make pricing and procurement decisions without real-time margin data",
//   },
// ];
// const architectureData = [
//   {
//     id: 1,
//     title: "Procurement & Mandi",
//     icon: "🌾",
//     color: "#F58220",
//     modules: [
//       "Mandi Purchase Management",
//       "Grain Quality Lab"
//     ],
//     description:
//       "Digitize procurement, vendor management, quality testing and purchase approvals directly from the mandi."
//   },
//   {
//     id: 2,
//     title: "Mill Operations",
//     icon: "🏭",
//     color: "#0D5C46",
//     modules: [
//       "Production & Shift Management",
//       "Daily MIS",
//       "Mill Control Interface"
//     ],
//     description:
//       "Track production, shift-wise performance and machine operations with real-time dashboards."
//   },
//   {
//     id: 3,
//     title: "Inventory & Warehouse",
//     icon: "📦",
//     color: "#2E7D32",
//     modules: [
//       "Stock Ledger",
//       "Godown Management"
//     ],
//     description:
//       "Monitor raw material and finished goods inventory with complete warehouse visibility."
//   },
//   {
//     id: 4,
//     title: "Sales & Distribution",
//     icon: "🚚",
//     color: "#1565C0",
//     modules: [
//       "Order Management",
//       "Dealer Portal",
//       "Fleet & Dispatch"
//     ],
//     description:
//       "Manage dealer orders, dispatch planning, logistics and customer deliveries from one dashboard."
//   },
//   {
//     id: 5,
//     title: "Finance & Compliance",
//     icon: "💰",
//     color: "#8E24AA",
//     modules: [
//       "Accounts & Ledger",
//       "GST & Tax Compliance"
//     ],
//     description:
//       "Automatically connect operations with accounting, GST, taxation and statutory compliance."
//   },
//   {
//     id: 6,
//     title: "HR & Administration",
//     icon: "👥",
//     color: "#455A64",
//     modules: [
//       "Staff & Payroll",
//       "Role-Based Access Control"
//     ],
//     description:
//       "Manage employees, payroll, user permissions and approval workflows securely."
//   }
// ];
// function GrainCircle() {
//     const [selectedDomain, setSelectedDomain] = useState(architectureData[0]);
//   return (
//     <div className="grain-circle">

//       {/* ================= HERO ================= */}

//       <section className="gc-hero">

//         <div className="gc-overlay">

//           <div className="gc-container">

//             <div className="hero-content">

//               <span className="hero-tag">
//                 GRAIN CIRCLE ERP
//               </span>

//               <h1>
//                 India's First Purpose-Built ERP for Grain & Flour Businesses
//               </h1>

//               <p>
//                 The complete digital operating platform engineered
//                 specifically for grain traders, flour mills and
//                 distributors. One Login. Every Transaction.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ================= INTRO ================= */}

//       <section className="intro-section">

//         <div className="gc-container">

//           <div className="section-title">

//             <h2>
//               Digital Backbone for Modern Grain Businesses
//             </h2>

//           </div>

//           <p>
//             The grain and flour industry runs on thin margins,
//             fast-moving commodity prices, complex procurement,
//             multiple stakeholders and operations stretching from
//             the farm gate to the retailer's shelf.
//           </p>

//           <p>
//             Most businesses still manage these operations using
//             paper registers, spreadsheets, fragmented software
//             and manual communication between departments.
//           </p>

//           <p>
//             <strong>Grain Circle ERP</strong> is the industry's
//             first purpose-built, end-to-end digital operating
//             platform designed specifically for Indian grain
//             traders, flour mills and distributors — not adapted
//             from generic manufacturing ERP, but engineered for
//             the way the grain business actually works.
//           </p>

//           <div className="intro-highlight">

//             <h3>One Login. One Connected Platform.</h3>

//             <p>
//               Every purchase, production batch, inventory movement,
//               dealer order, dispatch, payment, GST filing and
//               management report connected inside one intelligent ERP.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* ================= PROBLEM SECTION ================= */}

//       <section className="problem-section">

//         <div className="gc-container">

//           <div className="section-title center">

//             <h2>
//               The Problem Grain Circle Solves
//             </h2>
//           </div>

//           <div className="problem-grid">

//             {problems.map((problem, index) => (

//               <div
//                 className="problem-card"
//                 key={index}
//               >

//                 <div className="problem-icon">
//                   {problem.icon}
//                 </div>

//                 <h3>
//                   {problem.title}
//                 </h3>

//                 <p>
//                   {problem.description}
//                 </p>

//               </div>

//             ))}

//           </div>

//           <div className="solution-banner">

//             <h3>
//               Grain Circle ERP eliminates every one of these
//               operational gaps through one fully integrated,
//               cloud-based platform.
//             </h3>

//           </div>

//         </div>

//       </section>
//       {/* ================= PLATFORM ARCHITECTURE ================= */}

// <section className="architecture-section">

//     <div className="gc-container">

//         <div className="section-title center">

//             <h2>
//                 One Platform.
//                 Six Functional Domains.
//                 Fourteen Integrated Modules.
//             </h2>

//             <p>
//                 Grain Circle ERP is built as a modular platform.
//                 Every module can work independently for growing mills
//                 while remaining completely integrated as the business expands.
//             </p>

//         </div>

//         <div className="architecture-wrapper">

//             {/* LEFT */}

//             <div className="architecture-left">

//                 {architectureData.map((item) => (

//                     <div
//                         key={item.id}
//                         className={
//                             selectedDomain.id === item.id
//                                 ? "domain-card active"
//                                 : "domain-card"
//                         }
//                         onClick={() => setSelectedDomain(item)}
//                     >

//                         <div
//                             className="domain-icon"
//                             style={{
//                                 background: item.color
//                             }}
//                         >
//                             {item.icon}
//                         </div>

//                         <div>

//                             <h3>
//                                 {item.title}
//                             </h3>
//                         </div>

//                     </div>

//                 ))}

//             </div>

//             {/* CENTER */}

//             <div className="architecture-center">

//                 <div className="erp-core">

//                     <div className="core-circle">

//                         <h2>
//                             Grain
//                             <br />
//                             Circle
//                         </h2>

//                         <span>Cloud ERP</span>

//                     </div>

//                 </div>

//             </div>

//             {/* RIGHT */}

//             <div className="architecture-right">

//                 <div className="domain-details">

//                     <h2>
//                         {selectedDomain.icon} {selectedDomain.title}
//                     </h2>

//                     <p>
//                         {selectedDomain.description}
//                     </p>

//                     <h4>
//                         Integrated Modules
//                     </h4>

//                     <div className="module-grid">

//                         {selectedDomain.modules.map((module, index) => (

//                             <div
//                                 className="module-card"
//                                 key={index}
//                             >

//                                 <span>✓</span>

//                                 {module}

//                             </div>

//                         ))}

//                     </div>

//                 </div>

//             </div>

//         </div>

//     </div>

// </section>

// {/* ================= WHO SHOULD USE ================= */}

// <section className="users-section">

// <div className="gc-container">

// <div className="section-title center">

// <h2>

// Who Should Use Grain Circle ERP?

// </h2>

// </div>

// <div className="user-grid">

// <div className="user-card">

// <h3>🏭 Chakki Atta Mills</h3>

// <p>

// Ideal for mills operating 5 or more chakkis wanting complete operational visibility.

// </p>

// </div>

// <div className="user-card">

// <h3>🌾 Wheat Flour Mills</h3>

// <p>

// Designed for medium and large mills ranging from 10 to 500 tonnes per day.

// </p>

// </div>

// <div className="user-card">

// <h3>🚜 Grain Traders</h3>

// <p>

// Perfect for commission agents and grain traders managing procurement and milling.

// </p>

// </div>

// <div className="user-card">

// <h3>🚚 Flour Distributors</h3>

// <p>

// Dealer network management, dispatch planning and customer order tracking.

// </p>

// </div>

// <div className="user-card">

// <h3>🏢 Multi-Location Groups</h3>

// <p>

// Centralized dashboards, consolidated reporting and branch-wise monitoring.

// </p>

// </div>

// <div className="user-card">

// <h3>⚙️ ProMiller Partner Mills</h3>

// <p>

// Recommended ERP layer working seamlessly with WonderMill automation systems.

// </p>

// </div>

// </div>

// </div>

// </section>

//     </div>
//   );
// }

// export default GrainCircle;