import React from 'react'

const Navbar = () => {
  return (
       <>
       <>
      
       

    <div style={{backgroundColor:"#f2e8cf"}}>
    {/* ========== HEADER ========== */}
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 border-bottom: 1px solid #333333">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
        aria-label="Global"
      >
        <div className="md:col-span-3">
             
        <div className="h-10 w-10 self-center mr-2">
        <img
          className="h-10 w-10 self-center"
          src="blog.png"
        />
      </div>
        </div>
        {/* Button Group */}
        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <button style={{color:"#bc4749"}}
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-slate-200 dark:text-black dark:hover:text-black"
          >
            Sign in
          </button>
          <button style={{color:"#bc4749"}}
            type="button"
             className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-slate-200 dark:text-black dark:hover:text-black"
          >
            About Us
          </button>
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
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-slate-200 dark:text-black dark:hover:text-black"
                href="#"
                aria-current="page"
              >
                Write Post
              </a>
            </div>
            <div>
              <a style={{color:"#bc4749"}}
                 className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-slate-200 dark:text-black dark:hover:text-black"
                   href="#"
              >
                Broswse Competitions
              </a>
            </div>
            <div>
              <a style={{color:"#bc4749"}}
               className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-slate-200 dark:text-black dark:hover:text-black"
                href="#"
              >
                Browse Blogs
              </a>
            </div>                      
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