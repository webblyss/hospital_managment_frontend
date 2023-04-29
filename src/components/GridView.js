import React from 'react'
import Card from './Card'

import IMG1 from '../assets/medical-record.png';
import IMG2 from '../assets/advice.png';
import IMG3 from '../assets/examination.png';
import IMG4 from '../assets/hospitalisation.png';


const GridView = () => {
  return (
    <div className='w-[80%] h-full mx-auto my-5 grid grid-cols-4 gap-4'>
        <Card text={"Patient Registration"} icon={IMG1} path={"patient-registration"}/>
        <Card text={"Consultation"} icon={IMG2} path={"consultation"}/>
        <Card text={"Male Ward"} icon={IMG3}/>
        <Card text={"Patient Registration"} icon={IMG4}/>
        <Card text={"Patient Registration"} icon={IMG3}/>
    </div>
  )
}

export default GridView