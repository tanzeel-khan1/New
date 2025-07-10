import React from "react";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Form from "./api/Form"
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <img src="new.gif" className="h-36"/>
{/* <Form/> */}
     <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
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
