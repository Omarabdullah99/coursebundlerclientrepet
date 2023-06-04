import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../redux/action/profile'
import { loadUser } from '../../redux/action/user'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = ({user}) => {
    const [oldPassword,setOldPassword]=useState("")
    const [newPassword, setNewPassword]=useState("")
    const[name, setName]=useState(user.name)
    const [email,setEmail]=useState(user.email)

    const navigate=useNavigate()

    //update profile, means name, email change
    const dispatch=useDispatch()
    const submitHandler=async e=>{
      e.preventDefault();
     await dispatch(updateProfile(name,email))
     dispatch(loadUser())
     navigate("/profile")
      
    }

    //update profile message show
    const {loading,message,error}=useSelector(state => state.profile)
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
    <div className="updateprofile py-40">
     <h1 className='changetitle text-center uppercase text-3xl mb-5'>Update Profile</h1>

     <form onSubmit={submitHandler} class="max-w-lg mx-auto">
     <div class="mb-6">
     <input
       class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       
       id="name"
      value={name}
      onChange={e => setName(e.target.value)}//image er work
      type="text"
      placeholder="Your name"
     />
   </div>

   <div class="mb-6">
   <input
     class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
     
     id="email"
     value={email}
     onChange={e => setEmail(e.target.value)}
     type="email"
     placeholder="example@gmial.com"
   />
 </div>
 <button className='bg-yellow-500 text-white font-bold py-2 px-4 rounded w-full' type='submit'> Update Profile </button>
     </form>
    
    </div>
  )
}

export default UpdateProfile