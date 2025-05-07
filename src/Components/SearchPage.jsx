import React, { useEffect, useMemo, useState } from 'react';
import SearchData from './SearchData';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchdata, setSearchdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams?.get('query');
  const [maxPrice,setmaxPrice]=useState("");
  const [minPrice,setminPrice]=useState("");
  const getsearchdata = async () => {
    setLoading(true); 
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      console.log(data.products);
      setSearchdata(data.products);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false); 
    }
  };
  let filtereddata=useMemo(()=>{
    let filtereddatas=[...searchdata];
    if(maxPrice){
      filtereddatas=filtereddatas.filter((item)=>item.price<=maxPrice)
    }
    else if(minPrice){
      filtereddatas=filtereddatas.filter((item)=>item.price>=minPrice)
    }
    return filtereddatas;
  },[searchdata,maxPrice,minPrice]);


  useEffect(() => {
    getsearchdata();
  }, [query]);

  return (
    <div className='flex gap-3 '>
    <div className='h-[1775px] w-[400px] border border-black p-[20px] mt-40 ml-4 rounded-lg flex flex-col gap-4 '>
    <div className='flex gap-2'>
     <h2 className='text-2xl'>MAX PRICE</h2>
     <input type="number" placeholder='enter min price' value={maxPrice} onChange={(e)=>setmaxPrice(e.target.value)} className='border border-black p-1 rounded-sm' />
     </div>
     <div className='flex gap-2 ml-2'>
     <h2 className='text-2xl'>MIN PRICE</h2>
     <input type="number" placeholder='enter min price'  value={minPrice} onChange={(e)=>setminPrice(e.target.value)} className='border border-black p-1 rounded-sm' />
     </div>
    </div>
    <div className="p-5">
     

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-orange-500"></div>
        </div>
      ) : (
        <div>
        <h1 className="text-center font-bold text-2xl mt-20 ml-[350px]">{`Results for ${query} ...`}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">  
          {filtereddata?.length > 0 ? (
            filtereddata.map((item) => <SearchData key={item.id} data={item} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full ml-[350px]">No results found.</p>
          )}
        </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SearchPage;

