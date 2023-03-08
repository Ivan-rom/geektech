import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "getUsers",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      dispatch(preloaderOn());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      dispatch(usersInfo(users));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(preloaderOff());
    }
  }
);

export const getUser = createAsyncThunk(
  "getUser",
  async function (id, { dispatch, rejectWithValue }) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await response.json();

    dispatch(userInfo(user));
  }
);

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    users: [],
    user: {},
    preloader: false,
    modal: false,
  },
  reducers: {
    usersInfo: (state, action) => {
      state.users = action.payload;
    },
    userInfo: (state, action) => {
      state.user = action.payload;
    },
    preloaderOn: (state) => {
      state.preloader = true;
    },
    preloaderOff: (state) => {
      state.preloader = false;
    },
    modalOn: (state) => {
      state.modal = true;
    },
    modalOff: (state) => {
      state.modal = false;
    },
  },
});

const { usersInfo, preloaderOn, preloaderOff, userInfo } = usersSlice.actions;

export const { modalOn, modalOff } = usersSlice.actions;

export default usersSlice.reducer;
