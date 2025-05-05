
import React, { useEffect, useState } from 'react';
import SearchData from './SearchData';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchdata, setSearchdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams?.get('query');

  const getsearchdata = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      console.log(data.products);
      setSearchdata(data.products);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    getsearchdata();
  }, [query]);

  return (
    <div className="p-5">
     

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-orange-500"></div>
        </div>
      ) : (
        <div>
        <h1 className="text-center font-bold text-2xl mb-6">{`Results for ${query} ...`}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">  
          {searchdata?.length > 0 ? (
            searchdata.map((item) => <SearchData key={item.id} data={item} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">No results found.</p>
          )}
        </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

