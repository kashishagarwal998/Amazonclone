
import React, { useEffect, useMemo, useState } from 'react';
import SearchData from './SearchData';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchdata, setSearchdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams?.get('query');
  const [maxPrice, setMaxPrice] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [rating, setRating] = useState("");
  const getsearchdata = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      setSearchdata(data.products);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  const filtereddata = useMemo(() => {
    let results = [...searchdata];
    if (maxPrice) {
      results = results.filter((item) => item.price <= maxPrice);
    }
    if (minPrice) {
      results = results.filter((item) => item.price >= minPrice);
    }
    if (rating) {
      results = results.filter((item) => item.rating >= rating);
    }
    return results;
  }, [searchdata, maxPrice, minPrice, rating]);

  useEffect(() => {
    getsearchdata();
  }, [query]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-10">
      
      <div className="w-full lg:w-1/4 border-4 border-gray-300 rounded-lg p-5 space-y-6 mt-24">
        <div>
          <label className="block text-lg font-semibold mb-1">Max Price</label>
          <input
            type="number"
            placeholder="Enter max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full border border-gray-400 rounded px-3 py-1"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-1">Min Price</label>
          <input
            type="number"
            placeholder="Enter min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full border border-gray-400 rounded px-3 py-1"
          />
        </div>
        <div>
          <h1 className='block text-lg font-semibold mb-1'>Rating</h1>
          1.  <input type="radio" name='rate' value={rating} onChange={(e)=>{setRating("1")}} />⭐<br />
          2.  <input type="radio" name='rate' value={rating} onChange={(e)=>{setRating("2")}}/>⭐⭐<br />
          3.  <input type="radio" name='rate' value={rating} onChange={(e)=>{setRating("3")}}/>⭐⭐⭐ <br />
          4.  <input type="radio" name='rate' value={rating} onChange={(e)=>{setRating("4")}}/>⭐⭐⭐⭐<br />
         
        </div>
      </div>

      {/* Results Section */}
      <div className="flex-1">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-orange-500"></div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center mb-6">
              Results for <span className="text-orange-600">"{query}"</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filtereddata.length > 0 ? (
                filtereddata.map((item) => <SearchData key={item.id} data={item} />)
              ) : (
                <p className="text-center text-gray-500 col-span-full">No results found.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

