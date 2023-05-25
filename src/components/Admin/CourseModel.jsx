import React from 'react'
import './CourseModel.css'
const CourseModel = ({isvisible,onClose}) => {
    if(!isvisible) return null
  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm  ">
    
    <div className="modalcontent w-full  bg-white">

    
    <div className="content  p-2 rounded w-3/4 mx-auto flex flex-col">
    <button className=' text-xl place-self-end text-black' onClick={()=> onClose()} >X</button>
    <h1 className='text-3xl text-yellow-500'>Modal</h1>
    </div>
    

    </div>
    </div>
  )
}

export default CourseModel