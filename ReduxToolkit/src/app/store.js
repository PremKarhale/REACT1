import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/TodoSlice'

export const store = configureStore({
    reducer :{
       Todo: todoReducer
    },
})

//dispath --> reducer --> store         