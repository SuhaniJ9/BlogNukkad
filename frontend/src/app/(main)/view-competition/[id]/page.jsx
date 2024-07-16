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
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/participation/check-participation/${id}`, {
      headers: {
        'x-auth-token': currentUser.token
      }
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        if (data === null) {
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/participation/add`, {
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
      <div className="h-96">
        <header className=' bg-white'>
          <h1 className='text-3xl text-purple-800 font-semibold mb-12 text-center'>{competitionData.topic}</h1>
        </header>
        <div>

          <select onChange={e => setSelBlog(e.target.value)} className='mx-auto text-center mb-12 block my-3'>
            <option  value="">Select Blog</option>
            {blogList.map((blog) => {
              return <option value={blog._id}>{blog.title}</option>
            })}
          </select>
          {
            checkCompetionExpired() ? displayWinner() :
              (
                <button onClick={attemptParticipate}>Participate in Compeition</button>
              )
          }
  {/* <button onClick={attemptParticipate}>Participate in Compeition</button> */}
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
        competitionData.winner ? <p className='text-center text-lg my-3 '>Winner: {competitionData.winner.name}</p> : <p className='text-center text-lg my-3 '>Result not declared Yet</p>
      }
    </div>
  }

  return (
    <div className='pt-40'>
      {displayCompetition()}
    </div>
    
  )
  
}

export default CompetitionDetails