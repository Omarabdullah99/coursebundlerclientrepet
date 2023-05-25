import React from 'react'
import Adminsider from './Adminsider'
import { RiDeleteBin7Fill } from 'react-icons/ri';

const AllUser = () => {

  const users=[
    {
      _id:"ajlkdjjkljasdlk",
      name:"Omar Abdullah",
      role:'admin',
      subscription:{
        status:"active"
      },
      email:"omarabdullah917303@gmail.com",
      imgsrc:"hrlkjlrk"
    },
    {
      _id:"ajlkdjjkljasdldfsakj",
      name:"Sheik Limon",
      role:'user',
      subscription:{
        status:""
      },
      email:"limongmail@.com",
      imgsrc:"hrlkjlrk"
    },
    {
      _id:"ajlkdjjkdldfsakj",
      name:"Shoan",
      role:'user',
      subscription:{
        status:"active"
      },
      email:"sohan@gmail.com.com",
      imgsrc:"hrlkjlrk"
    }
  ]
  return (
    <div className="alluser flex  flex-col md:flex-row items-center justify-evenly md:items-center w-4/5 mx-auto">
    <Adminsider />

    <div className="usertable">
    <h1>All User list</h1>

    <div className="overflow-x-auto ">
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
         <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Subscription</th>
          <th >Action</th>
        </tr>
      </thead>
      <tbody>

      {
        users.map(item =>(
          <tr key={item._id}>
          <td>{item._id}</td>

          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.imgsrc} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{item.name} </div>
              </div>
            </div>
          </td>

          <td>{item.email}</td>
          <td>{item.role}</td>
          <td>{item.subscription.status=== "active" ? "Active": "Not Active"}</td>
          <td className='flex items-center text-blue-500 text-2xl'>
         
            <button className="btn bg-transparent border-none hover:bg-transparent text-blue-500  btn-xs ">Change role</button>
            <button> <i> <RiDeleteBin7Fill /> </i></button>
          </td>
        </tr>
        ))
      }
       
      </tbody>
      
      
    </table>
  </div>

    </div>
    
    </div>
  )
}

export default AllUser