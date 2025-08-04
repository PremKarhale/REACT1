import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    < UserContextProvider>
    <Login/>
    <Profile/>

    </ UserContextProvider>
   
  )
}

export default App
