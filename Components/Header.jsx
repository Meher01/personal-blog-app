import Image from 'next/image';
import React from 'react';
import { assets } from '@/Assets/assets';

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex items-center justify-between'> 
        <Image src={assets.cam_light} width={110} height={50} alt='logo' className='w-[130px] sm:w-auto' />
        <button className='bold flex items-center gap-2 font-medium py-1 py-3 sm:py-3 sm:px-6 border border-solid border-black active:bg-pink-600 active:text-white' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '12px', cursor: 'pointer' }}>
          Click Here<Image src={assets.arrow} alt='arrow' width={12} height={12} style={{width: 'auto', height: 'auto'}} /></button>
      </div>
      <div className='text-center my-8'>
      <h1 className='bold text-3xl sm:text-5xl font-medium text-pink-500'>My Blogs</h1>
      <p className='text-sm sm:text-base mt-5' style={{fontSize: '18px'}}>A collection of my thoughts, which I would like to share with the world ✨</p>
      <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black overflow-hidden' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '12px', cursor: 'pointer' }} action="">
        <input type='email' placeholder='Enter your email' className='pl-5 outline-none' />
        <button type='submit' className='bold border-l border-black py-4 px-4 sm:px-8 active:bg-pink-600 active:text-white'>Subscribe</button>
      </form>
      </div>
    </div>
  );
};

export default Header;