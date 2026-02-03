import { apiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const ProcessingAPI = {
  // ✅ LIST (supports pagination, search, filters)
  list: (params?: {
    page?: number;
    limit?: number;
    search?: string;
    is_active?: boolean;
  }) =>
    apiClient.get(ENDPOINTS.processing.list, { params }),

  // ✅ SIMPLE LIST (id + name only)
  simple: () =>
    apiClient.get(ENDPOINTS.processing.simple),

  // ✅ NON-ORG ACTIVITIES
  nonOrg: () =>
    apiClient.get(ENDPOINTS.processing.nonOrg),

  // ✅ DETAIL
  detail: (id: number | string) =>
    apiClient.get(ENDPOINTS.processing.detail(id)),

  // ✅ CREATE
  create: (payload: any) =>
    apiClient.post(ENDPOINTS.processing.create, payload),

  // ✅ UPDATE
  update: (id: number | string, payload: any) =>
    apiClient.put(ENDPOINTS.processing.detail(id), payload),

  // ✅ DELETE SINGLE
  remove: (id: number | string) =>
    apiClient.delete(ENDPOINTS.processing.detail(id)),

  // ✅ BULK DELETE
  bulkDelete: (ids: number[]) =>
    apiClient.post(ENDPOINTS.processing.bulkDelete, {
      activity_ids: ids,
    }),
};
