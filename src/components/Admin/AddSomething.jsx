import React from 'react'
import Adminsider from './Adminsider'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const AddSomething = () => {
  const users=[
    {
      _id:"ajlkdjjkljasdlk",
      poster:"https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg",
      title:"React Course",
      category:"Web Development",
      creator:"Omar Abdullah",
      lectures:2,
      
    },
    {
      _id:"ajlkkljasdlk",
      poster:"https://www.beyondblue.org.au/images/default-source/2.get-help/newaccess/new-access-for-small-business-owners.svg?sfvrsn=648933d1_4",
      title:"React Course",
      category:"App Development",
      creator:"Omar Abdullah",
      lectures:9,
    },
    {
      _id:"ajlkdjjkljasd",
      poster:"https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg",
      title:"React Course",
      category:"Game Development",
      creator:"Omar Abdullah",
      lectures:12,
    }
  ]
  return (
    <div className='courses flex  flex-col lg:flex-row items-center justify-evenly md:items-center w-4/5 mx-auto py-28'>
    <Adminsider />
    <div className="cousertable">
    <h1 className='text-2xl font-bold mb-10'>All Courses here</h1>


    <div className="overflow-x-auto ">
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
         <th  class=" px-4 py-2">ID</th>
          <th class=" px-4 py-2">POSTER</th>
          <th class=" px-4 py-2">TITLE</th>
          <th class=" px-4 py-2">CATEGORY</th>
          <th class=" px-4 py-2">LECTURES</th>
          <th class=" px-4 py-2" >ACTION</th>
        </tr>
      </thead>

      <tbody>

      {
        users.map(item =>(
          <tr key={item._id}>
          <td class=" px-4 py-2"> {item._id} </td>

          <td class=" px-4 py-2"> <img className="w-20" src={item.poster} alt="" /> </td>

          <td class=" px-4 py-2"> {item.title} </td>

          <td class=" px-4 py-2"> {item.category} </td>

          <td class=" px-4 py-2"> {item.lectures} </td>

          <td class=" px-4 py-2"> <button>View Lecture</button> </td>
          <td class=" px-4 py-2"> <i> <RiDeleteBin7Fill /> </i> </td>
          
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

export default AddSomething