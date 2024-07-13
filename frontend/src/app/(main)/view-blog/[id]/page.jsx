'use client';
import useAppContext from '@/context/appcontext';
import { set } from 'mongoose';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';


const ViewBlog = () => {
    const {id} = useParams();
    const[blog, setBlog] = useState([]);
    const { currentUser, setCurrentUser } = useAppContext();

    const fetchblog = () => {
        fetch("http://localhost:5000/blog/getbyid/" + id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setBlog(data);
          setCurrentUser(data.user);
        })
        .catch((err) => {
          console.log(err);
        });
      
    }
   useEffect(() => {
    fetchblog();
   }, []);

const displayblog = () => {
    if(blog !== null){
        return(
          <>
          <div className='bg-[#f2e8cf]'>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative  bg-blue-900">
            <div
              className="bg-cover bg-center  text-center overflow-hidden"

              style={{
                minHeight: 500,
                backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/${blog.cover})`,
              }}
              title="Woman holding a mug"
            ></div>
            <div className="max-w-3xl mx-auto">
              <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="bg-[#f2e8cf] relative top-0 -mt-32 p-5 sm:p-10">
                  <p className="">{new Date (blog.createdAt).toLocaleDateString()}
                    <p className="">{blog.currentUser.firstname}{blog.currentUser.lastname}</p>
                    {/* <img src={`${process.env.NEXT_PUBLIC_API_URL}/${blog.user.avatar}`} alt="" /> */}

                  </p>
                  <h1 href="#" className="text-blue-800 font-bold text-3xl mb-2">
                    {blog.title}
                  </h1>
                  <p className="text-[#bc4749] text-lg leading-8 my-5">
                    {blog.description}
                  </p>
                  <p className="text-[#bc4749] text-lg leading-8 my-5">
                    {blog.content}
                  </p>
                 
                  <a
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    #{blog.category} 
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
          </>

        )

        
}
else{
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
}
}

return(
    <>
    {displayblog()};
    </>

)
}

export default ViewBlog;