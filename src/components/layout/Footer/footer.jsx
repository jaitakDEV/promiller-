import "./footer.css";
import logo from "../../../assets/mavianlogo.png";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import SupportButton from "../SupportButton/SupportButton";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__column">
          <h2>Promiller</h2>
          <p>
            Delivering advanced flour milling solutions with innovation,
            reliability, and engineering excellence. Empowering businesses
            with world-class milling technology.
          </p>
        </div>

        <div className="footer__column">
          <h3>Quick Links</h3>
          <ul>
            <li>Products and Services</li>
            <li>Technologies</li>
            <li>Operations</li>
            <li>Modules</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Locations & Contact</h3>

          <div className="footer__contact-item">
            <LocationOnIcon className="footer__icon" />
            <div>
              <strong>Corporate Headquarters</strong>
              <p>
                Choyal Tower 1180/28, Shalimar Colony, Adarsh Nagar, Ajmer, Rajasthan 305008
              </p>
            </div>
          </div>

          <div className="footer__contact-item">
            <LocationOnIcon className="footer__icon" />
            <div>
              <strong>Factory Unit</strong>
              <p>
                Arjunpura – Khalsa, Distt. Ajmer (Raj.)
              </p>
            </div>
          </div>

          <div className="footer__contact-link">
            <CallIcon className="footer__icon" />
            <span>+91 92402 89259</span>
          </div>

          <div className="footer__contact-link">
            <MailIcon className="footer__icon" />
            <span>info@promiller.com</span>
          </div>

          <div className="footer__contact-link">
            <LanguageIcon className="footer__icon" />
            <span>www.promiller.com</span>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="footer__copyright">
          © Copyright Promiller. All Rights Reserved.
        </div>
        <div className="footer__logo">
          <img src={logo} alt="Promiller Logo" />
        </div>
      </div>
        <SupportButton mobileFooter />
    </footer>
  );
}
