import React from "react";
import logo from "../assets/logo.svg";
import { socialLinks } from "../data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          <li>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" >
              About
            </Link>
          </li>
          <li>
            <Link to="/services" >
              Services
            </Link>
          </li>
          <li>
            <Link to="/tours" >
              Tours
            </Link>
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
