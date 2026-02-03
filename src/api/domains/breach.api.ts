import { apiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const breachAPI = {

  // List (if needed later)
  list: (params?: any) =>
    apiClient.get(ENDPOINTS.breach.base, { params }),

  // ✅ FIXED
  detail: (params: {
    page: number;
    limit: number;
    search_keywords?: string;
  }) =>
    apiClient.get(ENDPOINTS.breach.detail, {
      params,
    }),

  // ✅ FIXED
  details: (
    id: number | string,
    params: {
      page: number;
      limit: number;
      search_keywords?: string;
    }
  ) =>
    apiClient.get(ENDPOINTS.breach.details(id), {
      params,
    }),

  // ✅ FIXED
  notice: (params: {
    page: number;
    limit: number;
    search_keywords?: string;
  }) =>
    apiClient.get(ENDPOINTS.breach.notice, {
      params,
    }),

    // # GET Single Breach Notice

  getSingleNotice: (id: number | string) =>
    apiClient.get(`/breach/${id}`),


  templates: () =>
    apiClient.get(ENDPOINTS.breach.templates),

  import: (payload: FormData) =>
    apiClient.post(ENDPOINTS.breach.import, payload, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  export: (params?: any) =>
    apiClient.get(ENDPOINTS.breach.export, {
      params,
      responseType: "blob",
    }),
    
 breachactivityexport: (id: number | string) =>
  apiClient.get(ENDPOINTS.breach.breachactivityexport(id), {
    responseType: "blob",
  }),


  bexport: (params?: any) =>
    apiClient.get(ENDPOINTS.breach.bexport, {
      params,
      responseType: "blob",
    }),

  sample: (params?: any) =>
    apiClient.get(ENDPOINTS.breach.sample, {
      params,
      responseType: "blob",
    }),
};
