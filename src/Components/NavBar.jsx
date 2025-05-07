
import React, { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

const NavBar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const [value, setValue] = React.useState('');

  const handlevalue = (e) => {
    setValue(e.target.value);
  };

  const suggestions = ["phone", "laptop", "headphone", "earphone", "watch", "clothes", "shoes", "bag", "books"];

  const handle = () => {
    navigate('/cart');
  };
  const handlekeydown = (e) => {
    if (e.key === 'Enter') {
      handlesearch();
    }
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
    filteredSuggestions=[];
  }

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
      <div className="w-full h-[90px] bg-black flex gap-4 p-2">
        <div className="w-[120px] h-[80px] p-2 hover:border-2 hover:border-white">
          <img src="Images/img1.jpg" alt="logo" className="w-full h-full" />
        </div>

        <div className="w-[120px] h-[80px] flex p-1 hover:border-2 hover:border-white">
          <div className="w-[30px] h-[80px] text-white text-2xl flex items-center justify-center">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="w-[90px] h-[80px] text-white text-sm pt-5">UPDATE LOCATION</div>
        </div>

        <div className="flex-grow h-[50px] pt-4 flex relative">
          <div className="w-[70px] h-[50px] bg-gray-500  ml-[10px]">
            <select className="w-full h-full border-none bg-gray-500 text-black p-3 text-sm">
              <option>ALL</option>
              <option>Electronics</option>
              <option>Mobiles</option>
              <option>Books</option>
              <option>Amazon Devices</option>
              <option>Amazon Fashion</option>
            </select>
          </div>
          <div className="w-[400px] h-[50px] bg-white text-gray-600 text-lg px-2 flex items-center">
            <input
              type="text"
              placeholder="Search Amazon.in"
              value={value}
              onChange={handlevalue}
              onKeyDown={handlekeydown}
              className="w-full h-full outline-none"
            />
          </div>
          <div className="w-[70px] h-[50px] bg-orange-500 text-2xl flex items-center justify-center cursor-pointer" onClick={handlesearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          {filteredSuggestions.length > 0 &&  value.trim() &&
            <div className="absolute top-full left-0 mt-5 ml-2 w-[542px] max-h-40 overflow-y-auto bg-white text-black z-10">
            {filteredSuggestions.map((text,i)=>{
              return <p onClick={()=>handlenavigate(text)} key={i}>{text}</p>
            })}
                </div>
              }
    
          
        </div>
        <div className='w-[100px] h-[80px] flex items-center justify-center hover:border-2 hover:border-white'>
          <p className='text-white font-bold text-1xl p-6 '>{user ? `Hello, ${user.username}`:"hello,user"}</p>
        </div>

        <div className="w-[120px] h-[80px] hover:border-2 hover:border-white flex">
          <img src="Images/img3.jpg" alt="language" className="w-[70px] h-[70px]" />
          <div className="text-white text-lg pt-[22px]">EN</div>
        </div>

        <div className="w-[120px] h-[80px] text-white hover:border-2 hover:border-white mt-[10px]">
          <div>Hello, Sign in</div>
          <b className="ml-[5px] mt-[9px] block">Account & List</b>
        </div>

        <div className="w-[120px] h-[80px] text-white hover:border-2 hover:border-white mt-[10px] ml-[5px] px-[19px]">
          <div>Returns</div>
          <b>& Orders</b>
        </div>

        <div className="w-[120px] h-[80px] flex hover:border-2 hover:border-white cursor-pointer" onClick={handle}>
          <div className="w-[30px] h-[80px] text-white text-2xl flex items-center justify-center">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="w-[90px] h-[80px] text-white text-sm pt-5 ml-3 mt-2">CART</div>
        </div>
      </div>

      <div className="w-full h-[50px] bg-[#262626] flex text-white justify-between">
        <ul className="flex gap-1 p-2">
          <li className="px-2  hover:border-2 hover:border-white list-none" onClick={()=>navigate("/")}><i class="fa-solid fa-house"></i></li>
          {[  "ALL",  "MX Player", "Sell", "Today's Deals", "Best Sellers", "Mobiles", "Customer Service", "Electronics", "Prime", "New Releases", "Amazon pay", "Home & Kitchen", "Fashion", "Computer", "Books", "Car & Motorbikes"].map((item, index) => (
            <li key={index} className="px-2 py-1 hover:border-2 hover:border-white list-none text-sm">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

