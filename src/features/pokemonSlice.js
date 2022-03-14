import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {
    pokemonAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    pokemonRemoved: {
      reducer(state, action) {
        state.pop();
      },
    },
  },
});

export const { pokemonAdded } = pokemonSlice.actions;
export const { pokemonRemoved } = pokemonSlice.actions;

export default pokemonSlice.reducer;
