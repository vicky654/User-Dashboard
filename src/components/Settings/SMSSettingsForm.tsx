import React, { useState } from 'react';
import { useFormik } from 'formik';

const SMSSettingsForm = () => {
  const [isEditable, setIsEditable] = useState(false);

  const formik = useFormik({
    initialValues: {
      smsGateway: 'MSG91',
      senderId: 'MSGAPI',
      authToken: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      route: '4',
      countryCode: '91',
      integratedNumber: '919354195067',
      namespaceKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      otpTemplateName: 'otpauth',
      linkTemplateName: 'tpl_consent_lir',
    },
    onSubmit: (values) => {
      console.log('Submitted:', values);
    },
  });

  const fields = Object.keys(formik.initialValues) as (keyof typeof formik.values)[];
  const smsGatewayOptions = ['MSG91', 'Twilio', 'Nexmo'];

  return (
    <div className="bg-white p-6 rounded-md shadow border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">SMS & WhatsApp Settings</h2>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          onClick={() => setIsEditable((prev) => !prev)}
        >
          {isEditable ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-4">
        {fields.map((key) => (
          <div key={key} className="flex items-center ">
            <label className="w-[240px] font-medium text-gray-700 flex justify-between pr-2">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())} <span className="text-gray-500">:</span>
            </label>
            <div className="flex-1">
              {isEditable ? (
                key === 'smsGateway' ? (
                  <select
                    name={key}
                    value={formik.values[key] as string}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    {smsGatewayOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    name={key}
                    type={key.toLowerCase().includes('token') || key.toLowerCase().includes('key') || key.toLowerCase().includes('password') ? 'password' : 'text'}
                    value={formik.values[key] as string}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                )
              ) : (
                <span className="text-gray-800 block break-all">
                  {key.toLowerCase().includes('token') || key.toLowerCase().includes('key') || key.toLowerCase().includes('password') ? '**************' : formik.values[key]}
                </span>
              )}
            </div>
          </div>
        ))}

        {isEditable && (
          <div className="mt-6 col-span-full">
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

export default SMSSettingsForm;
