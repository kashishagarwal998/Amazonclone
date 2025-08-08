
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { useContext, useEffect, useState } from 'react';

const Cart = () => {
    const { user } = useContext(AppContext);
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const currentUserItems = cartItems.filter(item => item.user === user?.username);
        setItems(currentUserItems);
    }, [user]);

    useEffect(() => {
        const total = items.reduce((acc, item) => {
            const price = parseFloat(item.price.toString().replace(/[^\d.]/g, ''));
            const quantity = parseInt(item.quantity);
            return acc + (isNaN(price) || isNaN(quantity) ? 0 : price * quantity);
        }, 0);
        setTotalPrice(total);
    }, [items]);

  const handleQuantityChange = (newQty, id) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: parseInt(newQty) };
      }
      return item;
    });
    setItems(updatedItems);

    const allCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCartItems = allCartItems.map(item => {
      if (item.id === id && item.user === user?.username) {
        return { ...item, quantity: parseInt(newQty) };
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };



    return (
        <div className="max-w-6xl mx-auto border border-gray-300 rounded-lg p-6 mt-6 bg-white shadow-md">
            <div className="flex flex-wrap justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">🛒 Shopping Cart</h1>
                <h2 className="text-2xl font-semibold text-green-700">{`Total: ₹${totalPrice.toFixed(2)}`}</h2>
                <button
                    onClick={() => navigate('/')}
                    className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition"
                >
                    Back to Shop
                </button>
            </div>

            {items.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl shadow-md p-4"
                        >
                            <div className="w-full h-48 overflow-hidden rounded-xl">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                                <p className="text-lg text-amber-600 font-semibold mt-2">Price: {item.price}</p>
                                <div className="mt-2">
                                    <label htmlFor={`quantity-${item.id}`} className="mr-2 font-medium">Qty:</label>
                                    <select
                                        id={`quantity-${item.id}`}
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(e.target.value, item.id)}
                                        className="border border-gray-300 rounded-md px-2 py-1"
                                    >
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;

