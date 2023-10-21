import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './appInitialState';
import { handleFulfilled, handlePending, handleRejected } from './helpers';

const appSlice = createSlice({
  name: 'app',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const reducerApp = appSlice.reducer;
