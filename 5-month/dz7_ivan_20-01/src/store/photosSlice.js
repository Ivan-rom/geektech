import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
  "getPhotos",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      dispatch(preloaderOn());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const photos = await response.json();
      dispatch(setPhotos(photos));
    } catch (error) {
    } finally {
      dispatch(preloaderOff());
    }
  }
);

const photosSlice = createSlice({
  name: "photosSlice",
  initialState: {
    photos: [],
    preloader: false,
  },
  reducers: {
    setPhotos: function (state, action) {
      state.photos = action.payload;
    },
    preloaderOn: function (state) {
      state.preloader = true;
    },
    preloaderOff: function (state) {
      state.preloader = false;
    },
  },
});

const { setPhotos, preloaderOn, preloaderOff } = photosSlice.actions;

export default photosSlice.reducer;
