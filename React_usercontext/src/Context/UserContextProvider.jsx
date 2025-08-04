
import React from 'react'
import userContext from './usercontext'

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null) //state functions takes it values from login
    
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider