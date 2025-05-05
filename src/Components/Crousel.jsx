import React from 'react'
import { Carousel } from "@material-tailwind/react";
const Crousel = () => {
  return (
    <div  className='h-64 border border-black/10 '>
        
        <Carousel   className="">
     
      <img
        src='Images/c2.png'
        alt="image 2"
        className=" w-full object-cover"
      />
      
      <img
        src='Images/c1.png'
        alt="image 3"
        className=" w-full object-cover"
      />
       <img
        src='Images/c3.png'
        alt="image 1"
        className="w-full  object-cover"
      />
    </Carousel>
    </div>
  )
}

export default Crousel

 

