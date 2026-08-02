'use client'
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/Components/Footer';

import { assets } from '@/public/assets/assets';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

const page = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blog', {
      params: {
        id: params.id
      }
    })
    setData(response.data);
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  if (!data) {
    return null;
  }

  const authorImage = data.authorImg && data.authorImg !== '/author_img.png'
    ? data.authorImg
    : (data.author_img ?? assets.profile_icon);
  const blogImage = data.image ?? assets.blog_pic_1;
  const imageAlt = data.title ? `${data.title} image` : 'Blog image';
  const authorAlt = data.author ? `${data.author} avatar` : 'Author avatar';

  return <>
    <div className='bg-white py-8 px-5 md:px-12 lg:px-24'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <Link href='/' className='inline-flex items-center gap-4'>
            <Image
              src={assets.cam_light_1}
              width={100}
              height={100}
              alt='Camera'
              className='w-[110px] sm:w-auto'
              loading="eager"
              style={{ width: 'auto', height: 'auto' }}
            />
            
          </Link>

          <Link href='/about' className='bold inline-flex items-center gap-2 font-medium py-1 py-3 sm:py-3 sm:px-6 border border-solid border-black active:bg-pink-400 hover:text-white hover:bg-pink-400' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '12px', cursor: 'pointer' }}>
          About Me<Image src={assets.arrow} alt='arrow' width={12} height={12} style={{ width: 'auto', height: 'auto' }} />
        </Link>
        </div>

        <div className='mt-10 rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)]' style={{ boxShadow: '4px 6px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '12px'}}>
          <div className='flex flex-col items-center text-center gap-5'>
            <h1 className='text-3xl font-extrabold text-slate-900 sm:text-5xl leading-tight'>
              {data.title}
            </h1>
            <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-center'>
              <Image
                src={authorImage}
                width={72}
                height={72}
                alt={authorAlt}
                className='h-[72px] w-[72px] rounded-full object-cover'
              />
              <div>
                <p className='text-base font-semibold text-slate-900'>Lasya Lingam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='mx-5 max-w-5xl md:mx-auto mt-8 mb-12'>
      <div className='overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]' style={{ boxShadow: '4px 6px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '12px'}}>
        <Image
          className='w-full object-cover'
          src={blogImage}
          width={1280}
          height={720}
          alt={imageAlt}
          style={{ width: '100%', height: 'auto' }}
        />

        <div className='p-6 md:p-10'>
          <div className='blog-content prose prose-slate prose-lg max-w-none text-slate-700'>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          </div>

          <div className='mt-10 rounded-3xl border border-slate-700 bg-gradient-to-r from-white to-gray-100 p-6 sm:p-8'>
            <p className='text-lg font-semibold text-slate-900'>Share the knowledge</p>
            <p className='mt-2 text-slate-600'>If this article inspired you, spread it and help others learn.</p>
            <div className='mt-4 flex items-center gap-3'>
              <a href='https://www.linkedin.com/in/lasya-lingam' target='_blank' rel='noopener noreferrer'>
                <Image src={assets.linkedin} width={30} height={30} alt='LinkedIn' />
              </a>
              <a href='mailto:meherlaasya@gmail.com'>
                <Image src={assets.email} width={30} height={30} alt='Email' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>;
}

export default page;
