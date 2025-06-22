
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from "./apna/nav";
import Second from "./apna/Second";
import Babar from './apna/Babar';
import Third from './apna/Third';
import Shaheen from './apna/Shaheen';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <BrowserRouter>
      {/* Pass cartCount as prop */}
      <Nav cartCount={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Second />
              <Third />
            </>
          }
        />

        <Route
          path="/babar"
          element={<Babar onAddToCart={handleAddToCart} />}
        />

        <Route path="/shaheen" element={<Shaheen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
