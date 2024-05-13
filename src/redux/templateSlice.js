// templateSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  template: '',
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    updateTemplate(state, action) {
      state.template = action.payload;
    },
  },
});

export const { updateTemplate } = templateSlice.actions;

export default templateSlice.reducer;
