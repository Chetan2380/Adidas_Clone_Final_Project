import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Mens/Mens.css";
import { HiArrowLongRight } from "react-icons/hi2";

const Mens = () => {
  return (
    <div>
        <Navbar/>
        <div className='supernovarise2'>
            <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_supernova_running_ss25_early_access_mglp_banner_hero_d_78b800effe.jpg'/>
            <div id="supernovarise2text1">
                <p>SUPERNOVA RISE 2</p>
            </div>
            <div id="supernovarise2text2">
              <p>Running is never easy, but with the Supercomfort of</p>
            </div>
            <div id="supernovarise2text3">
              <p>Supernova, it's always nice.</p>
            </div>
            <div id="supernovarise2shopnow">
                <div><p>SHOP NOW</p></div> <div><HiArrowLongRight  style={{color: "black", fontSize: "26px", fontWeight:"500px"}}/></div>
                </div>
                <div id="supernovarise2shopnow2"></div>
            </div>
        </div>
  )
}

export default Mens