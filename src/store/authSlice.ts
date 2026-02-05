import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  Privacy_templates: any;
  accessToken: string | null;
  refreshToken: string | null;
  user: any | null;
  Default_permissions: any;
  processing_activities: any[];
  templates: any[];
    Breach_templates: any[];
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  Default_permissions: {},
  processing_activities: [],
  templates: [],
  Breach_templates:[],
  isAuthenticated: false,
  Privacy_templates: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    loginSuccess: (state, action: PayloadAction<any>) => {
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },

    // ✅ Update everything from admin api
    setAuthMetaData: (state, action: PayloadAction<any>) => {

      const payload = action.payload;

      if (payload.Default_permissions) {
        state.Default_permissions = payload.Default_permissions;
      }

      if (payload.processing_activities) {
        state.processing_activities = payload.processing_activities;
      }
           if (payload.processing_activities) {
        state.processing_activities = payload.processing_activities;
      }

      if (payload.user) {
        state.user = payload.user;
      }
    },

    // ✅ Partial updates
    updatePermissions: (state, action: PayloadAction<any>) => {
      state.Default_permissions = action.payload;
    },

    updateProcessingActivities: (state, action: PayloadAction<any[]>) => {
      state.processing_activities = action.payload;
    },
     updateTemplates: (state, action: PayloadAction<any[]>) => {
      state.templates = action.payload;
    },
      updateBreach_templates: (state, action: PayloadAction<any[]>) => {
      state.Breach_templates = action.payload;
    },

    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      state.Default_permissions = {};
      state.processing_activities = [];
      state.templates = [];
      state.Breach_templates= [];
      state.isAuthenticated = false;
    },
  },
});

export const {
  loginSuccess,
  setAuthMetaData,
  updatePermissions,
  updateProcessingActivities,
  updateTemplates,
  updateBreach_templates,
  logout
} = authSlice.actions;

export default authSlice.reducer;
