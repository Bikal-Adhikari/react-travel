import logo from "../assets/TOUR_Travel.png";
import { socialLinks } from "../data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img
              src={logo}
              className="nav-logo"
              alt="Tour-travel"
              height="100px"
            />
          </a>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-link">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-link">
            <Link to="/tours">Tours</Link>
          </li>
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
