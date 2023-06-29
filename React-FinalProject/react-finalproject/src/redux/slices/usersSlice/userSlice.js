import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
  user: {},
  error: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setErrorUsers: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const {setAllUsers, setUser, setErrorUsers} = userSlice.actions;

export default userSlice.reducer;