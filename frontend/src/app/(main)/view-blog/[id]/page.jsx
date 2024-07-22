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
        <div>
          <h1 className='text-center text-blue-900  text-6xl font-bold'>{blogData.title}</h1>

          <div className=''>
            <img src={'http://localhost:5000/' + blogData.cover} className="h-60  mx-auto" alt="" />
          </div>

          <hr className='mb-20 border-black' />
          <div className='grid grid-cols-12'>
            <div className="col-span-3">

              <div className="flex ">
                <div className="font-medium dark:text-white">
              <img className="w-16 h-16 rounded-full block mx-auto   mb-4 " src={`${process.env.NEXT_PUBLIC_API_URL}/${blogData.user.avatar}`} alt="" />
                  <p className='text-center text-slate-500 text-md'>{new Date(blogData.createdAt).toLocaleDateString()}</p>

                  <p className='text-center text-xl'>{blogData.user.firstname}</p>
                  <div className="text-sm text-gray-500 text-center dark:text-gray-400">Joined in {MONTH_NAMES[new Date(blogData.createdAt).getMonth()] + ' ' + new Date(blogData.createdAt).getFullYear()}</div>
                  <hr className='my-4 border-black' />
                  <p className="">{blogData.tags}</p>
                </div>
              </div>
            </div>
            <div className="col-span-9 overflow-auto">
              <MDEditor.Markdown source={blogData.content} className='overflow-auto' height="200px" />
            </div>
          </div>
        </div>
      )
    else return <p>Loading...</p>
  }

  return (
    <div className='pt-32 relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      {displayBlogs()}
    </div>
  )
}

export default ViewBlog;