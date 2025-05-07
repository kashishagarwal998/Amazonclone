import React, { createContext, use, useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import Crousel from './Components/Crousel';
import CardSection from './Components/CardSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import SearchPage from './Components/SearchPage';


export const AppContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({name: "Kashish", 
      username: "Kashish",
      id: "12345",
    })
  }, []);
  return (
    <BrowserRouter>
      <AppContext.Provider value={{user,setUser}}>
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
          <Route
            path="/cart"
            element={
              <>
                <NavBar />
                <Crousel />
                <Cart />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <NavBar />
                <SearchPage />
              </>
            }
          />
          <Route
            path="*"
            element={<h1 className="text-3xl text-center">404 Not Found</h1>}
          />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
