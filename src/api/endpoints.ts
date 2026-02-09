export const ENDPOINTS = {
  // =========================
  // AUTH
  // =========================
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    logout: "/auth/logout", // (if exists later)
    refresh: "/auth/refresh",
    profile: "/auth/profile",

    users: "/auth/users",

    sendOtp: "/auth/reset/send-otp",
    verifyOtp: "/auth/reset/verify-otp",
    resetPassword: "/auth/reset/password",
    changePassword: "/auth/change/password",
  },
    settings: {
    theme: "/settings/theme",
    company: "/settings/company",
    smtp: "/settings/smtp_outgoing",
    linkedin: "/settings/linkedin",
    sms: "/settings/sms_msg91",
    incomingMail: "/settings/imap_incoming",
    digilocker: "/settings/digilocker",
    License: "/license/",
    apisettings: "/settings/api_settings",
    integrationSettings: "/settings/Integration_Settings",
    activitylogs:"/activity/logs"
  },

  request:{
    base: "/request/",
    create: "/request-types/create",
    requesttype:"consent/portal-user-consents",
    detail: "/request/details",
    details: (id: number | string) => `/request/${id}`,
    export: "/request/export",
    import: "/request/import",
  },

  // =========================
  // CONSENT
  // =========================
  consent: {
    base: "/consent/",
    create: "/consent/create",
    detail: (id: number | string) => `/consent/${id}`,
    export: "/consent/export",
    import: "/consent/import",
      sample: (consentType: string) => `/consent/import/sample?consent_type=${consentType}`,
  },

  // =========================
  // PROCESSING ACTIVITIES
  // =========================
  processing: {
    create: "/processing/create",
    detail: (id: number | string) => `/processing/${id}`,
    list: "/processing/activities",
    simple: "/processing/activities/simple",
    nonOrg: "/processing/non-org",
    bulkDelete: "/processing/bulk-delete",
  },


   // =========================
  // BREACH
  // =========================
  breach: {
    base: "/breach",                        
    detail: "/breach/details",        
    templates: "/breach/templates",         
    details: (id: number | string) => `/breach/dashboard?processing_activity_id=${id}`, 

    import: "/breach/import",               
    export: "/breach/export",
    // For Breach Activity Wise Export.
    // breach/details/export?processing_activity_id=22

breachactivityexport: (id: number | string) =>
  `breach/details/export?processing_activity_id=${id}`,

    bexport: "/breach/notices/export",               
    sample: "/breach/sample", 
    notice: "/breach/notices",             
  },


  privacy: {
    base: "/privacy",                        
    detail: "/privacy/dashboard",        
    templates: "/privacy/templates",         
    details: (id: number | string) => `/privacy/dashboard?processing_activity_id=${id}`, 

    import: "/privacy/import",               
    export: "/privacy/export",
    bexport: "/privacy/notices/export",               
    sample: "/privacy/sample", 
    notice: "/privacy/notices",             
  },

  // =========================
  // TEMPLATES
  // =========================
  templates: {
    base: "/templates/",
    create: "/templates/create",
    detail: (id: number | string) => `/templates/${id}`,
    bulkDelete: "/templates/bulk-delete",
  },

  // =========================
  // SMTP
  // =========================
smtp: {
    base: "/smtp/",
    create: "/smtp/create",
    // detail: (id: number | string) => `/smtp/details?tenant_id=${id}`,
    detail: "/smtp/details",
   
  },

  // =========================
  // REQUEST TYPES
  // =========================
  requestTypes: {
    base: "/request-types",
    create: "/request-types/create",
    detail: (id: number | string) => `/request-types/${id}`,
  },

  // =========================
  // REQUESTS
  // =========================
  requests: {
    base: "/request",
    create: "/request/create",
  },

  // =========================
  // MANAGERS (PA MANAGER)
  // =========================
  managers: {
    create: "/managers/create",
    list: "/managers/details",
    detail: (id: number | string) => `/managers/${id}`,
  },

  // =========================
  // USER ROLES
  // =========================
  userRoles: {
    assign: "/usr-roles/assign",
    unassign: "/usr-roles/unassign",
    userRoles: (userId: number | string) => `/usr-roles/user/${userId}`,
  },

  // =========================
  // ROLES
  // =========================
  roles: {
    create: "/roles/create",
    list: "/roles/details",
    detail: (id: number | string) => `/roles/${id}`,
    delete: (id: number | string) => `/roles/delete/${id}`,
  },

  // =========================
  // TENANT
  // =========================
  tenants: {
    create: "/tenants/create",
    list: "/tenants/details",
    detail: (id: number | string) => `/tenants/${id}`,

    licenseCreate: "/tenants/license",
    licenseDetail: (id: number | string) => `/tenants/license/${id}`,
  },

  // =========================
  // COMMON
  // =========================
  common: {
    upload: "/upload",
    dashboard: "/dashboard",
    processingActivitiesSimple: "/processing/activities/simple",
  },
} as const;
