'use client'

import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UserProfile = () => {

const [currentUser, setCurrentUser] = useState(
  JSON.parse(sessionStorage.getItem("user"))
);


const uploadProfileImage = (e) => {
  const file = e.target.files[0];
  const fd = new FormData();
  fd.append('myfile', file)
  fetch(`http://localhost5000/util/uploadfile`, {
    method: "POST",
    body: fd,
  })
    .then(res => {
      if(res.status === 200){
       toast.success("Image uploaded successfully");
        updateProfile({avatar: file.name});
    }
    })
  }
  const updateProfile = (data) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${currentUser._id}`,
       {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res.status)
        toast.success('Updated successfully')

        return res.json()
      })
      .then(data => {
        console.log(data),
          setCurrentUser(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <section className="relative pt-40 pb-24">
    <img
      src="https://pagedone.io/asset/uploads/1705473378.png"
      alt="cover-image"
      className="w-full absolute top-0 left-0 z-0 h-60"
    />
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
      <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
        <img
          src={currentUser.avatar && `${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatar}`}
          alt="user-avatar-image"
          className="border-4 border-solid border-white rounded-full"
        />
      </div>
      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <label className='btn bg-white border hover:bg-slate-200' htmlFor='upload-image'>
                          {" "} <i className='fas fa-pen'>&nbsp;Change Profile </i>
                        </label>
                        <input type="file" hidden onChange={uploadProfileImage} id="upload-image" />
                      </div>
                    </div>



      <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
        <div className="block">
          <h3 className="font-manrope font-bold text-4xl text-[#bcc4749] mb-1">
           {currentUser.firstname} {currentUser.lastname}
          </h3>
          <p className="font-normal text-base leading-7 text-gray-500">
            {currentUser.email}
          </p>
        </div>
        
      </div>
      
    </div>
    {
                  <Formik initialValues={currentUser} onSubmit={updateProfile}>
                    {(updateProfile) => (

                
                <form  onSubmit={updateProfile.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Name*
                    </label>
                    <input
                     type='text'
                      id="firstname"
                     value={updateProfile.values.firstname}
                     onChange={updateProfile.handleChange}
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Address*
                    </label>
                    <input
                     type='text'
                      id="lastname"
                     value={updateProfile.values.lastname}
                     onChange={updateProfile.handleChange}
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Email*
                    </label>
                    <input
                    type='text'
                      id="email"
                      value={updateProfile.values.email}
                      onChange={updateProfile.handleChange}
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Phone No.*
                    </label>
                    <input
                    type='text'
                     id="phone"
                     value={updateProfile.values.phone}
                     onChange={updateProfile.handleChange}
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Bio*
                    </label>
                    <textarea
                      name="message"
                      className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                      defaultValue={""}
                    />
                  </div>
                  <div className="flex items-center justify-between sm:col-span-2">
                    <button type="submit" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                      Update
                    </button>
                
                  </div>
                  
                </form>
                    )}
                    </Formik>
                  }
  </section>
  
  )
}

export default UserProfile;