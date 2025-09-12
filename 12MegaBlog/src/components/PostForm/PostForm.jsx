import React from 'react'
import { useForm } from 'react-hook-form'
import {Button , Input , Rte , Select} from '../index'
import appwirteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm() {   
    const {register , handleSubmit , watch, setValue , getValue} =useForm({
        defaultValues:{}
    }) 
  return (
    <div>
      
    </div>
  )
}

export default PostForm
