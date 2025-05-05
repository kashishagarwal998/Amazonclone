import React from 'react'

const Items = ({data}) => {
  const {title,img,price} = data;
  return (
  
      <div className='bg-white w-[350px] h-[350px] border-4 border-[#F7AD45] rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105'>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <div className='w-[300px] h-[250px]'>
      <img src={img} alt="not found"className='object-cover h-full w-full rounded-lg overflow-hidden '/>
  
      </div>
      <h2 className='font-bold mt-2'>{price}</h2>
      </div>
  )
}

export default Items
