import React, { useState } from 'react'
import { RiDashboardFill, RiLogoutBoxFill, RiMenu5Fill } from 'react-icons/ri';
import './Header.css'
const Header = ({openSidebar}) => {
  return (
    <div className="toll-bar">
        <div className="menuicon" onClick={openSidebar} >
            <i> <RiMenu5Fill />  </i>
        </div>
        <div className="title">CourseBundler</div>
    </div>
  )
}

export default Header