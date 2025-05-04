import React from 'react'

const Items = () => {
  return (
  
      <div className='bg-white w-[350px] h-[350px] border-2 border-black/[5px] rounded-lg shadow-lg flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl'>ITEM </h1>
      <div className='w-[250px] h-[250px]'>
      <img src="Images/img2.png" alt="not found"className='object-cover h-full w-full rounded-lg overflow-hidden'/>
  
      </div>
      <h2 className='font-bold '>30,000/-</h2>
      </div>
  )
}

export default Items
