import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "remoteApp/RemoteCounterSlice";

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
  },
});
