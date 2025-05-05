import React from 'react'

const Dresses = (searchdata) => {
  const {title, thumbnail, price} = searchdata.data;
  return (
    <div className='p-[40px]'>
      
    <div className='bg-black text-white p-[10px] w-[400px] h-[400px] border-2 border-black rounded-lg shadow-lg flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <div className='w-[250px] h-[250px]'>
      <img src={thumbnail} alt="not found"className='object-cover h-full w-full rounded-lg '/>
  
      </div>
      <h2 className='font-bold '>{price}/-</h2>
    </div>
    </div>
  )
}

export default Dresses
