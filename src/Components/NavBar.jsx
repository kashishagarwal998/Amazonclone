import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('');
  const handlevalue = (e) => {
    setValue(e.target.value);
    
  };

  const handle = () => {
    navigate('/cart');
  };
  const handlesearch = () => {
    if(value==''){
      alert('Please enter a value to search');
      return;
    }
    else if(value=='dress'){
     navigate('/Dresses');}
     else if(value=='grocery'){
      navigate('/Grocery');
    }
    else{
      alert('No such product found');
    }
  }


  return (
    <div className='bg-black w-full'>
      <div className="container">
        <div className="box1">
          <img src="Images\img1.jpg" alt="..." />
        </div>

        <div className="box2">
          <div className="child1">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="child2">UPDATE LOCATION</div>
        </div>

        <div className="box3">
          <div className="i1">
            <select
              style={{
                marginTop: '15px',
                marginLeft: '10px',
                backgroundColor: 'grey',
                width: '50px',
                border: 'none'
              }}
            >
              <option>ALL</option>
              <option>Electronics</option>
              <option>Mobiles</option>
              <option>Books</option>
              <option>Amazon Devices</option>
              <option>Amazon Fashion</option>
            </select>
          </div>
          <div className="i2"><input type="text" placeholder='Search Amazon.in' value={value} onChange={handlevalue}/></div>
          <div className="i3" onClick={handlesearch}>
            <i className="fa-solid fa-magnifying-glass "></i>
          </div>
        </div>

        <div className="box4">
          <div className="image">
            <img src="Images/img3.jpg" alt="...." />
          </div>
          <div className="child3">EN</div>
        </div>

        <div className="box5 mt-[10px]">
          <div>Hello, Sign in</div>
          <b style={{ marginLeft: '5px', marginTop: '9px' }}>Account & List</b>
        </div>

        <div className="box6 mt-[10px] ml-[5px] px-[19px]">
          <div>Returns</div>
          <b>& Orders</b>
        </div>

        <div className="box7" onClick={handle}>
          <div className="one">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="two">CART</div>
        </div>
      </div>

      <div className="c2">
        <ul id="list">
          <li><i className="fa-solid fa-list"></i></li>
          <li>ALL</li>
          <li>Fresh</li>
          <li>MX Player</li>
          <li>Sell</li>
          <li>Today's Deals</li>
          <li>Best Sellers</li>
          <li>Mobiles</li>
          <li>Customer Service</li>
          <li>Electronics</li>
          <li>Prime</li>
          <li>New Releases</li>
          <li>Amazon pay</li>
          <li>Home & Kitchen</li>
          <li>Fashion</li>
          <li>Computer</li>
          <li>Books</li>
          <li>Car & Motorbikes</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
