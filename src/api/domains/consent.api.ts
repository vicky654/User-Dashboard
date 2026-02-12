import { apiClient } from '../client';
import { ENDPOINTS } from '../endpoints';

export const ConsentAPI = {
    list: (params?: any) => apiClient.get(ENDPOINTS.consent.base, { params }),

    detail: (id: number | string) => apiClient.get(ENDPOINTS.consent.detail(id)),

    create: (payload: any) => apiClient.post(ENDPOINTS.consent.create, payload),

    export: (params: any) => apiClient.get(ENDPOINTS.consent.export, { params }),
    import: (payload: any) => apiClient.post(ENDPOINTS.consent.import, payload),
    sample: (consentType: string, params?: any) =>
        apiClient.get(ENDPOINTS.consent.sample(consentType), {
            params,
            responseType: 'blob', 
        }),


    // User Dashboard API for Consent Management
    userList: (params?: any) => apiClient.get(ENDPOINTS.consent.user.list, { params }),
       Revoke: (payload: any) => apiClient.post(ENDPOINTS.consent.user.revoke, payload),
          consentdetail: (id: number | string) => apiClient.get(ENDPOINTS.consent.user.consentdetail(id)),
              managerights: (params?: any) => apiClient.get(ENDPOINTS.consent.user.managerights, { params }),

        
};
