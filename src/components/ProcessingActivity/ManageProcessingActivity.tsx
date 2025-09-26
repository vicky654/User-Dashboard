import React, { useState } from 'react'
import SelectHeader from '../../pages/Components/SelectHeader'
import { useGetApiCall } from '../../CustomHooks/useGetApiCall';
import CommonToolbar from '../../pages/Components/CommonToolbar';
import { toast } from 'react-toastify';
import { CommonDataTable } from '../../CustomHooks/CustomDataTable';
import CreateManageProcessingActivity from './CreateManageProcessingActivity';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';

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
const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Dept. Name', accessor: 'deptName' },
  { header: 'Active', accessor: 'active' },
  { header: 'Description', accessor: 'description' },
  { header: 'PA Manager', accessor: 'paManager' },
  { header: 'PA Type', accessor: 'paType' },
  { header: 'Email', accessor: 'email' },
  { header: 'Phone', accessor: 'phone' },
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


export default function ManageProcessingActivity() {
  const [selected, setSelected] = useState<string>('one');
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [tableData, setTableData] = useState<DepartmentRow[]>(initialData);
  const [selectedRows, setSelectedRows] = useState<DepartmentRow[]>([]);
   const [isModalOpen, setIsModalOpen] = useState(false);


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

  const handleDuplicate = () => {
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

  return (
    <div>
      <SelectHeader
        title="Manage Processing Activity"
        showRiskLevel={false}
        Selecttitle="Processing Activity:"
        options={options}
        selected={selected}
        setSelected={setSelected}

      />
      <CommonToolbar
        searchText={search}
        setSearchText={setSearch}
        onSearch={handleSearch}
        onReset={handleResetSearch}
        onDelete={handleDelete}
        onCreate={handleCreate}
        onDuplicate={handleDuplicate}
        totalPages={Math.ceil(filteredData.length / perPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />
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

      {/* <CreateManageProcessingActivity /> */}
    </div>
  )
}
