import { createSlice } from "@reduxjs/toolkit";

const inputs = [
  {
    firstName: "",
    lastName: "",
    password: "",
  },
];

const accountslice = createSlice({
  name: "inputs",
  initialState: {
    inputs,
    isShown: false,
    isOpen: false,
  },
  reducers: {
    setInputs(state, action) {
      const inpu = action.payload;
      state.inputs = state.inputs.map((input) => ({
        ...input,
        ...inpu,
      }));
    },
    isOpendController(state) {
      state.isOpen = !state.isOpen;
    },
    openAccount(state) {
      state.isShown = true;
    },
  },
});

export const Accountsliceactions = accountslice.actions;
export default accountslice;
