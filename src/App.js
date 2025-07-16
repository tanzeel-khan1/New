

import { Routes, Route } from 'react-router-dom';
import Navbar from './projuct/Navbar';
import Home from './projuct/pages/Home';
import About from './projuct/pages/About';
import Service from './projuct/pages/Service';
import Signup from './projuct/pages/Signup';
import Login from './projuct/pages/Login';
import Error from './projuct/pages/Error';
import Logout from './projuct/pages/Logout';
import Contact from './projuct/pages/Contact';
import Step1 from './projuct/Products/step1';
import Full1 from './projuct/Products/Full1';

import { CartProvider } from './projuct/context/CartContext';
import { AuthProvider } from './projuct/context/AuthContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/products" element={<Step1 />} /> */}
            <Route path="/view/:id" element={<Full1 />} /> 
            <Route path="*" element={<Error />} />
          </Routes>
          <Step1/>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;




// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from "./apna/nav";
// import Second from "./apna/Second";
// import Babar from './apna/Babar';
// import Third from './apna/Third';
// import Shaheen from './apna/Shaheen';
// import Cart from './apna/Cart';
// import Profile from './apna/Profile';   
// import Four from './apna/Four';
// import Naseem from "./apna/Naseem"
// import Watch from './apna/Watch';
// import Haris from "./apna/Haris"
// import Saim from './apna/Saim';
// import WomenF from './apna/WomenF';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (product) => {
//     setCartItems((prevCartItems) => [...prevCartItems, product]);
//   };

//   return (
//     <BrowserRouter>
//       <Nav cartCount={cartItems.length} />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Second />
//               <Third />
//               <Four/>
//               <Watch/>
//               <WomenF/>
//             </>
//           }
//         />

//         <Route
//           path="/babar"
//           element={<Babar onAddToCart={handleAddToCart} />}
//         />

//         <Route
//           path="/shaheen"
//           element={<Shaheen onAddToCart={handleAddToCart} />}
//         />
//          <Route
//           path="/Naseem"
//           element={<Naseem onAddToCart={handleAddToCart} />}
//         />
//         <Route
//           path="/Haris"
//           element={<Haris onAddToCart={handleAddToCart} />}
//         />
//         <Route
//           path="/Saim"
//           element={<Saim onAddToCart={handleAddToCart} />}
//         />

//         <Route
//           path="/cart"
//           element={<Cart cartItems={cartItems} />}
//         />

//         <Route
//           path="/profile"    
//           element={<Profile />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
