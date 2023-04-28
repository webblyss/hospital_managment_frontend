import React from 'react'

const Card = ({icon,text,path}) => {
  return (
    <div className='w-[200px] h-[200px] shadow bg-white flex justify-center items-center flex-col cursor-pointer m-2'>
           <img src={icon} alt="" className='w-[50px] h-[50px]' />
           <span className='mt-3'><a href={path}>{text}</a></span>
    </div>
  )
}

export default Card