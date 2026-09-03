import "./csmt.css";
import csmt from "../../assets/csmt.webp";

export default function Mavian() {
  return (
    <div className="mavian-page">
      <section className="mavian-section">
        <div className="mavian-container">

          <div className="mavian-image">
            <img src={csmt} alt="Mavian ProMiller" />
          </div>

          <div className="mavian-content">

            <span className="mavian-subtitle">
              ABOUT CSMT
            </span>

            <h2>Choyal School of Milling Technology</h2>

            <p>
             CSMT (Choyal School of Milling Technology) is a premier institute
            dedicated to technical education, skill development, and
            professional training in Flour Milling and Grain Processing.
            Operating under the guidance of Choyal Grinding Solution Private
            Limited, a part of the R.S. Choyal Group, CSMT is backed by over 60
            years of excellence in flour milling technology, manufacturing, and
            exports since 1966. We offer industry-oriented technical courses,
            hands-on practical training, seminars, workshops, and on-the-job
            learning programs for students, entrepreneurs, and industry
            professionals. Our state-of-the-art training centre and live
            industrial training facility in Arjunpura, Ajmer, Rajasthan, provide
            real-world exposure to modern milling technologies, enabling
            participants to build practical expertise and successful careers in
            the global food processing and milling industry.
            <br />
            <br/>
            
              <a
                href="https://www.csmt.in"
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
    </div>
  );
}
