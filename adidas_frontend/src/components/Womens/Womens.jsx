import React, { useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "../Womens/Womens.css"
import { HiArrowLongRight } from "react-icons/hi2";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { PiHeartStraight } from "react-icons/pi";

const ITEMS_PER_PAGE = 4;
const cardWidth = 330;
const scrollStep = cardWidth * 4;
const Womens = () => {
  const [whathotitem1, setWhathotitem1] = useState([
      { itemimg: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/tc_2_2_6857c6a386.jpg", title: "Play your best Padel", desc: "Get ready for your next Padel session with the best from adidas.", category: "SHOP NOW" },
      { itemimg: "https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/TC_Gif_1050x1400_47a5f13a3c.gif", title: "Man Utd Bring Back", desc: "Wear the legacy of '91.", category: "Shop now" },
      { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_600,w_600/global_the_original_originals_ss25_sustain_hp_superstar_teaser_carousel_asset_m_e6ae649ffa.mp4", title: "The Original Superstar", desc: "From the court to the street.", category: "Shop now" },
      { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_600,w_600/global_move_for_the_planet_brand_ss25_introduce_onsite_tc_m_5f49084be2.mp4", title: "MOVE FOR THE PLANET", desc: "What places inspire you to move?", category: "Learn More" },
      { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_600,w_600/global_motorsports_motorsports_ss25_sustain_hp_catlp_glp_navigation_card_teaser_6_m_46decc9dc4.mp4", title: "Show Your Passion", desc: "The adidas x Mercedes-AMG PETRONAS F1 Fanwear collection.", category: "SHOP NOW" }
  ]);

  const[adimertop2,setAdimertop2]=useState([{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/c6685c449da440858d8070f09517bce2_9366/ADIDAS_FEROZA_BASE_MERCEDES_AMG_PETRONAS_F1_TEAM_SHOES_Black_JQ3273_00_plp_standard.jpg",price:"8 999.00",title:"ADIDAS FEROZA BASE MERCEDES AMG PETRONAS F1 TEAM SHOES",category:"Performance"},
    {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/233a605da4994eaea46a034c3c0a6ddb_9366/ADIDAS_FEROZA_MERCEDES_AMG_PETRONAS_F1_TEAM_SHOES_Black_JQ3272_00_plp_standard.jpg",price:"11 999.00",title:"ADIDAS FEROZA MERCEDES AMG PETRONAS F1 TEAM SHOES",category:"Performance"},
    {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/3196eaef74cd4bc99e64c96a6101f643_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_BARREDA_DECODE_SHOES_White_JR1062_00_plp_standard.jpg",price:"8 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM BARREDA DECODE SHOES",category:"Performance"},
    {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/fa68e9d5930c4f0db2832cef8f50d7ed_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DRIVER_JERSEY_Black_JW5362_HM1.jpg",price:"5 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DRIVER JERSEY",category:"Performance"},
    {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/576530afcded4345b7e4f384ac2cf016_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DRIVER_JERSEY_White_JX5799_HM1.jpg",price:"5 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DRIVER JERSEY",category:"Performance"},
    {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/aa7f38c86cb84f6aad047a454cafca08_9366/Mercedes_-_AMG_Petronas_Formula_One_Team_Acesmash_Mid_Shoes_Black_JS4078_00_plp_standard.jpg",price:"11 999.00",title:"Mercedes - AMG Petronas Formula One Team Acesmash Mid Shoes",category:"Performance"},
    {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/e0f24714edce438f9977be20e4dc8863_9366/Mercedes_-_AMG_Petronas_Formula_One_Team_Acesmash_Mid_Shoes_Beige_JR1060_00_plp_standard.jpg",price:"11 999.00",title:"Mercedes - AMG Petronas Formula One Team Acesmash Mid Shoes",category:"Performance"},
    {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/851a0178e98245eeab237ebd1c808bf1_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_MECHANICS_JERSEY_Black_JX8246_HM1.jpg",price:"5 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM MECHANICS JERSEY",category:"Performance"},
    {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/8c080f481bd74684a24c923d9978e716_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_POLO_Black_JX0759_000_plp_model.jpg",price:"6 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM POLO",category:"Performance"},
    {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/80554324f221480882c4ea93789c874a_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_POLO_White_JV5741_000_plp_model.jpg",price:"6 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM POLO",category:"Performance"},
    {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/a8dc908c0b1b49dfaacfe58a5110b44f_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_QUARTER_ZIP_Black_JX0744_HM1.jpg",price:"11 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM QUARTER ZIP",category:"Performance"},
    {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/7d62fe68b1aa48fd9ef4e1d356c8dd5b_9366/Mercedes_-_AMG_Petronas_Formula_One_Team_Premium_Woven_Track_Top_Grey_JY3071_000_plp_model.jpg",price:"6 999.00",title:"Mercedes - AMG Petronas Formula One Team Premium Woven Track Top",category:"Performance"}])
  
  const sliderRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(adimertop2.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const visibleClothes = adimertop2.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
    const nextPage = () => {
      if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };
  
    const prevPage = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 1);
    };
  
    const handleScroll = (direction) => {
      if (!sliderRef.current) return;
      const container = sliderRef.current;
  
      const scrollAmount = direction === "right" ? scrollStep : -scrollStep;
  
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
  
      setShowLeftArrow(container.scrollLeft + scrollAmount > 0);
    };

  return (
    <div>
      <Navbar/>

      <div className='supernovarise2_1'>
        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_supernova_running_ss25_early_access_fglp_banner_hero_d_1b2793ab1c.jpg' />
        <div id="supernovarise2_1text1">
          <p>SUPERNOVA RISE 2</p>
        </div>
        <div id="supernovarise2_1text2">
          <p>Running is never easy, but with the Supercomfort of</p>
        </div>
        <div id="supernovarise2_1text3">
          <p>Supernova, it's always nice.</p>
        </div>
        <div id="supernovarise2_1shopnow">
          <div><p>SHOP NOW</p></div>
          <div><HiArrowLongRight style={{ color: "black", fontSize: "26px", fontWeight: "500px" }} /></div>
        </div>
        <div id="supernovarise2_1shopnow2"></div>
      </div>

      <div className="whatshot3">
        <div className="whatshot3-header">
          <h2>WHAT'S HOT ?</h2>
        </div>

        <div
          className="whatshot3-slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {showLeftArrow && isHovered && (
            <button className="slider-arrow4 left" onClick={() => handleScroll("left")}>
              <PiCaretLeftBold />
            </button>
          )}

          {isHovered && (
            <button className="slider-arrow4 right" onClick={() => handleScroll("right")}>
              <PiCaretRightBold />
            </button>
          )}

          <div className="whatshot3-slider-container" ref={sliderRef}>
            {whathotitem1.map((item, index) => (
              <div className="whatshot3-card" key={index}>
                <div className="whatshot3-hover-container">
                  <div className="whatshot3-media">
                    {index < 2 ? (
                      <img src={item.itemimg} alt={item.title} />
                    ) : (
                      <video
                        src={item.itemimg}
                        muted
                        autoPlay
                        loop
                        playsInline
                      />
                    )}
                  </div>
                  <div className="whatshot3-details">
                    <div className="whatshot3-title">{item.title}</div>
                    <div className="whatshot3-desc">{item.desc}</div>
                    <div className="whatshot3-spacer"></div>
                    <div className="whatshot3-category">{item.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='pictureperfect2'>
        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/MH_28c847a0d8.jpg'/>
        <div id="pictureperfect2text1">
          <p>PICTURE PERFECT</p>
        </div>
        <div id="pictureperfect2text2">
          <p>Wear these vacation looks on repeat.</p>
        </div>
        <div id="pictureperfect2shopnow">
          <div><p>SHOP NOW</p></div> <div><HiArrowLongRight  style={{color: "black", fontSize: "26px", fontWeight:"500px"}}/></div>
        </div>
        <div id="pictureperfect2shopnow2"></div>
      </div>

      <div className='carousel-section'>
        <div className='carousel-header'>
          <div className='carousel-title'>adidas x Mercedes-AMG PETRONAS F1</div>
          <div className='carousel-subtitle'>Top picks for you</div>
        </div>

        <div className='carousel-container'>
          <div className='carousel-wrapper'>
            <button onClick={prevPage} disabled={currentPage === 0} className='carousel-arrow left'>
              <PiCaretLeftBold />
            </button>

            <div className="carousel-list">
              {visibleClothes.map((item, index) => (
                <div className="carousel-card" key={index}>
                  <div className="card-image">
                    <img src={item.itemimg} alt={item.title} />
                    <div className="wishlist-icon">
                      <PiHeartStraight style={{ color: "black", fontSize: "22px", fontWeight: "500" }} />
                    </div>
                  </div>
                  <div className="card-price">₹{item.price}</div>
                  <div className="card-title">{item.title}</div>
                  <div className="card-category">{item.category}</div>
                </div>
              ))}
            </div>

            <button onClick={nextPage} disabled={currentPage === totalPages - 1} className='carousel-arrow right'>
              <PiCaretRightBold />
            </button>
          </div>

          <div className="carousel-progress-container">
            <div className="carousel-progress-bar" style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}></div>
          </div>
        </div>
      </div>

      <div className='womensclothdesc'>
        <h1>WOMEN’S CLOTHING & SHOES</h1>
        <p>In sport and in life, creators aren’t content on the sidelines. adidas women’s shoes and apparel are made for those who understand that rules can be negotiated; expectations, evolved. Reach for a new personal best in apparel made of specialized performance fabrics. Accentuate your personal style in sport-inspired sneakers for your day-to-day. Whether sport is your life or you’re an athleisure fashionista, women’s clothing and footwear from adidas exist to help you redefine what’s possible.</p>
      </div>

      <div className='womenscategories'>
          <div className='womenscategories2'>
            <div className='womens-shoes'>
              <p>WOMEN'S SHOES</p>
              <p>Women's Shoes</p>
              <p>Women's Sneakers</p>
              <p>Women's Flip Flops</p>
              <p>Women's White Sneakers</p>
              <p>Women's Black Sneakers</p>
            </div>
            <div className='womens-clothing'>
              <p>WOMEN'S CLOTHING</p>
              <p>Women's Sports Bra</p>
              <p>Women's Hoodies</p>
              <p>Women's Jackets</p>
              <p>Women's Tracksuits</p>
              <p>Women's T-Shirts</p>
            </div>
            <div className='womens-accessories'>
              <p>WOMEN'S ACCESSORIES</p>
              <p>Women's Backpacks</p>
              <p>Women's Bags</p>
              <p>Women's Socks</p>
              <p>Women's Hat</p>
              <p>Women's Training Bag</p>
            </div>
            <div className='womens-collections'>
              <p>WOMEN'S COLLECTIONS</p>
              <p>Women's Running Shoes</p>
              <p>Women's Football Shoes</p>
              <p>Women's Walking Shoes</p>
              <p>Women's Training Shoes</p>
              <p>Women's Cricket Shoes</p>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Womens