import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getConfig } from '../../utils/configAxios';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCartGlobal: (state, action) => action.payload,
  },
});

export const { setCartGlobal } = cartSlice.actions;

export default cartSlice.reducer;

export const getAllCartProducts = () => (dispatch) => {
  const URL = 'http://localhost:8000/api/cart';
  axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setCartGlobal(res.data.cart.Products));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addProductCart = (data) => (dispatch) => {
  const URL = 'http://localhost:8000/api/cart/add-product';
  axios
    .post(URL, data, getConfig())
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteProductCart = (id) => (dispatch) => {
  const URL = `http://localhost:8000/api/cart/remove-product/${id}`;
  axios
    .delete(URL, getConfig())
    .then((res) => {
      dispatch(getAllCartProducts());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const purchaseCart = (data) => (dispatch) => {
  const URL = 'http://localhost:8000/api/purchases';
  axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(setCartGlobal([]));
    })
    .catch((err) => {
      console.log(err);
    });
};
