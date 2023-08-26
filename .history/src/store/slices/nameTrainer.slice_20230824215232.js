import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
  initialState: "",
  name: "nameTrainer",
  reducers: {
    setNameTrainer: (state, action) => {
      const newName = action.payload;
      state.name = newName;
    },
  },
});

export const { setNameTrainer } = nameTrainerSlice.actions;

export default nameTrainerSlice.reducer;
