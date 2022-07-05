import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    activeUser: {},
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      if (action.payload) return (state.loading = true);
      return (state.loading = false);
    },
    fetchUser: () => {},
    setUser: (state, action) => {
      state.activeUser = action.payload;
    },
  },
});

export const { fetchUser, setUser, setLoading } = user.actions;

export default user.reducer;
