import { apiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const TemplateAPI = {
  list: (params?: any) =>
    apiClient.get(ENDPOINTS.templates.base, { params }),

  detail: (id: number | string) =>
    apiClient.get(ENDPOINTS.templates.detail(id)),

  create: (payload: any) =>
    apiClient.post(ENDPOINTS.templates.create, payload),

  update: (id: number | string, payload: any) =>
    apiClient.put(ENDPOINTS.templates.detail(id), payload),

  remove: (id: number | string) =>
    apiClient.delete(ENDPOINTS.templates.detail(id)),

  bulkDelete: (ids: number[]) =>
    apiClient.post(ENDPOINTS.templates.bulkDelete, {
      template_ids: ids,
    }),
};
export const CommonAPI = {
  processingActivities: () =>
    apiClient.get(ENDPOINTS.common.processingActivitiesSimple),
};
