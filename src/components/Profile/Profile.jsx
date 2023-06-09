import React, { Fragment, useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import ImageChangeModal from "./ImageChangeModal";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPlaylist, updateProfilePicture } from "../../redux/action/profile";
import { loadUser } from "../../redux/action/user";

const Profile = ({user}) => {
  console.log("profle", user)
  //modal work
  const [showModal, setShowModal]=useState(false)
  const [imagePrev, setImagePrev]=useState("")
  const [image, setImage]=useState("")

  const navigate=useNavigate()
  //update prolie picture
  const dispathc=useDispatch()
  const changeImageSubmitHandler=async (e,image)=>{
    e.preventDefault();
    const myForm= new FormData()
    myForm.append('file',image) //"file sure dewa lagbe"
    await dispathc(updateProfilePicture(myForm))

    dispathc(loadUser()) //ertar karone refersh sara change hobe
    navigate("/profile")

  }
  
  //removeFromPlayList
  const{loading,message,error}=useSelector(state => state.profile)
  const removeFromPlaylistHandler=async id=>{
   await dispathc(removeFromPlaylist(id))
   dispathc(loadUser())

    console.log("removeplaylist",  id)
  }
  return (
    <Fragment>
    <div className="profile w-4/5 mx-auto my-24">
      <h1 className="uppercase text-3xl font-bold">Profile</h1>

      <div className="profile-main flex flex-col lg:flex-row justify-start items-center gap-5 mt-5">
        <div className="avaterprofile flex flex-col justify-center items-center">
          <div className="rounded-full bg-gray-300 w-40 h-40 ">
            <img className="rounded-full h-40 w-40" src={user.avatar.url} alt="" />
          </div>
          <button className="bg-transparent text-yellow-500 font-bold mt-3" onClick={()=>setShowModal(true)}>
            Change Photo
          </button>
        </div>

        <div className="profileinfo flex flex-col sm:justify-center">
          <p>
            {" "}
            <span className="font-bold">Name</span>: {user.name}{" "}
          </p>
          <p>
            {" "}
            <span className="font-bold">Email</span>: {user.email}{" "}
          </p>
          <p>
            {" "}
            <span className="font-bold">Create Ad</span>:
            {user.createdAt.split("T")[0]}{" "}
          </p>

          {user.role !== "admin" && (
            <div className="flex flex-row gap-3 items-center mt-3">
              <p>Subscription:</p>

              {user.subscription && user.subscription.status === "active" ? (
                <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
                  Cancle SUbscription
                </button>
              ) : (
                <Link to={"/subscribe"}>
                  {" "}
                  <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
                    Subscribe
                  </button>{" "}
                </Link>
              )}
            </div>
          )}

          <div className="updateandchange mt-5 flex  flex-col  md:flex-row gap-4 ">
            <Link to="/updateprofile">
              <button className="bg-slate-400 text-white font-bold py-2 px-4 rounded flex-shrink-0">
                Update Profile
              </button>
            </Link>
            <Link to="/changepassword">
              <button className="bg-slate-400 text-white font-bold py-2 px-4 rounded flex-shrink-0">
                Change Password
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="playlist mt-10">
      <h1 className="font-bold">Playlist</h1>

      {
        user.playlist.length >0 && (
            <div className="playlist grid grid-cols-2 lg:grid-cols-3 gap-3 ">
            
            {
                user.playlist.map((element,index)=>(
                    <div key={element.course} className="">
                    <img className="w-fit mb-3"  src={element.poster} alt="" />

                    <div className="profile-button flex flex-row justify-between items-center">
                    <Link to={`/course/${element.course}`}> <button className="bg-transparent text-yellow-500 ">Wathc Now</button> </Link>

                    <button onClick={()=> removeFromPlaylistHandler(element.course)} className="bg-slate-500 text-white font-bold py-2 px-4 rounded"> <RiDeleteBin7Fill /> </button> 

                    </div>
                    
                    </div>

            ))
        }

            </div>
        )
      }

      </div>
      

    </div>

    <ImageChangeModal isvisible={showModal} onClose={()=>setShowModal(false)} imagePrev={imagePrev} setImagePrev={setImagePrev} image={image} setImage={setImage} changeImageSubmitHandler={changeImageSubmitHandler}   />

    </Fragment>
  );

  
};



export default Profile;
