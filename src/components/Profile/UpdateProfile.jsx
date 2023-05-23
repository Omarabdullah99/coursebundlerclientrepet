import React, { useState } from 'react'

const UpdateProfile = () => {
    const [oldPassword,setOldPassword]=useState("")
    const [newPassword, setNewPassword]=useState("")
    const[name, setName]=useState("")
    const [email,setEmail]=useState("")
  return (
    <div className="updateprofile py-40">
     <h1 className='changetitle text-center uppercase text-3xl mb-5'>Update Profile</h1>

     <form class="max-w-lg mx-auto">
     <div class="mb-6">
     <input
       class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       required
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
     required
     id="email"
     value={email}
     onChange={e => setEmail(e.target.value)}
     type="email"
     placeholder="example@gmial.com"
   />
 </div>
 <button className='bg-yellow-500 text-white font-bold py-2 px-4 rounded w-full' type='submit'> Change Password </button>
     </form>
    
    </div>
  )
}

export default UpdateProfile