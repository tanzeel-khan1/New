// import Practice from "./api/Practice"
import Practice1 from "./api/Practice1"

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addProduct } from './features/product'; 

// import BedRoom from "./figma/BedRoom"
// import Browsetherange from "./figma/Browsetherange"
// import FurniroFurniture from "./figma/FurniroFurniture"
// import Nav from "./figma/Nav"
// import OurProduct from "./figma/OurProduct"

// function App() {
//   const [title, setTitle] = useState('');
//   const dispatch = useDispatch();

//   const products = useSelector((state) => state.products.items);

//   const handleAdd = () => {
//     if (!title.trim()) return;
//     dispatch(addProduct({ id: Date.now(), title }));
//     setTitle('');
//   };

//   console.log(products,"products")
//   return (
//     <div>
//       <h2>Redux Products</h2>
//       <input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Enter product name"
//       />
//       <button onClick={handleAdd}>Add Product</button>

//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>{product.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// // App.js
function App(){
  return(
    <>
{/* <Nav/>
<Browsetherange/>
<OurProduct/>
<BedRoom/>
<FurniroFurniture/> */}
<Practice1/>

    </>
  )
}
export default App