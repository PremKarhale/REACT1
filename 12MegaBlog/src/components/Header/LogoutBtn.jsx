import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler =()=>{
        authservice.logOut().then(()=>{
            dispatch(logout()) // state know ki abhi logout ho chuka hai !!!
        })
    }
  return (
    <div className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
      Logout
    </div>
  )
}

export default LogoutBtn
