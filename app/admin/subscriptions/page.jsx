'use client'
import Sub from '@/Components/AdminComponents/Sub';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const page = () => {

  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get('/api/email');
    setEmails(response.data.emails);
  }

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete('/api/email', {
      params: {
        id: mongoId
      }
    })
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    }
    else {
      toast.error("Error")
    }
  }


  useEffect(() => {
    fetchEmails();
  }, [])


  return (
    <div className='flex-1 pt-3 text-xl font-semibold text-pink-600 sm:pt-8 sm:pl-13'>
      <h1 className='underline'> Subscribers: </h1>
      <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-3 border-pink-600 scrollbar-hide'>
        <table className='w-full text-md text-pink-600'>
          <thead className='text-sm text-pink-500 text-left uppercase bg-pink-50 border-b-3'>
            <tr>
              <th scope="col" className='px-6 py-3'>
                Email Subscribers
              </th>
              <th scope="col" className='hidden sm:block px-6 py-3'>
                Date
              </th>
              <th scope="col" className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return <Sub key={index} mongoId={item._id} email={item.email} date={item.date} deleteEmail={deleteEmail} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page