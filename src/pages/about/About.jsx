import React, { useState } from 'react'
import "./about.css"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { ProductSchema } from '../../schema/ProductsSchema';

const About = () => {
  const [priceValue,setPriceValue]=useState("")
  const [imageValue,setImageValue]=useState("")
  const [descriptionValue,setDescriptionValue]=useState("")
  const [titleValue,setTitleValue]=useState("")

  

  const { register, handleSubmit , formState: { errors }} = useForm({
    resolver: yupResolver(ProductSchema),
  });

const CreateData=async(values)=>{
  console.log("xanim");
await axios.post("http://localhost:3000/products",values)
console.log(values);
}

  return (
    <section className='Form'>
      <form action="" onSubmit={handleSubmit(CreateData)}>
        <input type="text" {...register('image')} placeholder='Image'  onChange={(e)=>setImageValue(e.target.value)}/>
        {errors.image?.message && <p>{errors.image?.message}</p>}
        <br />
        <input type="number" {...register('price')} placeholder='Price' onChange={(e)=>setPriceValue(e.target.value)}/>
        {errors.price?.message && <p>{errors.price?.message}</p>}
        <br />
        <input type="text" {...register('title')} placeholder='title'  onChange={(e)=>setTitleValue(e.target.value)}/>
        {errors.title?.message && <p>{errors.title?.message}</p>}
        <br />
        <input type="text" {...register('description')} placeholder='Category' onChange={(e)=>setDescriptionValue(e.target.value)}/>
        {errors.description?.message && <p>{errors.description?.message}</p>}
        <br />
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default About