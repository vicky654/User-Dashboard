import { apiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const privacyAPI = {
  
  list: (params?: any) =>
    apiClient.get(ENDPOINTS.privacy.base, { params }),


   detail: (params: {
    page: number;
    limit: number;
    search_keywords?: string;
  }) =>
    apiClient.get(ENDPOINTS.privacy.detail, {
      params,
    }),

  details: (id: number | string, p0: { page: number; limit: number; search_keywords: string | undefined; }) =>
    apiClient.get(ENDPOINTS.privacy.details(id)),

 notice: (params: {
    page: number;
    limit: number;
    search_keywords?: string;
  }) =>
    apiClient.get(ENDPOINTS.privacy.notice, {
      params,
    }),


  templates: () =>
    apiClient.get(ENDPOINTS.privacy.templates),


  import: (payload: FormData) =>
    apiClient.post(ENDPOINTS.privacy.import, payload, {
      headers: { "Content-Type": "multipart/form-data" },
    }),


  export: (params?: any) =>
    apiClient.get(ENDPOINTS.breach.export, {
      params,
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
