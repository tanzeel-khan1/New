// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../features/product';

// const store = configureStore({
//   reducer: {
//     products: productReducer,

// console.log(store.getState());

//   },
// });

// export default store;
// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product';

const store = configureStore({
  reducer: {
    products: productReducer
    
  }
});

// ✅ Yahan likhna hai, configureStore ke baad
console.log('Redux Store:', store.getState());

export default store;

