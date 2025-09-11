import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/auth'
import { useForm } from 'react-hook-form'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm() // fetched methods from the useform !!
    const [error, setError] = useState('')
    const login = async (data) => {
        setError("")
        try {
            const session = await authservice.login(data)
            if (session) {
                const userData = await authservice.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate("/")
            }

        } catch (error) {
            setError(error.message)

        }
    }
    return (
        <div className='flex items-center justify-center w-full '>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center '>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold'> Sign in to your account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don&apos;t have an account ?&nbsp;
                    <Link to='/signup' className='font-meadium  text-primary transition-all duration-200 hover:under-line'>
                        Sign Up

                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        {/* input field for Email */}
                        <Input
                            label="Email"
                            placeholder='Enter your email'
                            type="email"
                            {...register("email", {    
                                required: true,
                                validate: {
                                    matchpatern: (val) => {
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || "Email address must be vaild address"
                                    }
                                }
                            })}
                        />
                        {/* input fiel for password */}
                        <Input 
                        label ="Password:"
                        type = "password"
                        placeholder ="Enter your Password"
                        {...register("password", {
                            required:true ,
                        })}
                        />
                        <Button 
                        type='submit'
                        className='w-full'>
                         Sign In 
                        </Button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Login
