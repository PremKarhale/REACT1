import { createContext,useContext } from "react";


export const Todocontext = createContext({
    todos:[
        {
            id:1,
            todo : "Todo msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo: (id , todo)=>{},    //these are the functionalities !!! IN TODO'S
    deleteTodo:(id)=>{},
    Togglecomplete:(id)=>{}

}); //created a new context !!

//gives access to this context 
export const useTodo = ()=>{
    return useContext(Todocontext)
}

export const Todoprovider = Todocontext.Provider