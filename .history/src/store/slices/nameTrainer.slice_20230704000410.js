import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
    initialState:2,
    name: "nameTrainer",
    reducers: {
        setNameTrainer: (state, action) => {
            return action.payload
        }
    }
})

export const { setNameTrainer } = nameTrainerSlice.actions

export default nameTrainerSlice.reducer