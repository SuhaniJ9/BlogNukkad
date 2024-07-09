'use client'
import React from 'react';
import Navbar from './(main)/navbar';


const Home = () => {
  
  onSubmit: async (values,action) => {
    console.log(values);
    
    const res = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(values),
           });
      console.log(res.status);
      action.resetForm();
      if(res.status === 200){
          toast.success("User Created")
      }
          else
          {
              toast.error("User Creation Failed")
          }

}
  return (
    <>
      <Navbar>

</Navbar>

  {/* Hero */}
  <div className="relative overflow-hidden mb-24"  style={{backgroundColor:"#f2e8cf"}} >
  <div
  className="w-full relative bg-no-repeat bg-cover h-[500px] z-0 rounded-xl overflow-hidden mb-16"
  style={{
    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
  }}
>
  <div className="relative top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-5 ">
    <h2 className="text-4xl font-bold font-manrope text-white"> BLOG NUKKAD</h2>
    <h6 className="text-xl font-bold font-manrope text-white">Share what you know. Learn what you don't. </h6>
    <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
          {/* Form */}
          <form>
            <div  className="bg-white relative z-10 flex space-x-3 p-3 border rounded-lg shadow-lg shadow-white-100 ">
              <div className="flex-[1_0_0%] ">
                
                <input
                  type="text"
                  name="hs-search-article-1"
                  id="hs-search-article-1"
                  className="py-2.5 px-4 bg-slate-300 text-[#bc4749] block w-full border-blue rounded-lg focus:border-white-500 focus:ring-white-500"
                  placeholder="Search blogs"
                />
              </div>
              </div>
          </form>
          
          {/* End Form */}
          <div className="text-center">
          <div className="mt-10 sm:mt-20">
          <a
            className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-black-500 bg-black text-black-800 shadow-sm hover:bg-[#bc4749] disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-white dark:hover:bg-black-800"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-4"
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
              <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Business
          </a>
          <a
            className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-black-500 bg-black text-black-800 shadow-sm hover:bg-[#bc4749] disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-white dark:hover:bg-black-800"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-4"
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
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx={12} cy={12} r={3} />
            </svg>
            Strategy
          </a>
          <a
            className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-black-500 bg-black text-black-800 shadow-sm hover:bg-[#bc4749] disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-white dark:hover:bg-black-800"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-4"
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
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            Health
          </a>
          <a
            className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-black-500 bg-black text-black-800 shadow-sm hover:bg-[#bc4749] disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-white dark:hover:bg-black-800"
            href="#"
          >
            <svg
              className="flex-shrink-0 size-4"
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
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
            Creative
          </a>
          <a
          className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-black-500 bg-black text-black-800 shadow-sm hover:bg-[#bc4749] disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-white dark:hover:bg-black-800"
            href="#"
            >
          
            <svg
              className="flex-shrink-0 size-4"
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
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              <path d="M10 6h4" />
              <path d="M10 10h4" />
              <path d="M10 14h4" />
              <path d="M10 18h4" />
            </svg>
            Environment
          </a>
          <a
            className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-black-500 bg-black text-black-800 shadow-sm hover:bg-[#bc4749] disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-white dark:hover:bg-black-800"
          >
            <svg
              className="flex-shrink-0 size-4"
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
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
            Adventure
          </a>
        </div>
        </div>
      </div>
  </div>
</div>

    
  {/* End Hero */}
  <div className="carousel rounded-box mb-16">
  <div className="carousel-item ">
    <img
      src="https://i.pinimg.com/564x/a1/ce/db/a1cedb4c4097eae0762d137ea13c6562.jpg"
      alt="Burger" className='w-80 h-full '  
    />
  </div>
  <div className="carousel-item">
    <img className='w-96 h-full'
src="https://i.pinimg.com/564x/49/e6/6a/49e66a6205ec9c492378823f4e310c8f.jpg"      alt="Burger"
    />
  </div>
  <div className="carousel-item">
    <img className='w-96 h-full'
      src="https://i.pinimg.com/736x/0c/f3/1d/0cf31de8e979b4e5a642d5c3da5c1ee1.jpg"
      alt="Burger"
    />
  </div>
  <div className="carousel-item">
    <img className='w-96 h-full'
      src="https://i.pinimg.com/564x/a7/04/23/a7042343a4a17c64498d9a7e7d32708b.jpg"
      alt="Burger"
    />
  </div>
  <div className="carousel-item">
    <img className='w-96 h-full'
      src="https://i.pinimg.com/564x/59/a7/bf/59a7bffee725b0ad2abde059e8a57175.jpg"
      alt="Burger"
    />
  </div>
  <div className="carousel-item">
    <img className='w-96 h-full'
      src="https://i.pinimg.com/564x/83/af/a9/83afa93fd89ed00508e3258aa9b8d898.jpg"
      alt="Burger"
    />
  </div>
  <div className="carousel-item">
    <img className='w-96 h-full'
      src="https://i.pinimg.com/736x/b0/c4/fb/b0c4fb41567c775b4b704389cfacb423.jpg"
      alt="Burger"
    />
  </div>
</div>
<section>
<div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
        
        <h2 className="font-heading font-bold tracking-tight text-gray-900 dark:text-[#bc4749] text-3xl sm:text-5xl">
          <u>Latest Winners</u>
        </h2>
        <h3 className="font-heading font-bold mt-5 tracking-tight text-gray-900 dark:text-[#bc4749] text-3xl sm:text-l">
          Click Read More for reading their blogs.
        </h3>
        </div>
  <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
    <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
      <div className="p-6">
        <img
          className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
          src="6.jpg"
          alt="blog"
        />
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        Liora Isabelle
        </h1>
        <p className="mx-auto text-base leading-relaxed text-gray-500">
        "Liora’s blog has always been a beacon of inspiration.
        Her elegant prose and insightful topics make her a standout winner. This award is a well-deserved recognition of her exceptional talent and hard work."
        </p>{" "}
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            {" "}
            Read More »{" "}
          </a>
        </div>
      </div>
      <div className="p-6">
        <img
          className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
          src="2.jpg"
          alt="blog"
        />
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        Soren Alexander
        </h1>
        <p className="mx-auto text-base leading-relaxed text-gray-500">
        "Soren’s blog is consistently impressive, offering fresh perspectives and insightful content.
        His ability to engage readers is remarkable. Winning this competition is a true reflection of his outstanding skills."
        </p>{" "}
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            {" "}
            Read More »{" "}
          </a>
        </div>
      </div>
      <div className="p-6">
        <img
          className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
          src="4.jpg"
          alt="blog"
        />
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
        Nina Gabriela
        </h1>
        <p className="mx-auto text-base leading-relaxed text-gray-500">
        "Nina’s blog is a joy to read, with engaging and informative content that resonates with readers. 
        Her passion and effort are evident in every post. Congratulations on this well-deserved victory!"
        </p>{" "}
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            {" "}
            Read More »{" "}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<>
  {/* inspired by tailwindcss.com */}
  <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold">
          <span className="mb-1 block text-sm leading-6 text-indigo-500">
            Headless UI
          </span>
          The Insightful Chronicles

        </h3>
        <div className="prose prose-slate prose-sm text-slate-600">
          <p>
          Dive into a world of diverse perspectives and deep insights. The Insightful Chronicles offers thoughtful analysis, compelling stories, and practical advice on a wide range of topics.
          </p>
        </div>
        <a
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
          href=""
        >
          Learn more
          <span className="sr-only">
            , Completely unstyled, fully accessible UI components
          </span>
          <svg
            className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
            width={3}
            height={6}
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6" />
          </svg>
        </a>
      </div>
      <img
        src="https://i.pinimg.com/564x/b9/49/f1/b949f1580eea68e3a1af05f9bfcd0dc1.jpg"
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
        width={1216}
        height={640}
      />
    </li>
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold">
          <span className="mb-1 block text-sm leading-6 text-purple-500">
            Heroicons
          </span>
          Everyday Wonders
        </h3>
        <div className="prose prose-slate prose-sm text-slate-600">
          <p>
          Discover the wonders in everyday life with our captivating stories and insightful posts. Everyday Wonders celebrates the small moments and big ideas that make life extraordinary.
          </p>
        </div>
        <a
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
          href=""
        >
          Learn more
          <span className="sr-only">
            , Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
          </span>
          <svg
            className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
            width={3}
            height={6}
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6" />
          </svg>
        </a>
      </div>
      <img
        src="https://i.pinimg.com/736x/45/09/0f/45090f3b878c3f926eb667248bb1c0af.jpg"
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full h-1/3"
        width={1216}
        height={640}
      />
    </li>
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold">
          <span className="mb-1 block text-sm leading-6 text-cyan-500">
            Hero Patterns
          </span>
          Pathways to Growth
        </h3>
        <div className="prose prose-slate prose-sm text-slate-600">
          <p>
          Join us on a journey of continuous growth and self-improvement. Pathways to Growth offers practical tips, inspiring stories, and expert advice to help you navigate life’s challenges and opportunities.
          </p>
        </div>
        <a
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
          href=""
        >
          Learn more
          <span className="sr-only">
            , Seamless SVG background patterns by the makers of Tailwind CSS.
          </span>
          <svg
            className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
            width={3}
            height={6}
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6" />
          </svg>
        </a>
      </div>
      <img
        src="https://i.pinimg.com/564x/f5/1a/f1/f51af1108f1372182c1e32aa161f7009.jpg"
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
        width={1216}
        height={640}
      />
    </li>
  </ul>
</>

<section className="bg-[#f2e8cf] dark:bg-[#f2e8cf]" id="contact">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="mb-4">
      <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
        
        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-[#bc4749] text-3xl sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-[#bc4749]">
         Feel free to contact us for any questions or inquiries. We would love to hear from you.
        </p>
      </div>
    </div>
    <div className="flex items-stretch justify-center">
      <div className="grid md:grid-cols-2">
        <div className="h-full pr-6">
          <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-[#bc4749]">
            We are here to help you with any questions you may have. We will
          </p>
          <ul className="mb-6 md:mb-0">
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-[#bc4749]">
                  Our Address
                </h3>
                <p className="text-gray-600 dark:text-[#bc4749]">
                 Hazratganj
                </p>
                <p className="text-gray-600 dark:text-[#bc4749]">
                  Lucknow,U.P.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-black">
                  Contact
                </h3>
                <p className="text-gray-600 dark:text-[#bc4749]">
                  Mobile: +91 8318648914
                </p>
                <p className="text-gray-600 dark:text-[#bc4749]">
                  Mail: suhanijaiswal09@gmail.com
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-black">
                  Working hours
                </h3>
                <p className="text-gray-600 dark:text-[#bc4749]">
                  Monday - Friday: 08:00 - 17:00
                </p>
                <p className="text-gray-600 dark:text-[#bc4749]">
                  Saturday &amp; Sunday: 08:00 - 12:00
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
          <h2 className="mb-4 text-2xl font-bold dark:text-black">
            Ready to Get Started?
          </h2>
          <form id="contactForm" >
            <div className="mb-6">
              <div className="mx-0 mb-1 sm:mb-4">
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="name"
                    className="pb-1 text-xs uppercase tracking-wider"
                  />
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Your name"
                    className="mb-2 w-full bg-red-800 rounded-md border border-dark:text-[#bc4749] py-2 pl-2 pr-4 shadow-md sm:mb-0"
                    name="name"
                  />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="email"
                    className="pb-1 text-xs uppercase tracking-wider"
                  />
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    className="mb-2 bg-red-800 w-full rounded-md border-black-500 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    name="email"
                  />
                </div>
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="textarea"
                  className="pb-1 text-xs uppercase tracking-wider"
                />
                <textarea
                  id="message"
                  name="message"
                  cols={30}
                  rows={5}
                  placeholder="Write your message..." 
                  className="mb-2 w-full bg-red-800 text-white rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>





  <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
 
  <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
    <div>
    </div>

    <ul class="text-center">
      <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
        <a style={{color:"#bc4749"}} class="inline-flex gap-x-2 text-lg text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="/help">
          HELP
        </a>
      </li>
      <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
        <a style={{color:"#bc4749"}} class="inline-flex gap-x-2 text-lg text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="/faqs">
          FAQS
        </a>
      </li>

    </ul>
    <div class="md:text-end space-x-2">
      <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700" href="#">
        <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
        </svg>
      </a>
      <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700" href="#">
        <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
      </a>
      <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700" href="#">
        <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>
      <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700" href="#">
        <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"/>
        </svg>
      </a>
    </div>
    
  </div>
</footer>
</div>
    </>
   
  )
}


export default Home