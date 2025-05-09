import React from 'react'

const SearchData = ({data}) => {
    const { title, thumbnail, price,rating } = data;
  return (
    
      <div className='p-[30px]'>
      <div className='bg-white p-2 w-[300px] h-[500px] border-4 border-[#F7AD45] rounded-lg shadow-lg flex flex-col gap-3 items-center justify-center hover:scale-105'>
      <h1 className='p-2 font-bold text-2xl'>{title}</h1>
      <div className='w-[200px] h-[200px]'>
      <img src={thumbnail} alt="not found"className='object-cover h-full w-full rounded-lg overflow-hidden border-8 border-black/[2px] '/>
  
      </div>
      <h2 className='font-bold mt-2'>price..{price}</h2>
      <h2 className='font-bold mt-2'>rating..{rating}</h2>
      </div>
      </div>
  )
}

export default SearchData
