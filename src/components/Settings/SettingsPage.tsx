import React from 'react';
import CommonTabs from '../../CustomHooks/CommonTabPanel';
import SelectHeader from '../../pages/Components/SelectHeader';
import SMTPSettingsForm from './SMTPSettingsForm';
import CompanySettingsForm from './CompanySettingsForm';
import SMSSettingsForm from './SMSSettingsForm';


const SettingsPage = () => {
  const tabs = [
    {
      title: 'Company Configuration',
      content: <>
        <CompanySettingsForm />
    
      </>,
    },
    {
      title: 'SMTP Settings',
    content: <>
       <SMTPSettingsForm />
      </>,
    },
    {
      title: 'SMS Settings',
       content: <>
      <SMSSettingsForm />
      </>,
    },
    {
      title: 'API Setting',
      content: <div>API settings content goes here.</div>,
    },
    {
      title: 'Linkedin Setting',
      content: <div>LinkedIn settings content goes here.</div>,
    },
  ];

  return (
    <>
      <SelectHeader
        title="Settings"
        showRiskLevel={false}


      />
      <div className="">
        <CommonTabs tabs={tabs} />
      </div>


    </>
  );

};

export default SettingsPage;
