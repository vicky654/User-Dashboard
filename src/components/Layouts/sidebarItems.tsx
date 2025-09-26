import { ReactNode } from 'react';
import ListingIcon from '../DPDPIcons/ListingIcon';
import ConsentManagerIcon from '../DPDPIcons/ConsentManagerIcon';
import BreachNoticeIcon from '../DPDPIcons/BreachNoticeIcon';
import PrivacyNoticeIcon from '../DPDPIcons/PrivacyNoticeIcon';
import ReportingIcon from '../DPDPIcons/ReportingIcon';
import ConsentIcon from '../DPDPIcons/ConsentIcon';


// CompanySettingsForm.tsx

// SMTPSettingsForm.tsx

// SMTPSettingsForm.tsx


export interface SidebarItem {
    name: string;
    icon?: string | ReactNode;
    path?: string;
    children?: SidebarItem[];
}

export const SidebarItems: SidebarItem[] = [
    {
        name: 'Privacy Governance',
        path: '/privacy-governance',
        icon: '/assets/icon/ConsentManager.png',
        children: [
            {
                name: "Privacy Governance",
                path: '/privacy-governance',

            }, {
                name: " Processing Activity",
                path: '/processingActivity',

            },
            {
                name: "  Internal Stakeholders",
                path: '/internal-stakeholders',

            },
            {
                name: " Manage Languages",
                path: '/manage-languages',

            },

            // {
            //     name: "Roles and Permissions",
            //     path: '/roles-and-permissions',

            // }, {
            //     name: "Role Assign",
            //     path: '/roles-listing',

            // },
            {
                name: "Consent",
                path: "/consent",
                children: [
                    { name: "View Consent", path: "/consent/view" },
                    { name: "Edit Consent", path: "/consent/edit" },
                ],
            },
            {
                name: "Templates",
                path: "/templates",
                children: [{ name: "View Templates", path: "/templates/view" }],
            },
        ],
    },
    {
        name: 'Role Assign',
        path: '/roles-listing',
        icon: '/assets/icon/ConsentManager.png',
        children: [


            {
                name: "Role Listing",
                path: '/roles-listing',

            },
            {
                name: "Add Roles ",
                path: '/roles-and-permissions',

            },

        ],
    },
    
    {
        name: 'Consent Manager',
        path: '/consent-manager',
        icon: '/assets/icon/ConsentManager.png',
        children: [
            {
                name: 'Consent Manager-Dashboard',    
                path: '/consent-manager-dashboard',
                icon: <ConsentManagerIcon width={18} height={18} />,
          
            },
               {
                name: 'Consent Manager Templates',    
                path: '/consent-manager-template',
                icon: <ConsentManagerIcon width={18} height={18} />,
          
            },
    {
                name: 'AllConsentRequest',    
                path: '/all-consent-requests',
                icon: <ConsentManagerIcon width={18} height={18} />,
          
            },


                       {
        name: 'Cookie Consent Dashboard',
        path: '/cookie-consent-dashboard',
        icon: '/assets/icon/DataSources.png',
        children: [
            { name: 'Cookie Consent Dashboard', path: '/cookie-consent-dashboard' },
            { name: 'Cookie Consent View', path: '/cookie-consent-view' },
            { name: 'Cookie Management', path: '/cookie-management' },

        ],

    },
              {
        name: 'Breach Notice',
        path: '/breach-notice',
        icon: '/assets/icon/DataSources.png',
        children: [
            { name: 'Breach Notice', path: '/breach-notice' },
            { name: 'Breach Notice Table', path: '/breach-notice-table' },
            { name: 'All Breach Notice', path: '/breach-notice-list' },

        ],

    },
              {
        name: 'Privacy Notice',
        path: '/privacy-notice',
        icon: '/assets/icon/DataSources.png',
        children: [
           { name: 'Privacy Notice', path: '/privacy-notice', icon: <PrivacyNoticeIcon width={18} height={18} /> },
            { name: 'Privacy Notice Table', path: '/privacy-notice-table', icon: <PrivacyNoticeIcon width={18} height={18} /> },
             { name: 'All Privacy Notice', path: '/privacy-notice-list', icon: <PrivacyNoticeIcon width={18} height={18} /> },
            

        ],

    },
          
         
            { name: 'Consent Templates', path: '/consent-manager/sub4', icon: <ConsentIcon width={18} height={18} /> },
            { name: 'Reporting', path: '/data-principal-activity', icon: <ReportingIcon width={18} height={18} /> },

        ],
    },
    {
        name: 'Grievance Redressal',
        path: '/grievance-redressal',
        icon: '/assets/icon/GrievanceRedressal.png',
        children: [
            { name: 'Dashboard', path: '/grievance-redressal/sub1' },
            { name: 'Open Request', path: '/grievance-redressal/sub2' },
            { name: 'Request Type', path: '/grievance-redressal/sub3' },
        ],
    },
    {
        name: 'Impact Assessment',
        path: '/impact-assessment',
        icon: '/assets/icon/ImpactAssessment.png',
        children: [
            { name: 'Assesments', path: '/impact-assessment/sub1' },
            { name: 'Questionnarie', path: '/impact-assessment/sub2' },
            { name: 'Catefory', path: '/impact-assessment/sub3' },
        ],
    },
    {
        name: 'Awareness Program',
        path: '/awareness-program',
        icon: '/assets/icon/AwarenessProgram.png',
        children: [
            { name: 'Dashboard', path: '/awareness-program/sub1' },
            { name: 'Awareness Training', path: '/awareness-program/sub2' },
            { name: 'Sub Cat 3', path: '/awareness-program/sub3' },
            { name: 'Certificate Setting', path: '/awareness-program/sub4' },
        ],
    },
    {
        name: 'Settings',
        path: '/Settings',
        icon: '/assets/icon/DataSources.png',
        children: [
            { name: 'Company & Branding Settings', path: '/Settings' },
            { name: 'Mail Settings', path: '/Settings' },
            { name: 'SMS Settings', path: '/Settings' },
            { name: 'API Settings', path: '/Settings' },
            { name: 'Linkedin Settings', path: '/Settings' },
        ],

    },
    {
        name: 'Third Party',
        path: '/third-party-assessment',
        icon: '/assets/icon/ThirdPartyAssessment.png',
        children: [
            { name: 'Dashboard', path: '/third-party-assessment/sub1' },
            { name: 'Questionnaire', path: '/third-party-assessment/sub2' },
            { name: 'Category', path: '/third-party-assessment/sub3' },
        ],
    },
    {
        name: 'Cookie Consent',
        path: '/cookie-consent',
        icon: '/assets/icon/CookieConsent.png',
        children: [
            { name: 'Cookie Scanner', path: '/cookie-consent/sub1' },
            { name: 'Dashboard', path: '/cookie-consent/sub2' },
        ],
    },
    {
        name: 'Mapping Tool',
        path: '/data-sources',
        icon: '/assets/icon/DataSources.png',
        children: [
            { name: 'Data Source Types', path: '/data-sources/sub1' },
            { name: 'Data Source', path: '/data-sources/sub2' },
            { name: 'Data Import Wizard', path: '/data-sources/sub4' },
        ],
    },

];













