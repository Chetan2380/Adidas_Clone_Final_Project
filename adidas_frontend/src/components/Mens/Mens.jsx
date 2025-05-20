import React, { useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import '../Mens/Mens.css';
import { HiArrowLongRight } from "react-icons/hi2";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { PiHeartStraight } from "react-icons/pi";
import Footer from '../Footer/Footer';

const ITEMS_PER_PAGE = 4;
const cardWidth = 330;
const scrollStep = cardWidth * 4;

const Mens = () => {
  const [whathotitem1, setWhathotitem1] = useState([
    { itemimg: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/tc_men_440c1ec031.jpg", title: "Play your best Padel", desc: "Get ready for your next Padel session with the best from adidas.", category: "SHOP NOW" },
    { itemimg: "https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/TC_Gif_1050x1400_47a5f13a3c.gif", title: "Man Utd Bring Back", desc: "Wear the legacy of '91.", category: "Shop now" },
    { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_600,w_600/global_the_original_originals_ss25_sustain_hp_superstar_teaser_carousel_asset_m_e6ae649ffa.mp4", title: "The Original Superstar", desc: "From the court to the street.", category: "Shop now" },
    { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_600,w_600/global_move_for_the_planet_brand_ss25_introduce_onsite_tc_m_5f49084be2.mp4", title: "MOVE FOR THE PLANET", desc: "What places inspire you to move?", category: "Learn More" },
    { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_600,w_600/global_motorsports_motorsports_ss25_sustain_hp_catlp_glp_navigation_card_teaser_6_m_46decc9dc4.mp4", title: "Show Your Passion", desc: "The adidas x Mercedes-AMG PETRONAS F1 Fanwear collection.", category: "SHOP NOW" }
  ]);

  const [supsambaitem, setSupsambaitem] = useState([
    { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_800,w_800/originals_ss25_the_original_hp_glp_w_superstar_tc_d_317b52fcb4.mp4", title: "Superstar", desc: "From the court to the street", category: "Shop now" },
    { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_800,w_800/originals_ss25_the_original_hp_glp_w_samba_tc_d_d32d7b5a5f.mp4", title: "Samba", desc: "Inspiring individuality in every step", category: "Shop now" },
    { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_800,w_800/originals_ss25_the_original_hp_glp_w_spezial_tc_d_697b719f61.mp4", title: "Spezial", desc: "A favourite for style tribes globally", category: "Shop now" },
    { itemimg: "https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_800,w_800/originals_ss25_the_original_hp_glp_w_firebird_tc_d_091dd9e7cd.mp4", title: "Firebird", desc: "A celebration of sports heritage", category: "Shop now" }
  ]);

  const[adimertop,setAdimertop]=useState([{itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/f811b2df598e4254b4794f61e6ebb6f9_9366/Mercedes_-_AMG_Petronas_Formula_One_Team_Summer_Chino_Pant_Beige_JW3472_000_plp_model.jpg",price:"7 999.00",title:"Mercedes - AMG Petronas Formula One Team Summer Chino Pant",category:"Performance"},
  {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/283c4b2348ce44aa9e7b3b4b0d221c02_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DRIVER_JERSEY_Black_JW5361_HM1.jpg",price:"5 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DRIVER JERSEY",category:"Performance"},
  {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/f35256c62f8d4e068033705a0a1d226e_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DRIVER_JERSEY_White_JX5798_HM1.jpg",price:"5 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DRIVER JERSEY",category:"Performance"},
  {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/b690857c2c164f1898795c7f542ae106_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DNA_PANT_Black_JV5379_000_plp_model.jpg",price:"5 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DNA PANT",category:"Performance"},
  {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/d12492ac218942438f3b7f6969a19c96_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_POLO_Black_JW5391_000_plp_model.jpg",price:"6 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM POLO",category:"Performance"},
  {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/3f064e5faf164bf38f3ba9191fb451fd_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_DRIVER_JERSEY_AUTHENTIC_Black_JY2607_HM1.jpg",price:"8 599.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM DRIVER JERSEY AUTHENTIC",category:"Performance"},
  {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/7dfe622380bd4cfc94c32e20ce283fba_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_MECHANICS_JERSEY_Black_JX8245_HM1.jpg",price:"5 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM MECHANICS JERSEY",category:"Performance"},
  {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/8a2b989a596b4eb0a9219c409154d232_9366/Mercedes_-_AMG_Petronas_Formula_One_Team_DNA_Track_Top_Black_JV5355_000_plp_model.jpg",price:"5 999.00",title:"Mercedes - AMG Petronas Formula One Team DNA Track Top",category:"Performance"},
  {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/e1714ed565ea49749501ec69d7d037f5_9366/Mercedes_-_AMG_Petronas_Formula_One_Team_DNA_Tee_White_JV5457_000_plp_model.jpg",price:"2 499.00",title:"Mercedes - AMG Petronas Formula One Team DNA Tee",category:"Performance"},
  {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/c6685c449da440858d8070f09517bce2_9366/ADIDAS_FEROZA_BASE_MERCEDES_AMG_PETRONAS_F1_TEAM_SHOES_Black_JQ3273_00_plp_standard.jpg",price:"8 999.00",title:"ADIDAS FEROZA BASE MERCEDES AMG PETRONAS F1 TEAM SHOES",category:"Performance"},
  {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/e77e4d26bc88465eb01f278c7595716e_9366/Mercedes_-_AMG_Petronas_Formula_One_Team_DNA_Tee_Black_JV5425_000_plp_model.jpg",price:"2 499.00",title:"Mercedes - AMG Petronas Formula One Team DNA Tee",category:"Performance"},
  {itemimg:"https://assets.adidas.com/images/w_600,f_auto,q_auto/af88fb35e5bd4836b9d46ae77c7c285e_9366/MERCEDES_-_AMG_PETRONAS_FORMULA_ONE_TEAM_POLO_White_JW0586_000_plp_model.jpg",price:"6 999.00",title:"MERCEDES - AMG PETRONAS FORMULA ONE TEAM POLO",category:"Performance"}])
  

  const sliderRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(adimertop.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleClothes = adimertop.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
      <Navbar />
      <div className='supernovarise2'>
        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_supernova_running_ss25_early_access_mglp_banner_hero_d_78b800effe.jpg' />
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
          <div><p>SHOP NOW</p></div>
          <div><HiArrowLongRight style={{ color: "black", fontSize: "26px", fontWeight: "500px" }} /></div>
        </div>
        <div id="supernovarise2shopnow2"></div>
      </div>

      <div className='whatshot2'>
        <div className="whatshot2-header">
          <h2>WHAT'S HOT ?</h2>
        </div>

        <div
          className="whatshot2-slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {showLeftArrow && isHovered && (
            <button className="slider-arrow3 left" onClick={() => handleScroll("left")}>
              <PiCaretLeftBold />
            </button>
          )}

          {isHovered && (
            <button className="slider-arrow3 right" onClick={() => handleScroll("right")}>
              <PiCaretRightBold />
            </button>
          )}

          <div className="whatshot2-slider-container" ref={sliderRef}>
            {whathotitem1.map((item, index) => (
              <div className="whatshot2-card" key={index}>
                <div className="whatshot2-hover-container">
                  <div className="whatshot2-media">
                    {index < 2 ? (
                      <img src={item.itemimg} alt={item.title} />
                    ) : (
                      <video src={item.itemimg} muted autoPlay loop playsInline />
                    )}
                  </div>
                  <div className="whatshot2-details">
                    <div className="whatshot2-title">{item.title}</div>
                    <div className="whatshot2-desc">{item.desc}</div>
                    <div className="whatshot2-spacer"></div> 
                    <div className="whatshot2-category">{item.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='theracebegin'>
        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_mercedes_motorsport_ss25_launch_glp_m_banner_hero_d_daced04ad5.jpg' />
        <div id="adidasmercedes">
          <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/global_mercedes_motorsport_ss25_launch_onsite_logo_e3b413523d.png'/>
        </div>
        <div id="theracebegintext1">
          <p>The Race Begins</p>
        </div>
        <div id="theracebegintext2">
          <p>The new adidas x Mercedes-AMG PETRONAS F1</p>
        </div>
        <div id="theracebegintext3">
          <p>collection. A new chapter for racing.</p>
        </div>
        <div id="theracebeginshopnow">
          <div><p>SHOP NOW</p></div>
          <div><HiArrowLongRight style={{ color: "black", fontSize: "26px", fontWeight: "500px" }} /></div>
        </div>
        <div id="theracebeginshopnow2"></div>
      </div>

      <div className="superstarsamba">
        <div className="superstarsamba-cards-wrapper">
            {supsambaitem.slice(0, 4).map((item, index) => (
            <div className="superstarsamba-card" key={index}>
                <div className="superstarsamba-hover-container">
                <div className="superstarsamba-media">
                    <video src={item.itemimg} muted autoPlay loop playsInline />
                </div>
                <div className="superstarsamba-details">
                    <div className="superstarsamba-title">{item.title}</div>
                    <div className="superstarsamba-desc">{item.desc}</div>
                    <div className="superstarsamba-spacer"></div>
                    <div className="superstarsamba-category">{item.category}</div>
                </div>
                </div>
            </div>
            ))}
            </div>
        </div>

        <div className='adidaszne'>
            <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/2880x1280_100_0911ab4b8d.jpg'/>
            <div id="adidasznetext1">
                <p>ADIDAS Z.N.E.</p>
            </div>
            <div id="adidasznetext2">
                <p>The lines that connect us.</p>
            </div>
            <div id="adidaszneshopnow">
                <div><p>SHOP NOW</p></div> <div><HiArrowLongRight  style={{color: "black", fontSize: "26px", fontWeight:"500px"}}/></div>
            </div>
            <div id="adidaszneshopnow2"></div>
        </div>

        <div className='adimertop'>
            <div className='adimeramgcat'>
                <div className='adimeramgcattext'>ADIDAS X MERCEDES-AMG PETRONAS F1</div>
                <div className='adimeramgcattext2'>TOP PICKS FOR YOU</div>
            </div>

            <div className='slider-container2'>
                <div className='cloths-slider-wrapper'>
                <button onClick={prevPage} disabled={currentPage === 0} className='nav-arrow left'>
                    <PiCaretLeftBold />
                </button>

                <div className="clothlist-wrapper">
                    {visibleClothes.map((adimerclothes, index) => (
                    <div className="differentcloths" key={index}>
                        <div className="diffrentshoesimg">
                        <img src={adimerclothes.itemimg} alt={adimerclothes.title} />
                        <div id="heart">
                            <PiHeartStraight style={{ color: "black", fontSize: "22px", fontWeight: "500" }} />
                        </div>
                        </div>
                        <div className="differentshoesprice">₹{adimerclothes.price}</div>
                        <div className="differentshoestitle">{adimerclothes.title}</div>
                        <div className="differentshoescategory">{adimerclothes.category}</div>
                    </div>
                    ))}
                </div>

                <button onClick={nextPage} disabled={currentPage === totalPages - 1} className='nav-arrow right'>
                    <PiCaretRightBold />
                </button>
                </div>

                <div className="progress-bar-container2">
                <div className="progress-bar2" style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}></div>
                </div>
            </div>
        </div>

        <div className='mensclothdesc'>
          <h1>MEN’S CLOTHING & SHOES</h1>
          <p>As a creator, you look for ways to excel and express yourself when and where you can, from reaching for that last rep to evolving your streetwear style. Log miles or tear down the baseline in men's shoes with responsive cushioning. Rep an athletic style off the field in lifestyle apparel born of sport heritage. From athletes to streetwear enthusiasts, adidas men’s clothing and shoes exist to let you go harder, dig deeper, and get the most out of yourself, from the pitch to the street to the road less traveled.</p>
        </div>

        <div className='menscategories'>
          <div className='menscategories2'>
            <div className='mens-shoes'>
              <p>MEN'S SHOES</p>
              <p>Men's Shoes</p>
              <p>Men's Sneakers</p>
              <p>Men's Sandals</p>
              <p>Men's White Shoes</p>
              <p>Men's Black Shoes</p>
            </div>
            <div className='mens-clothing'>
              <p>MEN'S CLOTHING</p>
              <p>Football Jerseys</p>
              <p>Men's Hoodies</p>
              <p>Men's Jackets</p>
              <p>Men's Tracksuits</p>
              <p>Men's T-Shirts</p>
            </div>
            <div className='mens-accessories'>
              <p>MEN'S ACCESSORIES</p>
              <p>Men's Backpacks</p>
              <p>Men's Bags</p>
              <p>Men's Socks</p>
              <p>Men's Hat</p>
              <p>Men's Training Bag</p>
            </div>
            <div className='mens-collections'>
              <p>MEN'S COLLECTIONS</p>
              <p>Men's Running Shoes</p>
              <p>Men's Football Shoes</p>
              <p>Men's Walking Shoes</p>
              <p>Men's Training Shoes</p>
              <p>Men's Cricket Shoes</p>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Mens;
