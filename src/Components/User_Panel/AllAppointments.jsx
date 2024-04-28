import React, { useState } from 'react'
import "./AllAppointments.css"
import { AllAppointmentsData } from './AllAppointmentsData'
import { Link } from 'react-router-dom'
import { HistoryData } from './HistoryData'

const AllAppointments = () => {
  const [displayInfo, setDisplayInfo] = useState(null)
  const [clickedIndex, setClickedIndex] = useState(null)
  const [clicked, setClicked] = useState(true)
  const [editInfo, setEditInfo] = useState(false)
  const [theme, setTheme] = useState("all-appt")

  const handleClick = (index) => {
    if(clickedIndex === index){
      setDisplayInfo(null)
      setClicked(false)
      setClickedIndex(null)
      setEditInfo(false)
    }else{
      setClicked(true)
      setDisplayInfo(index)
      setClickedIndex(index)
      setEditInfo(false)
    }
  }

  const editThread = () => {
    setEditInfo(!editInfo)
  }

  const displayAppointments = () => {
  let toMap = theme==="all-appt"?AllAppointmentsData : HistoryData
   return toMap.map((appt, index)=>(
    <>
      <tr key={index} className={`${clickedIndex===index ? "active":""}`}>
        <td>{appt.name}</td>
        <td>{appt.lastname}</td>
        <td>{appt.date}</td>
        <td>{appt.time}</td>
        <td>
          {theme==="all-appt"?
          <button onClick={()=>handleClick(index)}>
            {clickedIndex === index ? "Hide" : "Manage"}
          </button>
          :
          <button onClick={()=>handleClick(index)}>
            {clickedIndex === index ? "Hide" : "Show"}
          </button>
          }
        </td>
      </tr>
      {displayInfo === index &&
        <tr className='info'>
          <td colSpan={5}>
            <form className="top flex">
              <div className="user-info">
                <h3>Client Info</h3>
                <p><span>Name:</span>{editInfo?<input type="text" defaultValue={appt.name}/>:<input type="text" defaultValue={appt.name} disabled/>}</p>
                <p><span>Lastname:</span>{editInfo?<input type="text" defaultValue={appt.lastname}/>:<input type="text" defaultValue={appt.lastname} disabled/>}</p>
                <p><span>Email:</span>{editInfo?<input type="text" defaultValue={appt.email}/>:<input type="text" defaultValue={appt.email} disabled/>}</p>
                <p><span>Phone number:</span>{editInfo?<input type="text" defaultValue={appt.phone}/>:<input type="text" defaultValue={appt.phone} disabled/>}</p>
                <p><span>Date:</span>{editInfo?<input type="text" defaultValue={appt.date}/>:<input type="text" defaultValue={appt.date} disabled/>}</p>
                <p><span>Time:</span>{editInfo?<input type="text" defaultValue={appt.time}/>:<input type="text" defaultValue={appt.time} disabled/>}</p>
              </div>
              <div className="user-desc">
                {appt.description.length > 0 &&
                   <>
                    <h3>Description</h3> 
                    <p>{editInfo?<textarea defaultValue={appt.description}/>:<textarea defaultValue={appt.description} disabled/>}</p>
                  </>
                }
              </div>
            </form>
            {theme==="all-appt"&&
              <div className="bottom flex">
                {editInfo ? 
                <>
                  <button className='flex' onClick={()=>editThread()}><span className="material-symbols-outlined">close</span>Cancel</button>
                  <button className='save flex'><span className="material-symbols-outlined">done</span>Save</button>
                </>
                :
                <>
                  <button className='edit flex' onClick={()=>editThread()}><span className="material-symbols-outlined">edit</span>Edit</button>
                  <button className='flex'><span className="material-symbols-outlined">delete</span>Delete</button>
                </>
                }
              </div>  
          }
          </td>
        </tr>
      }
    </>
   ))
  }


  return (
    <div className='all-apt'>
      <div className="top flex">
        <div className="flex">
          <button className={`flex ${theme==='all-appt'?"active":""}`} onClick={()=>setTheme("all-appt")}><span className="material-symbols-outlined">calendar_month</span>Pending appointments</button>
          <button className={`flex ${theme==='history'?"active":""}`} onClick={()=>setTheme("history")}><span className="material-symbols-outlined">history</span>History</button>
          <div className="search flex">
            <input type="text" placeholder='Search...'/>
            <span className="material-symbols-outlined">search</span>
           </div>
        </div>
        <p>
          <Link to="/" className='flex'>
          <span className="material-symbols-outlined">arrow_back_ios</span>
          Go back
          </Link>
        </p>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Date</th>
          <th>Time</th>
          <th></th>
        </tr>
        {displayAppointments()}
      </table>
    </div>
  )
}

export default AllAppointments