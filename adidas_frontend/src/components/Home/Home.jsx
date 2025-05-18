import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "../Home/Home.css"
import { HiArrowLongRight } from "react-icons/hi2";
import { PiHeartStraight } from "react-icons/pi";

const Home = () => {
  const[buyshoes,setBuyshoes]=useState([{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/5e0cf73d9a964b248bb16bb4d317db29_9366/Lightblaze_Shoes_Kids_White_JQ4758_00_plp_standard.jpg",price:"5 999",title:"Lightblaze Shoes Kids",category:"Sportswear"},
{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/fc2836b180ad44dca55d0663c54b2536_9366/Lightblaze_Shoes_Kids_White_JQ4760_HM1.jpg",price:"5 999",title:"Lightblaze Shoes Kids",category:"Sportswear"},
{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/b005c3f3edc34ea188bc22c5c057c700_9366/Response_Runner_Shoes_Black_IH6100_HM1.jpg",price:"5 999",title:"Lightblaze Shoes Kids",category:"Performance"},
{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/185464564aff4ba58003c3b6a049ec30_9366/Lightblaze_Shoes_Kids_Black_JQ4757_HM1.jpg",price:"5 999",title:"Lightblaze Shoes Kids",category:"Sportswear"},
{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/4fde53776ca64e6f98209fd5ac4166d2_9366/Response_Runner_Shoes_Black_JR8058_HM1.jpg",price:"5 999",title:"Response Runner Shoes",category:"Performance"},
{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/1cbb2fe9a2794755817a32e974698c60_9366/Gluxury_I_Green_JJ6336_00_plp_standard.jpg",price:"2 499",title:"Gluxury I",category:"Performance"},
{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/c0353bb6408c4c59a40f87be0d856af2_9366/Gluxury_I_Grey_JJ6337_00_plp_standard.jpg",price:"2 499",title:"Gluxury I",category:"Performance"},
{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/aeb3f14e6a5e40468b90620cd2f8ca7a_9366/BISE_PROTOP_FLIP_FLOP_M_Grey_JK2157_00_plp_standard.jpg",price:"1 299",title:"BISE PROTOP FLIP FLOP M",category:"Sportswear"},
{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/4020c7b4b1784cdbb95f2afb3309b759_9366/AQUO_SLIP_ON_M_Blue_JK2113_00_plp_standard.jpg",price:"1 799",title:"AQUO SLIP ON M",category:"Sportswear"},
{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/1d09074e55e2448c8cc69725956bb553_9366/BASIC_RUN-WAVE_Black_JK0841_00_plp_standard.jpg",price:"3 799",title:"BASIC RUN-WAVE",category:"Performance"},
{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/b83c150240c345578e5990739b0ed710_9366/BASIC_RUN-WAVE_Blue_JK0840_00_plp_standard.jpg",price:"3 799",title:"BASIC RUN-WAVE",category:"Performance"},
{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/511c0b159b1c4c18ad0e77d84fead21f_9366/BASIC_RUN-WAVE_White_JK0839_00_plp_standard.jpg",price:"3 799",title:"BASIC RUN-WAVE",category:"Performance"}])
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

        <div className='buytwoormoreshoes'>
          <div className='buytwoormoreshoestext'>
            <div className='buytwoormoreshoestext1'>BUY 2 OR MORE, SAVE AN EXTRA 20%!</div>
            <div className='buytwoormoreshoestext2'>See all</div>
          </div>
          <div className='shoeclothaccess'>
            <div className='shoes'>SHOES</div>
            <div className='clothing'>CLOTHING</div>
            <div className='accessories'>ACCESSORIES</div>
          </div>
          <div className="shoelist-wrapper">
            {buyshoes.map((buymoreshoes) => (
              <div className="differentshoes">
                <div className="diffrentshoesimg">
                  <img src={buymoreshoes.itemimg} />
                  <div id="heart">
                    <PiHeartStraight style={{ color: "black", fontSize: "22px", fontWeight: "500" }} />
                  </div>
                </div>
                <div className="differentshoesprice">₹{buymoreshoes.price}</div>
                <div className="differentshoestitle">{buymoreshoes.title}</div>
                <div className="differentshoescategory">{buymoreshoes.category}</div>
              </div>
            ))}
          </div>

        </div>
    </div>
  )
}

export default Home