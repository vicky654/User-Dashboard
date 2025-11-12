import React, { useState } from 'react'
import BarChart from '../../../Charts/BarChart'
import DonutChart from '../../../Charts/DonutChart'
import { dummyBarData, dummyDonutData } from '../../PrivacyGovernance/ConsentChartDummyData'
import SelectHeader from '../../../Components/SelectHeader'
import ConsentIcon from '../../../../components/DPDPIcons/ConsentIcon'
import CommonToolbar from '../../../Components/CommonToolbar'
import { useNavigate } from 'react-router-dom'
import { useGetApiCall } from '../../../../CustomHooks/useGetApiCall'
import { toast } from 'react-toastify'
import { CommonDataTable } from '../../../../CustomHooks/CustomDataTable'
import PrivacyNoticeModal from './BreachNoticeModal'
import { useTranslation } from 'react-i18next'
type DepartmentRow = {
  id: number;
  processingActivity: string;
  total: number;
  delivered: number;
  initiated: number;
  notDelivered: number;
};



const tableData = [
  { processingActivity: "Accounts", total: 93, delivered: 93, initiated: 0, notDelivered: 0 },
  { processingActivity: "Admin", total: 0, delivered: 0, initiated: 0, notDelivered: 0 },
  { processingActivity: "Buyer-Onboarding", total: 15, delivered: 15, initiated: 0, notDelivered: 0 },
  { processingActivity: "Cards", total: 7, delivered: 7, initiated: 0, notDelivered: 0 },
  { processingActivity: "Careers", total: 1408, delivered: 1407, initiated: 1, notDelivered: 0 },
  { processingActivity: "Consultant", total: 0, delivered: 0, initiated: 0, notDelivered: 0 },
  { processingActivity: "Contact Us", total: 752, delivered: 752, initiated: 0, notDelivered: 0 },
  { processingActivity: "Deposit", total: 9, delivered: 9, initiated: 0, notDelivered: 0 },
  { processingActivity: "Events", total: 4, delivered: 4, initiated: 0, notDelivered: 0 },
  { processingActivity: "Finance", total: 0, delivered: 0, initiated: 0, notDelivered: 0 },
  { processingActivity: "Total", total: 3184, delivered: 3116, initiated: 68, notDelivered: 0 },

];


const initialData: DepartmentRow[] = tableData.map((item, index) => ({
  id: index + 1,
  processingActivity: item.processingActivity,

  delivered: item.delivered,
  initiated: item.initiated,
  notDelivered: item.notDelivered,
  total: item.total,
}));



export default function BreachNoticeDashboard() {
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
  { header: t("ProcessingActivity"), accessor: "processingActivity" },
  { header: t("TotalDataPrincipals"), accessor: "total" },
  { header: t("Delivered"), accessor: "delivered" },
  { header: t("Initiated"), accessor: "initiated" },
  { header: t("NotDelivered"), accessor: "notDelivered" },
];

  const { data: optionsData } = useGetApiCall({
    url: '/processing_activities',
    onSuccess: (res: any) => console.log('Options List:', res),
  });

  const options = optionsData?.processingActivities?.map((item: any) => ({
    label: item?.processingActivitiesName,
    value: item?.id,
  })) || [];

  const handleDelete = () => {
    const selectedIds = selectedRows.map(row => row.id);
    const newData = tableData.filter(row => !selectedIds.includes(row.id));
    setTableData(newData);
    setSelectedRows([]);
    toast.success(`${selectedIds.length} row(s) deleted.`);
  };

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
    setOpen(true);
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
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/create-ManageProcessingActivity");
  }


  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(null);

  const handleSave = (data:any) => {
    console.log("Form Data:", data);
    setFormValues(data);
  };
  return (

    <>


      <SelectHeader
        title="Breach Notice Dashboard"
        showRiskLevel={true}
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
 <div className="p-6">
      {/* <button
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
        onClick={() => setOpen(true)}
      >
        Open Privacy Notice Modal
      </button> */}

      <PrivacyNoticeModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSave}
      />

      {/* {formValues && (
        <pre className="mt-4 bg-gray-100 p-4 rounded-lg">
          {JSON.stringify(formValues, null, 2)}
        </pre>
      )} */}
    </div>
      <div className="overflow-x-auto">
        <CommonDataTable<DepartmentRow>
          columns={columns}
          data={paginatedData}
          pagination={false}
          onSelectionChange={setSelectedRows}
        />
      </div>
    </>


  )
}
