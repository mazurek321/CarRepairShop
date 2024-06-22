import React from 'react'
import { Link } from 'react-router-dom'


const Settings = () => {
  return (
    <div className='settings flex'>
        <div className="left">
          <form>
            <label>Name</label><br/>
            <input type="text" defaultValue={"Aleksandra"}/><br/>
            <label>Last name</label><br/>
            <input type="text" defaultValue={"Rokita"}/><br/>
            <label>Email</label><br/>
            <input type="text" defaultValue={"rakieta@gmail.pl"}/><br/>
            <label>Phone number</label><br/>
            <input type="text" defaultValue={"006 007 008"}/><br/>
            <button>Save</button>
          </form>
        </div>
    </div>
  )
}

export default Settings
