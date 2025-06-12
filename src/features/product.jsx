import { createSlice } from '@reduxjs/toolkit';


const product = createSlice({
  name: 'products',
  initialState: {
    items: []
  },
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload, "action.payload")
      state.items.push(action.payload);

    }
  }
});

export const { addProduct } = product.actions;
export default product.reducer;
