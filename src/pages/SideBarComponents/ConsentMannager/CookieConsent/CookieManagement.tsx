import React, { useState } from 'react'
import { CommonDataTable } from '../../../../CustomHooks/CustomDataTable';
import SelectHeader from '../../../Components/SelectHeader';
import CommonToolbar from '../../../Components/CommonToolbar';
import { toast } from 'react-toastify';
import { use } from 'i18next';
import { useNavigate } from 'react-router-dom';




type DepartmentRow = {
  id: number;
  name: string;
    website: string;
};

const tableData = [
  {
    id: 1,
    name: "DPDP Consultants",
website: "www.example1.com",
  },
  {
    id: 2,
    name: "Admin",
    website: "www.example2.com",

  },
  {
    id: 3,
    name: "Buyer-Onboarding",
    website: "www.example3.com",

  },
  {
    id: 4,
    name: "Sales",
    website: "www.example4.com",

  }
];
const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Website", accessor: "website" },
];

// Convert DepartmentRow → Common Table Format
const initialData = tableData.map((item, index) => ({
  id: index + 1,
  name: item.name,   // mapped to `name`
  website: item.website, // mapped to `website`
}));





export default function CookieManagement() {
    const [selected, setSelected] = useState<string>('one');
    const [search, setSearch] = useState('');
    const [appliedSearch, setAppliedSearch] = useState('');
    
  
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [tableData, setTableData] = useState<DepartmentRow[]>(initialData);
    const [selectedRows, setSelectedRows] = useState<DepartmentRow[]>([]);


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
    navigate("/create-stakeholders");
  }
  
    return (

   <>
  
    <SelectHeader
                title="Cookie Management"
        
                showRiskLevel={false}
            
            />
         <CommonToolbar
        searchText={search}
        setSearchText={setSearch}
        onSearch={handleSearch}
        onReset={handleResetSearch}
        onImport={handleImport}
        onExport={handleExport}
             onCreate={handleCreate}
        // onDuplicate={handleDuplicate}
        totalPages={Math.ceil(filteredData.length / perPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />


           <div className="bg-white mt-4">
                    <CommonDataTable<DepartmentRow>
                        columns={columns}
                        data={paginatedData}
                        pagination={false}
                        onSelectionChange={setSelectedRows}
                        rowClickPath={(row) => `/cookie-management-item-details/${row.id}`} 
                      />
                  </div>
      </>
  )
}
