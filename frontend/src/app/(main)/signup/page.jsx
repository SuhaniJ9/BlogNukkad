'use client'
import React from 'react'
import { useFormik } from "formik"
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Link from 'next/link';
import * as Yup from 'yup'
import toast from 'react-hot-toast';

const Signup = () => {
  const addUserSchema = Yup.object().shape({  });
    const signupForm = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            cpassword: ""
        },
        onSubmit: async (values,action) => {
          console.log(values);
          
          const res = await fetch('http://localhost:5000/user/create', {
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
        validationSchema: addUserSchema
}})
    return (
        <>
            <>
                {/* component */}
                <section style={{backgroundColor:"#f2e8cf"}} className=" min-h-screen flex box-border justify-center items-center">
                    <div className="shadow-2xl rounded-2xl flex max-w-3xl p-5 items-center">
                        <div className="md:block hidden w-1/2">
                            <img
                                className="rounded-2xl max-h-[1600px]"
                                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*s14P5eUcZbMKowFLpn5e_A.jpeg"
                                alt="login form image"
                            />
                        </div>
                        <div className="md:w-3/4 px-8">
                            <h2 style={{color:"#bc4749"}} className="font-bold text-3xl font-serif mx-3">Register</h2>
                            <p style={{color:"#bc4749"}} className="text-sm mt-4 mb-3 mx-3">
                                If you are a new member, easily register now.
                            </p>
                            <form onSubmit={signupForm.handleSubmit} className="flex flex-col gap-4">
                                <div className="flex">
                                    <div className="flex me-2 w-1/2">
                                        <div className="w-full px-3 ">
                                            <label  htmlFor="" className="text-xs text-gray-600 font-semibold px-1">
                                                First Name
                                            </label>
                                            <div className="flex" >

                                                <div  className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                                                    <FaRegUser className='text-gray-100' />
                                                </div>
                                                <input
                                                    type="text"
                                                    style={{backgroundColor:"#bc4749"}}
                                                    className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 "
                                                    placeholder="John"
                                                    id="firstname"
                                                    required
                                                    name="firstname"
                                                    value={signupForm.values.firstname}
                                                    onChange={signupForm.handleChange}
                                                />
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3 w-1/2">
                                        <div className="w-full px-3 ">
                                            <label htmlFor="" className="text-xs text-gray-600 font-semibold px-1">
                                                Last Name
                                            </label>
                                            <div className="flex">
                                                <div  className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <FaRegUser className='text-gray-100' />

                                                </div>
                                                <input
                                                style={{backgroundColor:"#bc4749"}}
                                                    type="text"
                                                    className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                    placeholder="Doe"
                                                    id="lastname"
                                                    required
                                                    name="lastname"
                                                    value={signupForm.values.lastname}
                                                    onChange={signupForm.handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mx-3">
                                        <label htmlFor="" className="text-xs text-gray-600 font-semibold px-1">
                                            Email
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <MdOutlineMail className='text-gray-100 text-xl' />
                                            </div>
                                            <input
                                            style={{backgroundColor:"#bc4749"}}
                                                type="email"
                                                className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="john@example.com"
                                                id="email"
                                                required
                                                name="email"
                                                value={signupForm.values.email}
                                                onChange={signupForm.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex  w-1/2">
                                        <div className="w-full px-3 text-gray-600 mb-3">
                                            <label htmlFor="" className="text-xs font-semibold px-1">
                                                Password
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <CiLock className='text-xl text-gray-100' />
                                                </div>
                                                <input
                                                style={{backgroundColor:"#bc4749"}}
                                                    type="password"
                                                    className="w-full -ml-10 text-white pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 "
                                                    placeholder=""
                                                    id="password"
                                                    required
                                                    name="password"
                                                    value={signupForm.values.password}
                                                    onChange={signupForm.handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex  w-1/2">
                                        <div className="w-full text-gray-600 px-3 mb-3">
                                            <label htmlFor="" className="text-xs font-semibold px-1">
                                                Confirm Password
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1  text-center pointer-events-none flex items-center justify-center">
                                                    <CiLock className='text-xl text-gray-100' />
                                                </div>
                                                <input
                                                  style={{backgroundColor:"#bc4749"}}
                                                    type="password"
                                                    className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                    placeholder="*"
                                                    id="cpassword"
                                                    required
                                                    name="cpassword"
                                                    value={signupForm.values.cpassword}
                                                    onChange={signupForm.handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button style={{backgroundColor:"#bc4749"}}
                                    className="text-white py-2 mx-2 rounded-xl hover:scale-105 duration-300 hover:bg-orange-700 font-medium"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </form>
                            <div className="mt-4 text-sm flex text-gray-700 justify-between items-center container-mr">
                                <p className="mr-3 md:mr-0 ">If you have an account..</p>
                                <Link style={{backgroundColor:"#bc4749"}} href="/login" className="text-white bg-orange-900 hover:border-orange-700 rounded-xl py-2 px-5 hover:scale-105 hover:bg-orange-700 font-semibold duration-300">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default Signup