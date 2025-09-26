import React, { useState } from 'react'
import { CommonDataTable } from '../../../../CustomHooks/CustomDataTable';
import CommonToolbar from '../../../Components/CommonToolbar';
import { toast } from 'react-toastify';
import SelectHeader from '../../../Components/SelectHeader';
import ConsentIcon from '../../../../components/DPDPIcons/ConsentIcon';
import DataPrincipalFilterModal from './DataPrincipalFilterModal';


// Define the type
type DepartmentRow = {
  id: number;
  DataPrincipalEmail: string;
  ProcessingActivity: string;
  TemplateVersion: string;
  IPAddress: string;
  Status: string;
  ConsentRightsDate: string;
  ConsentValidity: string;
};

// Sample table data
const tableData: DepartmentRow[] = [
  {
    id: 1,
    DataPrincipalEmail: "accounts@example.com",
    ProcessingActivity: "Accounts",
    TemplateVersion: "V1",
    IPAddress: "192.168.1.10",
    Status: "Active",
    ConsentRightsDate: "2025-09-08 10:30",
    ConsentValidity: "Valid",
  },
  {
    id: 2,
    DataPrincipalEmail: "admin@example.com",
    ProcessingActivity: "Admin",
    TemplateVersion: "V1",
    IPAddress: "192.168.1.11",
    Status: "Pending",
    ConsentRightsDate: "2025-09-08 10:30",
    ConsentValidity: "Valid",
  },
  {
    id: 3,
    DataPrincipalEmail: "buyer@example.com",
    ProcessingActivity: "Buyer Onboarding",
    TemplateVersion: "V2",
    IPAddress: "192.168.1.12",
    Status: "Completed",
    ConsentRightsDate: "2025-09-08 10:30",
    ConsentValidity: "Expired",
  },
  {
    id: 4,
    DataPrincipalEmail: "sales@example.com",
    ProcessingActivity: "Sales",
    TemplateVersion: "V2",
    IPAddress: "192.168.1.13",
    Status: "Active",
    ConsentRightsDate: "2025-09-08 10:30",
    ConsentValidity: "Valid",
  },
];

// Columns for a table component
const columns = [
  { header: "ID", accessor: "id" },
  { header: "Data Principal Email", accessor: "DataPrincipalEmail" },
  { header: "Processing Activity", accessor: "ProcessingActivity" },
  { header: "Template Version", accessor: "TemplateVersion" },
  { header: "IP Address", accessor: "IPAddress" },
  { header: "Status", accessor: "Status" },
  { header: "Consent Rights Date", accessor: "ConsentRightsDate" },
  { header: "Consent Validity", accessor: "ConsentValidity" },
];
// Initial data for table (can be used as default state)
const initialData = tableData.map((item) => ({
  id: item.id,
  DataPrincipalEmail: item.DataPrincipalEmail,
  ProcessingActivity: item.ProcessingActivity,
  TemplateVersion: item.TemplateVersion,
  IPAddress: item.IPAddress,
  Status: item.Status,
  ConsentRightsDate: item.ConsentRightsDate,
  ConsentValidity: item.ConsentValidity,
}));



export default function DataPrincipalActivity() {
  const [selected, setSelected] = useState<string>('one');
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [tableData, setTableData] = useState<DepartmentRow[]>(initialData);
  const [selectedRows, setSelectedRows] = useState<DepartmentRow[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

 




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
  const handleFilter = () => {
    setIsFilterOpen(true);
    toast.info('Filter clicked!');
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
                title="Data Principal Activity"
            
                    leftIcon={<ConsentIcon width={30} height={30} />}
              
              
           
            />


                <CommonToolbar
        searchText={search}
        setSearchText={setSearch}
        onSearch={handleSearch}
        onReset={handleResetSearch}
        onImport={handleImport}
        onExport={handleExport}
        onFilter={handleFilter}
        // onDuplicate={handleDuplicate}
        totalPages={Math.ceil(filteredData.length / perPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />
   <DataPrincipalFilterModal open={isFilterOpen} setOpen={setIsFilterOpen} />
    
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
