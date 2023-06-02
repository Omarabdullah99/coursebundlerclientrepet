import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header/Header";
import Sidebar from "./components/Layout/Header/Sidebar";
import Backdrop from "./components/Layout/Header/Backdrop";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Layout/Footer/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgetPassword from "./components/Auth/ForgetPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Contact from "./components/Contact/Contact";
import RequestCourse from "./components/RequestCourse/RequestCourse";
import Subscribe from "./components/Payments/Subscribe";
import PaymentFailed from "./components/Payments/PaymentFailed";
import PaymentSuccess from "./components/Payments/PaymentSuccess";
import NotFound from "./components/Layout/NotFound/NotFound";
import CoursePageDetails from "./components/CoursePageDetails/CoursePageDetails";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/Profile/UpdateProfile";
import ChnagePassword from "./components/Profile/ChnagePassword";
import Dashboard from "./components/Admin/Dashboard";
import AllUser from "./components/Admin/AllUser";
import AddCourses from "./components/Admin/AddCourses";
import AddSomething from "./components/Admin/AddSomething";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
//Toaster er work
import toast,{Toaster} from 'react-hot-toast'
import { loadUser } from "./redux/action/user";

//redirect and protected route
import {ProtectedRoute} from 'protected-route-react'


function App() {
  const [sidebar,setSidebar]= useState(false)

  const toggleSidebar=()=>{
    setSidebar((prevState)=> !prevState)
  }

  //login er work
  const {isAuthenticated,user,message,error}=useSelector(state => state.user)
  const dispatch=useDispatch()

  //toaster er kaj login e
  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({type:'clearError'})
    }

    if(message){
      toast.success(message)
      dispatch({type:'clearMessage'})

    }

  }, [dispatch,error,message])

  //getMyprofile and reload dewar por jate login chole na jay tar jonno
  useEffect(()=>{
    dispatch(loadUser())

  }, [dispatch])



// eitar korone coursedetails e video upor right click korle ar inspace asbe nah
  // window.addEventListener("contextmenu", e =>{
  //   e.preventDefault()
  // })

  return (
    <Router>
    <Header openSidebar={toggleSidebar} />
    <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
    <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} isAuthenticated={isAuthenticated} user={user}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CoursePageDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<RequestCourse />} />


        <Route path="*" element={<NotFound />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfailed" element={<PaymentFailed />} />

       
        <Route path="/login" element={ <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><Login /></ProtectedRoute> } />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />

        <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /> </ProtectedRoute> } />
        <Route path="/updateprofile" element={<UpdateProfile /> } />
        <Route path="/changepassword" element={<ChnagePassword /> } />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/allusers" element={<AllUser />} />
        <Route path="/admin/addcourses" element={<AddCourses />} />
        <Route path="/admin/courses" element={<AddSomething />} />
      </Routes>
      <Footer />

      <Toaster />
    </Router>
  );
}

export default App;
