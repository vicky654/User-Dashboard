import ApiSettings from "@components/Settings/ApiSettings";
import { apiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const SettingsAPI = {
  // =========================
  // THEME
  // =========================
  getTheme: () =>
    apiClient.get(ENDPOINTS.settings.theme),

  saveTheme: (payload: any) =>
    apiClient.post(ENDPOINTS.settings.theme, payload),

  // =========================
  // COMPANY
  // =========================
  getCompany: () =>
    apiClient.get(ENDPOINTS.settings.company),

  saveCompany: (payload: any) =>
    apiClient.post(ENDPOINTS.settings.company, payload),

  // =========================
  // SMTP (Outgoing)
  // =========================
  getSMTP: () =>
    apiClient.get(ENDPOINTS.settings.smtp),

  saveSMTP: (payload: any) =>
    apiClient.post(ENDPOINTS.settings.smtp, payload),

  // =========================
  // LINKEDIN
  // =========================
  getLinkedIn: () =>
    apiClient.get(ENDPOINTS.settings.linkedin),

  saveLinkedIn: (payload: any) =>
    apiClient.post(ENDPOINTS.settings.linkedin, payload),

  // =========================
  // SMS (MSG91)
  // =========================
  getSMS: () =>
    apiClient.get(ENDPOINTS.settings.sms),

  saveSMS: (payload: any) =>
    apiClient.post(ENDPOINTS.settings.sms, payload),

  // =========================
  // INCOMING MAIL (IMAP)
  // =========================
  getIncomingMail: () =>
    apiClient.get(ENDPOINTS.settings.incomingMail),

  saveIncomingMail: (payload: any) =>
    apiClient.post(ENDPOINTS.settings.incomingMail, payload),

  // =========================
  // DIGILOCKER
  // =========================
  getDigilocker: () =>
    apiClient.get(ENDPOINTS.settings.digilocker),

  saveDigilocker: (payload: any) =>
    apiClient.post(ENDPOINTS.settings.digilocker, payload),


 getLicense: (id?: number | string) =>
  apiClient.get(ENDPOINTS.settings.License, {
    params: id ? { id } : {},
  }),


    updateLicense: (payload: any) =>
      apiClient.post(ENDPOINTS.settings.License, payload),

 getToolAutomation: (modules: string[]) =>
  apiClient.get("/settings/tool_automation", {
    params: {
      modules,
    },
    paramsSerializer: {
      indexes: null, // 🔥 removes [] brackets
    },
  }),

 updateToolAutomation: (payload: any) =>
    apiClient.post("/settings/tool_automation", payload),
 

  getApiSettings: (id?: number | string) =>
  apiClient.get(ENDPOINTS.settings.apisettings  , {
    params: id ? { id } : {},
  }),

  //activitylogs
getActivityLogs: () =>
  apiClient.get("/activity/logs"),

getActivityLogById: (id: number | string) =>
  apiClient.get(`/activity/logs/${id}`),

  
};
