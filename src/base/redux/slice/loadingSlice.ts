import { createSlice } from '@reduxjs/toolkit';

interface Loading {
  status: boolean;
}

const initialState: Loading = {
  status: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
