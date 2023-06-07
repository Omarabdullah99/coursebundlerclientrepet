import React, { Fragment, useEffect, useState } from 'react'
import Adminsider from './Adminsider'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModel from './CourseModel'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../../redux/action/courses'
import { Link } from 'react-router-dom'
import { deleteCourse } from '../../redux/action/admin'
import { loadUser } from '../../redux/action/user'
import toast from 'react-hot-toast';
import Loader from '../Layout/Loader/Loader'


const AddSomething = () => {
  //modal work
  const [showModal, setShowModal]=useState(false)

  // onClick={()=>courseDetailsHandler(item._id, item.title) }

  
//deleteCourse
const {loading, error, message}=useSelector(state => state.admin)
const deleteHandler=(courseId)=>{
  dispatch(deleteCourse(courseId))
  dispatch(loadUser())
}
  
 const {courses}=useSelector(state => state.course)
 const dispatch=useDispatch()
 useEffect(()=>{

  if (error) {
    toast.error(error);
    dispatch({ type: 'clearError' });
  }

  if (message) {
    toast.success(message);
    dispatch({ type: 'clearMessage' });
  }
  dispatch(getAllCourses())


 },[dispatch,error,message])

 console.log(courses)


  // const deleteLectureButtonHandler=(courseId,lectureId)=>{
  //   console.log(courseId, lectureId)

  // }

  // const addLectureHandler=(e,courseId,title,description,video)=>{
  //   e.preventDefault()
  // }

  
  return (
    <Fragment>
    <div className='courses flex  flex-col lg:flex-row items-center justify-evenly md:items-center w-4/5 mx-auto py-28'>
    <Adminsider />
    <div className="cousertable">
    <h1 className='text-2xl font-bold mb-10'>All Courses here</h1>


    <div className="overflow-x-auto ">
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
         <th  class=" px-4 py-2">ID</th>
          <th class=" px-4 py-2">POSTER</th>
          <th class=" px-4 py-2">TITLE</th>
          <th class=" px-4 py-2">CATEGORY</th>
          <th class=" px-4 py-2">LECTURES</th>
          <th class=" px-4 py-2" >ACTION</th>
        </tr>
      </thead>

      <tbody>

      {
        courses.map(item =>(
          <tr key={item._id}>
          <td class=" px-4 py-2"> {item._id} </td>

          <td class=" px-4 py-2"> <img className="w-20" src={item.poster.url} alt="" /> </td>

          <td class=" px-4 py-2"> {item.title} </td>

          <td class=" px-4 py-2"> {item.category} </td>

          <td class=" px-4 py-2"> {item.lectures} </td>

          <td class=" px-4 py-2"> <Link to={`/admin/viewlecture/${item._id}`}> <button>View Lecture</button></Link> </td>
          <td class=" px-4 py-2"> {loading ? <Loader /> : <button onClick={()=>deleteHandler(item._id)} ><i> <RiDeleteBin7Fill  /> </i></button>} </td>
          
          </tr>
        ))
      }
      
      </tbody>
    </table>
  </div>

    </div>

    </div>

   
    </Fragment>
  )
}

export default AddSomething