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
    fetch(`http://localhost:5000/participation/getbycompetition/${id}`)
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
          <h1>{competitionDetails.topic}</h1>
          <p>{competitionDetails.description}</p>
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
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {participant.user.name}
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(participant.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {participant.blog.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(participant.blog.createdAt).toLocaleDateString()}
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