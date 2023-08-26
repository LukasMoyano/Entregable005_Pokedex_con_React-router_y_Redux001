import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
  name: "nameTrainer", // Nombre del slice
  initialState: {
    name: "", // Propiedad 'name' dentro del estado inicial
  },
  reducers: {
    setNameTrainer: (state, action) => {
      state.name = action.payload; // Actualiza la propiedad 'name' en el estado con el valor de payload
    },
  },
});

export const { setNameTrainer } = nameTrainerSlice.actions;

export default nameTrainerSlice.reducer;
