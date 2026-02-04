import { apiClient } from './client';
import { ENDPOINTS } from './endpoints';

export const requestAPI = {
    list: (params?: any) => apiClient.get(ENDPOINTS.request.base, { params }),

    create: (payload: any) => apiClient.post(ENDPOINTS.request.create, payload),

    detail: () =>
        apiClient.get(ENDPOINTS.request.detail, {
        }),

     requestType: () => apiClient.get(ENDPOINTS.request.requesttype),   

    details: (id: number | string ) =>
        apiClient.get(ENDPOINTS.request.details(id), {
           
        }),

    notice: () =>
        apiClient.get(ENDPOINTS.privacy.notice, {
        }),

    getSingleNotice: (id: number | string) => apiClient.get(`/privacy/${id}`),

    templates: () => apiClient.get(ENDPOINTS.privacy.templates),
};
