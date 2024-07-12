'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const ViewCompetition = () => {
    const {id} = useParams();
    const[compt, setcompt] = useState([]);

    const fetchcompt = () => {
        fetch("http://localhost:5000/competition/getbyid/" + id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setcompt(data);
        })
        .catch((err) => {
          console.log(err);
        });
      
    }
   useEffect(() => {
    fetchcompt();
   }, []);

const displaycompt = () => {
    if(compt !== null){
        return(
          <>
          <div className='bg-[#f2e8cf]'>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative  bg-blue-900">
            <div
              className="bg-cover bg-center  text-center overflow-hidden"

              style={{
                minHeight: 500,
                backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/${compt.image})`,
              }}
              title="Woman holding a mug"
            ></div>
            <div className="max-w-3xl mx-auto">
              <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="bg-[#f2e8cf] relative top-0 -mt-32 p-5 sm:p-10">
                  <h1 href="#" className="text-blue-800 font-bold text-3xl mb-2">
                    {compt.topic}
                  </h1>
                  <p className="text-[#bc4749] text-xl leading-8 my-5">
                    {compt.description}
                  </p>
                  <p className="text-blue-900 text-lg leading-8 my-5 font-bold">
                    Prize: {compt.prize}
                  </p> 
                  <p className="text-[#bc4749] text-lg leading-8 my-5">
                    Starting from: {compt.startDate}
                  </p> 
                  <p className="text-[#bc4749] text-lg leading-8 my-5">
                  Ends on: {compt.endDate}
                  </p> 
                  
                </div>
              </div>
            </div>
          </div>
          </div>
          </>

        )

        
}
else{
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
}
}

return(
    <>
    {displaycompt()};
    </>

)
}

export default ViewCompetition;