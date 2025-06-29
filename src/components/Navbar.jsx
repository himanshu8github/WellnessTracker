import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Wellness Tracker</div>
      <div className="navbar-links">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item">Services</a>
        <a href="#" className="nav-item">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
