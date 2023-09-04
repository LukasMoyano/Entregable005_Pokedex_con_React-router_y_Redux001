import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
  name: "nameTrainer", 
    name: "", 
  },
  reducers: {
    setNameTrainer: (state, action) => {
      state.name = action.payload; 
    },
  },
);

export const { setNameTrainer } = nameTrainerSlice.actions;

export default nameTrainerSlice.reducer;
