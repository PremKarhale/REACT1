import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo, updatetodo } from '../features/TodoSlice'
import Todo from './Todo'

function Addtodo({ editTodo, onCancelEdit }) {
    const [input, setInput] = useState('')
    const dispatch = useDispatch() //call dispatch function!!

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.text)
        }
    }, [editTodo])

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        if (editTodo) {
            dispatch(updatetodo({
                id: editTodo.id,
                text: input.trim()
            }))
            onCancelEdit() // imp to empty the setedit value 
        } else {
            dispatch(addtodo(input.trim()))  // all the input values are stored as the object in the payload and retrive form action.payload 
        }
        setInput('')
    }
    const handleCancel =()=>{
        setInput('')
        onCancelEdit()
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder={editTodo ? "Edit your todo..." : "Enter a Todo..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg 
                    ${  editTodo 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-indigo-500 hover:bg-indigo-600'}`}
            >
             {editTodo ? 'Update Todo' : 'Add Todo'}
            </button>
                {editTodo && (
                <button
                    type="button"
                    onClick={handleCancel}
                    className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
                >
                    Cancel
                </button>
            )}
        </form>
    )
}

export default Addtodo
