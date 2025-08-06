import React , {createContext , useContext} from "react";

export const Themecontext = createContext({
    thememode:"light",
    darktheme: ()=>{},
    lighttheme: ()=>{}
}) 

//component hai gets wraps in the themeprovider 
export const Themeprovider =Themecontext.Provider

// component export kar diya !!!
export default function usetheme(){
    return useContext(Themecontext)
}