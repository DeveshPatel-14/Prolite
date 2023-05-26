import { configureStore } from '@reduxjs/toolkit';
import globalReducer from '../state';

const store = configureStore({
  reducer: {
    global: globalReducer,
    // Add more reducers here as needed
  },
});

export default store;
