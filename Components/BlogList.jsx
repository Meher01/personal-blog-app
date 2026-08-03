import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import axios from 'axios';

const BlogList = () => {

    const [menu, setMenu] = React.useState('All');
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
    }

    useEffect(() => {
      fetchBlogs();
    },[])

  return (
    <div className='relative overflow-hidden rounded-[24px] border border-pink-200/400 shadow-lg shadow-pink-200/50 bg-gradient-to-b from-pink-100 to-purple-200 mb-6 sm:mb-12 mx-1.5 sm:mx-8 lg:mx-30'>
      <div className='flex flex-wrap justify-center gap-3 sm:gap-8 my-4 sm:my-10 text-[13px] sm:text-base font-semibold' style={{fontSize: '14px'}}>
        <button onClick={()=>setMenu('All')} style={{cursor: 'pointer'}} className={menu==="All" ? 'bg-pink-500 text-white py-1 px-2.5 sm:px-4 rounded-sm bold' : ""}>All</button>
        <button onClick={()=>setMenu('Technology')} style={{cursor: 'pointer'}} className={menu==="Technology" ? 'bg-pink-500 text-white py-1 px-2.5 sm:px-4 rounded-sm bold' : ""}>Technology</button>
        <button onClick={()=>setMenu('Hobbies')} style={{cursor: 'pointer'}} className={menu==="Hobbies" ? 'bg-pink-500 text-white py-1 px-2.5 sm:px-4 rounded-sm bold' : ""}>Hobbies</button>
        <button onClick={()=>setMenu('Lifestyle')} style={{cursor: 'pointer'}} className={menu==="Lifestyle" ? 'bg-pink-500 text-white py-1 px-2.5 sm:px-4 rounded-sm bold' : ""}>Lifestyle</button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 p-2 sm:p-6 mb-4 sm:mb-12 xl:mx-24'>
    {blogs.filter((item)=> menu==="All"? true: item.category===menu).map((item, index)=>{
      return <Blog key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />

    })}
      </div>
    </div>
  )
}

export default BlogList;