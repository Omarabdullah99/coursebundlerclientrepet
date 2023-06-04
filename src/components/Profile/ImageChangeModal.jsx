import React from 'react'

const ImageChangeModal = ({isvisible,onClose,imagePrev,setImagePrev,image,setImage,changeImageSubmitHandler}) => {
    if(!isvisible) return null
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
    <div className="modal fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
    
    <div className="modalcontent w-[600px] flex flex-col">

    <button className='text-white text-xl place-self-end' onClick={()=> onClose()} >X</button>
    <div className="content bg-white p-2 rounded ">
    <h1 className='text-3xl text-yellow-500'>Modal</h1>

    <form onSubmit={(e)=> changeImageSubmitHandler(e,image)} action="">
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
        onChange={changeImageHandler}
        
      />
    </div>
    <button
        class="bg-yellow-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
        type="submit"
      >
        Update Picture
      </button>
    </form>
    </div>
    

    </div>
    </div>
  )
}

export default ImageChangeModal