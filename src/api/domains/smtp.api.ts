
import { apiClient } from "../client";
import { ENDPOINTS } from "../endpoints";

export const SMTPAPI = {
  list: () =>
    apiClient.get(ENDPOINTS.smtp.base),

  getdetail: () =>
  apiClient.get(ENDPOINTS.smtp.detail),
  
  // getdetail: (id: number | string) =>
  //   apiClient.get(ENDPOINTS.smtp.detail(id)),

  create: (payload: any) =>
    apiClient.post(ENDPOINTS.smtp.create, payload),


 

  // remove: (id: number | string) =>
  //   apiClient.delete(ENDPOINTS.smtp.detail(id)),
};
