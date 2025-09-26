// RolesListing.tsx

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useGetApiCall } from '../../../CustomHooks/useGetApiCall';
import SelectHeader from '../../Components/SelectHeader';
import CommonToolbar from '../../Components/CommonToolbar';
import { CommonDataTable } from '../../../CustomHooks/CustomDataTable';
import RoleIcon from '../../../components/DPDPIcons/RoleIcon';

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Role', accessor: 'role' },
  { header: 'Departments', accessor: 'department' },
  { header: 'Category', accessor: 'category' },
  { header: 'Modules', accessor: 'modules' },
  { header: 'Accesses', accessor: 'accesses' },
  { header: 'Created On', accessor: 'createdOn' },
  { header: 'Last updated on', accessor: 'lastUpdatedOn' },
];

interface TemplateRow {
  id: number;
  role: string;
  department: string;
  category: string;
  modules: string;
  accesses: string;
  createdOn: string;
  lastUpdatedOn: string;
}

const initialData: TemplateRow[] = [
  {
    "id": 1,
    "role": "Privacy Officer",
    "department": "Marketing",
    "category": "User Specific",
    "modules": "All Module",
    "accesses": "View Access, Edit Access",
    "createdOn": "07/17/2024 18:05:45",
    "lastUpdatedOn": "07/17/2024 18:05:45"
  },
  {
    "id": 2,
    "role": "DPO",
    "department": "Product Management",
    "category": "User Specific",
    "modules": "All Module",
    "accesses": "View Access, Edit Access",
    "createdOn": "07/17/2024 18:05:45",
    "lastUpdatedOn": "07/17/2024 18:05:45"
  },
  {
    "id": 3,
    "role": "Compliance Manager",
    "department": "Consulting",
    "category": "User Specific",
    "modules": "All Module",
    "accesses": "All Access",
    "createdOn": "07/17/2024 18:05:45",
    "lastUpdatedOn": "07/17/2024 18:05:45"
  },
  {
    "id": 4,
    "role": "Privacy Officer",
    "department": "Human Resource",
    "category": "User Specific",
    "modules": "All Module",
    "accesses": "View Access, Edit Access",
    "createdOn": "07/17/2024 18:05:45",
    "lastUpdatedOn": "07/17/2024 18:05:45"
  },
  {
    "id": 5,
    "role": "DPO",
    "department": "Marketing",
    "category": "User Specific",
    "modules": "All Module",
    "accesses": "View Access, Edit Access",
    "createdOn": "07/17/2024 18:05:45",
    "lastUpdatedOn": "07/17/2024 18:05:45"
  }
]


const RolesListing = () => {
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [tableData, setTableData] = useState<TemplateRow[]>(initialData);
  const [selectedRows, setSelectedRows] = useState<TemplateRow[]>([]);

  const { data: optionsData } = useGetApiCall({
    url: '/processing_activities',
    onSuccess: (res: any) => console.log('Options List:', res),
  });

  const handleDelete = () => {
    const selectedIds = selectedRows.map((row) => row.id);
    const newData = tableData.filter((row) => !selectedIds.includes(row.id));
    setTableData(newData);
    setSelectedRows([]);
    toast.success(`${selectedIds.length} row(s) deleted.`);
  };

  const handleDuplicate = () => {
    const maxId = Math.max(...tableData.map((d) => d.id));
    const duplicated = selectedRows.map((row, i) => ({
      ...row,
      id: maxId + i + 1,
    }));
    const newData = [...tableData, ...duplicated];
    setTableData(newData);
    toast.success(`${duplicated.length} row(s) duplicated.`);
  };

  const handleSearch = () => {
    setAppliedSearch(search);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleResetSearch = () => {
    setSearch('');
    setAppliedSearch('');
    setCurrentPage(1);
  };

  const filteredData = tableData.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(appliedSearch.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice((currentPage - 1) * perPage, currentPage * perPage);
  const totalPages = Math.ceil(filteredData.length / perPage);

  return (
    <>
      <SelectHeader
        title="Roles Assign"
        showRiskLevel={false}
        Selecttitle="Type:"
        leftIcon={<RoleIcon width={20} height={20} />}
        showButton={true}
        buttonText="Add Role"
        buttonLink="/roles-and-permissions"
      />

      <CommonToolbar
        searchText={search}
        setSearchText={setSearch}
        onSearch={handleSearch}
        onReset={handleResetSearch}
        onDelete={handleDelete}
        onDuplicate={handleDuplicate}
        totalPages={Math.ceil(filteredData.length / perPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />



      <CommonDataTable<TemplateRow>
        columns={columns}
        data={paginatedData}
        pagination={false}
        onSelectionChange={setSelectedRows}
      />

      {/* Optional: Show range */}
      <div className="text-sm text-gray-600 mt-2 text-right">
        Showing {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, filteredData.length)} of {filteredData.length} entries
      </div>
    </>
  );
};

export default RolesListing;
