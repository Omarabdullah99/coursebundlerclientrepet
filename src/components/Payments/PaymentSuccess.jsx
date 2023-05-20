import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const PaymentSuccess = () => {
  return (
    <div className="paymentsuccess w-full md:w-2/4 lg:w-2/4 mx-auto my-60">
      <h1 className="text-center text-3xl font-bold pb-5">You have Pro Pack</h1>
      <div className="paymentsuccessmain w-full lg:w-9/12 mx-auto flex  flex-col">
        <div className="paysuccone bg-yellow-500 px-3 py-4 border rounded-lg">
          <p>Payment Success</p>
        </div>

        <div className="paysucctwo text-center p-8  border rounded-lg shadow-lg">
            <p> Congratulation you're a pro member. You <br /> have access to premium
            content.</p>
            
           <i className=" flex justify-center"> <RiCheckboxCircleFill className="text-5xl  "  /></i>

            <Link to='/profile'>
            <button className="font-bold py-5">Go to profile</button>
            </Link>

            <p> <span className="font-bold">Reference</span> :uewuqiowureuioewfjkfdw</p>

        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
