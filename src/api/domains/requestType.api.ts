import { apiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const RequestTypeAPI = {
  list: (params?: any) =>
    apiClient.get(ENDPOINTS.requestTypes.base, { params }),

  detail: (id: number | string) =>
    apiClient.get(ENDPOINTS.requestTypes.detail(id)),

  create: (payload: any) =>
    apiClient.post(ENDPOINTS.requestTypes.create, payload),

  update: (id: number | string, payload: any) =>
    apiClient.put(ENDPOINTS.requestTypes.detail(id), payload),
};
