import React, { useState } from 'react';
import './SingleProduct.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { IoCheckmark } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { ImLoop } from "react-icons/im";
import { CiDiscount1 } from "react-icons/ci";

const SingleProduct = () => {
    const [transformOrigin, setTransformOrigin] = useState('center');

const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - left; 
    const offsetY = e.clientY - top;

    // Calculate percentage of mouse position in the image
    const xPercent = (offsetX / width) * 100;
    const yPercent = (offsetY / height) * 100;

    // Set transform origin based on mouse position for zoom effect
    setTransformOrigin(`${xPercent}% ${yPercent}%`);
  };

  const handleMouseLeave = () => {
    // Reset transform origin when the mouse leaves the image
    setTransformOrigin('center');
  };
  return (
    <div>
        <Navbar/>
    <div className="single-product-container">
      {/* Left Section */}
      <div className="product-left">
        <div className="product-image-grid">
          <div 
  className="image-box"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  <img 
    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/2bfa8dc0fd61470da9aa7cec528667dd_9366/Response_Runner_Shoes_White_IH6106_01_00_standard.jpg"
    alt="product"
    style={{ transformOrigin }}
  />
</div>
          <div 
  className="image-box"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  <img 
    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/2bfa8dc0fd61470da9aa7cec528667dd_9366/Response_Runner_Shoes_White_IH6106_01_00_standard.jpg"
    alt="product"
    style={{ transformOrigin }}
  />
</div>
          <div 
  className="image-box"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  <img 
    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/2bfa8dc0fd61470da9aa7cec528667dd_9366/Response_Runner_Shoes_White_IH6106_01_00_standard.jpg"
    alt="product"
    style={{ transformOrigin }}
  />
</div>
          <div 
  className="image-box"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  <img 
    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/2bfa8dc0fd61470da9aa7cec528667dd_9366/Response_Runner_Shoes_White_IH6106_01_00_standard.jpg"
    alt="product"
    style={{ transformOrigin }}
  />
</div>
        </div>
      </div>

      {/* Right Section */}
      {/* Right Section */}
        <div className="product-right">
        {/* Product Summary (Right Section Top) */}
        <div className="product-summary">
            <p className="category">Running</p>
            <h2 className="title">Response Runner Shoes</h2>
            <h3 className="price">₹5,599.00</h3>
            <p className="tax-info">MRP in Indian currency per pair<br />Inclusive of all taxes</p>
            <p className="offer">
            Buy 2 or more & get an extra 20% off this item. Offer applies to selected products only. <a href="#">SHOP HERE</a>
            </p>
        </div>

        {/* Voucher */}
        <div className="voucher">
            <p className="section-heading">Your adiClub voucher</p>
            <p className="voucher-code">VOUCHER 10% OFF</p>
            <button className="copy-btn">Copy Code</button>
        </div>

        {/* Sizes */}
        <div className="sizes">
            <p className="section-heading">Sizes</p>
            <div className="size-grid">
            {["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13.5"].map(size => (
                <div key={size} className="size-box">{size}</div>
            ))}
            </div>
            <p className="fit-info">True to size. We recommend ordering your usual size.</p>
        </div>

        {/* Buttons */}
        <div className="buttons">
            <button className="add-to-bag">Add To Bag</button>
            <button className="wishlist">Add to Wishlist</button>
        </div>

        {/* Delivery Info */}
        <div className="delivery-info">
            <p><TbTruckDelivery style={{marginRight:"10px"}}/><strong>Free Delivery, Free Returns</strong></p>
            <p><TbTruckDelivery style={{marginRight:"10px"}}/>Delivery: Delhi, Gurgaon: 1-2 Days, Metro cities: 2-3 days, Others: 3-5 days</p>
            <p><IoCheckmark style={{marginRight:"10px"}}/>COD available for orders below ₹5000</p>
            <p><ImLoop style={{marginRight:"10px"}}/>Secure transactions with hassle free 14 days Exchange and Returns</p>
            <p><CiDiscount1 style={{marginRight:"10px"}}/>Save 5% on all Online Payments under Rs 5000/-</p>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SingleProduct;
