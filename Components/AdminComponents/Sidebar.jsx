import React from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='flex flex-col'>
      <div className='px-1 sm:pl-14 py-1 border border-black border-2'>
        <Link href='/admin'>
          <Image src={assets.cam_light_1} width={110} height={100} alt='Admin dashboard' loading="eager" style={{ width: 'auto', height: 'auto' }} />
        </Link>
      </div>
<div className='w-28 sm:w-50 h-[100vh] relative py-5 border border-black border-3'>
<div className='w-[50%] sm:w-[80%] absolute right-5'>
<Link href='/admin/addProduct' className='flex items-center border border-black border-3 gap-3 font-medium px-3 py-2 hover:text-white hover:bg-pink-400' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '5px', cursor: 'pointer' }}>
    <Image src={assets.add_icon} alt='' width={28} height={28}/><p>Create blog</p>
    </Link>
    <Link href='/admin/bloglist' className='mt-5 flex items-center border border-black border-3 gap-3 font-medium px-3 py-2 hover:text-white hover:bg-pink-400' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '5px', cursor: 'pointer' }}>
    <Image src={assets.blog_icon} alt='' width={28} height={28}/><p>Blog List</p>
    </Link>
    <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black border-3 gap-3 font-medium px-3 py-2 hover:text-white hover:bg-pink-400' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '5px', cursor: 'pointer' }}>
    <Image src={assets.email} alt='' width={28} height={28} style={{borderRadius: '50%'}}/><p>Subscriptions</p>
    </Link>
</div>

    
</div>
    </div>
  )
}

export default Sidebar