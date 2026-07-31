import React from 'react';

const Sub = ({email, mongoId, date, deleteEmail}) => {
  const emailDate = new Date(date);
  return (
      <tr className='bg-pink border-t-2 border-b-2 text-left'>
        <th scope='row' className='px-6 py-4 font-semibold text-pink-600 whitespace-nowrap'>
        {email?email:"No Email"}
        </th>
        <td className='hidden sm:block px-6 py-4'>{emailDate.toDateString()}</td>
        <td className='px-14 cursor-pointer' onClick={()=>deleteEmail(mongoId)}>x</td>
      </tr>
  )
}

export default Sub