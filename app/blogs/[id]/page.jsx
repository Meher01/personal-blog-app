'use client'
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/Components/Footer';

import { blog_data, assets } from '@/public/assets/assets';
import React, { useEffect, useState } from 'react';

const page = ({ params }) => {
  const [data, setData] = useState(null);
  const resolvedParams = React.use(params);

  const fetchBlogData = () => {
    const blog = blog_data.find(item => Number(resolvedParams.id) === item.id);
    if (blog) {
      setData(blog);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [resolvedParams.id]);

  if (!data) return null; // Cleaner than returning empty fragments

  return (
    <>
      <div className='bg-pink-40 py-5 px-5 md:px-12 lg:px-28'>
        {/* Top Navigation Bar */}
        <div className='flex justify-between items-center'>
          <Link href='/'>
          <Image 
            src={assets.cam_light_1} 
            width={100} 
            height={100} 
            alt='Camera' 
            className='w-[130px] sm:w-auto' 
          /></Link>
          <button 
            className='bold flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black active:bg-pink-400 hover:text-white hover:bg-pink-400' 
            style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '12px', cursor: 'pointer' }}
          >
            Click Here 
            <Image src={assets.arrow} width={12} height={12} alt='' />
          </button>
        </div>

        {/* Blog Title - Correctly placed outside the flex navbar */}
        <div className='text-center my-5'>
          <h1 className='text-xl sm:text-3xl font-semibold max-w-[700px] mx-auto text-pink-500'> 
            {data.title} 
          </h1>
          <Image src={data.author_img} width={60} height={60} alt='' className='w-[60px] h-[60px] rounded-full aspect-square object-cover ml-auto mr-auto mt-2'/>
          <p className='mt-auto pb-15 max-w-[740px] mx-auto text-pink-600' style={{ fontWeight: '600'}}> {data.author} </p>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4 border-dashed border-pink-600' src={data.image} width={1280} height={720} alt='' />
        <h1 className='my-8 text-[26px] font-semibold'>Introduction: </h1>
        <p>{data.description} </p>
        <h3 className='my-5 text-[18px] font-semibold'>Steps....</h3>
        <p className='my-3'>Text</p>
        <p className='my-3'>Text</p>
        <h3 className='my-5 text-[18px] font-semibold'>Steps....</h3>
        <p className='my-3'>Text</p>
        <p className='my-3'>Text</p>
        <h3 className='my-5 text-[18px] font-semibold'>Steps....</h3>
        <p className='my-3'>Text</p>
        <p className='my-3'>Text</p>
        <h3 className='my-5 text-[18px] font-semibold'>Conclude</h3>
        <p className='my-3'>Text</p>
        <div className='my-24'>
          <p className='text-black font-semibold my-4'>~ Do share the article to spread the knowledge. ✨❤️</p>
        <div className='flex gap-2'>
          <Image src={assets.linkedin} width={50} alt=''/>
          <Image src={assets.email} width={50} alt=''/>
        </div>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default page;
