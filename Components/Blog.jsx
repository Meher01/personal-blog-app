import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/Assets/assets';

const Blog = ({title, description, category, image, id}) => {
  return (
    <div className='mb-10 max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[0px_6px_6px_rgba(241,17,129,0.95)] overflow-hidden' style={{ borderRadius: '12px', cursor: 'pointer' }}>
      <Link href={`/blogs/${id}`}>
      <Image src={image} alt='' width={400} height={400} className='border-b border-pink-500' />
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block bg-pink-500 text-white text-sm font-bold '>{category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900' style={{ fontWeight: '600' }}>{title}</h5>
        <p className='mb-3 tracking-tight text-pink-600' style={{ fontWeight: '600' }}> {description}</p>
      <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
       Read more <Image src={assets.arrow} className='ml-2' alt='' width={12} height={12} /> 
       </Link>
      </div>
    </div>
  );
};

export default Blog;