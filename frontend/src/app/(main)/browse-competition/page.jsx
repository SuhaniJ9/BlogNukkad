'use client'
import React, { useEffect, useState } from 'react'

const BrowseCompetitions = () => {
  const [blog, setblog]=useState([]);

  const fetchblogs = () => {
    fetch("http://localhost:5000/admin/getall")
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setblog(data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    fetchblogs();
  } , []);

  const displayblogs = () => {
    return blog.map((blogs) =>{
      return  <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="relative overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt="Product"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
          Participate
          </button>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mt-4"> {blogs.title}</h3>
      <p className="text-gray-500 text-sm mt-2">
       {blogs.eligible} 
      </p>
    </div>
    })

  }
  return (
    <>
    <div  style={{backgroundColor:"#f2e8cf"}} className=" ml-auto flex items-center p-6 space-x-6 rounded-xl shadow-lg">
        <div className="mx-1.5 flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder="Blog name or keyword..."
          />
        </div>
        <div className="mx-8 bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
          <span>Search</span>
        </div>
      </div>
    <div className="bg-gray-900 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-white mb-8">
       Latest Competitions    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {displayblogs()}

     
    </div>
  </div>
</div>

  </>
 
  )
}

export default BrowseCompetitions;