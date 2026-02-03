import { apiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const RoleAPI = {
  // =========================
  // ROLE CRUD
  // =========================

  /**
   * Get all roles
   * Supports pagination, search, filters
   */
  list: (params?: {
    page?: number;
    limit?: number;
    search?: string;
    tenant_id?: number | string;
    active?: boolean;
  }) =>
    apiClient.get(ENDPOINTS.roles.list, { params }),

  /**
   * Get role details by ID
   */
  detail: (id: number | string) =>
    apiClient.get(ENDPOINTS.roles.detail(id)),

  /**
   * Create new role
   */
  create: (payload: {
  name: string;
  description?: string;
  tenant_id: string | number;
  permissions: Record<string, string[]>;
  active?: boolean;
  is_system?: boolean;
  }) =>
    apiClient.post(ENDPOINTS.roles.create, payload),

  /**
   * Update role
   */
  update: (
    id: number | string,
    payload: {
      name?: string;
      tenant_id?: number | string;
      permissions: Record<string, string[]>;
      description?: string;
      active?: boolean;
    }
  ) =>
    apiClient.put(ENDPOINTS.roles.detail(id), payload),

  /**
   * Delete role
   */
  remove: (id: number | string) =>
    apiClient.post(ENDPOINTS.roles.delete(id)),
};
