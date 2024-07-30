'use client';
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

const ViewBlog = () => {

  const [blogData, setBlogData] = useState(null);

  const { id } = useParams();

  const fetchBlogData = () => {
    fetch('http://localhost:5000/blog/getbyid/' + id)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBlogData(data);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  const formatDate = (date) => {
    return new Date(date).getDay() + ', ' + new Date(date).getMonth() + ' ' + new Date(date).getDate() + ', ' + new Date(date).getFullYear();
  }

  const displayBlogs = () => {
    if (blogData !== null)
      return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative bg-[#f2e8cf]">
        {/* <div className="bg-cover bg-center text-center overflow-hidden">
        <img src={'http://localhost:5000/' + blogData.cover} className="h-auto w-auto  mx-auto" alt="" />
          
      </div> */}
       <div className="max-w-3xl mx-auto">
       <div className="mt-3 bg-[#bc4749] rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
         <div className=" bg-[#bc4749] relative top-0 -mt-32 p-5 sm:p-10">
           <h1 href="#" className="text-[#f2e8cf] font-bold text-3xl mb-2">
            
            {blogData.title}
           </h1>
           <p className='text-center text-[#f2e8cf] text-md'> Date: {new Date(blogData.createdAt).toLocaleDateString()}</p>
           <p className="text-gray-700 text-xs mt-2">
           <img className="w-16 h-16 rounded-full block mx-auto   mb-4 " src={`${process.env.NEXT_PUBLIC_API_URL}/${blogData.user.avatar}`} alt="" />
           {/* <div className="text-sm text-[#bc4749] text-center">Joined in {MONTH_NAMES[new Date(blogData.createdAt).getMonth()] + ' ' + new Date(blogData.createdAt).getFullYear()}</div> */}
             
             
        <p className="text-[#f2e8cf] text-xs mt-2">
          Written By:  
          <span className="text-indigo-600 font-medium">
             {blogData.user.firstname} {blogData.user.lastname}
          </span>         
             
             </p>
             </p>
              <MDEditor.Markdown source={blogData.content} className='overflow-auto ' height="200px" style={{backgroundColor:"#bc4749"}} />
            
           </div>
           </div>
           </div>
            </div>


      )
    else return <p>Loading...</p>
  }

  return (
    <div className='pt-32 relative bg-[#f2e8cf] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      {displayBlogs()}
    </div>
  )
}

export default ViewBlog;