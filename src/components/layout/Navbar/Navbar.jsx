import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import loogo from "../../../assets/promiller_logo.png";
import { Link } from "react-router-dom";

import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NAV_ITEMS = [
  {
    label: "About",
    dropdown: [
      {
        label: "About RS Choyal Group",
        path: "/about-rs-choyal-group",
      },
      {
        label: "About Director",
        path: "/director",
      },
      {
        label: "About Mavian Pro Miller",
        path: "/mavian",
      },
      {
        label: "About CSMT",
        path: "/csmt",
      },
      {
        label: "About Charge",
        path: "/charge",
      },
    ],
  },

  {
    label: "Products and Services",
    path: "/products-services",
  },

  {
    label: "Technologies",
    path: "/technologies",
  },

  {
    label: "Operations",
    path: "/operations",
  },

  {
    label: "Modules",
    dropdown: [
      {
        label: "Milling Calculators",
        path: "/calculator",
      },
      {
        label: "Grain Circle ERP",
        path: "/GrainCircle",
      },
    ],
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const dropdownTimer = useRef(null);

  // Cleanup timer
  useEffect(() => {
    return () => clearTimeout(dropdownTimer.current);
  }, []);

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileOpen(false);
        setMobileDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleEnter = (label) => {
    clearTimeout(dropdownTimer.current);
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="navbar__topbar">
        <div className="navbar__topbar-inner">
          {/* CONTACT DETAILS */}
          <div className="navbar__topbar-left">
            <a href="tel:18001801234" className="navbar__contact-link">
              <CallIcon />
              <span>1800-180-1234</span>
            </a>

            <span className="navbar__topbar-divider">|</span>

            <a
              href="mailto:promiller@support.com"
              className="navbar__contact-link"
            >
              <MailIcon />
              <span>promiller@support.com</span>
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="navbar__topbar-right">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="navbar__topbar-social"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="navbar__topbar-social"
            >
              <XIcon />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="navbar__topbar-social"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="navbar__inner">
          {/* LOGO */}
          <Link to="/" className="navbar__logo">
            <img
              src={loogo}
              alt="ProMiller Logo"
              className="navbar__logo-image"
            />
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="navbar__nav">
            <ul className="navbar__list">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="navbar__item"
                  onMouseEnter={
                    item.dropdown ? () => handleEnter(item.label) : undefined
                  }
                  onMouseLeave={item.dropdown ? handleLeave : undefined}
                >
                  {/* DROPDOWN ITEM */}
                  {item.dropdown ? (
                    <>
                      <button
                        className="navbar__link navbar__link--dropdown"
                        type="button"
                      >
                        <span>{item.label}</span>

                        <KeyboardArrowDownIcon className="navbar__arrow" />
                      </button>

                      <ul
                        className={`navbar__dropdown ${
                          openDropdown === item.label
                            ? "navbar__dropdown--open"
                            : ""
                        }`}
                      >
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              to={sub.path}
                              className="navbar__dropdown-link"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : item.path ? (
                    /* NORMAL LINK */
                    <Link to={item.path} className="navbar__link">
                      {item.label}
                    </Link>
                  ) : (
                    <button className="navbar__link" type="button">
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* ================= DESKTOP LOGIN ================= */}
          <Link to="/login" className="navbar__login-btn">
            Login
          </Link>

          {/* ================= MOBILE BURGER ================= */}
          <button
            className={`navbar__burger ${
              mobileOpen ? "navbar__burger--open" : ""
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`navbar__mobile ${
            mobileOpen ? "navbar__mobile--open" : ""
          }`}
        >
          <ul className="navbar__mobile-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {/* MOBILE DROPDOWN */}
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label,
                        )
                      }
                    >
                      <span>{item.label}</span>

                      <KeyboardArrowDownIcon
                        className={`navbar__mobile-arrow ${
                          mobileDropdown === item.label
                            ? "navbar__mobile-arrow--open"
                            : ""
                        }`}
                      />
                    </button>

                    {mobileDropdown === item.label && (
                      <ul className="navbar__mobile-dropdown">
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              to={sub.path}
                              className="navbar__dropdown-link"
                              onClick={closeMobileMenu}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : item.path ? (
                  /* MOBILE NORMAL LINK */
                  <Link
                    to={item.path}
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button type="button">{item.label}</button>
                )}
              </li>
            ))}

            {/* ================= MOBILE LOGIN ================= */}
            <li className="navbar__mobile-login-wrapper">
              <Link
                to="/login"
                className="navbar__mobile-login"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>

          {/* MOBILE SOCIAL ICONS */}
          <div className="navbar__mobile-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="navbar__topbar-social"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="navbar__topbar-social"
            >
              <XIcon />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="navbar__topbar-social"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
