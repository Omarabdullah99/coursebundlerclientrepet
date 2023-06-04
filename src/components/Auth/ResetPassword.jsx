import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../../redux/action/profile'
import { toast } from 'react-hot-toast'

const ResetPassword = () => {
    const [password,setPassword]=useState("")
    //reset password work
    const params=useParams()
    const navigate=useNavigate()

    const {message,error}= useSelector(state => state.profile)
    const dispatch =useDispatch()

    const submitHandler=e=>{
      e.preventDefault();
      dispatch(resetPassword(params.token, password))
      
    }

    useEffect(()=>{
      if(error){
        toast.error(error)
        dispatch({ type: 'clearError' });

      }
     if(message){
      toast.success(message)
      dispatch({ type: 'clearMessage' });
      navigate("/login")


     }

    },[dispatch,error,message])

    // console.log(params.token)
  return (
    <div className="forgetpassword my-48">
    <h1 className='text-center text-3xl uppercase font-bold mb-4'> Reset Password</h1>
    <form onSubmit={submitHandler} class="max-w-lg mx-auto">
    <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            password
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="New Password"
          />
        </div>

       <button
       class="bg-yellow-500 w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
       type="submit"
     >
      Reset Password
     </button>
    </form>
    </div>
  )
}

export default ResetPassword