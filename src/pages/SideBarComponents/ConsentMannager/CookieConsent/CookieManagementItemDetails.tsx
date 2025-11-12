import React, { useState } from 'react';
import { useFormik } from 'formik';
import SMTPSettingsForm from '../../../../components/Settings/SMTPSettingsForm';
import CompanySettingsForm from '../../../../components/Settings/CompanySettingsForm';
import CommonTabs from '../../../../CustomHooks/CommonTabPanel';
import { CommonDataTable } from '../../../../CustomHooks/CustomDataTable';
import CookieManagementDPOInfo from './CookieManagementDPOInfo';
import CookieManagementConfiguration from './CookieManagementConfiguration';
import { useTranslation } from 'react-i18next';
interface DepartmentRow {
  id: number;
  deptName: string;
  active: string;
  description: string;
  paManager: string;
  paType: string;
  email: string;
  phone: string;
}

export default function CookieManagementItemDetails() {

  const [isEditable, setIsEditable] = useState(false);
    const [selected, setSelected] = useState<string>('one');
    const [search, setSearch] = useState('');
    const [appliedSearch, setAppliedSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
 
    const [selectedRows, setSelectedRows] = useState<DepartmentRow[]>([]);
  
const { t } = useTranslation();
const columns = [
  { header: t('ID'), accessor: 'id' },
  { header: t('Website'), accessor: 'deptName' },
  { header: t('Cookie'), accessor: 'active' },
  { header: t('Expiry'), accessor: 'description' },
  { header: t('Cookie Category'), accessor: 'paManager' },
  { header: t('Cookie Description'), accessor: 'paType' },

];
const initialData: DepartmentRow[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  deptName: ['Car Insurance', 'Travel Insurance', 'Health Insurance'][index % 3],
  active: 'Yes',
  description: 'Accounts Department',
  paManager: 'Satyam Sinha',
  paType: 'Mandatory/Regulatory',
  email: 'Satyam.sinha@yopomail.com',
  phone: '9876543210',
}));
   const [tableData, setTableData] = useState<DepartmentRow[]>(initialData);
  const formik = useFormik({
    initialValues: {
      Name: 'DPDP Consultants Privacyium Tech Pvt. Ltd. Outgoing Mail Server',
      Website: 'dpo@dpdpconsultants.com',
    
      EmbedScript: 'https://tech.portal-uat.dpdpconsultants.com',

    },
    onSubmit: (values) => {
      console.log('Submitted:', values);
    },
  });
  const filteredData = tableData.filter((row) =>
    Object.values(row).some(val =>
      String(val).toLowerCase().includes(appliedSearch.toLowerCase())
    )
  );
  const fields = Object.keys(formik.initialValues) as (keyof typeof formik.values)[];
  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );


  const tabs = [
    {
      title: 'Cookies',
      content: <>
       <div className="overflow-x-auto">
            <CommonDataTable<DepartmentRow>
              columns={columns}
              data={paginatedData}
              pagination={false}
              onSelectionChange={setSelectedRows}
            />
          </div>
    
          <div className="text-sm text-gray-600 mt-2 text-right">
            Showing {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, filteredData.length)} of {filteredData.length} entries
          </div>
    
      </>,
    },
    {
      title: 'Configuration',
    content: <>
       <CookieManagementConfiguration />
      </>,
    },
    {
      title: 'DPO Info',
       content: <>
        <CookieManagementDPOInfo />
      </>,
    },
  
  ];
  return (
      <>
   <div className="bg-white p-6 rounded-md shadow border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Cookie Management Item Details</h2>
        <button
          className="px-6 py-2 btn text-white rounded-lg shadow hover:bg-blue-700"
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
             (
                  <input
                    name={key}
                    type="text"
                    value={formik.values[key] as string}
                    onChange={formik.handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                )
              ) : (
                <span className="text-gray-800 block break-all">
                  {formik.values[key] as string}
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
    
  
      <div className="mt-4">
        <CommonTabs tabs={tabs} />
      </div>
      </>
  )
}
