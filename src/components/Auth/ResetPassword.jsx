import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
    const [password,setPassword]=useState("")
    const params=useParams()
    // console.log(params.token)
  return (
    <div className="forgetpassword my-48">
    <h1 className='text-center text-3xl uppercase font-bold mb-4'> Reset Password</h1>
    <form class="max-w-lg mx-auto">
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