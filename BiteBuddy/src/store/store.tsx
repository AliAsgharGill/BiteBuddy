import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
