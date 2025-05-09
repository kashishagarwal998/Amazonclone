import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { useContext, useEffect, useState } from 'react';

const Cart = () => {
    const { user } = useContext(AppContext);
    const [items, setItems] = useState([]);
    const [totalprice, setTotalprice] = useState(0);
    
    useEffect(() => {
        let cartItems = localStorage.getItem('cart');
        if (cartItems) {
            cartItems = JSON.parse(cartItems);
        } else {
            cartItems = [];
        }
        const currentuseritems = cartItems?.filter(
            (item) => item.user === user?.username
        );
        setItems(currentuseritems);
    }, [user]);
    
     
  useEffect(() => {
    let total = 0;
    for (const item of items) {
       const price = parseFloat(item.price.toString().replace(/[^\d.]/g, ""));

        const quantity = parseInt(item.quantity);
        if (!isNaN(price) && !isNaN(quantity)) {
            total += price * quantity;
        }
    }
    setTotalprice(total);
}, [items]); 

    function handlequantity(quantity, id) {

        setItems((prevItems) => {
            const newArray = prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: parseInt(quantity) };
                } else {
                    return item;
                }
            })
            return newArray;
        });
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedItems = cartItems.map((item) => {
            if (item.id  === id && item.user === user?.username) {
                return { ...item, quantity: parseInt(quantity) };
            }
            return item;
        });
        localStorage.setItem('cart', JSON.stringify(updatedItems));
       
    }


    const navigate = useNavigate();
    const handleback = () => {
        navigate('/');
    };

    return (
        <div className="max-w-6xl mx-auto border border-gray-300 rounded-lg p-6 mt-6 bg-white shadow-md">
            <div className="flex justify-between items-center mb-4">

                <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
                <h2 className='text-2xl font-bold ml-[500px] text-gray-800'>{`Total Price:${totalprice}`} </h2>
                <button
                    onClick={handleback}
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
                            className="bg-white bg-opacity-80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl hover:shadow-amber-200 transition-all duration-300 hover:-translate-y-1 transform p-4"
                        >
                            <div className="w-full h-48 overflow-hidden rounded-xl shadow-inner">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <h2 className="text-2xl font-extrabold text-gray-800">
                                    {item.title}
                                </h2>
                                <p className="text-xl text-amber-500 font-semibold mt-1">
                                    {item.price}
                                </p>
                                <p className="text-xl text-amber-500 font-semibold mt-1">
                                    <label htmlFor={`quantity-${item.id}`} className='text-lg mr-2'>QTY:</label>
                                    <select name="quantity" value={item.quantity} onChange={(e) => { handlequantity(e.target.value, item.id) }} className='border border-gray-300 rounded-md p-2'>
                                        {[1, 2, 3, 4, 5].map((number) => {
                                            return (
                                                <option value={number} key={number}>{number}</option>
                                            )
                                        })}

                                    </select>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center mt-8">Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
