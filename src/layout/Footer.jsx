import React from 'react'
import "./footer.css"
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
   <section className='Footer'>
    <div className='Foot-box'>
        <div>
            <h4>ABOUT US</h4>
            <p className='Foot-text'>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Cumque, <br /> similique, delectus blanditiis odit <br /> expedita amet. Sed labore ipsum vel <br /> dolore, quis, culpa et magni autem <br /> sequi facere eos tenetur, ex?</p>
        </div>
        <div>
            <h4>THE RESTAURANT</h4>
            <div className='info-box'>
            <a href="">About us</a>
            <a href="">Chefs</a>
            <a href="">Events</a>
            <a href="">Contact</a>
            </div>
        </div>
        <div>
            <h4>USEFUL LINKS</h4>
           <div  className='info-box'> 
           <a href="">Foods</a>
            <a href="">Drinks</a>
            <a href="">Breakfast</a>
            <a href="">Brunch</a>
            <a href="">Dinner</a>
           </div>
        </div>
        <div>
            <h4>USEFUL LINKS</h4>
            <div  className='info-box'>
            <a href="">Foods</a>
            <a href="">Drinks</a>
            <a href="">Breakfast</a>
            <a href="">Brunch</a>
            <a href="">Dinner</a>
            </div>
        </div>
    </div>
    <div className='Icons'>
        <div className='icon-box'>
        <FaTwitter className='Icon' />  
        </div>
        <div className='icon-box'>
        <FaSquareFacebook   className='Icon'/>
        </div>
        <div className='icon-box'>
        <FaInstagram   className='Icon'/>
        </div>
    </div>
    <div className='Foot-Down'>
        <p>© Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
    </div>
   </section>
  )
}

export default Footer