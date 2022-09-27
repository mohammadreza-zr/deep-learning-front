import { createSlice } from '@reduxjs/toolkit';

interface Datasets {
  datasets: [] | null;
  error: boolean;
  selectedDataset: object | null;
}

const initialState: Datasets = {
  datasets: null,
  error: false,
  selectedDataset: null,
};

export const datasetsSlice = createSlice({
  name: 'datasets',
  initialState,
  reducers: {
    setDatasets: (state, action) => {
      state.datasets = action.payload;
      state.error = false;
    },
    setSelectedDatasets: (state, action) => {
      state.datasets = action.payload;
      state.error = false;
    },
    setDatasetsErrorTrue: (state) => {
      state.error = true;
    },
  },
});

export const { setDatasets, setDatasetsErrorTrue, setSelectedDatasets } =
  datasetsSlice.actions;

export default datasetsSlice.reducer;
