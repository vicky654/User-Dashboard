import { apiClient } from '../client';
import { ENDPOINTS } from '../endpoints';

export const NomineeAPI = {


    create: (payload: any) => apiClient.post(ENDPOINTS.Nominee.create, payload),
    request: (payload: any) => apiClient.post(ENDPOINTS.Nominee.request, payload),
    nomineerelations: (params?: any) => apiClient.get(ENDPOINTS.Nominee.nomineerelations, { params }),
    sendotp: (payload: any) => apiClient.post(ENDPOINTS.Nominee.sendOtp, payload),
    
}