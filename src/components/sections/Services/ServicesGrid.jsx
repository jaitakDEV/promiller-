// import React, { useState } from "react";
// import "./ServicesGrid.css";

// import chakki from "./assets/chakki.png";
// import chakki2 from "./assets/chakki2.png";
// import WonderMill from "./assets/WonderMill.png";
// import design from "./assets/design.jpg";
// import job from "./assets/job.jpg";
// import websol from "./assets/websol.jpg";
// import consultancy from "./assets/consultancy.jpg";
// import training from "./assets/training.jpg";


// export default function ServicesGrid() {
//   const [expanded, setExpanded] = useState(false);

//   const services = [
//     {
//       title: "4 Chakki & Above Existing Mill",
//       subtitle: "Existing Mill Upgrade",
//       image: chakki,
//       link: "/services#service1",
//     },
//     {
//       title: "2 Chakki & Below Existing Mill",
//       subtitle: "Existing Mill Optimization",
//       image: chakki2,
//       link: "/services#service2",
//     },
//     {
//       title: "Innovative Patented Products",
//       subtitle: "Bespoke Tech & Machinery",
//       image: WonderMill,
//       link: "/services#service3",
//     },
//     {
//       title: "Design and Media",
//       subtitle: "Process Workflow Visualization",
//       image: design,
//       link: "/technologies/WonderMiller",
//     },
//     {
//       title: "Job Grinding",
//       subtitle: "Precision Custom Milling ",
//       image: job,
//       link: "/technologies/NeoMatic",
//     },
//     {
//       title: "Web Solution",
//       subtitle: "Smart Digital Platforms",
//       image: websol,
//       link: "/technologies/EmeryStoneDresser",
//     },
//     {
//       title: "Consultancy",
//       subtitle: "Expert Plant Auditing",
//       image: consultancy,
//       link: "/technologies/Floura",
//     },
//     {
//       title: "Training",
//       subtitle: "Advanced Workforce Empowerment",
//       image: training,
//       link: "/technologies/IQuadra",
//     },
//   ];

//   const visibleServices = expanded
//     ? services
//     : services.slice(0, 4);

//   return (
//     <section className="services-grid-section">
//       <div className="container services-grid__heading">
//         <div className="plate-label">
//           Products & Services
//           <span className="plate-label__rule"></span>
//         </div>
//       </div>

//       <div className="container">
//         <div className="services-grid__wrapper">
//           {visibleServices.map((service, index) => (
//             <a
//               href={service.link}
//               className="services-grid__card"
//               key={index}
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//               }}
//             >
//               <div className="services-grid__image-box">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="services-grid__img"
//                 />
//               </div>

//               <div className="services-grid__content">
//                 <span className="services-grid__subtitle">
//                   {service.subtitle}
//                 </span>

//                 <h3 className="services-grid__title">
//                   {service.title}
//                 </h3>
//               </div>
//             </a>
//           ))}
//         </div>

//         <div className="services-grid__expand-wrap">
//           <button
//             className="services-grid__expand"
//             onClick={() => setExpanded(!expanded)}
//           >
//             {expanded ? "−" : "+"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }