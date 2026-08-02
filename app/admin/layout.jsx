import Sidebar from "@/Components/AdminComponents/Sidebar";
import { assets } from '@/Assets/assets';
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
      <div className='flex min-h-screen'>
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className='flex flex-col w-full border-2 border-black'>
          <div className='flex items-center justify-between w-full py-3 px-8 border-b-4 border-black bg-pink-100'>
            <h3 className='text-2xl font-semibold'>Admin Settings</h3>
            <Image src={assets.profile_icon} width={72} height={72} alt='' className='h-[72px] w-[72px] rounded-full object-cover' />
          </div>
          <main className='flex-1 p-6'>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}