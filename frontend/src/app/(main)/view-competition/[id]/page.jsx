'use client';
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
      <header className="text-blue-900 text-xl body-font text-center ">Participate </header>
<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-16 ">
  {/* Main post - left side */}
  <div className="w-full md:w-2/3 p-4 md:p-0">
    <img
      src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
      className="rounded-md object-cover w-full h-64 mb-4"
    />
    <span className="text-blue-700 text-lg font-bold block mb-2">
    Start Date: {new Date(competitionData.createdAt).toLocaleDateString()}
    </span>
    <h1 className="text-[#bc4749] text-4xl font-bold mb-4 leading-tight">
      {competitionData.topic}
    </h1>
    <p className="text-[#bc4749] text-lg mb-4">
      {competitionData.description}
    </p>
  <div>

<select onChange={e => setSelBlog(e.target.value)} className='mx-auto text-center mb-8 block my-3 px-6 py-3 rounded-md bg-blue-700 text-white '>
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
  <span className='text-[#bc4749] text-lg'>Other Competitions</span>
    {/* Gadgets post */}
    <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        className="w-1/3 object-cover"
      />
      <div className="p-4">
        <span className="text-blue-600 text-sm">Gadgets</span>
        <h2 className="text-gray-800 font-semibold text-lg">At every tiled on ye defer do. No attention suspected oh difficult.</h2>
      </div>
    </div>

    {/* Bitcoin post */}
    <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        className="w-1/3 object-cover"
      />
      <div className="p-4">
        <span className="text-blue-600 text-sm">Bitcoin</span>
        <h2 className="text-gray-800 font-semibold text-lg">Fond his say old meet cold find come whom. The sir park sake bred.</h2>
      </div>
    </div>

    {/* Insights post */}
    <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        className="w-1/3 object-cover"
      />
      <div className="p-4">
        <span className="text-blue-600 text-sm">Insights</span>
        <h2 className="text-gray-800 font-semibold text-lg">Advice me cousin an spring of needed. Tell use paid law ever yet new.</h2>
      </div>
    </div>

  
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