'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const CompetitionDetails = () => {

  const { id } = useParams();
  // console.log(id);
  const [competitionData, setCompetitionData] = useState(null);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [selBlog, setSelBlog] = useState(null);
  const [blogList, setBlogList] = useState([]);

  const fetchUserBlogs = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/getbyuser`, {
      headers: {
        'x-auth-token': currentUser.token
      }
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setBlogList(data);
        if (data === null) {
          toast.error('You have not written any blogs yet');
        } else {
          return data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const fetchCompetitionData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/competition/getbyid/${id}`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setCompetitionData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCompetitionData();
    fetchUserBlogs();
  }, [])

  const attemptParticipate = () => {
    if(selBlog === null) {
      toast.error('Please select a blog to participate in competition');
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/participate/check-participation/${id}`, {
      headers: {
        'x-auth-token': currentUser.token
      }
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        if (data === null) {
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/participate/add`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': currentUser.token
            },
            body: JSON.stringify({
              blog: selBlog,
              competition: id
            })
          })
            .then((response) => {
              if (response.status === 200) {
                toast.success('Participation Successful');
                return response.json();
              }
            })
            .then(data => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          toast.error('You have already participated in this competition');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const displayCompetition = () => {
    if (competitionData !== null) {
      return <>
      <div className='bg-[#f2e8cf]'>
      <header className="text-blue-900 text-xl body-font text-center "></header>
<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-16 ">
  {/* Main post - left side */}
  <div className="w-full md:w-2/3 p-4 md:p-0">
    <img
      src="https://i.pinimg.com/564x/7f/9e/91/7f9e91681909479021cfc2d2e9d0ca49.jpg"
      className="rounded-md object-cover w-full h-64 mb-4 mt-5"
    />
    <span className="text-blue-700 text-lg font-bold block mb-2 text-center">
    Start Date: {new Date(competitionData.createdAt).toLocaleDateString()}
    </span>
    <h1 className="text-[#bc4749] text-4xl font-bold mb-4 leading-tight text-center">
      {competitionData.topic}
    </h1>
    <p className="text-[#bc4749] text-lg mb-4 text-center">
      {competitionData.description}
    </p>
  <div>

<select onChange={e => setSelBlog(e.target.value)} className='mx-auto text-center mb-8 block my-3 px-6 py-3 rounded-md bg-[#bc4749] text-white '>
  <option  value="">Select Blog</option>
  {blogList.map((blog) => {
    return <option value={blog._id}>{blog.title}</option>
  })}
</select>
{
  checkCompetionExpired() ? displayWinner() :
    (
      <button className='mx-auto text-center mb-12 block my-3 px-6 py-3 rounded-md bg-blue-700 text-white hover:bg-blue-400' onClick={attemptParticipate}>Participate in Compeition</button>
    )
}
</div>
</div>
  {/* Right side posts */}

  <div className="w-full md:w-1/3 space-y-4">
  <span className='text-[#bc4749] text-lg'></span>
    {/* Gadgets post */}
    <div className="flex bg-[#bc4749] rounded-lg shadow-sm overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        className="w-1/3 object-cover"
      />
      <div className="p-4">
        <span className="text-white text-sm">Gadgets</span>
        <h2 className="text-[#f2e8cf] font-semibold text-lg">"Smart Living: How Modern Gadgets are Revolutionizing Daily Life"</h2>
      </div>
    </div>

    {/* Bitcoin post */}
    <div className="flex bg-[#bc4749] rounded-lg shadow-sm overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        className="w-1/3 object-cover"
      />
      <div className="p-4">
        <span className="text-white text-sm">Bitcoin</span>
        <h2 className="text-[#f2e8cf] font-semibold text-lg">"The Future of Finance: How Bitcoin is Changing the Game"</h2>
      </div>
    </div>

    {/* Insights post */}
    <div className="flex bg-[#bc4749] rounded-lg shadow-sm overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        className="w-1/3 object-cover"
      />
      <div className="p-4">
        <span className="text-white text-sm">Insights</span>
        <h2 className="text-[#f2e8cf] font-semibold text-lg">"Innovation and Progress: The State of the World in 2024"</h2>
      </div>
      
    </div>
    <Link href="/browse-competition" class="relative ml-32 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-center text-black rounded-md group-hover:bg-opacity-0">
Explore 
</span>
</Link>
  
  </div>
</div>

</div>
        
      </>
    } else {
      return <p>Competition Loading...</p>
    }
  }

  const checkCompetionExpired = () => {
    const currentDate = new Date();
    const endDate = new Date(competitionData.endDate);
    if (currentDate > endDate) {
      return true;
    } else {
      return false;
    }
  }

  const displayWinner = () => {

    return <div>
      <h3 className='text-red-800 text-center text-2xl font-semibold animate-bounce'>Competition Over</h3>
      {
        competitionData.winner ? <p className='text-center text-lg  '>Winner: {competitionData.winner.name}</p> : <p className='text-center text-lg my-3 '>Result not declared Yet</p>
      }
    </div>
    
  }

  return (
    <div className=''>
      {displayCompetition()}
    </div>
    
  )
  
}

export default CompetitionDetails