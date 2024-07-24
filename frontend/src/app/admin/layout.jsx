import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineManageSearch } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { MdOutlineContactPhone } from "react-icons/md";

import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <>

            <>
                {/* component */}
                <div className="flex">
                    <div className="">
                        <div
                            id="Main"
                            className="xl:rounded-r transform  h-full fixed  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-[#bc4749] flex-col"
                        >
                            
                            <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
                            <img src="/blog.png" alt="logo" className="" />

                            </div>
                            <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-[#f2e8cf] border-b space-y-3 pb-5 ">
                                <Link href="/admin/dashboard" className="flex  text-[#bc4749] bg-[#f2e8cf]  hover:border-[#fdba74] rounded-xl py-2 px-10 hover:scale-105 hover:bg-[#fdba74] font-semibold duration-300 space-x-2  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                                <LuLayoutDashboard className='text-xl text-[#bc4749] ' />
                           
                            <span className='text-[#bc4749]'>
                            Dashboard
                                 </span>
                     
                                </Link>
                                <Link href="/admin/managecompetition" className="flex  text-[#bc4749] bg-[#f2e8cf]  hover:border-[#fdba74] rounded-xl py-2 px-10 hover:scale-105 hover:bg-[#fdba74] font-semibold duration-300 space-x-2  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                                <LuLayoutDashboard className='text-xl text-[#bc4749] ' />
                           
                            <span className='text-[#bc4749]'>
                           Competitions
                                 </span>
                     
                                </Link>

                                <Link href="/admin/manageuser" className="flex  text-[#bc4749] bg-[#f2e8cf]  hover:border-[#fdba74] rounded-xl py-2 px-16 hover:scale-105 hover:bg-[#fdba74] font-semibold duration-300 space-x-2  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                                <LuLayoutDashboard className='text-xl text-[#bc4749] ' />
                           
                            <span className='text-[#bc4749]'>
                            Users
                                 </span>
                     
                                </Link>
                                <Link href="/admin/contact" className="flex  text-[#bc4749] bg-[#f2e8cf]  hover:border-[#fdba74] rounded-xl py-2 px-16 hover:scale-105 hover:bg-[#fdba74] font-semibold duration-300 space-x-2  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                                <LuLayoutDashboard className='text-xl text-[#bc4749] ' />
                           
                            <span className='text-[#bc4749]'>
                            Contact
                                 </span>
                     
                                </Link>
                            </div>
                            <div className="hidden xl:flex justify-start p-6 items-center space-x-6 mt-10 ">



                           </div>
                           <div className="hidden xl:flex justify-start p-6 items-center space-x-6 mt-10">



                           </div>
                            <div className="hidden xl:flex justify-start p-6 items-center space-x-3 border-[#f2e8cf] border-b w-full">



                           </div>



                            <div className="hidden xl:flex justify-start p-6 items-center space-x-3 ">
                            <Link href="/" className="flex  text-[#bc4749] bg-[#f2e8cf]  hover:border-[#fdba74] rounded-xl py-2 px-14 hover:scale-105 hover:bg-[#fdba74] font-semibold duration-300 space-x-2  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                                <LuLayoutDashboard className='text-xl text-[#bc4749] ' />
                           
                            <span className='text-[#bc4749]'>
                            Log Out
                                 </span>
                     
                                </Link>
                            </div>

                            <div className="flex flex-col justify-start items-center px-6 bg[#f2e8cf]">



                                <div className=" flex justify-between items-center w-full bg[#f2e8cf]">
                                    <div className="flex justify-center items-center  space-x-2">
                                        <div>
                                            <img
                                                className="rounded-full"
                                                src="/profile-pic.png"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div className="flex justify-start flex-col items-start">
                                            <p className="cursor-pointer text-sm leading-5 text-white">
                                                Suhani Jaiswal
                                            </p>
                                            <p className="cursor-pointer text-xs leading-3 text-gray-300">
                                                suhani12@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="p-5 ms-60 w-full bg-[#f2e8cf]">
                        {children}
                    </div>
                </div>

            </>



        </>
    )
}

export default Layout