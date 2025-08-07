

import React, { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

const NavBar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const [value, setValue] = React.useState('');

  const handlevalue = (e) => setValue(e.target.value);

  const suggestions = ["phone", "laptop", "headphone", "earphone", "watch", "clothes", "shoes", "bag", "books"];

  const handle = () => navigate('/cart');

  const handlekeydown = (e) => {
    if (e.key === 'Enter') handlesearch();
  }

  const handlesearch = () => {
    if (value) {
      navigate(`/search?query=${encodeURIComponent(value)}`);
      setValue('');
    }
  };

  const handlenavigate = (text) => {
    navigate(`/search?query=${encodeURIComponent(text)}`);
    setValue('');
  };

  let filteredSuggestions = useMemo(() => {
    if (value.trim()) {
      return suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
    }
    return [];
  }, [value]);

  return (
    <div className="bg-black w-full">
      {/* Top Navigation */}
      <div className="w-full bg-black flex flex-wrap items-center justify-between px-4 py-3 gap-2">
        {/* Logo */}
        <div className="w-[100px] h-[60px] p-1 hover:border hover:border-white">
          <img src="Images/img1.jpg" alt="logo" className="w-full h-full object-contain" />
        </div>

        {/* Location */}
        <div className="hidden sm:flex items-center hover:border hover:border-white text-white text-sm">
          <i className="fa-solid fa-location-dot text-2xl px-2"></i>
          <div>Update Location</div>
        </div>

        {/* Search */}
        <div className="flex-grow max-w-[600px] flex relative w-full">
          <select className="w-20 sm:w-[90px] text-sm bg-gray-200 p-2 rounded-l">
            <option>ALL</option>
            <option>Electronics</option>
            <option>Mobiles</option>
            <option>Books</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon.in"
            value={value}
            onChange={handlevalue}
            onKeyDown={handlekeydown}
            className="flex-grow px-3 py-2 outline-none"
          />
          <button onClick={handlesearch} className="w-[50px] bg-orange-500 text-white flex justify-center items-center text-xl rounded-r">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          {/* Suggestions */}
          {filteredSuggestions.length > 0 && value.trim() && (
            <div className="absolute top-full left-0 mt-2 w-full max-h-40 overflow-y-auto bg-white text-black z-10 border border-gray-200 rounded shadow">
              {filteredSuggestions.map((text, i) => (
                <p
                  key={i}
                  onClick={() => handlenavigate(text)}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {text}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Hello User */}
        <div className="hidden sm:flex items-center text-white px-2 hover:border hover:border-white">
          <p>{user ? `Hello, ${user.username}` : "Hello, User"}</p>
        </div>

        {/* Language */}
        <div className="hidden md:flex items-center text-white hover:border hover:border-white px-2">
          <img src="Images/img3.jpg" alt="language" className="w-8 h-8 mr-1" />
          <div>EN</div>
        </div>

        {/* Sign In */}
        <div className="hidden md:flex flex-col text-white text-xs px-2 hover:border hover:border-white">
          <span>Hello, Sign in</span>
          <strong>Account & Lists</strong>
        </div>

        {/* Orders */}
        <div className="hidden md:flex flex-col text-white text-xs px-2 hover:border hover:border-white">
          <span>Returns</span>
          <strong>& Orders</strong>
        </div>

        {/* Cart */}
        <div
          onClick={handle}
          className="flex items-center text-white hover:border hover:border-white cursor-pointer px-3 py-2"
        >
          <i className="fa-solid fa-cart-shopping text-xl mr-1"></i>
          <span className="text-sm">Cart</span>
        </div>
      </div>

      {/* Bottom Menu (Categories) */}
      <div className="w-full bg-[#262626] text-white  whitespace-nowrap text-sm">
        <ul className="flex gap-3 px-4 py-2">
          <li className="hover:border hover:border-white px-2 cursor-pointer" onClick={() => navigate("/")}><i className="fa-solid fa-house"></i></li>
          {["ALL", "MX Player", "Sell", "Today's Deals", "Best Sellers", "Mobiles", "Customer Service", "Electronics", "Prime", "New Releases", "Amazon pay", "Home & Kitchen", "Fashion", "Computer", "Books", "Car & Motorbikes"].map((item, index) => (
            <li key={index} className="hover:border hover:border-white px-2 cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
