import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProductsGlobal: (state, action) => action.payload,
  },
});

export const { setProductsGlobal } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProducts = () => (dispatch) => {
  const URL = 'http://localhost:8000/api/products';
  axios
    .get(URL)
    .then((res) => {
      dispatch(setProductsGlobal(res.data.products));
    })
    .catch((err) => {
      console.log(err);
    });
};
