
import React, { useContext } from 'react';
import { AppContext } from '../App';

const Items = ({ data }) => {
  const { title, img, price } = data;
  const { user } = useContext(AppContext);

  function handleaddToCart() {
    const cartItems={
    ...data,
      quantity: 1,
      user:user.username
    }
    let prevItems=localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    if(prevItems){
      const newArray=[...prevItems,cartItems]
      localStorage.setItem('cart',JSON.stringify(newArray));
    }
    else{
      localStorage.setItem('cart',JSON.stringify([cartItems]));

    }
  }

  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl hover:shadow-amber-200 transition-all duration-300 hover:-translate-y-1 transform p-4 flex flex-col items-center justify-between space-y-4 max-w-[300px]">
      
      <div className="w-full h-48 overflow-hidden rounded-xl shadow-inner">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-gray-800">{title}</h2>
        <p className="text-xl text-amber-500 font-semibold mt-1">{price}</p>
      </div>

      <button className="mt-2 px-5 py-2 rounded-full bg-[#F8B55F] text-white font-medium hover:bg-amber-600 transition duration-300 shadow-md" onClick={handleaddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Items;


