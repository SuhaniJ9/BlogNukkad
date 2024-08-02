'use client'
<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 0866b1eadd636dced66bfd4cc92d033c87907311
import { Formik } from 'formik';
import Link from 'next/link';
import toast from 'react-hot-toast';

const UserProfile = () => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    const fetchUser = async () => {
        try {
            const userId = currentUser._id; // Use userId stored in sessionStorage
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getcurrentuser?userId=${userId}`);

            if (!response.ok) {
                throw new Error('Error fetching user data');
            }

            const data = await response.json();
            setCurrentUser(data);
        } catch (error) {
            console.error('Error fetching user:', error);
            toast.error('Error fetching user data');
        }
    };

    useEffect(() => {
        if (currentUser) {
            fetchUser();
        }
    }, []);

    const uploadProfileImage = async (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('myfile', file);

        try {
            const response = await fetch('http://localhost:5000/util/uploadfile', {
                method: 'POST',
                body: fd,
            });

<<<<<<< HEAD
  return (
    <>
    <section className="relative pt-40 pb-24">
      <img
        src="https://i.pinimg.com/564x/7d/df/96/7ddf9680b41fc4df1e9a1aa9e63b62b6.jpg"
        alt="cover-image"
        className="w-full absolute top-0 left-0 z-0 h-60"
      />
      < div className="bg-[#f2e8cf]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 ">
          <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
=======
            if (response.status === 200) {
                toast.success('Image uploaded successfully');
                updateProfile({ avatar: file.name });
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('Error uploading image');
        }
    };

    const updateProfile = async (data) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${currentUser._id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error updating profile');
            }

            const updatedUser = await response.json();
            toast.success('Updated successfully');
            setCurrentUser(updatedUser);
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Error updating profile');
        }
    };

    return (
        <section className="relative pt-40 pb-24">
>>>>>>> 0866b1eadd636dced66bfd4cc92d033c87907311
            <img
                src="https://i.pinimg.com/564x/7d/df/96/7ddf9680b41fc4df1e9a1aa9e63b62b6.jpg"
                alt="cover-image"
                className="w-full absolute top-0 left-0 z-0 h-60"
            />
            <div className="bg-[#f2e8cf]">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
                        <img
                            src={currentUser?.avatar && `${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatar}`}
                            alt="user-avatar-image"
                            className="border-4 border-solid border-white rounded-full"
                        />
                        <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                            <div className="block">
                                <h3 className="font-manrope font-bold text-4xl text-[#bc4749] mb-1 mt-10 ml-2">
                                    {currentUser?.firstname} {currentUser?.lastname}
                                </h3>
                                <p className="font-normal text-[#bc4749] ml-2">
                                    {currentUser?.email}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="btn bg-[#bc4749] border hover:bg-red-700 ml-10 px-2 py-1" htmlFor="upload-image">
                            <i className="fas fa-pen text-white">Change Profile</i>
                        </label>
                        <input type="file" hidden onChange={uploadProfileImage} id="upload-image" />
                        <label className="btn bg-[#bc4749] border hover:bg-red-700 ml-10 px-2 py-1" htmlFor="upload-image">
                            <Link href="/resetPassword">
                                <i className="fas fa-pen text-white">Forgot Password</i>
                            </Link>
                        </label>
                    </div>
                </div>
                <div></div>
                <Formik initialValues={currentUser} onSubmit={updateProfile}>
                    {(updateProfile) => (
                        <form onSubmit={updateProfile.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="first-name"
                                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                >
                                    Name*
                                </label>
                                <input
                                    type="text"
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
                                    type="text"
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
                                    type="text"
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
                                    type="text"
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
                                    defaultValue=""
                                />
                            </div>
                            <div className="flex items-center justify-between sm:col-span-2">
                                <button type="submit" className="inline-block rounded-lg bg-blue-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                                    Update
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    );
};

<<<<<<< HEAD



          <div className="">
                <label className='btn bg-[#bc4749] border hover:bg-red-700 ml-10 px-2 py-1' htmlFor='upload-image'>
                  {" "} <i className='fas fa-pen text-white'>Change Profile </i>
                </label>
                <input type="file" hidden onChange={uploadProfileImage} id="upload-image" />
              
         
              </div>
        </div>
        <div>

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
                <div className="flex items-center  justify-between sm:col-span-2">
                  <button type="submit" className="inline-block rounded-lg bg-blue-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                    Update
                  </button>

                </div>

              </form>
            )}
          </Formik>
        }
      </div>
    </section>
</>
  )
}

export default UserProfile;
=======
export default UserProfile;
>>>>>>> 0866b1eadd636dced66bfd4cc92d033c87907311
