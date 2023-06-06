import React, { useEffect, useState } from 'react'
import './Course.css'
import courseImg from '../../assests/images/courses.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../../redux/action/courses'
import { toast } from 'react-hot-toast'


const Allcourse = () => {
  const [keyword,setKeyword]=useState("")
  const [category,setCategory]=useState("")

  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Developnemt',
    
  ];

  console.log("coursesinput", keyword)

  // const courses=[
  //   {
  //     imgsrc:courseImg,
  //     title:"Sample1",
  //     CREATOR:"Sample1",
  //     LECTURES:2,
  //     VIEWS:23
  //   },

  //   {
  //     imgsrc:courseImg,
  //     title:"Sample2",
  //     CREATOR:"Sample2",
  //     LECTURES:2,
  //     VIEWS:23
  //   },
  //   {
  //     imgsrc:courseImg,
  //     title:"Sample3",
  //     CREATOR:"Sample3",
  //     LECTURES:2,
  //     VIEWS:23
  //   },
  //   {
  //     imgsrc:courseImg,
  //     title:"Sample4",
  //     CREATOR:"Sample4",
  //     LECTURES:2,
  //     VIEWS:23
  //   },
  //   {
  //     imgsrc:courseImg,
  //     title:"Sample5",
  //     CREATOR:"Sample5",
  //     LECTURES:2,
  //     VIEWS:23
  //   } 

  // ]

  //get all courses
  const dispatch= useDispatch()
  const {loader,courses,error}=useSelector(state => state.course)

  useEffect(()=>{
    dispatch(getAllCourses(category,keyword))

    if(error){
      toast.error(error)
      dispatch({type:'clearError'})
    }

  },[category,keyword,dispatch,error ])

  console.log("courses",courses)
  

  return (
    <div className="courses w-8/12 m-auto mt-10">
      <h1 className='text-5xl font-bold mb-4'>All Courses</h1>
      <input className='h-full w-full rounded-[7px] border border-black px-3 py-2.5' type="text" value={keyword} onChange={e=> setKeyword(e.target.value)} />

      <div className="buttons flex flex-nowrap gap-4 overflow-x-auto mt-4 mb-9 ">
       {
        categories.map((item,index)=>(
          <button key={index} onClick={()=> setCategory(item)} className='flex-shrink-0 bg-gray-400  text-white font-bold  rounded px-4 py-2 mb-3'> {item} </button> //flex -shrink-0 karone height width thik ache button er
        ))
       }
      </div>

      <div className="coursesdiv grid grid-cols-2 lg:grid-cols-3 gap-7  ">
      {
        courses.length > 0 ? courses.map((item)=>( 
          <div className="course my-3" key={item._id}>
          <img className='w-3/4' src={item.poster.url} alt="" />
          <h1> <span className='font-bold text-lg'>Title</span>:{item.title} </h1>
          <h1> <span className='font-bold text-lg'>Description</span>:{item.description} </h1>
          <p><span className='font-bold text-lg'>Creator</span>: {item.createdBy} </p>
          <p><span className='font-bold text-lg'>LectureCount</span>: {item.numOfVideos} </p>
          <div className="coursesbutton flex flex-row gap-3 ">
          <button className=' flex-shrink-0 bg-yellow-500 text-black font-bold  rounded px-2 py-2 mb-3'>Watch Now</button>
          <button className=' flex-shrink-0 bg-transparent text-yellow-500 font-bold  rounded px-2 py-2 mb-3'>Add To Play List</button>
          </div>

          </div>
        )) : <div> <h1 className='text-2xl font-bold text-center mt-20'>Courses Not Found</h1> </div>
      }
      </div>
    </div>
  )
}

export default Allcourse