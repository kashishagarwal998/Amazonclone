import React from 'react'
import { Carousel } from "@material-tailwind/react";
const Crousel = () => {
  return (
    <div  className='h-64 border border-black/10 '>
        
        <Carousel   className="">
      <img
        src='https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Shankhadip/MayART25/MAY25_GW_PC_Hero_H1_8PM_Ends-Midnight_2x._CB794858947_.jpg'
        alt="image 1"
        className="w-full object-cover"
      />
      <img
        src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2025/Event/MayART/ATF/Unrec/Event/PC/2._CB795058278_.jpg'
        alt="image 2"
        className=" w-full object-cover"
      />
      <img
        src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Isha/MayART/2/PC_Hero_Asin_3000x1200._CB794822244_.jpg'
        alt="image 3"
        className=" w-full object-cover"
      />
    </Carousel>
    </div>
  )
}

export default Crousel

 

