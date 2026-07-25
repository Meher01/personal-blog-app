import React from 'react';
import { blog_data } from '@/public/assets/assets';
import Blog from './Blog';

const BlogList = () => {

    const [menu, setMenu] = React.useState('All');

  return (
    <div className='relative overflow-hidden rounded-[24px] border border-pink-200/400 shadow-lg shadow-pink-200/50 bg-gradient-to-b from-pink-50 to-pink-100 mb-12 ml-10 mr-10'>
      <div className='flex justify-center gap-8 my-10 text-sm sm:text-base font-semibold' style={{fontSize: '18px'}}>
        <button onClick={()=>setMenu('All')} style={{cursor: 'pointer'}} className={menu==="All" ? 'bg-pink-500 text-white py-1 px-4 rounded-sm bold' : ""}>All</button>
        <button onClick={()=>setMenu('Technology')} style={{cursor: 'pointer'}} className={menu==="Technology" ? 'bg-pink-500 text-white py-1 px-4 rounded-sm bold' : ""}>Technology</button>
        <button onClick={()=>setMenu('Startup')} style={{cursor: 'pointer'}} className={menu==="Startup" ? 'bg-pink-500 text-white py-1 px-4 rounded-sm bold' : ""}>Startup</button>
        <button onClick={()=>setMenu('Lifestyle')} style={{cursor: 'pointer'}} className={menu==="Lifestyle" ? 'bg-pink-500 text-white py-1 px-4 rounded-sm bold' : ""}>Lifestyle</button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mb-12 xl:mx-24'>
    {blog_data.filter((item)=> menu==="All"? true: item.category===menu).map((item, index)=>{
      return <Blog key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />

    })}
      </div>
    </div>
  )
}

export default BlogList;