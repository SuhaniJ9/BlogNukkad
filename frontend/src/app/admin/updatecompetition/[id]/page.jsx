'use client';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ViewCompetition = () => {

  const { id } = useParams();
  const [competitionDetails, setCompetitionDetails] = useState(null);
  const [participantList, setParticipantList] = useState([]);

  const fetchCompetition = () => {
    fetch(`http://localhost:5000/competition/getbyid/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCompetitionDetails(data);
      })
  }

  useEffect(() => {
    fetchCompetition();
    fetchParticipants();
  }, []);

  const fetchParticipants = () => {
    fetch(`http://localhost:5000/participate/getbycompetition/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setParticipantList(data);
      })
  }

  const displayCompetitionDetails = () => {
    if (competitionDetails !== null) {
      return (
        <div>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#bc4749] md:text-5xl lg:text-6xl'>{competitionDetails.topic}</h1>
          <p className='text-lg font-normal text-[#bc4749] lg:text-xl'>{competitionDetails.description}</p>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }

  const declareWinner = (participantId) => {
    fetch(`http://localhost:5000/competition/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        winner: participantId
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        fetchCompetition();
      })
  }

  const displayParticipants = () => {
    if (participantList.length > 0) {
      return (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right mt-5">
            <thead className="text-xs text-[#f2e8cf] border uppercase bg-[#bc4749]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Participant name
                </th>
                <th scope="col" className="px-6 py-3">
                  Entry Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Entry Blog
                </th>
                <th scope="col" className="px-6 py-3">
                  Blog Publishing Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Declare Winner
                </th>
              </tr>
            </thead>
            <tbody>
              {
                participantList.map((participant, index) => (
                  <tr className="bg-[#bc4749] border-b border-bg-[#f2e8cf]" key={index}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-[#f2e8cf] whitespace-nowrap"
                    >
                      {participant.user.firstname} {participant.user.lastname}
                    </th>
                    <td className="px-6 py-4 text-[#f2e8cf] whitespace-nowrap">
                      {new Date(participant.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-[#f2e8cf] whitespace-nowrap">
                      {participant.blog ? participant.blog.title : 'No blog'}
                    </td>
                    <td className="px-6 py-4 text-[#f2e8cf] whitespace-nowrap">
                      {participant.blog ? new Date(participant.blog.createdAt).toLocaleDateString() : 'No date'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={
                        () => declareWinner(participant._id)
                      } >Declare Winner</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      )
    } else {
      return <div>No participants</div>
    }
  }

  return (
    <div>
      {displayCompetitionDetails()}
      {displayParticipants()}
    </div>
  )
}

export default ViewCompetition
