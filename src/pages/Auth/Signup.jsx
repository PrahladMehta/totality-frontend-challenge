import React from 'react'
import './auth.css'
const Signup = () => {
  return (
       
    <div className='auth-container'>
         <div className='signup'>
            <h1>Sign Up</h1>

            <form action="" className='auth-form'>

                <input type="text" placeholder='Name' />
                <div><input type="text" placeholder='Email' /></div>

                <div><input type="text" placeholder='Password' /></div>
                <div> <input type="text"  placeholder='Confirm Password'/></div>
                <button>Sign up</button>

            </form>
         </div>
    </div>
  )
}

export default Signup