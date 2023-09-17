import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

export const categorySlice = createSlice({
  name: "categorys",
  initialState,
  reducers: {
    add: (state, action) => {
      state.category.push(action.payload);
    },
    remove: (state, action) => {
      state.category = state.category.filter(
        (item, index) => index !== action.payload
      );
    },
    update: (state, action) => {
      const indexToUpdate = state.category.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexToUpdate !== -1) {
        state.category[indexToUpdate] = action.payload;
      }
    },
  },
});

export const { add, remove, update } = categorySlice.actions;

export default categorySlice.reducer;
