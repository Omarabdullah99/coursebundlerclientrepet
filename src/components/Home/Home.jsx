import React from 'react'
import './Home.css'
import vg from '../../assests/images/bg.png'
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assests/videos/intro.mp4'

const Home = () => {
  return (
    <section className='home'>
       <div className="container  ">
        <div className="home_first-part  flex flex-col lg:flex-row items-center  gap-14 ">
            <div className="home_content flex flex-col items-center lg:items-end ">
                <h1 className='text-xl lg:text-3xl font-bold'>LEARN FROM THE EXPRESS</h1>
                <p className='text-lg py-4'>Find value Content At Resonable Price</p>
                <button class="border border-yellow-500 bg-yellow-500 text-white font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> Explore Now</button>
            </div>

            <div className="imagesection">
                <img src={vg} alt="" className='w-fit' />
            </div>

        </div>
       </div>

       <div className="Home_part-two my-5">
        <h1 className='text-yellow-400 text-center text-5xl font-bold drop-shadow-lg '>Our Brands</h1>
        <div className="part_two-icons flex justify-evenly bg-black text-white mt-5 py-5">
        <span> <i><CgGoogle /></i> </span>
        <span> <i><CgYoutube /></i> </span>
        <span> <i><SiCoursera /> </i></span>
        <span> <i><SiUdemy /></i> </span>
        <span> <i><DiAws /></i> </span>
        </div>
       </div>

       <div className="home_video">
        <video src={introVideo} 
        autoPlay controls
        controlsList='nodownload nofullscreen  noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback        >
        </video>
       </div>


    </section>
  )
}

export default Home