import React from 'react';
import NavBar from './Components/NavBar';
import Crousel from './Components/Crousel';
import CardSection from './Components/CardSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Dresses from './Components/Dresses';
import Grocery from './Components/Grocery';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Crousel />
              <CardSection />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Dresses" element={<>  <NavBar />
              <Crousel />
              <Dresses /></>} />
              <Route path="/Grocery" element={<>  <NavBar />
              <Crousel />
              <Grocery /></>} />
        <Route path="*" element={<h1 className="text-3xl text-center">404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
