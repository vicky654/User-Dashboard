import React, { useEffect, useState } from 'react';
import CommonTabs from '../../CustomHooks/CommonTabPanel';
import SelectHeader from '../../pages/Components/SelectHeader';
import SMTPSettingsForm from './SMTPSettingsForm';
import CompanySettingsForm from './CompanySettingsForm';
import SMSSettingsForm from './SMSSettingsForm';
import { useLocation } from 'react-router-dom';
import Themesettings from './Themesettings';
import { useTranslation } from 'react-i18next';
import MailSettings from './MailSettings';
import ApiSettings from './ApiSettings';
import MailServerSettings from './MailServerSettings';
import LinkedInSettings from './LinkedInSettings';
import DigiLockerSettings from './DigiLockerSettings';
import LicenseDashboard from './LicenseDashboard';
import LicenseDetails from './LicenseDetails';
import IntegrationsTable from './IntegrationsTable';
import ToolsAutomation from '../Tools&Automation/ToolsAutomation';


const SettingsPage = () => {
    const { t } = useTranslation();
const tabs = [
      {
    title: t('ThemeSettings'),
    content: <Themesettings/>,
  },
  {
    title: t('CompanyConfiguration'),
    content: <CompanySettingsForm />,
  },

    {
    title: t('mailSettings'),
    content: <MailSettings />,
  },
  {
    title: t('ToolsAutomation'),
    content: <ToolsAutomation />,
  },
    {
    title: 'LinkedIn Settings',
    content: <LinkedInSettings />,
  },
  {
    title: t('MailSMTPSettings'),
    content: <SMTPSettingsForm />,
  },
  {
    title: t('SMSSettings'),
    content: <SMSSettingsForm />,
  },
  {
    title: t('APISettings'),
    content: <ApiSettings />,
  },
  {
    title: t('IncomingMailSettings'),
    content: <MailServerSettings />,
  },
    {
    title: 'DigiLocker Settings',
    content: <DigiLockerSettings />,
  },
    {
    title: 'License Settings',
    content: <LicenseDashboard />,
  },
      {
    title: 'License Details',
    content: <LicenseDetails />,
  },
      {
    title: 'Integration Settings',
    content: <IntegrationsTable />,
  },

  // {
  //   title: 'DDMT Settings',
  //   content: <div>DDMT settings content goes here.</div>,
  // },
  // {
  //   title: 'LinkedIn Settings',
  //   content: <div>LinkedIn settings content goes here.</div>,
  // },
  // {
  //   title: 'DigiLocker Settings',
  //   content: <div>DigiLocker settings content goes here.</div>,
  // },
  // {
  //   title: 'License Settings',
  //   content: <div>License settings content goes here.</div>,
  // },
  // {
  //   title: 'Integration Settings',
  //   content: <div>Integration settings content goes here.</div>,
  // },
  // {
  //   title: 'Activity Log',
  //   content: <div>Activity log content goes here.</div>,
  // },
];


  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    if (location.state?.tabName) {
      const tabIndex = tabs.findIndex(tab =>
        tab.title.toLowerCase().includes(location.state.tabName.toLowerCase())
      );
      if (tabIndex !== -1) {
        console.log('Setting active tab to index:', tabIndex);
        setActiveTab(tabIndex);
      }
    }
  }, [location.state]);
  return (
    <>
      <SelectHeader
        title={t("Settings")}
        showRiskLevel={false}


      />
      <div className="">
        <CommonTabs tabs={tabs} defaultIndex={activeTab} />

      </div>


    </>
  );

};

export default SettingsPage;
