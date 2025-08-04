import React, { useContext } from 'react'
import userContext from '../Context/usercontext'

// in profile we handle the data that comes from the Login 

function Profile() {
    const { user } = useContext(userContext)  // i accessed the user from the userContext using usecontext 
  
    if (!user) return <div> Please login </div>

   if (typeof user === 'string') {
       <div>{user}</div>  // Shows "enter username first"
    }
    return <div>welcome {user.username}</div>
}

export default Profile
