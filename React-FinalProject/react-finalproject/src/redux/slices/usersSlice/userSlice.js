import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    getUser: (state, action) => {
      state.useer = action.payload;
    },
  },
});

export const {getAllUsers, getUser} = userSlice.actions;

export default userSlice.reducer;