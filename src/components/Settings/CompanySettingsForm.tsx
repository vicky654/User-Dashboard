// components/Settings/CompanySettingsForm.tsx
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { PencilIcon } from 'lucide-react';

const CompanySettingsForm = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [logo, setLogo] = useState<string>('../../assets/images/dpdplogo.png');

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setLogo(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      companyName: 'DPDP Consultants',
      contactNumber: '+91-7042332987',
      supportEmail: 'prod_support@dpdpconsultants.com',
      websiteDomain: 'https://tech.portal-uat.dpdpconsultants.com',
      dpgrLink: 'https://tech.portal-uat.dpdpconsultants.com/dpgr_form',
      withdrawUrl: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      legacyConsent: 'Automated',
      showChildActivity: 'Yes',
      dpapConsent: 'Yes',
      whatsappOtp: 'No',
      approvalLevels: 'Level 1',
      sendSmsType: 'Email',
      validityOfConsent: '12 months',
      trainingValidity: '1 month',
      otpValidityApi: '24 hours',
      otpValidityDpgr: '10 mins',
      dpiaReminder: 'Weekly',
      templateApproval: 'Yes',
    },
    onSubmit: (values) => {
      console.log('Submitted:', values);
    },
  });

  type FormKeys = keyof typeof formik.initialValues;

  const infoFields: { key: FormKeys; label: string; type: 'text' }[] = [
    { key: 'companyName', label: 'Company Name', type: 'text' },
    { key: 'contactNumber', label: 'Contact Number', type: 'text' },
    { key: 'supportEmail', label: 'Support Email', type: 'text' },
    { key: 'websiteDomain', label: 'Website Domain', type: 'text' },
    { key: 'dpgrLink', label: 'DPGR Embedding Link', type: 'text' },
    { key: 'withdrawUrl', label: 'Withdraw Webhook Url', type: 'text' },
  ];

  const configFields: { key: FormKeys; label: string; type: 'select'; options: string[] }[] = [
    { key: 'legacyConsent', label: 'Legacy Consent Response', options: ['Automated', 'Manual'], type: 'select' },
    { key: 'showChildActivity', label: 'Show Child Processing Activity', options: ['Yes', 'No'], type: 'select' },
    { key: 'dpapConsent', label: 'DPAP Consent', options: ['Yes', 'No'], type: 'select' },
    { key: 'whatsappOtp', label: 'Whatsapp Otp', options: ['Yes', 'No'], type: 'select' },
    { key: 'approvalLevels', label: 'Approval Levels', options: ['Level 1', 'Level 2'], type: 'select' },
    { key: 'sendSmsType', label: 'Send SMS Type', options: ['Email', 'SMS'], type: 'select' },
    { key: 'validityOfConsent', label: 'Validity of Consent(in Months)', options: ['6 months', '12 months'], type: 'select' },
    { key: 'trainingValidity', label: 'Training Validity(in Months)', options: ['1 month', '3 months', '6 months'], type: 'select' },
    { key: 'otpValidityApi', label: 'OTP Validity for consent rest api', options: ['10 mins', '24 hours'], type: 'select' },
    { key: 'otpValidityDpgr', label: 'OTP Validity for DPGR', options: ['10 mins', '30 mins', '1 hour'], type: 'select' },
    { key: 'dpiaReminder', label: 'DPIA Mail Reminder', options: ['Daily', 'Weekly', 'Monthly'], type: 'select' },
    { key: 'templateApproval', label: 'Template Approval', options: ['Yes', 'No'], type: 'select' },
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Company Configuration</h2>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          onClick={() => setIsEditable((prev) => !prev)}
        >
          {isEditable ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:flex-row gap-10 mb-8">
          <div className="relative group w-[140px] h-[140px] rounded-full   border overflow-hidden">
            <img
              src={logo}
              alt="Company Logo"
              className="w-full h-full img-fit  border  shadow "
            />
            {isEditable && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <label className="cursor-pointer flex flex-col items-center text-white">
                  <PencilIcon className="w-5 h-5 mb-1 opacity-80" />
                  <span className="text-sm">Change Logo</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
                </label>
              </div>
            )}
          </div>

          <div className="flex-1 space-y-4">
            {infoFields.map(({ key, label }) => (
              <div key={key} className="flex items-center ">
                <label className="w-[240px] font-medium text-gray-700 flex justify-between pr-2">
                  {label} <span className="text-gray-500">:</span>
                </label>
                <div className="flex-1">
                  {isEditable ? (
                    <input
                      name={key}
                      type="text"
                      value={formik.values[key] as string}
                      onChange={formik.handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  ) : (
                    <span className="text-gray-800 block break-all">{formik.values[key]}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Configuration Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {configFields.map(({ key, label, options }) => (
            <div key={key} className="flex items-center ">
              <label className="w-[240px] font-medium text-gray-700 flex justify-between pr-2">
                {label} <span className="text-gray-500">:</span>
              </label>
              <div className="flex-1">
                {isEditable ? (
                  <select
                    name={key}
                    value={formik.values[key] as string}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    {options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <span className="text-gray-800 block break-all">{formik.values[key]}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {isEditable && (
          <div className="mt-6">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
            >
              Save
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CompanySettingsForm;
