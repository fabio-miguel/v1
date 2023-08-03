import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Close the mobile navbar when the location changes (e.g., when clicking on a link)
    setNav(false);
  }, [location]);

  const isHomePage = location.pathname === "/"; // "/" is the home page path

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              {isHomePage ? (
                <Link smooth to="/#top" onClick={openNav}>
                  HOME
                </Link>
              ) : (
                <Link to="/" onClick={openNav}>
                  HOME
                </Link>
              )}
            </li>
            <li>
              <Link smooth to="/#projects" onClick={openNav}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link smooth to="/#services" onClick={openNav}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link smooth to="/#about" onClick={openNav}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link smooth to="/#contact" onClick={openNav}>
                LET'S WORK <i className="fa-regular fa-lightbulb"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="logo-container">
          {isHomePage ? (
            <Link smooth to="/#hero">
              <h3>FM*</h3>
            </Link>
          ) : (
            <Link to="/">
              <h3>FM*</h3>
            </Link>
          )}
        </div>

        <ul className="navbar-links">
          <li>
            <Link smooth to="/#projects">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link smooth to="/#services">
              SERVICES
            </Link>
          </li>
          <li>
            <Link smooth to="/#about">
              ABOUT
            </Link>
          </li>
          <li>
            <a href="mailto:info@fabiomiguel.com">
              LET'S WORK <i className="fa-regular fa-lightbulb"></i>
            </a>
          </li>
        </ul>

        {/* mobile */}
        <div className="mobile-hamb" onClick={openNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
