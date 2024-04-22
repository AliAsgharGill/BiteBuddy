import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAunthenticated: boolean;
  user: any;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.isAunthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAunthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
