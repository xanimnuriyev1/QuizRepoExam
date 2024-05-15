import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
const Header = () => {
  return (
    <section className='Big-Img'>
    <nav>
        <a href="">
            <h1 className='logo'>EATWELL</h1>
        </a>
        <ul>
            <li><NavLink to={'/'} className={(navData)=>navData.isActive ? "active" : ""}>HOME</NavLink></li>
            <li><NavLink to={'/about'} className={(navData)=>navData.isActive ? "active" : ""}>FORM</NavLink></li>
            <li><NavLink to={'/offer'} className={(navData)=>navData.isActive ? "active" : ""}>OFFER</NavLink></li>
            <li><NavLink to={'/menu'} className={(navData)=>navData.isActive ? "active" : ""}>MENU</NavLink></li>
            <li><NavLink to={'/news'} className={(navData)=>navData.isActive ? "active" : ""}>NEWS</NavLink></li>
            <li><NavLink to={'/gallery'} className={(navData)=>navData.isActive ? "active" : ""}>GALLERY</NavLink></li>
            <li><NavLink to={'/contact'} className={(navData)=>navData.isActive ? "active" : ""}>CONTACT</NavLink></li>
        </ul>
    </nav>
   <div className='head-text-box'>
   <h1 className='welcom'>Welcome To EatWell</h1>
    <p className='Head-section-Text'>Come and eat well with our delicious & healthy foods.</p>
    <button className='head-section-btn'>Reservation</button>
   </div>
     </section>
  )
}
export default Header