import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { forgetPassword } from '../../redux/action/profile'
import { toast } from 'react-hot-toast'

const ForgetPassword = () => {
    const [email,setEmail]=useState("")
    //forget password
    const {message,error}=useSelector(state => state.profile)
    const dispatch =useDispatch()
    const submitHandler=e =>{
      e.preventDefault();
      dispatch(forgetPassword(email))
    }

    useEffect(()=>{
      if(error){
        toast.error(error)
        dispatch({type:'clearError'})
      }
      if(message){
        toast.success(message)
        dispatch({type:'clearMessage'})
      }

    },[dispatch,error,message])
  return (
    <div className="forgetpassword my-48">
    <h1 className='text-center text-3xl uppercase font-bold mb-4'> Forget Password</h1>
    <form onSubmit={submitHandler} class="max-w-lg mx-auto">
    <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmial.com"
          />
        </div>

       <button
       class="bg-yellow-500 w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
       type="submit"
     >
      Send Reset Link
     </button>
    </form>
    </div>
  )
}

export default ForgetPassword