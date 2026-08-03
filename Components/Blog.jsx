import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/Assets/assets';

const Blog = ({title, description, category, image, id}) => {
  const normalizeImageSrc = (src) => {
    if (!src) return '/uploads/default-blog.jpg';
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) return src;
    return src.startsWith('/') ? src : `/${src}`;
  };

  return (
    <div className='mb-4 sm:mb-10 w-full max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[0px_6px_6px_rgba(241,17,129,0.95)] overflow-hidden mx-auto sm:mx-0' style={{ borderRadius: '12px', cursor: 'pointer' }}>
      <Link href={`/blogs/${id}`}>
      <img src={normalizeImageSrc(image)} alt={title} className='border-b border-pink-500 w-full h-auto' />
      </Link>
      <p className='ml-3 sm:ml-5 mt-3 sm:mt-5 px-2 inline-block bg-pink-500 text-white text-[12px] sm:text-sm font-bold'>{category}</p>
      <div className="p-3 sm:p-5">
        <h5 className='mb-2 text-[15px] sm:text-lg font-medium tracking-tight text-gray-900' style={{ fontWeight: '600' }}>{title}</h5>
        <p className='mb-3 text-sm sm:text-base tracking-tight text-pink-600' style={{ fontWeight: '600' }}>
          {(() => {
            const text = description?.replace(/<[^>]*>/g, '') || '';
            return text.length > 92 ? `${text.slice(0, 92)}...` : text;
          })()}
        </p>
      <Link href={`/blogs/${id}`} className='inline-flex items-center py-1 sm:py-2 font-semibold text-center text-sm sm:text-base'>
       Read more <Image src={assets.arrow} className='ml-2' alt='' width={12} height={12} /> 
       </Link>
      </div>
    </div>
  );
};

export default Blog;