import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import accountslice from "./features/acountstate/Acountstate";
import searchReducer from "./features/hotel/searchSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    accou: accountslice.reducer,
    search:searchReducer,
  },
});
