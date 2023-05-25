import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    RiAddCircleFill,
    RiDashboardFill,
    RiEyeFill,
    RiUser3Fill,
  } from 'react-icons/ri';

const Adminsider = () => {
    const location=useLocation()
    
  return (
    <div className="dashboard ">
   
    <div className="w-52  text-white">
    <ul className="p-4">

    <li className="py-2  cursor-pointer flex items-center gap-2">
      <i className='text-black'> <RiAddCircleFill /> </i>
        <Link to='/admin/addcourses' className={`${location.pathname=== '/admin/addcourses' ? 'text-yellow-500' : 'text-black'} `}>Create Course</Link>
      </li>
      <li className="py-2  cursor-pointer flex items-center gap-2">
      <i className='text-black'> <RiEyeFill /> </i>
        <Link to='/admin/courses' className={`${location.pathname=== '/admin/courses' ? 'text-yellow-500' : 'text-black'} `}>Courses</Link>
      </li>
      <li className="py-2  cursor-pointer flex items-center gap-2">
        <i className='text-black'> <RiUser3Fill /> </i>
        <Link to='/admin/allusers' className={`${location.pathname=== '/admin/allusers' ? 'text-yellow-500' : 'text-black'} `}>All Users</Link>
      </li>
      
    </ul>
  </div>
    </div>
  )
}

export default Adminsider