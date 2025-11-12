import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import ListingIcon from '../DPDPIcons/ListingIcon';
import ConsentManagerIcon from '../DPDPIcons/ConsentManagerIcon';
import BreachNoticeIcon from '../DPDPIcons/BreachNoticeIcon';
import PrivacyNoticeIcon from '../DPDPIcons/PrivacyNoticeIcon';
import ReportingIcon from '../DPDPIcons/ReportingIcon';
import ConsentIcon from '../DPDPIcons/ConsentIcon';

export interface SidebarItem {
  name: string; 
  icon?: string | ReactNode;
  path?: string;
  children?: SidebarItem[];
}

// ✅ this function returns translated items
export const useSidebarItems = (): SidebarItem[] => {
  const { t } = useTranslation();

  return [
    {
      name: "privacyGovernance",
      path: '/privacy-governance',
      icon: '/assets/icon/ConsentManager.png',
      children: [
        { name: "privacyGovernance", path: '/privacy-governance' },
        { name: "processingActivity", path: '/processingActivity' },
        { name: "createProcessingActivity", path: '/create-ManageProcessingActivity' },
        { name: "internalStakeholders", path: '/internal-stakeholders' },
        { name: "manageLanguages", path: '/manage-languages' },
        {
          name: "consent",
          path: '/consent',
          children: [
            { name: "viewConsent", path: '/consent/view' },
            { name: "editConsent", path: '/consent/edit' },
          ],
        },
        {
          name: "templates",
          path: '/templates',
          children: [{ name: "viewTemplates", path: '/templates/view' }],
        },
      ],
    },
    {
      name: "roleAssign",
      path: '/roles-listing',
      icon: '/assets/icon/ConsentManager.png',
      children: [
        { name: "roleListing", path: '/roles-listing' },
        { name: "addRoles", path: '/roles-and-permissions' },
      ],
    },
        {
      name: "tenants",
      path: '/tenants',
      icon: '/assets/icon/ConsentManager.png',
      children: [
        { name: "tenants", path: '/tenants' },
      ],
    },
    {
      name: "consentManager",
      path: '/consent-manager',
      icon: '/assets/icon/ConsentManager.png',
      children: [
        { name: "consentManagerDashboard", path: '/consent-manager-dashboard', icon: <ConsentManagerIcon width={18} height={18} /> },
        { name: "consentManagerTemplates", path: '/consent-manager-template', icon: <ConsentManagerIcon width={18} height={18} /> },
        { name: "allConsentRequests", path: '/all-consent-requests', icon: <ConsentManagerIcon width={18} height={18} /> },
        {
          name: "cookieConsentDashboard",
          path: '/cookie-consent-dashboard',
          icon: '/assets/icon/DataSources.png',
          children: [
            { name: "cookieConsentDashboard", path: '/cookie-consent-dashboard' },
            { name: "cookieConsentView", path: '/cookie-consent-view' },
            { name: "cookieManagement", path: '/cookie-management' },
          ],
        },
        {
          name: "breachNotice",
          path: '/breach-notice',
          icon: '/assets/icon/DataSources.png',
          children: [
            { name: "breachNotice", path: '/breach-notice' },
            { name: "breachNoticeTable", path: '/breach-notice-table' },
            { name: "allBreachNotice", path: '/breach-notice-list' },
          ],
        },
        {
          name: "privacyNotice",
          path: '/privacy-notice',
          icon: '/assets/icon/DataSources.png',
          children: [
            { name: "privacyNotice", path: '/privacy-notice', icon: <PrivacyNoticeIcon width={18} height={18} /> },
            { name: "privacyNoticeTable", path: '/privacy-notice-table', icon: <PrivacyNoticeIcon width={18} height={18} /> },
            { name: "allPrivacyNotice", path: '/privacy-notice-list', icon: <PrivacyNoticeIcon width={18} height={18} /> },
          ],
        },
        { name: "consentTemplates", path: '/consent-manager/sub4', icon: <ConsentIcon width={18} height={18} /> },
        { name: "reporting", path: '/data-principal-activity', icon: <ReportingIcon width={18} height={18} /> },
      ],
    },
    {
      name: "grievanceRedressal",
      path: '/grievance-redressal',
      icon: '/assets/icon/GrievanceRedressal.png',
      children: [
        { name: "dashboard", path: '/grievance-redressal/sub1' },
        { name: "openRequest", path: '/grievance-redressal/sub2' },
        { name: "requestType", path: '/grievance-redressal/sub3' },
      ],
    },
       {
      name: "Tools&Automation",
      path: '/ToolsAutomation',
      icon: '/assets/icon/GrievanceRedressal.png',
      children: [
        { name: "ToolsAutomation", path: '/ToolsAutomation' },
    
      ],
    },
    {
      name: "impactAssessment",
      path: '/impact-assessment',
      icon: '/assets/icon/ImpactAssessment.png',
      children: [
        { name: "assessments", path: '/impact-assessment/sub1' },
        { name: "questionnaire", path: '/impact-assessment/sub2' },
        { name: "category", path: '/impact-assessment/sub3' },
      ],
    },
    {
      name: "awarenessProgram",
      path: '/awareness-program',
      icon: '/assets/icon/AwarenessProgram.png',
      children: [
        { name: "dashboard", path: '/awareness-program/sub1' },
        { name: "awarenessTraining", path: '/awareness-program/sub2' },
        { name: "subCat3", path: '/awareness-program/sub3' },
        { name: "certificateSetting", path: '/awareness-program/sub4' },
      ],
    },
    {
      name: "settings",
      path: '/Settings',
      icon: '/assets/icon/DataSources.png',
      children: [
        { name: "allSettings", path: '/all-Settings' },
        { name: "companyBranding", path: '/Settings' },
        { name: "mailSettings", path: '/Settings' },
        { name: "smsSettings", path: '/Settings' },
        { name: "apiSettings", path: '/Settings' },
        { name: "linkedinSettings", path: '/Settings' },
      ],
    },
    {
      name: "thirdParty",
      path: '/third-party-assessment',
      icon: '/assets/icon/ThirdPartyAssessment.png',
      children: [
        { name: "dashboard", path: '/third-party-assessment/sub1' },
        { name: "questionnaire", path: '/third-party-assessment/sub2' },
        { name: "category", path: '/third-party-assessment/sub3' },
      ],
    },
    {
      name: "cookieConsent",
      path: '/cookie-consent',
      icon: '/assets/icon/CookieConsent.png',
      children: [
        { name: "cookieScanner", path: '/cookie-consent/sub1' },
        { name: "dashboard", path: '/cookie-consent/sub2' },
      ],
    },
    {
      name: "mappingTool",
      path: '/data-sources',
      icon: '/assets/icon/DataSources.png',
      children: [
        { name: "dataSourceTypes", path: '/data-sources/sub1' },
        { name: "dataSource", path: '/data-sources/sub2' },
        { name: "dataImportWizard", path: '/data-sources/sub4' },
      ],
    },
  ];
};
