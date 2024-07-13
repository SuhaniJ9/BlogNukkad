'use client'
import React, { useEffect, useState } from 'react'

  const ManageCompetition = () => {
  const[Compts, setCompts] = useState([]);
  const fetchCompts = async () => {
    const res = await fetch("http://localhost:5000/competition/getall");
  console.log(res.status);
  if(res.status==200)
  {
    const Compt = await res.json();
    console.log(Compt);
    setCompts(Compt); 
  }
  }
  
  useEffect(() => {
    fetchCompts();
  }, []);

const deleteCompt = (id) => {
  console.log(id);
const res = fetch ("http://localhost:5000/competition/delete/"+id, {
  method: "DELETE",
})
if(res.status==200)
{
  fetchCompts();
}
}

  const displayCompts = () => {
 return Compts.map((Compt) => (
    <tr>
       <th scope="col" className="px-6 py-3 text-lg text-blue-900">
       <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_URL}/${Compt.image}`}
            alt="competition image"
          />
        </th>
        <th scope="col" className="px-6 py-3 text-lg text-blue-900">
          {Compt.topic}
        </th>
        <th scope="col" className="px-6 py-3 text-lg text-blue-900">
          {Compt.description}
        </th>
        <th scope="col" className="px-6 py-3 text-lg text-blue-900">
          {Compt.startDate}
        </th>
        <th scope="col" className="px-6 py-3 text-lg text-blue-900">
          {Compt.endDate}
        </th>
        <button onClick = {() => {deleteCompt(Compt._id)}} className="text-white bg-red-900 mt-2 hover:border-orange-700 rounded-xl py-1 px-5 hover:scale-105 hover:bg-orange-700 font-semibold duration-300 ">
          Delete
         </button>
        <button onClick = {() => {UpdateCompt(Compt._id)}} className="text-white bg-blue-900 mt-2 hover:border-blue-700 rounded-xl py-1 px-5 hover:scale-105 hover:bg-blue-700 font-semibold duration-300 ">
          Update
         </button>
      </tr>
  )
)}
  return(
    <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  bg-[#f2e8cf] mx-2 mt-2">
  
    
    <thead className="text-xs text-gray-700 uppercase bg-[#bc4749] dark:text-[#f2e8cf]">
    <tr>
    <th scope="col" className="px-6 py-3 text-lg">
          Cover
        </th>
    <th scope="col" className="px-6 py-3 text-lg">
          Title
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
          Description
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
          Start Date
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
        End Date
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
        Action
        </th>
        </tr>
        
        
    </thead>
    
    <tbody>
   
    
      {displayCompts()}
      
    </tbody>
    
  </table>
</div>


  )
}

export default ManageCompetition;