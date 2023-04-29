import React,{useEffect,useState} from 'react';
import axios from 'axios';


const NavigationBar = () => {
const [user,setUser] = useState('')
const [token,setToken]  = useState()

useEffect(()=>{
  setToken(localStorage.getItem('token'))
  console.log(token)
  async function getUserInfo(){
    await axios.get("http://127.0.0.1:8000/api/login/user_info/",{
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response)=>{
      setUser(response.data)
    })
  }
  if (token) {
    getUserInfo();
  }
},[token])

  return (
    <nav className='w-screen h-[50px] bg-teal-500 sticky top-0'>
        <div className="flex justify-between w-[80%] h-full items-center mx-auto">
            <a href="/"><h4 className='text-2xl font-extrabold text-orange-400'>Medi<span className='text-sm text-white text-bold'>Care</span> </h4></a>
            <div>
            <ul className='flex'>
            <li className='mx-3 text-white'><a href="#profile">Dr. {user.username}</a></li>
            <li className='mx-3'><a href="/login">Logout</a></li>
            </ul>
        </div>

        </div>

       
    </nav>
  )
}

export default NavigationBar