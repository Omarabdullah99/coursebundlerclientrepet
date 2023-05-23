import React, { useState } from 'react'

const ChnagePassword = () => {
    const [oldPassword, setOldPassword]=useState("")
    const [newPassword, setNewPassword]=useState("")
    console.log("old", oldPassword)
    console.log('new', newPassword)
  return (
    <div className="changePassword py-40">
     <h1 className='changetitle text-center uppercase text-3xl mb-5'>Change Password</h1>

     <form class="max-w-lg mx-auto">
     <div class="mb-6">
     <input
       class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       required
       value={oldPassword}
       onChange={e => setOldPassword(e.target.value)}
       type="password"
       placeholder="Enter your old password"
     />
   </div>

   <div class="mb-6">
   <input
     class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
     required
     value={newPassword}
     onChange={e => setNewPassword(e.target.value)}
     type="password"
     placeholder="Enter yourn new password"
   />
 </div>
 <button className='bg-yellow-500 text-white font-bold py-2 px-4 rounded w-full' type='submit'> Change Password </button>
     </form>
    
    </div>
  )
}

export default ChnagePassword