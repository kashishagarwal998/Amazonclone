
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App';
import { useContext, useEffect, useState } from 'react';
const Cart = () => {
    const {user}=useContext(AppContext);
    const[items,setItems]=useState([]);
    
    useEffect(() => {
      
        let cartItems=localStorage.getItem('cart');
    if(cartItems){
        cartItems=JSON.parse(cartItems);
    }
    else{
        cartItems=[];
    }
    const currentuseritems=cartItems?.filter((item) => item.user == user?.username);
    setItems(currentuseritems);
    }
    ,[user]);

    const navigate = useNavigate();
    const handleback = () => {
        navigate('/');
    };
   

  return (
    <div className="max-w-6xl mx-auto border border-gray-300 rounded-lg p-6 mt-6 bg-white shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        <button
          onClick={handleback}
          className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition"
        >
          Back to Shop
        </button>
      </div>
      {items.length > 0 ? (
        items.map((item, index) => {
            return(
            <div className="bg-white bg-opacity-80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl hover:shadow-amber-200 transition-all duration-300 hover:-translate-y-1 transform p-4 flex flex-col items-center justify-between space-y-4 max-w-[300px]">
      
    <div className="w-full h-48 overflow-hidden rounded-xl shadow-inner">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>

    <div className="text-center">
      <h2 className="text-2xl font-extrabold text-gray-800">{item.title}</h2>
      <p className="text-xl text-amber-500 font-semibold mt-1">{item.price}</p>
      <p className="text-xl text-amber-500 font-semibold mt-1">{item.quantity}</p>
    </div>

  
  </div>);
        })
      ) : (
        <p className="text-gray-500 text-center mt-8">Your cart is empty.</p>
      )}
    </div>
      )
    
}

export default Cart
