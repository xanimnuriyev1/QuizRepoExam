import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Cart = () => {
const [data,setData]=useState([])
const GetData=async()=>{
const res=await axios.get("http://localhost:3000/products")
setData(res?.data)
console.log(res?.data);
}
useEffect(()=>{
GetData()
},[])

const DeleteData=async(id)=>{
// console.log(id)
await axios.delete(`http://localhost:3000/products/${id}`)
await GetData()
}

  return (
    <div className='Carts'>
        {
            data.map((elem)=>{
                return <div className='Cart-Box'key={elem.id} >
                  <div className='Text-box' >
                  <img className='Cart-Img' src={elem.image} alt="" />
                  <p className='cart-Price'>$ {elem.price}</p>
                  <h3 className='Title-Cart'>{elem.title}</h3>
                  <p className='Cart-Text'>{elem.description}</p>
                  </div>
                  <button className='CartBtn'>Order Now!</button>
                  <div>
                  <button className='DeleteBtn'
                  onClick={()=>{
                    DeleteData(elem.id)
                  }}
                  >Delete</button>
                  </div>
                </div>
              })
        }
    </div>
  )
}
export default Cart