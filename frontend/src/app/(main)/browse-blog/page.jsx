'use client'
import React, { useEffect, useState } from 'react'

const BrowseBlogs = () => {
  const [blogList, setBlogList] = useState([]);

  const fetchBlogData = () => {
      fetch('http://localhost:5000/blog/getall')
          .then(response => response.json())
          .then(data => {
              console.log(data);
              setBlogList(data);
          })
          .catch(err => console.log(err));
  }

  useEffect(() => {
      fetchBlogData();
  }, []);

  const sliceString = (str, maxLength) => {
      if (str.length > maxLength) {
          return str.slice(0, maxLength) + '...';
      } else {
          return str;
      }
  }

  const displayBlogs = () => {
      if (blogList.length === 0) {
          return <h1>No Blogs Available</h1>
      } else {
    return blogList.map((blogs) =>{
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
       {blogs.description} 
      </p>
    </div>
    })
  }
  }
  return (
    <>
    
    <div className="bg-gray-900 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-white mb-8">
       Latest Blogs   </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {displayBlogs()}

     
    </div>
  </div>
</div>

  </>
 
  )
}
export default BrowseBlogs;
