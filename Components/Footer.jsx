import React from 'react';
import { assets } from '@/Assets/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-10 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.cam_dark_1} alt='logo' width={110} height={50} style={{ width: 'auto', height: 'auto' }} />
      <p className='font-medium text-white' style={{ letterSpacing: '1px' }}>All rights reserved © {new Date().getFullYear()}. Copyright @Lasya&apos;s Blog</p>
      <div className='flex'>
        <Image src={assets.github} alt='github' width={50} height={50} className='gap-4 p-2' style={{ borderRadius: '35%' }} />
        <Image src={assets.linkedin} alt='linkedin' width={50} height={50} className='gap-4 p-2' style={{ borderRadius: '35%' }} />
        <Image src={assets.email} alt='email' width={50} height={50} className='gap-4 p-2' style={{ borderRadius: '35%' }} />
      </div>
    </div>
  )
}

export default Footer;