import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
const Sidebar = ({sidebar,closeSidebar}) => {
    const isAuthenticated=true;
    const user={
        role:"admin"
    }
  return (
   <div className={sidebar?"sidebar sidebar-open": "sidebar" }>
      <Link to='/' onClick={closeSidebar}><li>Home</li></Link>
      <Link to='/courses' onClick={closeSidebar}><li>Browser All Courses</li></Link>
      <Link to='/request' onClick={closeSidebar}><li>Request a Course</li></Link>
      <Link to='/contact' onClick={closeSidebar}><li>Contact Us</li></Link>
      <Link to='/about' onClick={closeSidebar}><li>About</li></Link>

      <div className="authentication-button">
        {isAuthenticated ? (
            <>
           <div>
           <Link to="/profile" onClick={closeSidebar}> <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-3 rounded mr-2'> Profile</button> </Link>
           <Link to="/Logout" onClick={closeSidebar}> <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-3 rounded'> Logout</button> </Link>

           <div className='pt-6'>
           {user && user.role === "admin" &&(
               <Link to="admin/addcourses" onClick={closeSidebar}> <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-7 rounded'> Dashboard</button> </Link>
           )}
          </div>
           </div>

            </>
        ) : (
            <>
            <Link to="/login" onClick={closeSidebar}> <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'> Login</button> </Link>
            <p>Or</p>
            <Link to="/register" onClick={closeSidebar}> <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'> Sign Up</button> </Link>
            </>
        )}
      </div>
      
   </div>
  )
}

export default Sidebar