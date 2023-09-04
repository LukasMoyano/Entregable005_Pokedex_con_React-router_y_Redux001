import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
  name: "nameTrainer",
  initialState: {
    name: "", // You should define your initial state here.
  },
  reducers: {
    setNameTrainer: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setNameTrainer } = nameTrainerSlice.actions;

export default nameTrainerSlice.reducer;
