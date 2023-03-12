import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "getUsers",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response.status === 200) {
        const users = await response.json();
        return users;
      } else {
        throw `Error ${response.status}`;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createUser = createAsyncThunk(
  "cerateUser",
  async function (user, { dispatch, rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (response.status === 201) {
      } else {
        throw `Error ${response.status}`;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    users: [],
    error: "",
    loading: false,
    created: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.error = "";
      state.loading = true;
    });
    builder.addCase(createUser.pending, (state, action) => {
      state.error = "";
      state.loading = true;
      state.created = false;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.created = true;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
