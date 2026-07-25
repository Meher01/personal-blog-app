import React from 'react';
import { assets } from '@/Assets/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.cam_dark} alt='logo' width={110} height={50}/>

    </div>
  )
}

export default Footer;