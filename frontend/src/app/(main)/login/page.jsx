'use client'
import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Formik, useFormik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Login = () => {
const router = useRouter();
    const addUserSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required')
    });

    const addUser = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values, action) => {
            console.log(values)
         
            const res = await fetch("http://localhost:5000/user/authenticate", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              console.log(res.status);
        
              if (res.status === 200) {
                toast.success("Login Successfull");
                const data = await res.json();
                console.log(data);
               sessionStorage.setItem("user", JSON.stringify(data));
                router.push("/");

            
              } else if (res.status === 401) {
                toast.error("Invalid Credentials");
              } else {
                toast.error("Some error occured");
              }
            },
        validationSchema: addUserSchema
    });
    return (
        <section style={{ backgroundColor: "#f2e8cf" }} className=" min-h-screen flex box-border justify-center items-center">

            <div className="shadow-2xl rounded-2xl flex max-w-3xl p-5 items-center">

                <div className="md:w-3/4 px-8">
                    <h2 style={{ color: "#bc4749" }} className="font-bold text-3xl font-serif mx-3">Login</h2>
                    <form onSubmit={addUser.handleSubmit} className="flex flex-col gap-4">
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mx-3">
                                <label htmlFor="" className="text-xs text-gray-900 font-semibold px-1">
                                    Email
                                </label>
                                {
                                    addUser.touched.email && <span className="text-red-500">{addUser.errors.email}</span>
                                }
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <MdOutlineMail className='text-gray-900 text-xl' />
                                    </div>

                                    <input
                                        style={{ backgroundColor: "#bc4749" }}
                                        type="email"
                                        className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="john@example.com"
                                        id="email"
                                        name="email"
                                        value={addUser.values.email}
                                        onChange={addUser.handleChange}
                                    />

                                </div>

                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mx-3">
                                <label htmlFor="" className="text-xs text-gray-900 font-semibold px-1">
                                        Password
                                    </label>
                                    {
                                        addUser.touched.password && <span className="text-red-500">{addUser.errors.password}</span>
                                    }
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <CiLock className='text-xl text-gray-900' />
                                        </div>
                                        <input
                                            style={{ backgroundColor: "#bc4749" }}
                                            type="password"
                                            className="w-full -ml-10 text-black pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 "
                                            placeholder=""
                                            id="password"
                                            name="password"
                                            value={addUser.values.password}
                                            onChange={addUser.handleChange}
                                        />

                                    </div>

                                </div>


                        </div>
                        <button style={{ backgroundColor: "#bc4749" }}
                            className="text-black py-2 mx-2 rounded-xl hover:scale-105 duration-300 hover:bg-orange-700 font-medium"
                            type="submit"
                        >
                            Login
                        </button>
                        
                    </form>
                    <div className="mt-4 text-sm flex text-gray-700 justify-between items-center container-mr">
                        <p className="mr-3 md:mr-0 ">If you don't have an account..</p>
                        <Link style={{ backgroundColor: "#bc4749" }} href="/signup" className="text-white bg-orange-900 hover:border-orange-700 rounded-xl py-2 px-5 hover:scale-105 hover:bg-orange-700 font-semibold duration-300">
                            Signup now
                        </Link>
                    </div>

                </div>
                <div className="md:block hidden w-1/2">
                    <img
                        className="rounded-2xl max-h-[1600px]"
                        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*s14P5eUcZbMKowFLpn5e_A.jpeg"
                        alt="login form image"
                    />
                </div>
            </div>


        </section>

    )
}

export default Login;