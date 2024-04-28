import React from 'react'
import { Link } from 'react-router-dom'


const Settings = () => {
  return (
    <div className='settings flex'>
        <div className="left">
          <form>
            <label>Name</label><br/>
            <input type="text" defaultValue={"Mietek"}/><br/>
            <label>Last name</label><br/>
            <input type="text" defaultValue={"Mietek"}/><br/>
            <label>Email</label><br/>
            <input type="text" defaultValue={"Mietek@mietland.pl"}/><br/>
            <label>Phone number</label><br/>
            <input type="text" defaultValue={"007 007 007"}/><br/>
            <button>Save</button>
          </form>
        </div>
    </div>
  )
}

export default Settings