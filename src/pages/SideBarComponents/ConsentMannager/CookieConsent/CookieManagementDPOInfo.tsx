import React, { useState } from 'react';
import { useFormik } from 'formik';

const CookieManagementDPOInfo = () => {
  const [isEditable, setIsEditable] = useState(false);

  const formik = useFormik({
    initialValues: {
      Name: 'dpdpconsultants',
      Email: 'dpo@dpdpconsultants.com',
      Phone: '0120-6930999, 1800-5711333',
      Address: 'GM IT Park, 4th Floor, Plot no 32-33, Sector 142, Noida 201305, Uttar Pradesh',
      PrincipalRights: 'https://tech.portal-uat.dpdpconsultants.com/dpgr_form',
      PrivacyPolicy: 'https://tech.portal-uat.dpdpconsultants.com/dpgr_form',
      ConsentNotice: 'Enter Text',
            CookiesPolicy: 'Enter Text',
    },
    onSubmit: (values) => {
      console.log('Submitted:', values);
    },
  });

  const fields = Object.keys(formik.initialValues) as (keyof typeof formik.values)[];
  const encryptionOptions = ['None', 'SSL/TLS', 'TLS (STARTTLS)'];

  return (
    <div className="bg-white p-6 rounded-md shadow border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">DPO Information</h2>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          onClick={() => setIsEditable((prev) => !prev)}
        >
          {isEditable ? 'Cancel' : 'Edit'}
        </button>
      </div>

 <form
  onSubmit={formik.handleSubmit}
  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
>
  {fields.map((key) => (
    <React.Fragment key={key}>
      {/* Label */}
      <label className="font-medium text-gray-700 flex items-center justify-between pr-2">
        {key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())}
        <span className="text-gray-500">:</span>
      </label>

      {/* Input / Text */}
      <div className="flex-1">
        {isEditable ? (
          <input
            name={key}
            type="text"
            value={formik.values[key] as string}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        ) : (
          <span className="text-gray-800 block break-all">
            {formik.values[key] as string}
          </span>
        )}
      </div>
    </React.Fragment>
  ))}

  {isEditable && (
    <div className="mt-6 col-span-2 flex justify-center">
      <button
        type="submit"
        className="px-12 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
      >
        Save
      </button>
    </div>
  )}
</form>

    </div>
  );
};

export default CookieManagementDPOInfo;
