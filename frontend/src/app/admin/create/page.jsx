'use client'
import React from 'react'
import { useFormik } from 'formik'
import toast from 'react-hot-toast';

const Create = () => {
    const competitionForm = useFormik({
        initialValues: {
            title: "",
            prize: "",
            description: "",
            start: "",
            end: ""
        },
        onSubmit: async (values,action) => {
          console.log(values);
          
          const res = await fetch('http://localhost:5000/admin/create', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(values),
                 });
            console.log(res.status);
            action.resetForm();
            if(res.status === 200){
                toast.success("User Created")
            }
                else
                {
                    toast.error("User Creation Failed")
                }

}})

return (
    <>
    <>
    <form onSubmit={competitionForm.handleSubmit}>
    <div className="mx-auto max-w-3xl mt-10 border-2 border-blue-400 rounded-lg shadow-lg">
  <div className="mt-8 text-center font-bold text-xl text-blue-600">Create Competition</div>
  <div className="mt-3 text-center text-4xl font-bold text-white-800">Fill the details below</div>
  <div className="p-8">
    <div className="flex flex-col gap-6">
      <input
        type="text"
        name="title"
        className="block w-full rounded-md border border-slate-300 bg-white px-4 py-3 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg text-black"
        placeholder="Competition Title"
        value={competitionForm.values.title}
        onChange={competitionForm.handleChange}
      />
      <input
        type="text"
        name="prize"
        className="block w-full rounded-md border border-slate-300 bg-white px-4 py-3 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg text-black"
        placeholder="Prize"
        value={competitionForm.values.prize}
        onChange={competitionForm.handleChange}
      />
      <textarea
        name="description"
        id="text"
        rows={5}
        className="block w-full rounded-md border border-slate-300 bg-white px-4 py-3 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg resize-none text-black"
        placeholder="Description"
        value={competitionForm.values.description}
        onChange={competitionForm.handleChange}
      />
    </div>
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex flex-col">
        <label htmlFor="start" className="mb-1 font-semibold text-white-700">Start Date</label>
        <input
          type="date"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500 text-gray-700"
          id="start"
          name="start"
          value={competitionForm.values.start}
          onChange={competitionForm.handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="end" className="mb-1 font-semibold text-white-700">End Date</label>
        <input
          type="date"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500 text-gray-700"
          id="end"
          name="end"
          value={competitionForm.values.end}
          onChange={competitionForm.handleChange}
        />
      </div>
    </div>
    <div className="text-center mt-8">
      <button  type="submit" className="cursor-pointer rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Create Competition
      </button>
      
    </div>
  </div>
</div>
</form>
</>
   </>
 )  
}
export default Create;







//     return (
//         <>
//             <>
//                 {/* component */}
//                 <section style={{backgroundColor:"#f2e8cf"}} className=" shadow-indigo-500/40 min-h-screen flex box-border justify-center items-center ">
//                     <div className="shadow-2xl rounded-2xl flex max-w-3xl p-5 items-center">
//                         <div className="md:block hidden w-1/2 ">
//                             <img
//                                 className="rounded-2xl max-h-[1600px]"
//                                 src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*s14P5eUcZbMKowFLpn5e_A.jpeg"
//                                 alt="login form image"
//                             />
//                         </div>
//                         <div className="md:w-3/4 px-8">
//                             <h2 style={{color:"#bc4749"}} className="font-bold text-3xl font-serif mx-3">Create</h2>
//                             <p style={{color:"#bc4749"}} className="text-sm mt-4 mb-3 mx-3">
//                                 Create New Competition Now
//                             </p>
//                             <form onSubmit={competitionForm.handleSubmit} className="flex flex-col gap-4">
//                                 <div className="flex">
//                                     <div className="flex me-2 w-1/2">
//                                         <div className="w-full px-3 ">
//                                             <label  htmlFor="" className="text-xs text-gray-600 font-semibold px-1">
//                                                Competition Title
//                                             </label>
//                                             <div className="flex" >
//                                                 <input
//                                                     type="text"
//                                                     style={{backgroundColor:"#bc4749"}}
//                                                     className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 "
//                                                     placeholder=""
//                                                     id="title"
//                                                     required
//                                                     name="title"
//                                                     value={competitionForm.values.title}
//                                                     onChange={competitionForm.handleChange}
                                                   
//                                                 />
                                                
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex -mx-3 w-1/2">
//                                         <div className="w-full px-3 ">
//                                             <label htmlFor="" className="text-xs text-gray-600 font-semibold px-1">
//                                                 Eligibility Criteria
//                                             </label>
//                                             <div className="flex">
//                                                 <input
//                                                 style={{backgroundColor:"#bc4749"}}
//                                                     type="text"
//                                                     className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                                                     placeholder=""
//                                                     id="eligible"
//                                                     required
//                                                     name="eligible"
//                                                     value={competitionForm.values.eligible}
//                                                     onChange={competitionForm.handleChange}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>     
                                  
//                                 <div className="flex -mx-3">
//                                     <div className="w-full px-3 mx-3">
//                                         <label htmlFor="" className="text-xs text-gray-600 font-semibold px-1">
//                                             Preferred Language
//                                         </label>
//                                             <input
//                                             style={{backgroundColor:"#bc4749"}}
//                                                 type="text"
//                                                 className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                                                 placeholder=" "
//                                                 id="language"
//                                                 required
//                                                 name="language"
//                                                 value={competitionForm.values.language}
//                                                 onChange={competitionForm.handleChange}

//                                             />
//                                     </div>                    
//                                 </div>
                                 
//                                 <div className="flex">
//                                     <div className="flex  w-1/2">
//                                         <div className="w-full px-3 text-gray-600 mb-3">
//                                             <label htmlFor="" className="text-xs font-semibold px-1">
//                                                 Start Date
//                                             </label>
                                            // <div className="flex">
                                            //     <input
                                            //     style={{backgroundColor:"#bc4749"}}
                                            //         type="date"
                                            //         className="w-full -ml-10 text-white pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 "
                                            //         placeholder=""
                                            //         id="start"
                                            //         name="start"
                                            //         value={competitionForm.values.start}
                                            //         onChange={competitionForm.handleChange}
                                            //     />
                                            // </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex  w-1/2">
//                                         <div className="w-full text-gray-600 px-3 mb-3">
//                                             <label htmlFor="" className="text-xs font-semibold px-1">
//                                                 End Date
//                                             </label>
//                                             <div className="flex">
//                                                 <input
//                                                   style={{backgroundColor:"#bc4749"}}
//                                                     type="date"
//                                                     className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                                                     placeholder=""
//                                                     id="end"
//                                                     required
//                                                     name="end"
//                                                     value={competitionForm.values.end}
//                                                     onChange={competitionForm.handleChange}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button style={{backgroundColor:"#bc4749"}}
//                                     className="text-white py-2 mx-2 rounded-xl hover:scale-105 duration-300 hover:bg-orange-700 font-medium"
//                                    
//                                 >
//                                     Register
//                                 </button>
//                             </form>
//                             </div>
//                         </div>
                           
//                 </section>
//             </>
//         </>
//     )   
// }
