import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CartNews = () => {
const [data,setData]=useState([])
const GetData=async()=>{
const res=await axios.get("http://localhost:3000/products")
setData(res?.data)
console.log(res?.data);
}
useEffect(()=>{
GetData()
},[])
  return (
    <div className='Carts'>
    {
        data.map((elem)=>{
            return <div className='Cart-Box' key={elem.id}>
              <div className='Text-box'>
              <img className='Cart-Img' src={elem.image} alt="" />
              <h3 className='Title-Cart'>{elem.title}</h3>
              <p className='Cart-Text'>{elem.description}</p>
              </div>
              <button className='CartBtn'>Read More</button>
            </div>
          })
    }
</div>
  )
}

export default CartNews