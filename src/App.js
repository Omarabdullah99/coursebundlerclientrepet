import React, { useState } from "react";
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

function App() {
  const [sidebar,setSidebar]= useState(false)

  const toggleSidebar=()=>{
    setSidebar((prevState)=> !prevState)
  }

  return (
    <Router>
    <Header openSidebar={toggleSidebar} />
    <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
    <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<RequestCourse />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
