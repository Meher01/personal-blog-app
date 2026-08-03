import React from 'react';
import { assets } from '@/Assets/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-6 sm:flex-row bg-black py-3 sm:py-4 px-3 sm:px-6 items-center'>
      <Image src={assets.cam_dark_1} alt='logo' width={90} height={40} style={{ width: 'auto', height: 'auto' }} />
      <p className='font-medium text-white text-center text-sm sm:text-base' style={{ letterSpacing: '1px' }}>All rights reserved © {new Date().getFullYear()}. <br/>Copyright @Lasya&apos;s Blog</p>
      <div className='flex items-center gap-2 sm:gap-3'>
        <a href='https://github.com/Meher01' target='_blank' rel='noopener noreferrer'>
          <Image src={assets.github} alt='github' width={40} height={40} className='p-1.5 sm:p-2' style={{ borderRadius: '35%' }} />
        </a>
        <a href='https://www.linkedin.com/in/lasya-lingam' target='_blank' rel='noopener noreferrer'>
          <Image src={assets.linkedin} alt='linkedin' width={40} height={40} className='p-1.5 sm:p-2' style={{ borderRadius: '35%' }} />
        </a>
        <a href='mailto:meherlaasya@gmail.com'>
          <Image src={assets.email} alt='email' width={40} height={40} className='p-1.5 sm:p-2' style={{ borderRadius: '35%' }} />
        </a>
      </div>
    </div>
  )
}

export default Footer;