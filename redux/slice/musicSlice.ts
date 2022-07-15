import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeMusic } from "../../types/music";

interface musicState {
 list: typeMusic[]
  loading: boolean,
  error: boolean
}

const initialState: musicState = {
  list: [],
  loading: false,
  error: false
}

const musicSlice = createSlice({
  name: "music",
  initialState: initialState,
  reducers: {
    getAll :(state, action: PayloadAction<string>) => {
      state.loading = false
    },
    getAllSuccess :(state,action : PayloadAction<typeMusic[]>) => {
      state.loading = false
      state.list = action.payload
    },
    getAllFailed :(state) => {
      state.loading = false
      state.error = true
    }
  }
})

export const musicActions = musicSlice.actions;
export default musicSlice.reducer