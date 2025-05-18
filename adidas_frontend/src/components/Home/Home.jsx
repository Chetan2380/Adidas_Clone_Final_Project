import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Home/Home.css"
import { HiArrowLongRight } from "react-icons/hi2";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='findyoursummerlook'>
            <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/HP_MH_1_10ebaf5c6d.jpg'/>
            <div id="summercolltext1">
              <p>SUMMER COLLECTION</p>
            </div>
            <div id="summercolltext2">
              <p>Amp Your Style - It's Time to Shine</p>
            </div>
            <div id="summercollshopnow">
              <div><p>SHOP NOW</p></div> <div><HiArrowLongRight  style={{color: "black", fontSize: "26px", fontWeight:"500px"}}/></div>
            </div>
            <div id="summercollshopnow2"></div>
        </div>

        <div id="shopbestofsum">
          <div id="shopbestofsumtext1">
            <p>Shop Best of Summer</p>
          </div>
          <div id="shopbestofsumimgs">
            <div class="shopbestofsumimg-wrapper">
              <div class="shopbestofsumimg" id="shopbestofsumimg1"></div>
              <div class="shopbestofsumimgtext1">Shorts</div>
            </div>
            <div class="shopbestofsumimg-wrapper">
              <div class="shopbestofsumimg" id="shopbestofsumimg2"></div>
              <div class="shopbestofsumimgtext2">T-Shirts</div>
            </div>
            <div class="shopbestofsumimg-wrapper">
              <div class="shopbestofsumimg" id="shopbestofsumimg3"></div>
              <div class="shopbestofsumimgtext3">Slides</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home