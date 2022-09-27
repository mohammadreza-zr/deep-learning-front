import { configureStore } from '@reduxjs/toolkit';

//slice or reducer import
import authReducer from './slice/authSlice';
import loadingSlice from './slice/loadingSlice';
// import datasetReducer from './slice/datasets';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingSlice,
    // datasets: datasetReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
