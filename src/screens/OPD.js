import React,{useEffect,useState} from 'react';
import NavigationBar from '../components/Nav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {AiFillCheckSquare} from 'react-icons/ai';



const OPD = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate(); 
    const handleClick = (id,item) => {
         navigate(`/opd/details/${id}`, { state: { data: item } });
      }  
    
        useEffect(()=>{
            axios.get("http://127.0.0.1:8000/api/registration/").then((response)=>{
                setData(response.data)
                console.log(data)
            });
    
        });
      




  return (
    <div>
        <NavigationBar/>
        <div className="w-[80%] h-full mx-auto flex flex-col mt-5 justify-center items-center">
        <div className="flex text-center  w-full justify-center">
          <input
            type="text"
            name="search"
            placeholder="search patient"
            className="border-gray-400 border-2 rounded-lg focus:outline-none focus:border-blue-500 w-[40%] px-2"
          />
        </div>
        <div class="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Gender
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Age
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Vitals_checked
                      </th>
                    </tr>
                  </thead>
                  {data.map((item, index) => {
                    return (
                      <tr
                        onClick={() => {
                          handleClick(item.id, item);
                        }}
                        className="cursor-pointer hover:bg-gray-100"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.firstName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.lastName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.gender}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.age}
                        </td>

                      <td className='whitespace-nowrap px-6 py-4'>
                      {item.vitals_checked  ? (<AiFillCheckSquare className='text-blue-500'/>) : (<span>vitals not checked</span>) }
                      </td>
                        
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <PatientCard/> */}
      </div>

    </div>
  )
}

export default OPD