import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Home/Home.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='findyoursummerlook'>
            <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/HP_MH_1_10ebaf5c6d.jpg'/>
        </div>
    </div>
  )
}

export default Home