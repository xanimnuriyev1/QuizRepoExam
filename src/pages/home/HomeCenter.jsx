import React from 'react'
import Cart from "./Cart"
import CartNews from './CartNews'

const HomeCenter = () => {
  return (
    <section className='NewSection'>
    <div className='News-box'>
    <h2 className='OfferSummer News-text'>News</h2>
    <p className='OurSection-text'> Far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, there live the blind <br /> texts.</p>
   </div>
    <CartNews/>
    </section>
  )
}

export default HomeCenter