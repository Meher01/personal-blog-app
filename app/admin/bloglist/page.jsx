'use client'
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem';
import axios from 'axios';
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';

const page = () => {

const [blogs, setBlogs] = useState([]);

const fetchBlogs = async () => {
  const response = await axios.get('/api/blog');
  setBlogs(response.data.blogs);
}

const deleteBlog = async (mongoId) => {
  const response = await axios.delete('/api/blog', {
    params: {
      id: mongoId
    }
  })
toast.success(response.data.msg);
fetchBlogs();
}

useEffect(()=> {
  fetchBlogs()
},[])




  return (
    <div className='flex-1 pt-3 text-xl font-semibold text-pink-600 sm:pt-8 sm:pl-13'>
      <h1 className='underline'> My Collection: </h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-3 border-pink-600 scrollbar-hide'>
      <table className='w-full text-md text-pink-600'>
        <thead className='text-sm text-pink-500 text-left uppercase bg-pink-50 border-b-3'>
        <tr>
          <th scope="col" className='hidden sm:block px-6 py-3'>
            Author
          </th>
          <th scope="col" className='px-6 py-3'>
            Blog Title
          </th>
          <th scope="col" className='px-6 py-3'>
          Date of Creation
          </th>
          <th scope="col" className='px-6 py-3'>
            Action
          </th>
        </tr>
        </thead>
        <tbody>
          {blogs.map((item, index)=> {
            return <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author} authoImg={item.authorImg} date={item.date} deleteBlog={deleteBlog}/>
          })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default page