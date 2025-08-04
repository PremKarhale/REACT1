import React, { useState, useContext } from 'react'
import userContext from '../Context/usercontext'

function Login() {
    const [username, setusername] = useState('')
    const [pass, setpass] = useState('')

    const { setUser } = useContext(userContext)   // data is stored directly into setUser using react functionallity usecontext  

    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({ username, pass })
    }

    return (
        <div>
            <h2>login</h2>
            <input type="text"
                value={username}
                onChange={(e) => {
                    setusername(e.target.value)
                }}
                placeholder='username' />
            {' '}
            <input type="text"
                value={pass}
                onChange={(e) => {
                    setpass(e.target.value)
                }}
                placeholder='passoword' />

            <button onClick={handlesubmit}>submit</button>


        </div>
    )
}

export default Login
