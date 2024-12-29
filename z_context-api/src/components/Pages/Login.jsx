import React, { useState, useContext } from 'react'
import UseContext from '../context/Context';

function Login() {
  const [username, setusername] = useState('')
  const [password, setpass] = useState('')

  // const {setuser} = useContext(UseContext);

  const { setuser } = useContext(UseContext)

  const handlesubmit = (e) => {
    e.preventDefault();
    setuser({ username, password })
  }

  return (
    <div>
      <div>Login</div>
      <input
        type="text"
        onChange={(e) => setusername(e.target.value)}
        value={username}
        placeholder='Firstname'
      />
      {"  "}
      <input
        type="text"
        value={password}
        onChange={(e) => setpass(e.target.value)}
        placeholder='Lastname'
      />
      <button onClick={handlesubmit} >Submit</button>
    </div>
  )
}

export default Login
