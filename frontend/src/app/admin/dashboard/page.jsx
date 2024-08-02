import React from 'react'
const AdminDashboard = () => {

  return (
    <>
        <>
        <div className="grid grid-cols-2 gap-4">
  <div>
    <iframe
      style={{
        background: "#FFFFFF",
        border: "none",
        borderRadius: "15px", // Making corners rounded
        boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
        marginLeft: "20px"
      }}
      width={460} // Adjusted width
      height={380} // Adjusted height
      src="https://charts.mongodb.com/charts-project-0-oojffmy/embed/charts?id=66a86dd5-9ce3-4cc9-895c-47d515c542d0&maxDataAge=-1&theme=light&autoRefresh=false"
    />
  </div>
  <div>
    <iframe
      style={{
        background: "#FFFFFF",
        border: "none",
        borderRadius: "15px", // Making corners rounded
        boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
        marginLeft: "20px"
      }}
      width={460} // Adjusted width
      height={380} // Adjusted height
      src="https://charts.mongodb.com/charts-project-0-oojffmy/embed/charts?id=66a8ddf1-5716-4e0e-84dd-11efed80179b&maxDataAge=-1&theme=light&autoRefresh=false"
    />
  </div>
  </div>

  <div className="grid grid-cols-2 gap-4">
  <div>
  <iframe
  style={{
    background: "#FFFFFF",
    border: "none",
    borderRadius: "15px", // Making corners rounded
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
    marginLeft: "20px",
    marginTop: "20px"
  }}
  width={460} // Adjusted width
      height={380}
  src="https://charts.mongodb.com/charts-project-0-oojffmy/embed/charts?id=66a8ee21-fcbb-4441-8111-551271557794&maxDataAge=-1&theme=light&autoRefresh=false"
/>

  </div>

  <div>
<iframe
  style={{
    background: "#FFFFFF",
    border: "none",
    borderRadius: "15px", // Making corners rounded
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
    marginLeft: "20px",
    marginTop: "20px",
    marginright: "20px"
  }}
  
  width={460} // Adjusted width
      height={380}  
  src="https://charts.mongodb.com/charts-project-0-oojffmy/embed/charts?id=66a8ef90-5716-4f13-819a-11efedf6889d&maxDataAge=-1&theme=light&autoRefresh=false"
/>
</div>
</div>
       
</>


    </>
  )
}

export default AdminDashboard;