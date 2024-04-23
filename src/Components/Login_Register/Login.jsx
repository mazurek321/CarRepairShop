import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <form className='styled'>
        <div className="form-content flex">
          <h3 className='flex'>Login <span><Link to="/">Go back</Link></span></h3>
          <label htmlFor="name">Email</label>
          <input type="text" placeholder='Enter your email'/>
          <label htmlFor="password">Password</label>
          <input type="text" placeholder='Enter your password'/>
          <button>Log in</button>
          <p>Don't have an account yet ? <u><Link to="/register">Register now</Link></u></p>
        </div>
      </form>
    </div>
  )
}

export default Login