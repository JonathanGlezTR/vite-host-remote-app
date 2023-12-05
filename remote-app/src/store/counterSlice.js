import { createSlice, bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const counterInitialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const useCounterActions = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ ...counterSlice.actions }, dispatch);

  return actions;
};
