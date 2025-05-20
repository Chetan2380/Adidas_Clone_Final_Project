import React from 'react';
import './LoginPopup.css';
import { RxCross2 } from 'react-icons/rx';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

const LoginPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="login-popup">
        <button className="popup-close-btn" onClick={onClose}><RxCross2 size={24} /></button>
        <div className="popup-content">
          <img
            src="https://account-frontends.adidas.com/_astro/adiclub-blue-desktop.CG118tV1.svg"
            alt="adiClub"
            className="popup-adiclub-logo"
          />

          <h2 className="popup-heading">YOUR ADICLUB BENEFITS AWAIT</h2>
          <p className="popup-subtext">
            Get free shipping, discount vouchers and members only products when you’re in adiClub.
          </p>

          <p className="popup-signin-text"><strong>Log in or sign up (it’s free)</strong></p>

          <div className="popup-social-icons">
            <button><FcGoogle size={24} /></button>
            <button><FaFacebook size={24} /></button>
            <button><BsApple size={24} /></button>
          </div>

          <input
            type="text"
            className="popup-email-input"
            placeholder="EMAIL ADDRESS or PHONE NUMBER *"
          />

          <label className="popup-checkbox-container">
            <input type="checkbox" />
            <span>
              I would like to stay up to date with adidas. I agree to receive personalised marketing messages from adidas India Marketing Pvt. Ltd. <a href="#">Read more</a>
            </span>
          </label>

          <label className="popup-checkbox-container">
            <input type="checkbox" />
            <span>
              I have read and accepted the <a href="#">Terms & Conditions</a>, the <a href="#">adiClub Terms & Conditions</a> and the adidas <a href="#">Privacy Policy</a>. *
            </span>
          </label>

          <label className="popup-checkbox-container">
            <input type="checkbox" checked readOnly />
            <span>
              Keep me logged in. Applies to all options. <a href="#">More info</a>
            </span>
          </label>

          <button className="popup-continue-btn">CONTINUE <span>&rarr;</span></button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
