import { apiClient } from '../client';
import { ENDPOINTS } from '../endpoints';

export const DataProtectionRightsAPI = {
       


    create: (payload: any) => apiClient.post(ENDPOINTS.DataProtectionRights.create, payload),
    };