import React from 'react'
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="paymentfailed  w-full md:w-2/4 lg:w-2/4 mx-auto text-center my-60">
    <i className='flex justify-center text-5xl'> <RiErrorWarningFill /> </i>
    <h1 className='text-2xl py-5 uppercase' >Payment failed</h1>
    <Link to="/subscribe"> <button>try again</button> </Link>
 </div>
  )
}

export default PaymentFailed