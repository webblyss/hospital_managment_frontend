import React from 'react'

const NavigationBar = () => {
  return (
    <nav className='w-screen h-[50px] bg-teal-500 sticky top-0'>
        <div className="flex justify-between w-[80%] h-full items-center mx-auto">
            <a href="/"><h4 className='text-2xl font-extrabold text-orange-400'>Medi<span className='text-sm text-white text-bold'>Care</span> </h4></a>
            <div>
            <ul className='flex'>
            <li className='mx-3'><a href="#profile">Welcome! Dr.James</a></li>
            <li className='mx-3'><a href="/login">Logout</a></li>
            </ul>
        </div>

        </div>

       
    </nav>
  )
}

export default NavigationBar