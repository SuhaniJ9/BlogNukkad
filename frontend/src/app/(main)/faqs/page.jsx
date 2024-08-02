import React from "react";

const faqs = () => {
    return (
        <section className="dark:bg-[#bc4749] dark:text-[#f2e8cf]">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
            
               
            <div className="space-y-4 mt-5">
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is Blog Nukkad?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]">Blog Nukkad is a web application designed for bloggers and writers. It allows users to write and publish blogs, participate in writing competitions, and engage with a community of like-minded individuals.
                    </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I sign up for Blog Nukkad?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]"> You can sign up for Blog Nukkad by clicking the "Sign Up" button on the homepage and filling out the registration form with your details.. </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Is Blog Nukkad free to use?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]">Yes, Blog Nukkad offers free access to all its features.  </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">  How are competition winners selected?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]">Competition winners are selected based on various criteria such as creativity, originality, and adherence to the competition guidelines. The judging process will be detailed in each competition's description. </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600"> How do I reset my password?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]"> If you forgot your password, click the "Forgot Password" link on the profile page and follow the instructions to reset it.</p>
                </details>

 
                

              
            </div>
        </div>
    </section>
    )
  }
  
  export default faqs;
