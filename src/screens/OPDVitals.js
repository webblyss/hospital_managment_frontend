import { useLocation } from 'react-router-dom';
import NavigationBar from '../components/Nav';
import React,{useState} from 'react';
import Modal from "react-modal";


Modal.setAppElement("#root");

const OPDVitals = () => {
    const location = useLocation();
    const data = location.state.data;

  
  return (
    <div>
    <NavigationBar/>
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">
        {data.firstName} {data.lastName}
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-bold">Age:</p>
          <p>{data.age}</p>
        </div>
        <div>
          <p className="font-bold">Email:</p>
          <p>{data.email}</p>
        </div>
        <div>
          <p className="font-bold">Phone:</p>
          <p>{data.phone}</p>
        </div>
        <div>
          <p className="font-bold">birth:</p>
          <p>{data.date_of_birth}</p>
        </div>
        <div>
          <p className="font-bold">NHIS:</p>
          <p>{data.NHIS}</p>
        </div>
        <div>
          <p className="font-bold">status:</p>
          {data.vitals_checked ? (<p>patient vitals have been checked</p>) : (<p>Vitals has not been checked</p>)}
        </div>
        <div>


       
        </div>
      </div>
    </div>
    </div>
  )
}

export default OPDVitals