import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { PiHeartStraight } from "react-icons/pi";
import { GoCheckCircle } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";
import "../Cart/Cart.css";

const Cart = () => {
  const [toppicks] = useState([
    {
      imgitem: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_00_standard.jpg",
      price: "₹10 999.00",
      title: "Samba OG Shoes"
    },
    {
      imgitem: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4c70105150234ac4b948a8bf01187e0c_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg",
      price: "₹10 999.00",
      title: "Samba OG Shoes"
    },
    {
      imgitem: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4659ee058ba34bd2a5d0af500104c17d_9366/Campus_00s_Shoes_Black_HQ8708_01_standard.jpg",
      price: "₹10 999.00",
      title: "Campus 00s Shoes"
    },
    {
      imgitem: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4659ee058ba34bd2a5d0af500104c17d_9366/Campus_00s_Shoes_Black_HQ8708_01_standard.jpg",
      price: "₹8 999.00",
      title: "Gazelle Shoes"
    }
  ]);

  return (
    <div className='cart-container'>
      {/* Left Section */}
      <div className='cartleft'>
        <div className='username'>
          <p>User name from database</p>
        </div>

        <div className='yourbag'>
          <p>YOUR BAG</p>
          <p><span>TOTAL (1 item) ₹ 5 999.00</span></p>
          <p>Items in your bag are not reserved — check out now to make them yours.</p>
        </div>

        <div className='buy2getextra'>
          <p>BUY 2 GET EXTRA 20% OFF!</p>
          <p>Get an extra 20% off when you buy 2 or more selected items</p>
          <p><u>SHOP HERE</u></p>
        </div>

        <div className='product-card'>
          <div className='product-card-left'>
            <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/fa68e9d5930c4f0db2832cef8f50d7ed_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DRIVER_JERSEY_JW5362_HM1.jpg?sh=364&strip=false&sw=364' alt='product' />
          </div>
          <div class="product-card-right">
            <div class="title-price-row">
                <div class="product-title">
                    <p>MERCEDES - AMG PETRONAS FORMULA ONE TEAM DRIVER JERSEY</p>
                    <div class="product-color">BLACK / WHITE</div>
                    <div class="product-size">SIZE: L</div>
                </div>
                

                <div class="price-cross-heart">
                    <div class="price">₹5,999.00</div>
                    <div class="cross-heart">
                        <RxCross2 size={24} />
                        <PiHeartStraight style={{ color: "black", fontSize: "22px", fontWeight: "500" }} />
                    </div>
                </div>
                </div>

                <div class="product-info">
                    <div class="quantity">
                        <span>1</span>
                        <span><FaAngleDown /></span>
                    </div>
                </div>
            </div>
        </div>

        {/* Top Picks */}
        <div className='toppicksforyou'>
          <div className='toppicksforyoutext'>
            <p>TOP PICKS FOR YOU</p>
          </div>
          <div className='toppicksforyouimages'>
            {toppicks.map((item, index) => (
              <div className='toppicksforyouimg' key={index}>
                <div className="toppick-img-container">
                    <img src={item.imgitem} alt={item.title} />
                    <PiHeartStraight className="heart-icon" />
                    <p className="price-overlay">{item.price}</p>
                </div>
                <p>{item.title}</p>
                </div>
            ))}
          </div>
        </div>

        <div className='freedelretsafe'>
          <p><GoCheckCircle /><span>Free Delivery</span></p>
          <p><GoCheckCircle /><span>14* Days Free Returns & Exchange</span></p>
          <p><GoCheckCircle /><span>Safe & Secure Payment Options</span></p>
        </div>
      </div>

      {/* Right Section */}
      <div className='cart-right'>
        <p>ORDER SUMMARY</p>
        <div className='order-summary'>
          <div className='order-summary-left'>
            <p>1 item</p>
            <p>Delivery</p>
            <p>Total</p>
            <p>(Inclusive of all taxes)</p>
          </div>
          <div className='order-summary-right'>
            <p>₹5 999.00</p>
            <p>Free</p>
            <p>₹5 999.00</p>
          </div>
        </div>

        <div className='promo-code'>
          <img src='https://www.adidas.co.in/static/checkout/react/7235cad/assets/img/illustrations/promo-code.svg' alt='Promo' />
          <span>USE A PROMO CODE</span>
        </div>

        <div id="checkout">
            <div>CHECKOUT</div>
            <div><HiArrowLongRight style={{ fontSize: "26px" }} /></div>
        </div>
        <div className='checkout2'></div>


        <div className='payment'>
          <div className='payments-text'>
            <p>Accepted payment methods</p>
          </div>
          <div className='payment-methods'>
            <img src='https://www.adidas.co.in/static/checkout/react/7235cad/assets/img/accepted-payment-methods/icon-adidas-mastercard.svg' alt='MasterCard' />
            <img src='https://www.adidas.co.in/static/checkout/react/7235cad/assets/img/accepted-payment-methods/icon-adidas-visa.svg' alt='Visa' />
            <img src='https://www.adidas.co.in/static/checkout/react/7235cad/assets/img/accepted-payment-methods/icon-adidas-upi.svg' alt='UPI' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
