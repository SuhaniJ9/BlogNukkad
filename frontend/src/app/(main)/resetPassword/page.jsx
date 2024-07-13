import React from 'react'

const ResetPassword = () => {
  return (
    <section className="bg-[#f2e8cf]">
    
       
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <span
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-[#bc4749]"
      >
        RESET PASSWORD
      </span>
      <div className="w-full p-6 bg-white rounded-lg dark:border md:mt-0 sm:max-w-md dark:bg-[#f2e8cf] dark:border-gray-700 sm:p-8 border-8">
        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#bc4749]">
          Change Password
        </h2>
        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-600 dark:text-[#bc4749]"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
             className="bg-[#bc4749] border border-gray-800 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#bc4749] dark:border-gray-900 dark:focus:ring-[#bc4749] dark:focus:border-[#bc4749]"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-slate-600 dark:text-[#bc4749]"
            >
              New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
               className="bg-[#bc4749] border border-gray-800 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#bc4749] dark:border-gray-900 dark:focus:ring-[#bc4749] dark:focus:border-[#bc4749]"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-slate-600 dark:text-[#bc4749]"
            >
              Confirm password
            </label>
            <input
              type="confirm-password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
               className="bg-[#bc4749] border border-gray-800 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#bc4749] dark:border-gray-900 dark:focus:ring-[#bc4749] dark:focus:border-[#bc4749]"
              required=""
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-800 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:border-blue-700 hover:scale-105 hover:bg-blue-700 duration-300 dark:focus:ring-primary-800"
          >
            Reset passwod
          </button>
        </form>
      </div>
    </div>
    
  </section>
  
  )
}

export default ResetPassword;