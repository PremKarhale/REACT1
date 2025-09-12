import { createSlice, Tuple } from "@reduxjs/toolkit"

// created a slice name authSlice  jisme state hai or reduceers hai for auth functonality 
const authSlice = createSlice({
    name: "auth",
    initialState:{
    status: false,     //state 
    userData: null
},
    reducers: {
        login: (state, action) => {
            state.status = true,
            state.userData = action.payload.userData;
        },
        logout: (state, action) => {
            state.status = false,
             state.userData = null   // Usedispatch()
        }

    }

})

export const { login, logout } = authSlice.actions
export default authSlice.reducer