'use client'
import Image from 'next/image';
import { blog_data, assets } from '@/public/assets/assets';
import React, { useEffect, useState, use } from 'react'; // Added use hook

const page = ({ params }) => {
  // Unwrap params safely for modern Next.js versions
  const resolvedParams = use(params); 
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    // Optimized array search instead of a manual for-loop
    const blog = blog_data.find(item => Number(resolvedParams.id) === item.id);
    if (blog) {
      setData(blog);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [resolvedParams.id]); // Added dependency to re-run if ID changes

  if (!data) return null; // Cleaner than returning empty fragments

  return (
    <div className='bg-pink-40 py-5 px-5 md:px-12 lg:px-28'>
      {/* Top Navigation Bar */}
      <div className='flex justify-between items-center'>
        <Image 
          src={assets.cam_light_1} 
          width={100} 
          height={100} 
          alt='Camera' 
          className='w-[130px] sm:w-auto' 
        />
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
        <Image src={data.author_img} width={60} height={60} alt='' className='w-[60px] h-[60px] rounded-full aspect-square object-cover ml-auto mr-auto mt-8'/>
        <p className='mt-1 pb-2 max-w-[740px] mx-auto text-pink-600' style={{ fontWeight: '600'}}> {data.author} </p>
      </div>
    </div>
  );
};

export default page;
