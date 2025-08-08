
import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
const SearchData = ({ data, }) => {
  const { id,title, thumbnail, price, rating } = data;
  const { user } = useContext(AppContext);
  const AddToCart = () => {
    const newItem = {
      ...data,
      quantity: 1,
      user: user.username,
    };

    let cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    const existingItemIndex = cart.findIndex(
      (item) => item.id === id && item.user === user.username
    );

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push(newItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart successfully!');
  };
  return (
    <div className="p-4">
      <div className="bg-white w-[260px] h-[420px] border border-black/30 rounded-2xl shadow-xl hover:shadow-amber-300 transition-transform duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-between p-4">
        
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

        <button
          onClick={AddToCart}
          className="mt-3 w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SearchData;
