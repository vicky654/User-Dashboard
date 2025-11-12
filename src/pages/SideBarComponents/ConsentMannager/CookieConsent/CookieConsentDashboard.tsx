import React, { useState } from 'react'
import SelectHeader from '../../../Components/SelectHeader'
import ConsentIcon from '../../../../components/DPDPIcons/ConsentIcon'
import { useGetApiCall } from '../../../../CustomHooks/useGetApiCall';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CommonToolbar from '../../../Components/CommonToolbar';
import CommonTabs from '../../../../CustomHooks/CommonTabPanel';
import { CommonDataTable } from '../../../../CustomHooks/CustomDataTable';
import BarChart from '../../../Charts/BarChart';
import { dummyBarData, dummyDonutData } from '../../PrivacyGovernance/ConsentChartDummyData';
import DonutChart from '../../../Charts/DonutChart';
// import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


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





export default function CookieConsentDashboard() {
  const [selected, setSelected] = useState<string>('one');
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [tableData, setTableData] = useState<DepartmentRow[]>(initialData);
  const [selectedRows, setSelectedRows] = useState<DepartmentRow[]>([]);

  const { t } = useTranslation();
const columns = [
  { header: t("ID"), accessor: "id" },
  { header: t("Name"), accessor: "name" },
  { header: t("Client"), accessor: "client" },
  { header: t("ConsentTime"), accessor: "consenttime" },
  { header: t("DeviceType"), accessor: "devicetype" },
  { header: t("IPAddress"), accessor: "ipaddress" },
  { header: t("Analytics"), accessor: "analytics" },
  { header: t("Targeting"), accessor: "targating" },
  { header: t("Functional"), accessor: "functonal" },
];

  const { data: optionsData } = useGetApiCall({
    url: '/processing_activities',
    onSuccess: (res: any) => console.log('Options List:', res),
  });

  const options = optionsData?.processingActivities?.map((item: any) => ({
    label: item?.processingActivitiesName,
    value: item?.id,
  })) || [];


  const handleExport = () => {
    const maxId = Math.max(...tableData.map(d => d.id));
    const duplicated = selectedRows.map((row, i) => ({
      ...row,
      id: maxId + i + 1,
    }));
    setTableData(prev => [...prev, ...duplicated]);
    toast.success(`${duplicated.length} row(s) duplicated.`);
  };


  const handleImport = () => {
    const maxId = Math.max(...tableData.map(d => d.id));
    const duplicated = selectedRows.map((row, i) => ({
      ...row,
      id: maxId + i + 1,
    }));
    setTableData(prev => [...prev, ...duplicated]);
    toast.success(`${duplicated.length} row(s) duplicated.`);
  };

  const handleSearch = () => {
    setAppliedSearch(search);
    setCurrentPage(1);
  };

  const handleResetSearch = () => {
    setSearch('');
    setAppliedSearch('');
    setCurrentPage(1);
  };

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
    
        <SelectHeader
                title="Cookie Consent Dashboard"
                riskLevel="high"
                showRiskLevel={false}
                    leftIcon={<ConsentIcon width={30} height={30} />}
             
            />

<div className="w-full ">
  <div className="flex gap-2 min-w-max">
    {/* Bar Chart */}
    <div className="boxShadowcard flex-1 ">
      <h4 className="text-base font-semibold mb-4 text-center">Overall Count</h4>
      <div className="flex-1 h-full">
        <BarChart data={dummyBarData} />
      </div>
    </div>

    {/* Donut Chart */}
    <div className="boxShadowcard flex-1 ">
      <h4 className="text-base font-semibold mb-2 text-center">Percentage (%)</h4>
      <div className="flex-1 h-full">
        <DonutChart data={dummyDonutData} />
      </div>
    </div>
  </div>
</div>
                <CommonToolbar
        searchText={search}
        setSearchText={setSearch}
        onSearch={handleSearch}
        onReset={handleResetSearch}
        onImport={handleImport}
        onExport={handleExport}
        // onDuplicate={handleDuplicate}
        totalPages={Math.ceil(filteredData.length / perPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />

  <div className="">
        <CommonDataTable<DepartmentRow>
            columns={columns}
            data={paginatedData}
            pagination={false}
            onSelectionChange={setSelectedRows}
                        rowClickPath={(row) => `/cookie-consent-view/${row.id}`} 
          />
      </div>

      
    </>
  )
}

