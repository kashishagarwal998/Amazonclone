// import React from 'react'

// const SearchData = ({data}) => {
//     const { title, thumbnail, price,rating } = data;
//   return (
    
//       <div className='p-[30px]'>
//       <div className='bg-white p-2 w-[300px] h-[350px] border-4 border-[#F7AD45] rounded-lg shadow-lg flex flex-col gap-3 items-center justify-center hover:scale-105'>
//       <h1 className='p-2 font-bold text-xl'>{title}</h1>
//       <div className='w-[200px] h-[200px]'>
//       <img src={thumbnail} alt="not found"className='object-cover h-full w-full rounded-lg overflow-hidden border-8 border-black/[2px] '/>
  
//       </div>
//       <h2 className='font-bold mt-2'>price..{price}</h2>
//       <h2 className='font-bold mt-2'>rating..{rating}</h2>
//       </div>
//       </div>
//   )
// }

// export default SearchData
import React from 'react';

const SearchData = ({ data }) => {
  const { title, thumbnail, price, rating } = data;

  return (
    <div className="p-4">
      <div className="bg-white w-[260px] h-[380px] border border-black/30 rounded-2xl shadow-xl hover:shadow-amber-300 transition-transform duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-between p-4">
        
        <div className="text-center">
          <h1 className="text-lg font-semibold text-gray-800 mb-2 truncate">{title}</h1>
        </div>

        <div className="w-[180px] h-[180px] rounded-xl overflow-hidden border-4 border-black/20 shadow-inner">
          <img
            src={thumbnail}
            alt="not found"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="w-full mt-4 flex flex-col items-center space-y-1">
          <p className="text-md font-semibold text-green-700">₹ {price}</p>
          <p className="text-sm font-medium text-black">⭐ {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchData;
