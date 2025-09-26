// src/store/index.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import headerReducer from './headerSlice';

const rootReducer = combineReducers({
  themeConfig: themeConfigSlice,
  header: headerReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store; // ✅ default export
export type IRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
