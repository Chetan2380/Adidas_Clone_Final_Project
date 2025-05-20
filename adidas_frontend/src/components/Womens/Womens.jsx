import React, { useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "../Womens/Womens.css"
import { HiArrowLongRight } from "react-icons/hi2";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

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
  const sliderRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  
    const [currentPage, setCurrentPage] = useState(0);
    // const totalPages = Math.ceil(adimertop.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    // const visibleClothes = adimertop.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
    // const nextPage = () => {
    //   if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    // };
  
    // const prevPage = () => {
    //   if (currentPage > 0) setCurrentPage(currentPage - 1);
    // };
  
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
      <Footer/>
    </div>
  )
}

export default Womens