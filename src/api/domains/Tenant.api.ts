import { apiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const TenantAPI = {
  // =========================
  // TENANT CRUD
  // =========================
  list: (params?: any) =>
    apiClient.get(ENDPOINTS.tenants.list, { params }),

  detail: (id: number | string) =>
    apiClient.get(ENDPOINTS.tenants.detail(id)),

  create: (payload: any) =>
    apiClient.post(ENDPOINTS.tenants.create, payload),

  update: (id: number | string, payload: any) =>
    apiClient.put(ENDPOINTS.tenants.detail(id), payload),

  remove: (id: number | string) =>
    apiClient.delete(ENDPOINTS.tenants.detail(id)),

  // =========================
  // TENANT LICENSE
  // =========================
  createLicense: (payload: any) =>
    apiClient.post(ENDPOINTS.tenants.licenseCreate, payload),

  getLicense: (tenantId: number | string) =>
    apiClient.get(ENDPOINTS.tenants.licenseDetail(tenantId)),


};
