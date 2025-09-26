// store/headerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  selectedOption: string;
}

const initialState: HeaderState = {
  selectedOption: 'option1',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setSelectedOption(state, action: PayloadAction<string>) {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSelectedOption } = headerSlice.actions;
export default headerSlice.reducer;
