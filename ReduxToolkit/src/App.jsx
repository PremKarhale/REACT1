import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Todo from './component/Todo'
import Addtodo from './component/Addtodo'

function App() {
  const [editTodo, setEditTodo] = useState('')
  const handleEdit = (todo) => {
    setEditTodo(todo)
  }

  const handelCancelEdit = () => {
    setEditTodo('')
  }
  return (
    <>
      <div className='text-4xl font-bold'>learn about redux toolKit</div>
      <Addtodo editTodo={editTodo}
        onCancelEdit={handelCancelEdit} />
      <Todo onEdit={handleEdit} />
    </>
  )
}

export default App
