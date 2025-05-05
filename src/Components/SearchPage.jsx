import React, { use, useEffect, useState } from 'react'
import Dresses from './Dresses'
import { useSearchParams } from 'react-router-dom'
const SearchPage = () => {
    const [searchdata, setSearchdata] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams?.get('query');
    const getsearchdata = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        const data = await response.json();
        console.log(data.products);
        setSearchdata(data.products);
    }
    useEffect(() => {
        getsearchdata();
    }
    , []);
  return (
    <div className='p-5'>
        <h1 className='text-center font-bold text-2xl'>Results....</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {searchdata?.map((item) => (
                    <Dresses key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}

export default SearchPage
