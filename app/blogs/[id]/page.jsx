"use client"
import { blog_data } from '@/public/assets/assets';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {

  const [data, setData] = React.useState(null);

  const fetchBlogData = () => {
    for(let i=0; i<blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        break;
        console.log(blog_data[i]);
      }
    }
  }

useEffect(()=>{
  fetchBlogData();
},[])

  return (
    <div className='bg-pink-700 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.cam_light_1} width={100} height={100} alt='' className='w-[130px] sm:w-auto' />
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black' style={{boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)'}}>
          Click Here <Image src={assets.arrow} width={12} height={12} alt='' />
        </button>
      </div>
    </div>
  )
}

export default page