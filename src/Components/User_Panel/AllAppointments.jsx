import React, { useEffect, useState } from 'react';
import "./AllAppointments.css";
import { AllAppointmentsData } from './AllAppointmentsData';
import { Link } from 'react-router-dom';
import { HistoryData } from './HistoryData';

const AllAppointments = () => {
  const [displayInfo, setDisplayInfo] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [clicked, setClicked] = useState(true);
  const [editInfo, setEditInfo] = useState(false);
  const [theme, setTheme] = useState("all-appt");

  const [apptData, setApptData] = useState({
    name: "",
    lastname:"",
    email: "",
    phone:"",
    description:"",
    date:"",
    time:"",
  });

  const handleClick = (index) => {
    if(clickedIndex === index){
      setDisplayInfo(null);
      setClicked(false);
      setClickedIndex(null);
      setEditInfo(false);
    }else{
      setClicked(true);
      setDisplayInfo(index);
      setClickedIndex(index);
      setEditInfo(false);
    }
  }

  const editThread = () => {
    setEditInfo(!editInfo);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApptData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showData = (name, lastname, email, phone, date, time, description) => {
    return(
      <form className="top flex">
        <div className="user-info">
          <h3>Client Info</h3>
          <p><span>Name:</span>{editInfo?<input type="text" name="name" value={apptData.name} onChange={handleInputChange} />:<input type="text" value={name} disabled/>}</p>
          <p><span>Lastname:</span>{editInfo?<input type="text" name="lastname" value={apptData.lastname} onChange={handleInputChange} />:<input type="text" value={lastname} disabled/>}</p>
          <p><span>Email:</span>{editInfo?<input type="text" name="email" value={apptData.email} onChange={handleInputChange} />:<input type="text" value={email} disabled/>}</p>
          <p><span>Phone number:</span>{editInfo?<input type="text" name="phone" value={apptData.phone} onChange={handleInputChange} />:<input type="text" value={phone} disabled/>}</p>
          <p><span>Date:</span>{editInfo?<input type="text" name="date" value={apptData.date} onChange={handleInputChange} />:<input type="text" value={date} disabled/>}</p>
          <p><span>Time:</span>{editInfo?<input type="text" name="time" value={apptData.time} onChange={handleInputChange} />:<input type="text" value={time} disabled/>}</p>
        </div>
        <div className="user-desc">
          {description.length > 0 &&
            <>
              <h3>Description</h3> 
              <p>{editInfo?<textarea name="description" value={apptData.description} onChange={handleInputChange} />:<textarea value={description} disabled/>}</p>
            </>
          }
        </div>
      </form>
    );
  };

  const clearData = () => {
    setApptData({
      name: "",
      lastname:"",
      email: "",
      phone:"",
      description:"",
      date:"",
      time:"",
    });
  };

  const saveData = (u_name, u_lastname, u_email, u_phone, u_desc, u_date, u_time) => {
    setApptData({
      name:u_name,
      lastname: u_lastname,
      email: u_email,
      phone: u_phone,
      description: u_desc,
      date: u_date,
      time: u_time
    });
  };

  useEffect(() => {
    clearData();
  }, []);

  const displayAppointments = () => {
    let toMap = theme === "all-appt" ? AllAppointmentsData : HistoryData;
    return toMap.map((appt, index) => (
      <>
        <tr key={index} className={`${clickedIndex === index ? "active" : ""}`}>
          <td>{appt.name}</td>
          <td>{appt.lastname}</td>
          <td>{appt.date}</td>
          <td>{appt.time}</td>
          <td>
            {theme === "all-appt" ?
            <button onClick={() => handleClick(index)}>
              {clickedIndex === index ? "Hide" : "Manage"}
            </button>
            :
            <button onClick={() => handleClick(index)}>
              {clickedIndex === index ? "Hide" : "Show"}
            </button>
            }
          </td>
        </tr>
        {displayInfo === index &&
          <tr className='info'>
            <td colSpan={5}>
              {showData(appt.name, appt.lastname, appt.email, appt.phone, appt.date, appt.time, appt.description)}
              {theme === "all-appt" &&
                <div className="bottom flex">
                  {editInfo ? 
                  <>
                    <button className='flex' onClick={() => {editThread(); clearData();}}><span className="material-symbols-outlined">close</span>Cancel</button>
                    <button className='save flex'><span className="material-symbols-outlined">done</span>Save</button>
                  </>
                  :
                  <>
                    <button className='edit flex' onClick={() => (editThread(), saveData(
                      appt.name, 
                      appt.lastname,
                      appt.email,
                      appt.phone,
                      appt.description,
                      appt.date,
                      appt.time
                    ))}><span className="material-symbols-outlined">edit</span>Edit</button>
                    <button className='flex'><span className="material-symbols-outlined">delete</span>Delete</button>
                  </>
                  }
                </div>  
              }
            </td>
          </tr>
        }
      </>
    ));
  };

  return (
    <div className='all-apt'>
      <div className="top flex">
        <div className="flex">
          <button className={`flex ${theme === 'all-appt' ? "active" : ""}`} onClick={() => setTheme("all-appt")}><span className="material-symbols-outlined">calendar_month</span>Pending appointments</button>
          <button className={`flex ${theme === 'history' ? "active" : ""}`} onClick={() => setTheme("history")}><span className="material-symbols-outlined">history</span>History</button>
          <div className="search flex">
            <input type="text" placeholder='Search...' />
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
  );
}

export default AllAppointments;
