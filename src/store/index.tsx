import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import headerReducer from './headerSlice';
import authReducer from './authSlice'; // ✅ ADD THIS

const rootReducer = combineReducers({
  themeConfig: themeConfigSlice,
  header: headerReducer,
  auth: authReducer, // ✅ ADD THIS
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type IRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
