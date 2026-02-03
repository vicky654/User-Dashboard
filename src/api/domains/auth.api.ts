import { apiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const AuthAPI = {
  register: (payload: any) =>
    apiClient.post(ENDPOINTS.auth.register, payload),

  login: (payload: any) =>
    apiClient.post(ENDPOINTS.auth.login, payload),

  refresh: () =>
    apiClient.post(ENDPOINTS.auth.refresh),

  profile: () =>
    apiClient.get(ENDPOINTS.auth.profile),

  users: () =>
    apiClient.get(ENDPOINTS.auth.users),

  sendOtp: (payload: any) =>
    apiClient.post(ENDPOINTS.auth.sendOtp, payload),

  verifyOtp: (payload: any) =>
    apiClient.post(ENDPOINTS.auth.verifyOtp, payload),

  resetPassword: (payload: any) =>
    apiClient.post(ENDPOINTS.auth.resetPassword, payload),

  changePassword: (payload: any) =>
    apiClient.post(ENDPOINTS.auth.changePassword, payload),
};
