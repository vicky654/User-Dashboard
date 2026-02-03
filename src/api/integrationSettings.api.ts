import { apiClient } from "../api/client";
import { ENDPOINTS } from "./endpoints";


export const IntegrationSettingsAPI = {
    
  getSettings: () =>
    apiClient.get(ENDPOINTS.settings.integrationSettings),

  updateSettings: (payload: any) =>
    apiClient.post(ENDPOINTS.settings.integrationSettings, payload),
};
