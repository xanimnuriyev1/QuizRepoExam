import React from 'react'
import AboutImg from "../../assets/images/about_img_1.jpg"
import "./home.css"
import HomeTop from './HomeTop'
import HomeCenter from './HomeCenter'
import HomeFooter from './HomeFooter'
import Footer from '../../layout/Footer'
const Home = () => {
  return (
   <section >
    <div className='AboutImg'>
   <div className='AboutImg-box'>
    <p>OUR STORY</p>
    <h3 className='AboutImg-Welcome'>Welcome</h3>
    <p className='About-text'>Far far away, behind the word mountains, far from <br /> the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
    <p className='About-text'>A small river named Duden flows by their place <br /> and supplies it with the necessary regelialia. It is a <br /> paradisematic country, in which roasted parts of <br /> sentences fly into your mouth.</p>
    <button className='AboutBtn'>Learn More About Us</button>
   </div>
   <div>
    <img className='aboutImg' src={AboutImg} alt="" />
   </div>
   </div>
   <HomeTop/>
   <HomeCenter/>
   <HomeFooter/>
   <Footer/>
   </section>
  )
}

export default Home