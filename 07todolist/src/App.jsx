import { useState } from 'react'
import './App.css'
import { Todoprovider } from './contexts'

function App() {
  const [todos, settodo] = useState([])

  const addTodo =(todo)=>{
    settodo((prev)=>[{ id : Date.now(), ...todo} , ...prev])   
    // destructured the previous items in the todo first  and then add the new todo 

  }
  const updateTodo = (id , todo )=>{
    settodo((prev)=>prev.map((prevTodos)=>(prevTodos.id === id ? todo : prevTodos)))

  }
  const deleteTodo = ()=>{
    settodo((prev)=>prev.filter((todo)=>(todo.id !== id ))) //filter jo hota hai vo sirf true ya false value leta hai 
  }
  const Togglecomplete = (id)=>{
    settodo((prev)=>prev.map((todo)=>(todo.id === id ? {...todo , completed: !todo.completed} : todo)))
  }


  return (
    <Todoprovider  value={{todos , addTodo , updateTodo , deleteTodo , Togglecomplete}}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>

    </Todoprovider>
  )
}

export default App
