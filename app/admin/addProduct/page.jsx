'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const page = () => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
      title:"",
      description:"",
      category:"Select",
      author:"Rosy",
      authorImg: assets.profile_icon,
    })

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
      console.log(data);
    }


    const onSubmitHandler = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('author', data.author);
      formData.append('authorImg', data.authorImg);
      formData.append('image', image);
      const response = await axios.post('/api/blog', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(false);
        setData({title:"",
      description:"",
      category:"Select",
      author:"Rosy",
      authorImg:"/author_img.png",
    });

      }
      else {
        toast.error("Error");
      }
    }


  return (
    <>
<form onSubmit={onSubmitHandler} className='pt-3 px-3 sm:pt-5 text-pink-600'>
   <p className='text-xl ml-5 font-semibold underline'> Upload Image </p>
    <label htmlFor="image">
    <Image className='mt-4 ml-5' src={!image?assets.upload_area:URL.createObjectURL(image)} width={200} height={70} alt=''/>
    </label>
    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
    <p className='text-xl ml-5 font-semibold mt-4 underline'> Add Title: </p>
    <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 ml-5 py-3 border' type="text" placeholder='Add Text...' required/>
    <p className='text-xl ml-5 font-semibold mt-4 underline'> Add Description: </p>
    <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 ml-5 px-4 py-3 border' type="text" placeholder='Add Description...' rows={6} required/>
    <p className='text-ml mt-4 ml-5 underline font-semibold'>Select Category:</p>
    <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 ml-5 px-4 py-2 border' style={{cursor: 'pointer'}}>
      <option value="Select">Select...</option>
      <option value="Startup">Startup</option>
      <option value="Technology">Technology</option>
      <option value="Lifestyle">Lifestyle</option>
    </select> <br/>
    <button type="submit" className='font-semibold ml-5 mt-8 h-11 w-40 bg-pink-600 text-white hover:bg-pink-400' style={{cursor: 'pointer'}}>FINISH</button>
    </form>
    </>
  )
}

export default page