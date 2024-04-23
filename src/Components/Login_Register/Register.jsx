import React from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <form className='styled'>
        <div className="form-content flex">
          <h3 className='flex'>Register <span><Link to="/">Go back</Link></span></h3>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter your name here'/>
          <label htmlFor="last-name">Last name</label>
          <input type="text" placeholder='Enter your last name here'/>
          <label htmlFor="password">Password</label>
          <input type="text" placeholder='Enter your password here'/>
          <label htmlFor="retype-password">Retype password</label>
          <input type="text" placeholder='Retype your password'/>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder='Enter your email here'/>
          <label htmlFor="number">Phone number</label>
          <input type="text" placeholder='Enter your number here'/>
          <button>Submit</button>
          <p>Already have an account? <u><Link to="/login">Login</Link></u></p>
        </div>
      </form>
    </div>
  )
}

export default Register