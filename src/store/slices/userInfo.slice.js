import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const defaultValues = {
  token: '',
  user: {},
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: JSON.parse(localStorage.getItem('userInfo')) ?? defaultValues,
  reducers: {
    setUserInfoGlobal: (state, action) => action.payload,
  },
});

export const { setUserInfoGlobal } = userInfoSlice.actions;

export default userInfoSlice.reducer;

export const loginUserThunk = (data) => (dispatch) => {
  const URL = 'http://localhost:8000/api/auth/login';
  axios
    .post(URL, data)
    .then((res) => {
      dispatch(setUserInfoGlobal(res.data));
      localStorage.setItem('userInfo', JSON.stringify(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logOutUserThunk = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch(setUserInfoGlobal(defaultValues));
};
