import React, { useState } from 'react'
import SelectHeader from '../../../Components/SelectHeader'
import ConsentIcon from '../../../../components/DPDPIcons/ConsentIcon'
import { useGetApiCall } from '../../../../CustomHooks/useGetApiCall';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CommonToolbar from '../../../Components/CommonToolbar';
import CommonTabs from '../../../../CustomHooks/CommonTabPanel';
import { CommonDataTable } from '../../../../CustomHooks/CustomDataTable';
import { useTranslation } from 'react-i18next';
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

export default function PrivacyNoticeTableDash() {
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
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/create-ManageProcessingActivity");
  }



  const tabs = [
    {
      title: t('Delivered'),
      content: <>
         <CommonDataTable<DepartmentRow>
                columns={columns}
                data={paginatedData}
                pagination={false}
                onSelectionChange={setSelectedRows}
              />
    
      </>,
    },
    {
      title: t('initiated'),
    content: <>
      <CommonDataTable<DepartmentRow>
             columns={columns}
             data={paginatedData}
             pagination={false}
             onSelectionChange={setSelectedRows}
           />
      </>,
    },
    {
      title: t('NotDelivered'),
       content: <>
     <CommonDataTable<DepartmentRow>
            columns={columns}
            data={paginatedData}
            pagination={false}
            onSelectionChange={setSelectedRows}
          />
      </>,
    },
   
  ];
  return (
    <>
    
        <SelectHeader
                title="Privacy Notice Dashboard"
                riskLevel="high"
                showRiskLevel={true}
                    leftIcon={<ConsentIcon width={30} height={30} />}
                Selecttitle={t("ProcessingActivity")}
                options={options}
                selected={selected}
                setSelected={setSelected}
            />


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
        <CommonTabs tabs={tabs} />
      </div>

      
    </>
  )
}

