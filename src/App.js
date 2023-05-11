import React, { useState } from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header/Header";
import Sidebar from "./components/Layout/Header/Sidebar";
import Backdrop from "./components/Layout/Header/Backdrop";
import Allcourse from "./components/Allcourse/Allcourse";

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
        <Route path="/allcourse" element={<Allcourse />} />
      </Routes>
    </Router>
  );
}

export default App;
