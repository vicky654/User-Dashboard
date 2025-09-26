import React, { useState } from 'react';
import { useFormik } from 'formik';
import { CommonDataTable } from '../../../../CustomHooks/CustomDataTable';

// Original DepartmentRow type
type DepartmentRow = {
  id: number;
  name: string;
  client: string;
  consenttime: string;
  devicetype: string; 
  ipaddress: string;
  analytics: string;
  targating: string;
  functonal: string;
};

const tableData = [
  {
    id: 1,
    name: "Accounts",
    client: "Client 1",
    consenttime: "2025-09-08 10:30",
    devicetype: "Desktop",
    ipaddress: "192.168.1.10",
    analytics: "Yes",
    targating: "No",
    functonal: "Yes"
  },
  {
    id: 2,
    name: "Admin",
    client: "Client 2",
    consenttime: "2025-09-08 10:30",
    devicetype: "Desktop",
    ipaddress: "192.168.1.11",
    analytics: "No",
    targating: "No",
    functonal: "Yes"
  },
  {
    id: 3,
    name: "Buyer-Onboarding",
    client: "Client 3",
    consenttime: "2025-09-08 10:30",
    devicetype: "Desktop",
    ipaddress: "192.168.1.12",
    analytics: "Yes",
    targating: "No",
    functonal: "Yes"
  },
  {
    id: 4,
    name: "Sales",
    client: "Client 4",
    consenttime: "2025-09-08 10:30",
    devicetype: "Desktop",
    ipaddress: "192.168.1.13",
    analytics: "Yes",
    targating: "Yes",
    functonal: "No"
  }
];
const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Client", accessor: "client" },
  { header: "Consent Time", accessor: "consenttime" },
  { header: "Device Type", accessor: "devicetype" },
  { header: "IP Address", accessor: "ipaddress" },
  { header: "Analytics", accessor: "analytics" },
  { header: "Targeting", accessor: "targating" },
  { header: "Functional", accessor: "functonal" },
];

// Convert DepartmentRow → Common Table Format
const initialData = tableData.map((item, index) => ({
  id: index + 1,
  name: item.name,   // mapped to `name`
  client: `Client ${index + 1}`,   // mock client for now
  consenttime: "2025-09-08 10:30", // placeholder
  devicetype: "Desktop",           // placeholder
  ipaddress: `192.168.1.${index + 10}`, // fake IP
  analytics: item.analytics,
  targating: item.targating,
  functonal: item.functonal
}));
export default function CookieConsentView() {
  const [isEditable, setIsEditable] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [tableData, setTableData] = useState<DepartmentRow[]>(initialData);
  const [selectedRows, setSelectedRows] = useState<DepartmentRow[]>([]);
  const [appliedSearch, setAppliedSearch] = useState('');
  
  const formik = useFormik({
    initialValues: {
      Name: 'DPDP Consultants', // Service provider
      Website: 'https://www.dpdpconsultants.com', // Realistic website URL
      Client: '26da51f9-71a5-48ea-aff8-cfa124cee594', // API client key format
      ConsentTime: '2025-09-09 14:30', // Actual datetime format
      DeviceType: 'Desktop', // Could be Desktop, Mobile, Tablet
      IPAddress: '192.168.1.10', // Realistic IPv4 address
    },
    onSubmit: (values) => {
      console.log('Submitted:', values);
      setIsEditable(false); // disable edit after saving
    },
  });

const fields: (keyof typeof formik.values)[] = [
  'Name',
  'Website',
  'Client',
  'ConsentTime',
  'DeviceType',
  'IPAddress',
];

 const filteredData = tableData.filter((row) =>
    Object.values(row).some(val =>
      String(val).toLowerCase().includes(appliedSearch.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
  return (
    <>
  
    <div className=" p-6 rounded-md shadow border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-orange-600">DPDP Consultants</h2>
     
      </div>
    <div className="flex justify-between items-start mb-6 gap-6">


      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-y-4">
        {/* Name */}
   

      {fields.map((key) => (
  <div key={key} className="flex items-center">
    <label className="w-[150px] font-medium text-gray-700 flex justify-between pr-2">
      {key.replace(/([A-Z])/g, ' $1')} <span className="text-gray-500">:</span>
    </label>
    <div className="flex-1">
      {isEditable ? (
        key === 'Name' ? (
          <select
            name="Name"
            value={formik.values.Name}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {['MSG91', 'Twilio', 'Nexmo'].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ) : (
          <input
            name={key}
            type={key === 'Client' ? 'password' : 'text'}
            value={formik.values[key]}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        )
      ) : (
        <span className="text-gray-800">
          {key === 'Client' ? '**************' : formik.values[key]}
        </span>
      )}
    </div>
  </div>
))}


        {/* Save button */}
        {isEditable && (
          <div className="mt-6">
            <button
              type="submit"
              className="px-12 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
            >
              Save
            </button>
          </div>
        )}
      </form>
      
  <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-y-4 flex-1">


{['Essential','Analytics','Targeting','Functional'].map((key, index) => (
  <div key={key} className="flex items-center mb-2">
    <input
      type="checkbox"
      name={key}
      checked
      onChange={formik.handleChange}
      disabled={!isEditable}
   className="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
/>
    <label htmlFor={key} className="ml-2 text-gray-700">
      {['Receive Newsletter','Enable Notifications','Accept Terms & Conditions','Enable Dark Mode','Share Usage Data'][index]}
    </label>
  </div>
))}


    {isEditable && (
      <div className="mt-4">
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

       
    </div>
     <div className="bg-white mt-4">
              <CommonDataTable<DepartmentRow>
                  columns={columns}
                  data={paginatedData}
                  pagination={false}
                  onSelectionChange={setSelectedRows}
                />
            </div>
              </>
  );
}
