import React from 'react';
import { MdCheck } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import './Login.css'; 
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Login = () => {
  return (
    <div>
        <Navbar/>
        <div className="login-container">
        <div className='login-left'>
            <img src="https://www.adidas.co.in/glass/react/ad3ce49/assets/img/account-portal-page-inline.png" alt="adiclub visual" />
            <div className='join-club'>
            <h1>JOIN THE CLUB. GET REWARDED.</h1>
            <p>JOIN ADICLUB. GET REWARDED TODAY.</p>
            <ul>
                <li><MdCheck /> Free delivery</li>
                <li><MdCheck /> A 10% off voucher for your next purchase</li>
                <li><MdCheck /> Access to Members Only products and sales</li>
                <li><MdCheck /> Access to adidas Running</li>
                <li><MdCheck /> Special offers and promotions</li>
            </ul>
            <p className="join-description">
                Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.
            </p>
            </div>
        </div>

        <div className='login-right'>
            <img className='adiclub-logo' src="https://account-frontends.adidas.com/_astro/adiclub-blue-desktop.CG118tV1.svg" alt="adiclub logo" />
            <h2>YOUR ADICLUB BENEFITS AWAIT</h2>
            <p className="subtext">Get free shipping, discount vouchers and members only products when you're in adiClub.</p>
            <strong>Log in or sign up (it’s free)</strong>

            <div className='social-icons'>
            <a href="http://localhost:8000/api/v1/auth/google"><button><FcGoogle /></button></a>
            <button><FaFacebook /></button>
            <button><BsApple /></button>
            </div>

            <input type='text' className='input-field' placeholder='EMAIL ADDRESS or PHONE NUMBER *' />

            <div className='checkbox-group'>
                <label>
                    <input type='checkbox' />
                    <span>
                    I would like to stay up to date with adidas. I agree to receive personalised marketing messages from adidas India Marketing Pvt. Ltd. <a href="#">Read more</a>
                    </span>
                </label>
                <label>
                    <input type='checkbox' />
                    <span>
                    I have read and accepted the <a href="#">Terms & Conditions</a>, the <a href="#">adiClub Terms & Conditions</a> and the adidas <a href="#">Privacy Policy</a>. *
                    </span>
                </label>
                <label>
                    <input type='checkbox' defaultChecked />
                    <span>
                    Keep me logged in. Applies to all options. <br />
                    <a href="#">More info</a>
                    </span>
                </label>
            </div>
            <div id="continue">
            <div><p>CONTINUE</p></div>
            <div><HiArrowLongRight style={{ color: "white", fontSize: "26px", fontWeight: "500" }} /></div>
            </div>
            <div id="continue2"></div>
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Login;
