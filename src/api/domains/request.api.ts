import { apiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const RequestAPI = {
  list: (params?: any) =>
    apiClient.get(ENDPOINTS.requests.base, { params }),

  create: (payload: any) =>
    apiClient.post(ENDPOINTS.requests.create, payload),
};
