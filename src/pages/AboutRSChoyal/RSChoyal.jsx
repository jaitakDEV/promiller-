import "./RSChoyal.css";

import director from "../../assets/author.JPG";
import factory from "../../assets/vibhuti.jpg";

export default function Director() {
  return (
    <div className="director-page">

      {/* ABOUT DIRECTOR */}

      <section className="director-section">
        <div className="director-container">

          <div className="director-image">
            <img src={director} alt="Director" />
          </div>

          <div className="director-content">

            <h2>Mr. R. S. Choyal</h2>

            <div className="director-info">
              <p className="director-role">
                Chairman &amp; Managing Director
              </p>

              {/* <p className="director-company">
                Choyal Grinding Solution Pvt. Ltd.
              </p> */}
            </div>

            <p>
              R.S. Choyal is the driving force behind RS Choyal Group's
              transformation of the milling industry. Over decades, he has led
              275+ turnkey projects and established food parks and processing
              plants across the globe. Beyond business, he is a TEDx speaker
              who shares his journey on entrepreneurship and personal growth,
              and remains focused on strengthening the milling industry while
              helping others reach their own potential.
              <br />
              <br/>

              {/* <span className="bold-text">
                Know more about RS Choyal:
              </span>{" "} */}

              <a
                href="https://www.rschoyal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="director-btn"
              >
                Know More 
              </a>
            </p>

          </div>

        </div>
      </section>

      {/* ABOUT VIBHUTI */}

      <section className="director-section">

        <div className="director-container reverse">

          <div className="director-content">

            <h2>Vibhuti Choyal</h2>

            <div className="director-info">
              <p className="director-role">
                Director
              </p>

              {/* <p className="director-company">
                CHARGE (Choyal Hub for Agribusiness, Research, Growth &
                Entrepreneurship)
              </p> */}
            </div>

            <p>
              Vibhuti Choyal brings a design-led, global perspective to the
              Choyal legacy. She holds a Master's degree from the Glasgow
              School of Art and has worked across service design, UX, and
              innovation — including roles at Designit and on projects spanning
              fintech and defense-tech UX in the UK.

              Within the family business, she served as Manager at RS Choyal
              Group, and went on to found Floura, a farm-to-table fresh flour
              venture built on Choyal's patented fresh-flour grinding and
              vending technology, producing custom-ground flour in as little as
              6 minutes.

              She is also a Director at Mavian Agritech Ltd, an Advisory Board
              Member at IAMTHECODE Foundation, and a Curator with the Global
              Shapers Community (World Economic Forum), Ajmer Hub.

              Her work bridges Choyal's six decades of milling engineering with
              modern design thinking—bringing the same product and
              user-experience rigor to ProMiller's digital tools that she's
              applied across international design and innovation projects.
            </p>

          </div>

          <div className="director-image">
            <img src={factory} alt="Vibhuti Choyal" />
          </div>

        </div>

      </section>

    </div>
  );
}