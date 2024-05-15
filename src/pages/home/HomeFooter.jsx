import React from 'react'
import Imgs1 from '../../assets/images/menu_1 (2).jpg'
import Imgs2 from "../../assets/images/menu_2 (2).jpg"
import Imgs3 from "../../assets/images/menu_3 (2).jpg"

const HomeFooter = () => {
  return (
    <div className='Gallery-box'>
        <h3 className='Gallery-Section'>Gallery</h3>
        <p className='OurSection-text'>Far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className='Imgs'>
         <img src={Imgs1} alt="" />
         <img src={Imgs2} alt="" />
         <img src={Imgs3} alt="" />
         <img src={Imgs2} alt="" />
         <img src={Imgs3} alt="" />
         <img src={Imgs1} alt="" />
        </div>
    </div>
  )
}
export default HomeFooter