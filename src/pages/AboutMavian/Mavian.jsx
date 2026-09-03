// import React, { useEffect } from "react";
// import "./Mavian.css";

// import WonderMillImg from "../../assets/WonderMill.webp";

// export default function Mavian() {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       { threshold: 0.15 },
//     );

//     const sections = document.querySelectorAll(".mavian-scroll-section");
//     sections.forEach((sec) => observer.observe(sec));

//     return () => sections.forEach((sec) => observer.unobserve(sec));
//   }, []);

//   return (
//     <main className="mavian-main-content">
//       <section className="mavian-scroll-section split-layout">
//         <div className="mavian-image-panel">
//           <img src={WonderMillImg} alt="Mavian ProMiller" />
//         </div>

//         <div className="mavian-premium-content">
//           <span className="mavian-tag">ABOUT MAVIAN</span>

//           <h2>Mavian ProMiller</h2>

//           <p>
//             Mavian ProMiller is a next-generation, technology-driven platform
//             that turns traditional flour mills into high-efficiency, scalable,
//             and profitable operations — without asking the mill owner to invest
//             a rupee upfront. Backed by RS Choyal Group's engineering expertise,
//             ProMiller replaces outdated chakki technology with advanced
//             WonderMill systems, paired with a smart digital layer for
//             monitoring, safety, and reporting. In return for funding and
//             installing the upgrade, ProMiller shares in the additional value it
//             creates — so the mill only pays out of the extra profit the upgrade
//             generates, never from existing cash flow. The vision: a connected
//             network of 1000+ mills by 2030, becoming the world's largest milling
//             ecosystem.
//             <br />
//             <span className="extra_text">
//               “We are not just upgrading mills. We are building the operating
//               system for global flour milling.”
//             </span>
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

import "./Mavian.css";
import WonderMillImg from "../../assets/2026.jpg";

export default function Mavian() {
  return (
    <div className="mavian-page">
      <section className="mavian-section">
        <div className="mavian-container">

          <div className="mavian-image">
            <img src={WonderMillImg} alt="Mavian ProMiller" />
          </div>

          <div className="mavian-content">

            <span className="mavian-subtitle">
              ABOUT MAVIAN
            </span>

            <h2>Mavian ProMiller</h2>

            <p>
              Mavian ProMiller is a next-generation, technology-driven platform
              that turns traditional flour mills into high-efficiency, scalable,
              and profitable operations — without asking the mill owner to invest
              a rupee upfront. Backed by RS Choyal Group's engineering expertise,
              ProMiller replaces outdated chakki technology with advanced
              WonderMill systems, paired with a smart digital layer for
              monitoring, safety, and reporting. In return for funding and
              installing the upgrade, ProMiller shares in the additional value it
              creates — so the mill only pays out of the extra profit the upgrade
              generates, never from existing cash flow. The vision: a connected
              network of 1000+ mills by 2030, becoming the world's largest milling
              ecosystem.
              <br /><br />
              <span className="extra_text">
                “We are not just upgrading mills. We are building the operating
                system for global flour milling.”
              </span>
            </p>

          </div>

        </div>
      </section>
    </div>
  );
}
