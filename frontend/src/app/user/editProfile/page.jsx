'use client'
import { Formik, useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Editprofile = () => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  console.log(currentUser);

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('myfile', file);
    fetch(`http://localhost:5000/util/uploadfile`, {
      method: 'POST',
      body: fd,
    }).then(res => {
      if (res.status === 200) {
        toast.success('Profile Image Updated');
        updateProfile({ avatar: file.name });
      }
    });
  }
  const updateProfile = (data) => {
    fetch(`http://localhost:5000/user/update`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': currentUser.token,
      },
    })
      .then(res => {
        console.log(res.status);
        return res.json();
      })
      .then(data => {
        console.log(data);
// toast.success("User updated successfully")
        setCurrentUser({...currentUser, ...data});
      })
      .catch(err => console.log(err));
  }



  return (
    <>
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    body {\n        font-family: 'Plus Jakarta Sans', sans-serif;\n    }\n"
          }}
        />
        <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">

          <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
            <div className="p-2 md:p-4">
              <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
                <div className="grid max-w-2xl mx-auto mt-8">
                  <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                    <img
                      className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                      src={
                        currentUser.avatar &&
                        `${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatar}`}
                      alt="Bordered avatar"
                    />
                    <div className="flex flex-col space-y-5 sm:ml-8">
                      <div className="text-center my-2">
                        <label
                          className="py-3 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200"
                          htmlFor="upload-image"
                        >
                          {" "}
                          <i className="fas fa-pen"></i>&nbsp;Edit{" "}
                        </label>
                        <input
                          type="file"
                          hidden
                          onChange={uploadProfileImage}
                          id="upload-image"
                        />
                      </div>

                    </div>
                  </div>
                  {
                    <Formik initialValues={currentUser} onSubmit={updateProfile}>
                      {(updateProfile) => (


                        <form onSubmit={updateProfile.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                              First Name*
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
                              Last name*
                            </label>
                            <input
                              type="text"
                              id="lastname"
                              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                              onChange={updateProfile.handleChange}
                              value={updateProfile.values.lastname}
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
                </div>
              </div>
            </div>
          </main>
        </div>
      </>

    </>
  )
}

export default Editprofile;