import React from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='flex flex-col items-center w-28 sm:w-56 min-h-screen py-4 border border-black border-r-3'>
      <div className='px-2 sm:px-6 py-4 w-full flex justify-center'>
        <Link href='/admin' className='text-3xl font-semibold text-pink-600 hover:text-pink-800'>
          Admin
        </Link>
      </div>
      <div className='mt-6 flex flex-col items-center gap-4 w-full px-2'>
        <Link href='/admin/addProduct' className='w-full flex items-center justify-center border border-black gap-3 font-medium px-3 py-2 hover:text-white hover:bg-pink-400 rounded-md' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', cursor: 'pointer' }}>
          <Image src={assets.add_icon} alt='' width={28} height={28}/>
          <p>Create blog</p>
        </Link>
        <Link href='/admin/bloglist' className='w-full flex items-center justify-center border border-black gap-3 font-medium px-3 py-2 hover:text-white hover:bg-pink-400 rounded-md' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', cursor: 'pointer' }}>
          <Image src={assets.blog_icon} alt='' width={28} height={28}/>
          <p>Blog List</p>
        </Link>
        <Link href='/admin/subscriptions' className='w-full flex items-center justify-center border border-black gap-3 font-medium px-3 py-2 hover:text-white hover:bg-pink-400 rounded-md' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', cursor: 'pointer' }}>
          <Image src={assets.email} alt='' width={28} height={28} style={{borderRadius: '50%'}}/>
          <p>Subscriptions</p>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar