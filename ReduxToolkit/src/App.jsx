import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Todo from './component/Todo'
import Addtodo from './component/Addtodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-4xl font-bold'>learn about redux toolKit</div>
      <Addtodo />
      <Todo />
    </>
  )
}

export default App
