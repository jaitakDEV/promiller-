import "./charge.css";
import WonderMillImg from "../../assets/charge.JPG";

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
              ABOUT  CHARGE
            </span>

            <h2>Choyal Hub for Agribusiness, Research, Growth &
            Entrepreneurship</h2>

            <p>
              CHARGE (Choyal Hub for Agribusiness, Research, Growth &
            Entrepreneurship) is the evolved form of CSMT (Choyal School of
            Milling Technology), established to create skilled professionals and
            entrepreneurs for the agribusiness and food processing industry. A
            CSR initiative of the R.S. Choyal Group, CHARGE operates on a
            no-profit, no-loss basis and is dedicated to bridging the gap
            between education, industry, and innovation through certified
            training, applied research, incubation, seminars, workshops, and
            on-the-job technical programs. Backed by the R.S. Choyal Group’s
            legacy of manufacturing since 1966 and exports since 1970, CHARGE is
            committed to advancing India’s agribusiness ecosystem by promoting
            skill-oriented technical education and sustainable industry growth
            from its training centre in Arjunpura, Ajmer, Rajasthan.
            <br />
            <br/>
            
              <a
                href=" https://charge.org.in"
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
