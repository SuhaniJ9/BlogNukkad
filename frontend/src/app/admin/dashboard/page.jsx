import React from 'react'

import Link from 'next/link'
const AdminDashboard = () => {
  return (
    <>
        <>
        <div className='flex flex-col h-screen w-full bg-blue'>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
  />
  <span
    className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
    onclick="openSidebar()"
  >
  </span>
  <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-[#f2e8cf]">
    
      <div className="p-2.5 mt-1 flex items-center">
        <h1 className="font-bold text-[#bc4749] text-[15px] ml-3">
          Admin Dashboard
        </h1>
        <i
          className="bi bi-x cursor-pointer ml-28 lg:hidden"
          onclick="openSidebar()"
        />
      </div>
      <div className="my-2 bg-[#bc4749] h-[1px]" />
 
 

    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 text-blue-500">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-4 w-4 mr-2 -ml-0.5"
  viewBox="0 0 20 20"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
  <path
    fillRule="evenodd"
    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
    clipRule="evenodd"
  />
</svg>

      <span className="text-[15px] ml-4 text-indigo-500 font-bold">
  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
  <path
    fillRule="evenodd"
    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
    clipRule="evenodd"
  />
  <Link href="/admin/manageuser">
 User
  </Link>
 </span>
    </div>
   
    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 text-blue-500">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-4 w-4 mr-2 -ml-0.5"
  viewBox="0 0 20 20"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
  <path
    fillRule="evenodd"
    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
    clipRule="evenodd"
  />
</svg>

      <span className="text-[15px] ml-4 text-indigo-500 font-bold">
  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
  <path
    fillRule="evenodd"
    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
    clipRule="evenodd"
  />
   <Link href="/admin/managecompetition">
Competition
</Link>
 </span>
    </div>

    <div className="my-4 bg-[#bc4749] h-[1px]" />
    
    
    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 text-blue-500">
      <i className="bi bi-box-arrow-in-right" />
      <span className="text-[15px] ml-4 text-blue-500 font-bold">Logout</span>
    </div>
  </div>

  </div>
</>


    </>
  )
}

export default AdminDashboard;