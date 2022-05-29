import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Trabook</div>
        <ul className="ul">
          {["Home", "About", "Destination", "Tour", "Blog"].map((item) => (
            <li key={`link-${item}`}>{item}</li>
          ))}
        </ul>
        <div className="top-buttons">
          <div className="btn1">Login</div>
          <div className="btn2">Sign up</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
