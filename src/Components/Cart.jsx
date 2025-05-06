import React, { useEffect } from 'react'
import CartItems from './CartItems'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const navigate = useNavigate();
    const handleback = () => {
        navigate('/');
    };
   

  return (
       <div className='h-auto w-[1489px] border-2 border-gray-600 m-4'>
        <h1 className='text-3xl font-bold pl-4 pt-2'>Shopping Cart</h1>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
       </div>
      )
}

export default Cart
