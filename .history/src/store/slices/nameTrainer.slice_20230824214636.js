import { createSlice } from "@reduxjs/toolkit";


const nameTrainerSlice = createSlice({
    initialState:"",
    name: "nameTrainer",
    reducers: {
        setNameTrainer: (state, action) => {
            return action.payload
        }
    }
})

export const { setNameTrainer } = nameTrainerSlice.actions

export default nameTrainerSlice.reducer