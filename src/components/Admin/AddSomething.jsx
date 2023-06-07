import React, { Fragment, useState } from 'react'
import Adminsider from './Adminsider'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModel from './CourseModel'
import { useSelector } from 'react-redux'

const AddSomething = () => {
  //modal work
  const [showModal, setShowModal]=useState(false)
  // const courses=[
  //   {
  //     _id:"ajlkdjjkljasdlk",
  //     poster:{
  //       url:"https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
  //     },
  //     title:"React Course",
  //     category:"Web Development",
  //     creator:"Omar Abdullah",
  //     lectures:2,
      
  //   },
  //   {
  //     _id:"ajlkkljasdlk",
  //     poster:{
  //       url:"https://www.beyondblue.org.au/images/default-source/2.get-help/newaccess/new-access-for-small-business-owners.svg?sfvrsn=648933d1_4"
  //     },
  //     title:"React Course",
  //     category:"App Development",
  //     creator:"Omar Abdullah",
  //     lectures:9,
  //   },
  //   {
  //     _id:"ajlkdjjkljasd",
  //     poster:{
  //       url:"https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"
  //     },
  //     title:"React Course",
  //     category:"Game Development",
  //     creator:"Omar Abdullah",
  //     lectures:12,
  //   }
  // ]

  const {courses}=useSelector(state => state.course)
  console.log("addsomething",courses)

  const courseDetailsHandler=(courseId,title)=>{

    setShowModal(true)
    console.log(courseId,title)
  }

  const deleteHandler=(courseId)=>{
    console.log(courseId)
  }

  const deleteLectureButtonHandler=(courseId,lectureId)=>{
    console.log(courseId, lectureId)

  }

  const addLectureHandler=(e,courseId,title,description,video)=>{
    e.preventDefault()
  }

  
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

          <td class=" px-4 py-2"> <button  onClick={()=>courseDetailsHandler(item._id, item.title) }>View Lecture</button> </td>
          <td class=" px-4 py-2"> <i> <RiDeleteBin7Fill onClick={()=>deleteHandler(item._id)} /> </i> </td>
          
          </tr>
        ))
      }
      
      </tbody>
    </table>
  </div>

    </div>

    </div>

    <CourseModel isvisible={showModal} onClose={()=>setShowModal(false)}
    id={"jfkja"} 
    deleteButtonHandler={deleteLectureButtonHandler} 
    courseTitle="React Course" 
    addLectureHandler={addLectureHandler} />
    </Fragment>
  )
}

export default AddSomething