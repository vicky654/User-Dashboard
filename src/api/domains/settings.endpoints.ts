// src/api/endpoints/settings.endpoints.ts

export const SETTINGS_ENDPOINTS = {
  theme: {
    createOrUpdate: '/api/settings/theme',
    get: '/api/settings/theme',
  },

  company: {
    createOrUpdate: '/api/settings/company',
    get: '/api/settings/company',
  },

  smtp: {
    createOrUpdate: '/api/settings/smtp_outgoing',
    get: '/api/settings/smtp_outgoing',
  },

  linkedin: {
    createOrUpdate: '/api/settings/linkedin',
    get: '/api/settings/linkedin',
  },

  sms: {
    createOrUpdate: '/api/settings/sms_msg91',
    get: '/api/settings/sms_msg91',
  },

  incomingMail: {
    createOrUpdate: '/api/settings/imap_incoming',
    get: '/api/settings/imap_incoming',
  },

  digilocker: {
    createOrUpdate: '/api/settings/digilocker',
    get: '/api/settings/digilocker',
  },
  License: {
    get: '/api/settings/license',
    update : '/api/settings/license',
  },

};
