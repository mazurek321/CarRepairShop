import React from 'react'
import { Link } from 'react-router-dom'


const Settings = () => {
  return (
    <div className='settings flex'>
        <div className="left">
          <form>
            <label>Name</label>
            <input type="text" defaultValue={"Mietek"}/>
            <label>Last name</label>
            <input type="text" defaultValue={"Mietek"}/>
            <label>Email</label>
            <input type="text" defaultValue={"Mietek@mietland.pl"}/>
            <label>Phone number</label>
            <input type="text" defaultValue={"007 007 007"}/>
            <button>Save</button>
          </form>
        </div>
    </div>
  )
}

export default Settings