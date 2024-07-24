'use client'
import React, { useEffect, useState } from 'react'

  const ManageUser = () => {
  const[Users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/user/getall");
  console.log(res.status);
  if(res.status==200)
  {
    const User = await res.json();
    console.log(User);
    setUsers(User); 
  }
  }
  
  useEffect(() => {
    fetchUsers();
  }, []);

const deleteUser = (id) => {
  console.log(id);
const res = fetch ("http://localhost:5000/user/delete/"+id, {
  method: "DELETE",
})
if(res.status==200)
{
  fetchUsers();
}
}

  const displayUsers = () => {
 return Users.map((User) => (
    <tr>
       
        <th scope="col" className="px-6 py-3 text-lg text-blue-900">
          {User.firstname} {User.lastname}
        </th>
        <th scope="col" className="px-6 py-3 text-lg text-blue-900">
          {User.password}
        </th>
        <th scope="col" className="px-6 py-3 text-lg text-blue-900">
          {User.email}
        </th>
        <button onClick = {() => {deleteUser(User._id)}} className="text-white bg-red-900 mt-2 hover:border-orange-700 rounded-xl py-1 px-5 hover:scale-105 hover:bg-orange-700 font-semibold duration-300 ">
                            Delete
                        </button>
                        {/* <button onClick = {() => {UpdateUser(User._id)}} className="text-white bg-blue-900 ml-2 mt-2 hover:border-blue-700 rounded-xl py-1 px-5 hover:scale-105 hover:bg-blue-700 font-semibold duration-300 ">
                            Update
                        </button> */}
      </tr>
  )
)}
  return(
    <div className="relative overflow-x-auto">
  <table className="w-screen h-screen text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  bg-[#f2e8cf] mx-2 mt-2">
  
    
    <thead className="text-xs text-gray-700 uppercase bg-[#bc4749] dark:text-[#f2e8cf]">
    <tr>
    <th scope="col" className="px-6 py-3 text-lg">
          First Name
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
          Last Name
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
          Email
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
        Action
        </th>
        
        </tr>
        
        
    </thead>
    
    <tbody>
   
    
      {displayUsers()}
      
    </tbody>
    
  </table>
</div>


  )
}

export default ManageUser;