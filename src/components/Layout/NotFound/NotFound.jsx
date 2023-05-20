import React from 'react'
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notfound  w-full md:w-2/4 lg:w-2/4 mx-auto text-center my-60">
       <i className='flex justify-center text-5xl'> <RiErrorWarningFill /> </i>
       <h1 className='text-2xl py-5' >Page Not Found</h1>
       <Link to="/"> <button>Go to home</button> </Link>
    </div>
  )
}

export default NotFound