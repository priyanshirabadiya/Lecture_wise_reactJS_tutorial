import React, { useContext } from 'react'
import UserContext from '../context/Context'
// Context Cunsumer
export default function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h1>Not logged in</h1>
    return(
    <div>
      <h1>Profile of : {user.username}{user.password} </h1>
      <p>More components</p>
    </div>
  )
}

