import React, { useEffect } from 'react'
import CartItems from './CartItems'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const navigate = useNavigate();
    const handleback = () => {
        navigate('/');
    };
   

  return (
<div>
    <div className='p-4 flex gap-[500px]'> 
        <h1 className='ml-[600px] font-bold text-4xl'>CART ITEMS</h1>
    <button className='text-center font-bold text-2xl border border-black p-2 rounded-lg text-white bg-black' onClick={handleback}>BACK</button></div>
<div className='p-[20px] grid grid-cols-4 gap-4'>
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
</div>
  )
}

export default Cart
