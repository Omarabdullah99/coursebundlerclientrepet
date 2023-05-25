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
    <div className="alluser flex  flex-col lg:flex-row items-center justify-evenly md:items-center w-4/5 mx-auto py-28">
    <Adminsider />

    <div className="usertable">
    <h1 className='text-2xl font-bold mb-10'>All User list</h1>

    <div class="overflow-x-auto w-full">
  <table class="table-auto border-none">
    <thead>
      <tr>
        <th class="px-4 py-2">ID</th>
        <th class="px-4 py-2">NAME </th>
        <th class="px-4 py-2">EMAIL</th>
        <th class="px-4 py-2">ROLE</th>
        <th class="px-4 py-2">STATUS</th>
        <th class="px-4 py-2">BUTTON</th>
        
      </tr>
    </thead>
    <tbody >
     {
      users.map(item =>(
        <tr key={item._id}>
        <td class=" px-4 py-2">{item._id}</td>
        <td class=" px-4 py-2">{item.name} </td>
        <td class=" px-4 py-2"> {item.email} </td>
        <td class=" px-4 py-2"> {item.role} </td>
        <td class=" px-4 py-2"> {item.subscription && item.subscription.status === 'active'? 'Active': 'Not Active'} </td>
        <td class=" px-4 py-2"> <button>Change Role</button> </td>
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