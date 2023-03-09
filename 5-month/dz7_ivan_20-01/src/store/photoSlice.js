import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhoto = createAsyncThunk(
  "getPhotos",
  async function (id, { dispatch, rejectWithValue }) {
    try {
      dispatch(preloaderOn());
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      const photo = await response.json();
      dispatch(setPhoto(photo));
    } catch (error) {
    } finally {
      dispatch(preloaderOff());
    }
  }
);

const photoSlice = createSlice({
  name: "photosSlice",
  initialState: {
    photo: {},
    preloader: false,
  },
  reducers: {
    setPhoto: function (state, action) {
      state.photo = action.payload;
    },
    preloaderOn: function (state) {
      state.preloader = true;
    },
    preloaderOff: function (state) {
      state.preloader = false;
    },
  },
});

const { setPhoto, preloaderOn, preloaderOff } = photoSlice.actions;

export default photoSlice.reducer;
