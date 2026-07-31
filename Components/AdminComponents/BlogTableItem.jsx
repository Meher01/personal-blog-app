import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const BlogTableItem = ({authorImg, title, author, date, deleteBlog, id, mongoId}) => {
  const BlogDate = new Date(date);
  return (
    <tr className='bg-pink border-t-2 border-b-2'>
        <th scope='row' className='items-center gap-4 hidden sm:flex px-6 py-4 font-semibold text-pink-600 whitespace-nowrap'>
        <Image src={authorImg?authorImg:assets.profile_icon} width={30} height={30} alt=''/>
        <p>{author?author:"no author"}</p>
        </th>
        <td className='px-6 py-4'>
          {title?title:"no title"}
        </td>
        <td className='px-6 py-4'>
          {BlogDate.toDateString()}
        </td>
        <td onClick={()=>deleteBlog(mongoId)} className='px-14 cursor-pointer'>
          x
        </td>
    </tr>
  )
}

export default BlogTableItem