import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
  name: "nameTrainer", // Puedes mantener este nombre si lo deseas
  initialState: {
    name: "",
  },
  reducers: {
    loginTrainer: (state, action) => { // Cambia el nombre de la acción a loginTrainer
      state.name = action.payload;
    },
  },
});

export const { loginTrainer } = nameTrainerSlice.actions; // Exporta la acción como loginTrainer
export default nameTrainerSlice.reducer;
