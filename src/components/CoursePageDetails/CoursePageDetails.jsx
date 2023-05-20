import React, { useState } from 'react'
import introVideo from '../../assests/videos/intro.mp4'
import './CoursePage.css'

const CoursePageDetails = () => {
    const [lectureNumber, setLectureNumber]=useState(0)

    const lectures=[
        {
        _id:"000001",
        title:"sample1",
        description:"sample0001 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente exercitationem illo quis, illum accusamus beatae nemo fugit, sed consectetur qui maxime non, necessitatibus mollitia.",
        video:{
            url:"sjakj"
        }
    },

    {
        _id:"000002",
        title:"sample2",
        description:"sample0002 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente exercitationem illo quis, illum accusamus beatae nemo fugit, sed consectetur qui maxime non, necessitatibus mollitia.",
        video:{
            url:"sjakj"
        }
    },

    {
        _id:"000003",
        title:"sample3",
        description:"sample0003 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente exercitationem illo quis, illum accusamus beatae nemo fugit, sed consectetur qui maxime non, necessitatibus mollitia.",
        video:{
            url:"sjakj"
        }
    }
    ,
    {
        _id:"000004",
        title:"sample4",
        description:"sample0004 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente exercitationem illo quis, illum accusamus beatae nemo fugit, sed consectetur qui maxime non, necessitatibus mollitia.",
        video:{
            url:"sjakj"
        }
    }
]

  return (
    <div className="coursePageDetails   ">
    
    <div className="detailsmain flex flex-col md:flex-row lg:flex-row">

    <div className="detailsvideo w-full md:w-3/4 lg:w-3/4  rounded border shadow">
    <video 
    src={introVideo} 
    controls
    controlsList='nodownload   noremoteplayback'
    disablePictureInPicture
    disableRemotePlayback 
    />
    <p className='text-3xl font-bold'> {`# ${lectureNumber+1} ${lectures[lectureNumber].title}`} </p>
    <p className='text-4xl font-bold'> Description</p>
    <p> {lectures[lectureNumber].description} </p>
    </div>

   <div className='ml-5 flex flex-col'>
    {
        lectures.map((element,index)=>(
            <button className='py-3 ' key={element._id} onClick={()=> setLectureNumber(index)}>
              #{index+1} {element.title}
            </button>
        ))
    }
   </div>

    </div>

    </div>
  )
}

export default CoursePageDetails