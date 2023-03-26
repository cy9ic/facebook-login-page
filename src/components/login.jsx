import React, { useEffect } from 'react'
import Helmet from 'react-helmet';
import logo from './fb.svg'


export default function Tp() {
  useEffect(()=>{document.title = "Facebook: Login Page";document.body.style='background-grey'})
  return (
    <>
    <Helmet>
    <style>{'body { --tw-bg-opacity: 1; background-color:  rgb(243 244 246 / var(--tw-bg-opacity)); }'}</style>
    </Helmet>
    <div className='container mt-36 flex mx-72 bg-gray-100'>

      <div className="left w-1/3 mx-14  mt-10">
      <img src={logo} alt="" className='w-72 ' />
      <p className='text-3xl mx-6 w- '>Facebook helps you connect and share with the people in your life.</p>
      </div>

      <div className="right flex flex-col bg-white p-4  rounded-lg w-[26.3333%] text-xl shadow-2xl relative">
        <input className='px-4 h-12 my-2 border border-1 border-gray-300 rounded-lg '  type="email" placeholder='Enter email or phone number' />
        <input className='px-4 h-12 my-2 border border-1 border-gray-300 rounded-lg ' type="password" placeholder='Password' />
      <button className="btn bg-blue-500 text-white py-2 my-2 rounded-md font-bold text-xl">Log in</button>
      <span className='text-center text-blue-700 text-sm my-2 hover:cursor-pointer  '><button className='hover:underline'> Forgotten password?</button></span>
      <hr  className='my-2'/>
    <button className='btn bg-green-600 text-white py-2 px-4 mx-auto my-2 w-fit  rounded-md font-bold text-xl'>Create new account</button>

      <span className='absolute -bottom-10 text-sm ml-10'><span className='font-bold hover:underline hover:cursor-pointer'>Create a Page</span> for a celebrity, brand or business.</span>
      </div>

    </div>
    </>
  
  )
}

