import React from 'react';
import NavBar from './Components/NavBar';
import Crousel from './Components/Crousel';
import CardSection from './Components/CardSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import SearchPage from './Components/SearchPage';
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
         <Route path='/search' element={<><NavBar/>
         <Crousel/>
         <SearchPage/></>} />

        <Route path="*" element={<h1 className="text-3xl text-center">404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
