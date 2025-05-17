import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { PiHeartStraight } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import "../Navbar/Navbar.css"

const Navbar = () => {
    const router=useNavigate();
  return (
    <div>
        <div className="Navbar">
            <div className="Navbar1">FREE DELIVERY, RETURN & EXCHANGE<span><FaAngleDown /></span></div>
        </div>
        <div className="Navbar2">
                <div className="leftNavbar2">
                    <div id='leftnavbarimg' onClick={()=>router("/")}><img alt="icon" src="https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg"/></div>
                    <div className='leftNavbar2_1'>
                        <span>SHOES</span>
                        <span onClick={()=>router("/mens")}>MEN</span>
                        <span>WOMEN</span>
                        <span>KIDS</span>
                        <span>SPORTS & LIFESTYLE</span>
                        <span>OUTLET</span>
                    </div>
                </div>
                <div className="rightNavbar2">
                    <div className='rightNavbar2_1'>
                        <span>help</span>
                        <span>orders and returns</span>
                        <span>sign up</span>
                        <span>log in</span>
                    </div>
                    <div className='rightNavbar2_2'>
                        <div className="search">
                            <span>Search</span><IoSearch style={{color: "black", fontSize: "22px", fontWeight:"500px"}}/>
                        </div>
                        <div className="cartprof">
                            <div onClick={()=>router("/login")}><h3><RiUser3Line  style={{color: "black", fontSize: "22px", fontWeight:"500px"}}/></h3></div>
                            <div><PiHeartStraight  style={{color: "black", fontSize: "22px", fontWeight:"500px"}}/></div>
                            <div onClick={()=>router("/cart")}><MdOutlineShoppingBag  style={{color: "black", fontSize: "22px", fontWeight:"500px"}}/></div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar