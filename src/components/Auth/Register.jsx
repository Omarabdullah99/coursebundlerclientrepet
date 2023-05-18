import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name,setName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //photo
  const [imagePrev, setImagePrev]=useState("")
  const [image, setImage]=useState("")

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
  return (
    <div className="Login my-48">
    <h1 className="text-3xl text-center font-bold mb-5 uppercase">Registration</h1>

    <form class="max-w-lg mx-auto">

    <div className="flex items-center justify-center ">
    <div className="rounded-full bg-gray-300 w-40 h-40 flex items-center justify-center">
    <img className="rounded-full h-40 w-40" src={imagePrev} alt="" /> 
  </div>
  </div>

    <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="name">
      Name
    </label>
    <input
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
      id="name"
      value={name}
      onChange={e => setName(e.target.value)}//image er work
      type="text"
      placeholder="Your name"
    />
  </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="example@gmial.com"
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <div class="mb-6">
      <label class="block text-gray-700 font-bold mb-2" for="chooseAvatar">
        Chose Avater
      </label>
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        accept="image/*"
        required
        id="chooseAvatar"
        type={"file"}
        placeholder="Enter your password"
        onChange={changeImageHandler}
      />
    </div>

      <button
        class="bg-yellow-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
        type="submit"
      >
        Sign In
      </button>
     

      <div className="mt-3">
        Already SignIn ?{" "}
        <Link to="/login">
          {" "}
          <button className="text-yellow-500">Login Here</button>
        </Link>
      </div>

    </form>
  </div>
  )
}

export default Register