import React, { useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "../Kids/Kids.css"
import { HiArrowLongRight } from "react-icons/hi2";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { PiHeartStraight } from "react-icons/pi";

const ITEMS_PER_PAGE = 4;
const cardWidth = 330;
const scrollStep = cardWidth * 4;
const Kids = () => {
    const [whathotitem1, setWhathotitem1] = useState([
          { itemimg: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_zne_sportswear_ss25_launch_kglp_navigation_card_teaser_1_d_c07c100d10.jpg", title: "ADIDAS Z.N.E.", desc: "The lines that connect us.", category: "Shop now" },
          { itemimg: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_franchise_toolkit_samba_q1_originals_ss25_launch_navigation_card_teaser_kids_glp_d_626a27dbc1.jpg", title: "Samba", desc: "Iconic style in every step.", category: "SHOP NOW" },
          { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_600,w_600/Global_Disney_Marvel_Superheroes_Commercial_SS_25_Launch_Navigation_Card_Teaser_1_Hp_Glp_m_20fa9d3402.mp4", title: "adidas | Marvel: Avengers", desc: "Assemble for your new adventure.", category: "SHOP NOW" },
          { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_600,w_600/Horizontal_FW_24_disney_starwars_global_launch_HP_teaser_m_6b9ca8a685.mp4", title: "adidas | Star Wars", desc: '"The dark side" has never been this fun."', category: "SHOP NOW" },
          { itemimg: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/Horizontal_FW_24_disney_lionking_global_launch_HP_and_kids_LP_carousel_mini_lookbook1_d_e12b29aa80.jpg", title: "adidas | Disney: The Lion King", desc: "For every brave adventure.", category: "SHOP NOW" }
    ]);

    const[adimertop3,setAdimertop3]=useState([{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/859b09573b61415ea595df3c35ac74e6_9366/Mercedes_-_AMG_Petronas_Formula_One_Team_Driver_Jersey_Replica_Summer_Pack_Kids_Burgundy_JZ6209_01_laydown.jpg",price:"3 599.00",title:"Mercedes - AMG Petronas Formula One Team Driver Jersey Replica Summer Pack Kids",category:"Performance"},
        {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/efbfed3fc7db4272a42b8c85f814f5c7_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DRIVER_JERSEY_Black_JW5363_01_laydown.jpg",price:"3 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DRIVER JERSEY",category:"Performance"},
        {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/a5b337da1bc34adaba4094d42f2a619d_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DNA_TEE_Black_JV5423_01_laydown.jpg",price:"1 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DNA TEE",category:"Performance"},
        {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/bf68de38045948e2b97301346c71171d_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DNA_BABY_JOGGER_SHORT_SLEEVE_Black_JV5438_00_plp_laydown.jpg",price:"3 999.00",title:"MERCEDES - MERCEDES - AMG PETRONAS FORMULA ONE TEAM DNA BABY JOGGER SHORT SLEEVE",category:"Performance"},
        {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/ce017fe3f6a34ff6b4727d4f876d34e7_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DNA_BABY_JOGGER_LONG_SLEEVE_Black_JV5439_00_plp_laydown.jpg",price:"4 599.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DNA BABY JOGGER LONG SLEEVE",category:"Performance"},
        {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/aa7f38c86cb84f6aad047a454cafca08_9366/Mercedes_-_AMG_Petronas_Formula_One_Team_Acesmash_Mid_Shoes_Black_JS4078_00_plp_standard.jpg",price:"3 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DNA BABY JOGGER SHORT SLEEVE",category:"Performance"},
        {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/14e514f99bb34bfc835281c32e49e312_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DNA_PANT_Black_JV5431_01_laydown.jpg",price:"4 599.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DNA PANT",category:"Performance"},
        {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/4a19e2d38b21427fbebc7c04628b5f0e_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DNA_BABY_JOGGER_LONG_SLEEVE_White_JV5445_00_plp_laydown.jpg",price:"4 599.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DNA BABY JOGGER LONG SLEEVE",category:"Performance"},
        {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/52fcc597520244659fe766e718d4fede_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_ULTIMASHOW_2.0_SHOES_JUNIOR_Black_JQ3522_00_plp_standard.jpg",price:"5 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM ULTIMASHOW 2.0 SHOES JUNIOR",category:"Performance"},
        {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/897dc65fd9e94bb58eb14062f48dad01_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_ULTIMASHOW_2.0_SHOES_JUNIOR_White_JR1086_00_plp_standard.jpg",price:"5 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM ULTIMASHOW 2.0 SHOES JUNIOR",category:"Performance"},
        {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/7f6c7d221e144990a7110035081f0216_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DNA_GRAPHIC_TEE_Black_JZ0901_01_laydown.jpg",price:"1 799.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DNA GRAPHIC TEE",category:"Performance"},
        {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/c2c4019096b940baaf9abae393b92f74_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DNA_GRAPHIC_TEE_White_JZ0900_01_laydown.jpg",price:"1 799.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DNA GRAPHIC TEE",category:"Performance"}])
    
    
    const sliderRef = useRef(null);
        const [showLeftArrow, setShowLeftArrow] = useState(false);
        const [isHovered, setIsHovered] = useState(false);
      
        const [currentPage, setCurrentPage] = useState(0);
        const totalPages = Math.ceil(adimertop3.length / ITEMS_PER_PAGE);
        const startIndex = currentPage * ITEMS_PER_PAGE;
        const visibleClothes = adimertop3.slice(startIndex, startIndex + ITEMS_PER_PAGE);
      
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
        <div className="whatsnew3">
        <div className="whatsnew3-header">
          <h2>WHAT'S HOT ?</h2>
        </div>

        <div
          className="whatsnew3-slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {showLeftArrow && isHovered && (
            <button className="slider-arrow5 left" onClick={() => handleScroll("left")}>
              <PiCaretLeftBold />
            </button>
          )}

          {isHovered && (
            <button className="slider-arrow5 right" onClick={() => handleScroll("right")}>
              <PiCaretRightBold />
            </button>
          )}

          <div className="whatsnew3-slider-container" ref={sliderRef}>
            {whathotitem1.slice(0, 5).map((item, index) => {
              // Show 2 images, then 2 videos, then 1 image (based on index)
              const shouldShowImage = index < 2 || index === 4

              return (
                <div className="whatsnew3-card" key={index}>
                  <div className="whatsnew3-hover-container">
                    <div className="whatsnew3-media">
                      {shouldShowImage ? (
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
                    <div className="whatsnew3-details">
                      <div className="whatsnew3-title">{item.title}</div>
                      <div className="whatsnew3-desc">{item.desc}</div>
                      <div className="whatsnew3-spacer"></div>
                      <div className="whatsnew3-category">{item.category}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='kids-carousel-section'>
        <div className='kids-carousel-header'>
            <div className='kids-carousel-title'>adidas x Mercedes-AMG PETRONAS F1</div>
            <div className='kids-carousel-subtitle'>TOP PICKS FOR YOU</div>
        </div>

        <div className='kids-carousel-container'>
            <div className='kids-carousel-wrapper'>
            <button onClick={prevPage} disabled={currentPage === 0} className='kids-carousel-arrow left'>
                <PiCaretLeftBold />
            </button>

            <div className="kids-carousel-list">
                {visibleClothes.map((item, index) => (
                <div className="kids-carousel-card" key={index}>
                    <div className="kids-card-image">
                    <img src={item.itemimg} alt={item.title} />
                    <div className="kids-wishlist-icon">
                        <PiHeartStraight style={{ color: "black", fontSize: "22px", fontWeight: "500" }} />
                    </div>
                    </div>
                    <div className="kids-card-price">₹{item.price}</div>
                    <div className="kids-card-title">{item.title}</div>
                    <div className="kids-card-category">{item.category}</div>
                </div>
                ))}
            </div>

            <button onClick={nextPage} disabled={currentPage === totalPages - 1} className='kids-carousel-arrow right'>
                <PiCaretRightBold />
            </button>
            </div>

            <div className="kids-carousel-progress-container">
            <div
                className="kids-carousel-progress-bar"
                style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            ></div>
            </div>
        </div>
        </div>

        <div className='kidsclothdesc'>
            <h1>ADIDAS KIDS CLOTHING & KIDS SHOES</h1>
            <p>Whether they’re big kids playing in a weekend tournament or little ones mastering the monkey bars, being a young creator is all about having fun while playing hard. Find girls’ and boys’ shoes to support both their game and their style. Boys’ and girls’ clothing and shoes from adidas are built to give kids of every age and stage comfort and confidence for everything from first steps to personal bests.</p>
        </div>

        <div className='kidscategories'>
          <div className='kidscategories2'>
            <div className='kids-shoes'>
              <p>KID'S SHOES</p>
              <p>Kid's Shoes</p>
              <p>Kid's Football Shoes</p>
              <p>Kid's Sneaker Shoes</p>
              <p>Kid's Slides & Sandals</p>
              <p>Kid's Shoes Sale</p>
            </div>
            <div className='kids-clothing'>
              <p>KID'S CLOTHING</p>
              <p>Kid's Clothing</p>
              <p>Kid's Jerseys</p>
              <p>Kid's Tracksuits</p>
              <p>Kid's Jackets</p>
              <p>Kid's Clothing Sale</p>
            </div>
            <div className='kids-accessories'>
              <p>KID'S ACCESSORIES</p>
              <p>Kid's Bag</p>
              <p>Kid's Caps</p>
              <p>Kid's Socks</p>
              <p>Kid's Football</p>
              <p>Kid's Accessories Sale</p>
            </div>
            <div className='kids-collections'>
              <p>SHOP BY AGE</p>
              <p>8 to 16 - Youth</p>
              <p>4 to 8 - Kids</p>
              <p>0 to 4 - Toddlers</p>
              <p>8 to 16 - Boy Shoes</p>
              <p>8 to 16 - Girls Shoes</p>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Kids