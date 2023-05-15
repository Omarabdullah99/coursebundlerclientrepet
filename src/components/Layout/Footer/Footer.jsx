import React from 'react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular,TiSocialFacebook, TiSocialInstagram} from 'react-icons/ti'
import {DiGithub} from 'react-icons/di'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer bg-black p-7 flex flex-row justify-between items-center">

    <div className="footer-left">
        <h1 className='text-white text-3xl font-bold mb-3'>All Right Reserved</h1>
        <p className='text-yellow-500'>omarabdullah917303@gmail.com</p>
    </div>

    <div className="footer-icons text-white flex flex-nowrap gap-4 text-4xl">
        <Link to="https://www.facebook.com/omarabdullah.omar.37"> <TiSocialFacebook /> </Link>
        <Link to="https://www.instagram.com/omar_abdullah303/"> <TiSocialInstagram /> </Link>
        <Link to="https://github.com/Omarabdullah99"> <DiGithub /> </Link>
    </div>

    </div>
  )
}

export default Footer