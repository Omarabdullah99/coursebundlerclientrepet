import React from 'react'

const Subscribe = () => {
  return (
    <div className="subscribe w-full md:w-2/4 lg:w-2/4 mx-auto my-60">
    <h1 className='subscribetitle text-center text-3xl font-bold pb-5'>Welcome</h1>

    <div className="subscibetwomain w-full lg:w-9/12 mx-auto flex  flex-col">
    <div className="subscribeone bg-yellow-500 px-3 py-4 border rounded-lg">
    <p>Pro-Pack- 299.00tk</p>
    </div>
    
    <div className='subscribetow text-center p-8  border rounded-lg shadow-lg'>
    <p className='text-sm md:text-lg lg:text-lg '>Join pro pack and get access to all</p>
    <p className='text-xl font-bold my-3'> 299tk only </p>
    <button className='bg-yellow-500  text-white font-bold py-2 px-4 rounded'>Buy Now</button>
    </div>

    </div>
    
    </div>
  )
}

export default Subscribe