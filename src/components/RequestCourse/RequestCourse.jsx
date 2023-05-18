import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RequestCourse = () => {
    const [name, setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
  return (
    <div className="Request my-48">
    <h1 className="text-3xl text-center font-bold mb-5">Request New Course</h1>

    <form class="max-w-lg mx-auto">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
          Name
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
      </div>

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

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="message">
          Name
        </label>
        <textarea
        className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        required
         id="message" cols="30" rows="10" 
         value={message}
         onChange={e => setMessage(e.target.value)}
         placeholder='Explain the course'
        
        />
      </div>

     

      <button
        class="bg-yellow-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
        type="submit"
      >
        Submit
      </button>

      <div className="mt-3">
        See Available Course ?{" "}
        <Link to="/courses">
          {" "}
          <button className="text-yellow-500">Click here</button>
        </Link>
      </div>

    </form>
  </div>
  )
}

export default RequestCourse