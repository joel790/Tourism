import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    destination: '',
    dates: [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
    ],
    options: {
      adult: 1,
      children: 0,
      room: 1,
    },
  },
  reducers: {
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setDates: (state, action) => {
      state.dates = action.payload;
    },
    setOptions: (state, action) => {
      state.options = action.payload;
    },
  },
});

export const { setDestination, setDates, setOptions } = searchSlice.actions;
export default searchSlice.reducer;
