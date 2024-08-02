'use client'
import useAppContext from '@/context/appcontext';
import React from 'react'
import Link from 'next/link';

const Navbar = () => {
const { loggedIn, logout } = useAppContext();

console.log(loggedIn);
const showloggedIn= () => {
    if(loggedIn){
    return(    
      <> 
   <>
  
  
   <div className="relative">
  <details className="group">
    <summary className="w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 focus:outline-none cursor-pointer list-none ml-44">
      <svg
        className="w-full h-full text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </summary>
    <ul className="absolute right-0 mt-2 w-48  bg-[#f2e8cf] border border-blue-800 rounded-lg shadow-lg overflow-hidden z-10">
      <li>
        <a href="/user/profile" className="block px-4 py-2 text-blue-800 hover:text-white hover:bg-[#bc4749]">
          Profile
        </a>
      </li>
      <li>
        <a href="/user/createBlog" className="block px-4 py-2 text-blue-800 hover:text-white hover:bg-[#bc4749]">
          Write Blog
        </a>
      </li>
      <li>
      <a href="/" className="block px-4 py-2 text-blue-800 hover:text-white hover:bg-[#bc4749]">
          Logout
        </a>
      </li>
    </ul>
  </details>
</div>

      </> 
      </>
    )
  }
  else{
    return(
      <a style={{color:"#bc4749"}}
                className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-semibold rounded-xl border border-gray-200 text-black hover:bg-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-slate-200 dark:text-black dark:hover:text-black "
                href="/login"
                aria-current="page"
              >
      <button style={{color:"#bc4749"}}
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-semibold rounded-xl border border-gray-200 text-black hover:bg-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-slate-200 dark:text-black dark:hover:text-black"
      >
        Sign in
      </button>
      </a>
    )
  }

} 

  return (
       <>
       <>
      
       

    <div style={{backgroundColor:"#f2e8cf"}}>
    {/* ========== HEADER ========== */}
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-4 border-bottom: 1px solid #333333">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center  md:px-6"
        aria-label="Global"
      >
        <div className="md:col-span-3">
             
        <div className="w-36 self-center mr-2">
       <Link href="/"> <img
          className="w-max h-max"
          src="blog.png"
          alt='logo'
        />
        </Link>
      </div>
        </div>
        {/* Button Group */}
        <div className="flex items-center gap-x-2 ms-4 py-1 md:ps-6 md:order-3 md:col-span-3">
        
              
              {showloggedIn()}
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={3} x2={21} y1={6} y2={6} />
                <line x1={3} x2={21} y1={12} y2={12} />
                <line x1={3} x2={21} y1={18} y2={18} />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* End Button Group */}
        {/* Collapse */}
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
          
            <div>
              <a style={{color:"#bc4749"}}
                className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-semibold rounded-xl border border-gray-200 text-black hover:bg-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-slate-200 dark:text-black dark:hover:text-black"
                   href="/browse-competition"
              >
                Broswse Competitions
              </a>
            </div>
            <div>
              <a style={{color:"#bc4749"}}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-semibold rounded-xl border border-gray-200 text-black hover:bg-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-slate-200 dark:text-black dark:hover:text-black"
                href="/browse-blog"
              >
                Browse Blogs
              </a>
            </div>    
            <a style={{color:"#bc4749"}}
                className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-semibold rounded-xl border border-gray-200 text-black hover:bg-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-slate-200 dark:text-black dark:hover:text-black "
                href="/about"
                aria-current="page"
              >
                About Us
              </a>                  
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
    {/* ========== END HEADER ========== */}
    </div>
  </>
    </>
  );
}

export default Navbar;