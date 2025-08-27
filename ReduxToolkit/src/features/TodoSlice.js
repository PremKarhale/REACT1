import { createSlice, nanoid } from "@reduxjs/toolkit";

//created one obj name initial state 
const initialState = {
    todos: [{ id: 1, text: "hello world " }]    //this is my STATE
}

// function sayhello(){
//     console.log("hello")
// }
export const todoSlice = createSlice({
    name: "chai",
    initialState,   //taken the reference of my state 
    reducers: {
        // addtodo: sayhello  // function yaha par bhi likh sakta hu or uska reference bhi de sakta hu !!! 
        addtodo: (state, action) => {  // always get state or action ka access
            const todo = {
                id: nanoid(),      //todo create kiya
                text: action.payload
            }
            state.todos.push(todo)

        },
        removetodo: (state, action) => {
            state.todos= state.todos.filter((todo) => todo.id != action.payload)
        },
        updatetodo: (state, action) => {
            state.todos= state.todos.map((todo) => todo.id == action.payload.id ? { ...todo, text: action.payload.text } : todo)
        }

    }
})

export const { removetodo, updatetodo, addtodo } = todoSlice.actions
export default todoSlice.reducer