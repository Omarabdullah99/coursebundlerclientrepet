import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllCourses, getCourseLectures } from '../../redux/action/courses'
import { addLecture, deleteLectures } from '../../redux/action/admin'
import { toast } from 'react-hot-toast'
import Loader from '../Layout/Loader/Loader'
import { loadUser } from '../../redux/action/user'

const ViewLecture = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const{courses,lectures}=useSelector(state => state.course)
    const {loading,error,message}=useSelector(state => state.admin)
    // console.log("viewCourse",courses)
    console.log(id)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [video, setVideo] = useState("");
    const [videoPrev, setVideoPrev] = useState("");
    const [courseid,setCourseId]=useState(id)

    console.log("courseId", courseid)

     //photo upload
  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  //addLecture start
  const addLectureHandler=async(e,id)=>{
    e.preventDefault();
    const myForm=new FormData()
    myForm.append("title",title)
    myForm.append("description",description)
    myForm.append("file",video)

    await dispatch(addLecture(courseid,myForm))
    dispatch(loadUser())
  }

  //deleteLecture 
  const deleteLecture= async (lectureId)=>{
    await dispatch(deleteLectures(courseid,lectureId))
    dispatch(loadUser())
  }


  //get Course Lecture
    useEffect(()=>{

      if(error){
        toast.error(error)
        dispatch({type:'clearError'})
      }
  
      if (message) {
        toast.success(message);
        dispatch({ type: 'clearMessage' });
      }
 
        dispatch(getCourseLectures(id))
    },[dispatch])

    const product = courses.find((product) => product._id === id);
    // console.log("getCourseTHisId",product) //not importance
    console.log("getLectureThisId",lectures)
  //get course Lecture End

   
  return (
    <div className="main flex flex-col md:flex-row gap-6 w-4/5 mx-auto ">

   <div className="left w-full md:w-9/12 grid grid-cols-1 md:grid-cols-2">
   
   {
   lectures.length ? lectures.map((item,i)=>(
        <div key={i} className=''>
        
        
        
        <p>{item.title} </p>
        <p>#{item._id}</p>
        <p>{item.description}</p>
        <video className='h-52' src={item.video.url}
        
        controls
    controlsList='nodownload   noremoteplayback'
    disablePictureInPicture
    disableRemotePlayback 
        ></video>
        <button onClick={()=>deleteLecture(item._id)}>Delete</button>
        
       
        
        </div>
    )) : <div> No Lecture add :)</div>
}
   </div>


   <div className="right w-full md:w-3/12">

   <form onSubmit={addLectureHandler} class="max-w-lg mx-auto">
                <h1> Add Lecture </h1>
                <div class="mb-6">
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="title"
                  />
                </div>

                <div class="mb-6">
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="description"
                  />
                </div>

                <div class="mb-6">
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="chooseAvatar"
                  >
                    Chose Avater
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    accept="video/mp4"
                    required
                    type={"file"}
                    onChange={changeVideoHandler}
                  />
                </div>

                {videoPrev && (
                  <video
                    className="h-28 my-10"
                    controlsList="nodownload"
                    controls
                    src={videoPrev}
                  ></video>
                )}

                { loading ? <Loader /> :<button
                class="bg-yellow-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-96 "
                type="submit"
              >
                upload
              </button> }
              </form>
   
   
   </div>


    
    
    </div>
  )
}

export default ViewLecture