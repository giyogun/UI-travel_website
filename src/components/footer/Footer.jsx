import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  const [inFocus, setInFocus] = useState(false);
  return (
    <footer className="footer">
      <div className="subscribe">
        <div className="circles">
          <img src={images.elipse} alt="" />
          <img src={images.elipse1} alt="" />
          <img src={images.elipse2} alt="" />
          <img src={images.elipse3} alt="" />
          <img src={images.elipse4} alt="" />
          <img src={images.elipse5} alt="" />
        </div>
        <h1>Subscribe and get exciting deals & offers</h1>
        <div className="email-input">
          <input
            type="email"
            onChange={(e) => {
              const enteredText = e.target.value;
              if (enteredText.trim() === "") {
                setInFocus(false);
              } else setInFocus(true);
            }}
          />
          {!inFocus && <span className="placeholder">Enter your email</span>}
          {!inFocus && (
            <div className="email-icon">
              <AiOutlineMail />
            </div>
          )}
          <button type="button" className="sub-btn">
            Subscribe
          </button>
        </div>
      </div>

      <div className="footer-resources">
        <div className="trabook">
          <h4>Trabook</h4>
          <p>Book your trip in minute, get full Control for much longer.</p>
          <div className="socials">
            <div className="social-container">
              <FaLinkedin />
            </div>
            <div className="social-container">
              <FaTwitter />
            </div>
            <div className="social-container">
              <FaFacebookF />
            </div>
          </div>
        </div>

        <div className="links">
          <h5>Company</h5>
          <li>About</li>
          <li>Careers</li>
          <li>Logistics</li>
          <li>Privacy & Policy</li>
        </div>

        <div className="links">
          <h5>Contact</h5>
          <li>Help/FAQ</li>
          <li>Press</li>
          <li>Affiliates</li>
        </div>

        <div className="links">
          <h5>More</h5>
          <li>Press Centre</li>
          <li>Our Blog</li>
          <li>Low fare tips</li>
        </div>
      </div>
      <hr />

      <div className="bottom">
        <span>Copyright, Trabook 2022. All rights reserved.</span>
        <span>Terms & Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
