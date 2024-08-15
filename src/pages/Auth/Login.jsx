import React from 'react'

const Login = () => {
  return (
    <div className='auth-container'>

        <div  className='signup'>
            <h1>Log In</h1>
            <form action=""  className='auth-form'>

            <div><input type="text" placeholder='Email' /></div>
                   
                   <div>
                        <input type="text" placeholder='Password' />
                   </div>

                   <button>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login