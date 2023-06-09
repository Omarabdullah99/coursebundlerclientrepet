import React, { useEffect, useState } from 'react'
import Adminsider from './Adminsider'
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../redux/action/admin';
import { toast } from 'react-hot-toast';
import Loader from '../Layout/Loader/Loader';



const AddCourses = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const dispatch=useDispatch()
  const {loading,error,message} =useSelector(state => state.admin)

  // console.log(title,description,createdBy,category)


  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];


  //photo upload

  const changeImageHandler=(e)=>{
    const file=e.target.files[0]
    const reader= new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend=()=>{
      setImagePrev(reader.result)
      setImage(file)
  
    }
  }

  //create Course
  const submitHandler=(e)=>{
    e.preventDefault();
    //   title,description,category,createdBy,file -- ei 4ta must formdata pathano lagbe
    const myForm= new FormData()
    myForm.append("title", title)
    myForm.append("description", description)
    myForm.append("category",category)
    myForm.append("createdBy",createdBy)
    myForm.append('file', image)
    dispatch(createCourse(myForm))
  }

  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({type:'clearError'})
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }

  },[dispatch,error,message])

  return (
    <div className='flex  flex-col md:flex-row items-center justify-evenly md:items-center w-4/5 mx-auto'>
    <Adminsider />
    <div className="addcourses">
    <h1 className='text-2xl font-bold py-5'>Create Courese</h1>

    <form onSubmit={submitHandler} class="max-w-lg mx-auto">
    <div class="mb-6">
    <input
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
      id="title"
      value={title}
      onChange={e => setTitle(e.target.value)}
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
      onChange={e => setDescription(e.target.value)}
      type="text"
      placeholder="description"
    />
  </div>

  <div class="mb-6">
    <input
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
      id="createdBy"
      value={createdBy}
      onChange={e => setCreatedBy(e.target.value)}
      type="text"
      placeholder="creator name"
    />
  </div>

 

  <div className='md-6'>

  <select required id="category" name="category" class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-500" value={category} onChange={e=> setCategory(e.target.value)}>
  <option value="">Category</option>

  {
    categories.map(item =>(
      <option key={item} value={item}> {item} </option>
    ))
  }

</select>
  
  </div>

  <div class="mb-6">
  <input
    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    accept="image/*"
    required
    id="chooseAvatar"
    type={"file"}
    onChange={changeImageHandler}
    
  />

  {
    imagePrev &&(
      <img className='object-cover' src={imagePrev} alt="" />
    )
  }

</div>




  {
    loading ? <Loader /> : <button
    class="w-full mt-3 bg-yellow-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-10 "
    type="submit"
  >
    Submit
  </button>
  }


    
    </form>

    </div>
    </div>
  )
}

export default AddCourses