import React from 'react'
import Navbar from '@/app/(main)/navbar'
import Link from 'next/link'
const AdminDashboard = () => {
  return (
    <>
    <Navbar>
    </Navbar>
    <div className="container">
    <div className="mt-4 text-sm flex text-gray-700 justify-between items-center container-mr">
                         <Link style={{ backgroundColor: "#bc4749" }} href="admin/create" className="text-white bg-orange-900 hover:border-orange-700 rounded-xl py-5 px-5 hover:scale-105 hover:bg-orange-700 font-semibold duration-300">
                            Create Competition
                        </Link><br>
                        </br>
                        <Link style={{ backgroundColor: "#bc4749" }} href="/delete" className="text-white bg-orange-900 hover:border-orange-700 rounded-xl py-5 px-5 hover:scale-105 hover:bg-orange-700 font-semibold duration-300">
                            Delete Competition
                        </Link>
                       <br></br>
                        <Link style={{ backgroundColor: "#bc4749" }} href="/update" className="text-white bg-orange-900 hover:border-orange-700 rounded-xl py-5 px-5 hover:scale-105 hover:bg-orange-700 font-semibold duration-300">
                            Update Competition
                        </Link>
                    </div>
      
    </div>

    </>
  )
}

export default AdminDashboard;