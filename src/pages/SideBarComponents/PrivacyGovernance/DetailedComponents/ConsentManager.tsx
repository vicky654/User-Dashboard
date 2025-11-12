// ConsentManager.tsx
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useGetApiCall } from '../../../../CustomHooks/useGetApiCall';
import SelectHeader from '../../../Components/SelectHeader';
import CommonToolbar from '../../../Components/CommonToolbar';
import { CommonDataTable } from '../../../../CustomHooks/CustomDataTable';


import CreateIcon from '../../../../components/DPDPIcons/CreateIcon';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

interface TemplateRow {
  id: number;
  templateName: string;
  templateType: string;
  language: string;
  subType: string;
  createdOn: string;
  lastUpdatedOn: string;
  extra: string;
}


const ConsentManager = () => {


  const { t } = useTranslation();
const columns = [
  { header: t('ID'), accessor: 'id' },
  { header: t('TemplateName'), accessor: 'templateName' },
  { header: t('TemplateType'), accessor: 'templateType' },
  { header: t('Language'), accessor: 'language' },
  { header: t('SubType'), accessor: 'subType' },
  { header: t('CreatedOn'), accessor: 'createdOn' },
  { header: t('Lastupdatedon'), accessor: 'lastUpdatedOn' },
  { header: t('Extra'), accessor: 'extra' },
];

const initialData: TemplateRow[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  templateName: ['Breach Notice (Email)', 'Breach Notice (Email)', 'Breach Notice (Email)', 'Breach Notice (Email)', 'Breach Notice (Email)'][index % 5],
  templateType: ['Breach Notification', 'Breach Notification', 'Breach Notification', 'Breach Notification', 'Breach Notification'][index % 5],
  language: ['English', 'Hindi', 'French', 'German', 'Spanish'][index % 5],
  subType: ['Email', 'SMS', 'Push', 'Call', 'Letter'][index % 5],
  createdOn: `07/${String(10 + (index % 10)).padStart(2, '0')}/2024 18:${String(index % 60).padStart(2, '0')}:45`,
  lastUpdatedOn: `07/${String(15 + (index % 10)).padStart(2, '0')}/2024 19:${String((index * 3) % 60).padStart(2, '0')}:30`,
  extra: `Data ${index + 1}`,
}));

  const [selected, setSelected] = useState<string>('one');
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

  return (
    <>
  
      <SelectHeader
        title={t("templates")}
        showRiskLevel={false}
        Selecttitle="Type:"
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
        onDuplicate={handleDuplicate}
        totalPages={Math.ceil(filteredData.length / perPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />

      <div className="overflow-x-auto">
        <CommonDataTable<TemplateRow>
          columns={columns}
          data={paginatedData}
          pagination={false}
          onSelectionChange={setSelectedRows}
             rowClickPath={(row) => `/consent-manager/template/${row.id}`} 
        />
      </div>
     

      <div className="text-sm text-gray-600 mt-2 text-right bg">
<<<<<<< HEAD
        Showing {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, filteredData.length)} of {filteredData.length} entries
=======
        {t("Showing")} {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, filteredData.length)} of {filteredData.length} {t("entries")}
>>>>>>> 2871f152bc4701447aba44cd99ac2829d7ca8c99
      </div>
    </>
  );
};

export default ConsentManager;
