// RolesListing.tsx

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useGetApiCall } from '../../../CustomHooks/useGetApiCall';
import SelectHeader from '../../Components/SelectHeader';
import CommonToolbar from '../../Components/CommonToolbar';
import { CommonDataTable } from '../../../CustomHooks/CustomDataTable';
import RoleIcon from '../../../components/DPDPIcons/RoleIcon';
// import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


interface TemplateRow {
  id: number;
  tenant: string;
  modules: string[]; // change from string → string[]
  active: string;
}

const initialData: TemplateRow[] = [
  {
    id: 1,
    tenant: "DPDP Consultants",
    modules: ["DPCM", "DPIA", "CCM", "DPGR", "DPTPA", "DPAP"], // multiple items
    active: "yes",
  },
  {
    id: 2,
    tenant: "GDPR Consultants",
  modules: ["DPCM", "DPIA", "CCM", "DPGR", "DPTPA", "DPAP"], // multiple items
    active: "yes",
  },
  {
    id: 3,
    tenant: "PDPL Consultants",
  modules: ["DPCM", "DPIA", "CCM", "DPGR", "DPTPA", "DPAP"], // multiple items
    active: "yes",
  },
  {
    id: 4,
    tenant: "PDPL Consultants",
  modules: ["DPCM", "DPIA", "CCM", "DPGR", "DPTPA", "DPAP"], // multiple items
    active: "yes",
  },
];



const Tenants = () => {
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [tableData, setTableData] = useState<TemplateRow[]>(initialData);
  const [selectedRows, setSelectedRows] = useState<TemplateRow[]>([]);


  const { t } = useTranslation();
const columns = [
  { header: t('ID'), accessor: 'id' },
  { header: t('Tenant'), accessor: 'tenant' },


  { header: t('Modules'), accessor: 'modules' },
    { header: t('Active'), accessor: 'active' },

];

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
        title={t("ListofAllTenants")}
        showRiskLevel={false}
        Selecttitle="Type:"
        leftIcon={<RoleIcon width={20} height={20} />}
        showButton={true}
        buttonText={t("SetupNewTenant")}
        buttonLink="/roles-and-permissions"
      />

      {/* <CommonToolbar
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
      /> */}



      <CommonDataTable<TemplateRow>
        columns={columns}
        data={paginatedData}
        pagination={false}
        onSelectionChange={setSelectedRows}
      />

      {/* Optional: Show range */}
      <div className="text-sm text-gray-600 mt-2 text-right">
        {t("Showing")} {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, filteredData.length)} of {filteredData.length} {t("entries")}
      </div>
    </>
  );
};

export default Tenants;
