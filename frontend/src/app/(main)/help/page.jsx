import React from "react"

const HelpPage = () => {
    return (
        <section className="dark:bg-[#bc4749] dark:text-[#f2e8cf]">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl">Welcome to the Blog Nukkad Help Center! </h2>
            
               
            <div className="space-y-4 mt-5">
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How to Register</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]">
Click the “Sign Up” button on the homepage.
<p>
Fill in the registration form with your name, email, and password.
</p>
<p>
Log in with your new credentials and start exploring!
</p>
</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Navigating the Dashboard</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]">
                    Home: View recent blog posts and competitions.
<p>
    
Create Blog: Start writing your blog post just after logging in.
</p>
<p>
    
Competitions: Browse and enter current writing competitions.
<p>
Profile: Manage your personal information and blog posts.
</p>
</p>
</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Creating a Blog Post</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]">
                    Log in to your account.
                    </p>
<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]">
Use the editor to write and format your post.
</p>
<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]">
Click “Save Blog” to make your blog live.
</p>
</details>
<details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Entering a Competition
</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]">
                    Go to the “Competitions” section.
                    </p>
<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]">
Select the competition you want to enter.
</p>
<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#f2e8cf]">

Submit your entry by following the prompts.
</p>
</details>
                </div>
                </div>
                </section>






    )
}
export default HelpPage;