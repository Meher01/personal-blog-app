import Sidebar from "@/Components/AdminComponents/Sidebar";
import { assets } from '@/Assets/assets';
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
      <div className='flex'>
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className='flex flex-col w-full border border-2'>
          <div className='flex items-center justify-between w-full py-17 max-h-[60px] px-11 border-b-4 border-black bg-pink-100'>
            <h3 className='text-3xl font-semibold'> Admin Settings</h3>
            <Image src={assets.profile_icon} width={30} height={30} alt='' style={{ borderRadius: '15%', width: 'auto', height: 'auto' }} />
          </div>
          {children}
        </div>
      </div>
    </>
  )
}