import Image from 'next/image';
import React, { useState } from 'react';
import { assets } from '@/Assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Header = () => {

  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post('/api/email', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    }
    else {
      toast.error("Error")
    }
  }

  return (
    <div className='relative z-10 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex items-center justify-between'>
        <Image src={assets.cam_light_1} width={110} height={50} alt='logo' className='w-[130px] sm:w-auto' loading="eager" style={{ width: 'auto', height: 'auto' }} />
        <p className='animated-text font-medium bold' style={{ fontSize: '24px' }}>❤️Hi There, Welcome to my Blog web app❤️</p>

        <button className='bold flex items-center gap-2 font-medium py-1 py-3 sm:py-3 sm:px-6 border border-solid border-black active:bg-pink-400 hover:text-white hover:bg-pink-400' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '12px', cursor: 'pointer' }}>
          Click Here<Image src={assets.arrow} alt='arrow' width={12} height={12} style={{ width: 'auto', height: 'auto' }} />
        </button>
      </div>
      <div className='text-center my-8'>
        <h1 className='bold text-3xl sm:text-5xl font-medium text-pink-500 animated-text'>~ My Blogs ~</h1>
        <p className='text-sm sm:text-base mt-5' style={{ fontSize: '18px' }}>A collection of my thoughts, which I would like to share with the world ✨</p>
        <form onSubmit={onSubmitHandler} className='flex justify-start max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black overflow-hidden bg-white/70 backdrop-blur-sm' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '12px', cursor: 'pointer' }} action="">
          <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Enter your email' className='flex-1 pl-4 outline-none bg-transparent' /><button type='submit' className='bold border-l border-black py-4 px-4 sm:px-8 active:bg-pink-400 hover:text-white hover:bg-pink-400' style={{ cursor: 'pointer' }}>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Header;