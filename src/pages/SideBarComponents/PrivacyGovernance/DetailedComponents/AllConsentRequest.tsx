// ConsentManager.tsx
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useGetApiCall } from '../../../../CustomHooks/useGetApiCall';
import SelectHeader from '../../../Components/SelectHeader';
import CommonToolbar from '../../../Components/CommonToolbar';
import { CommonDataTable } from '../../../../CustomHooks/CustomDataTable';
import Noticetoseekconsent from './Noticetoseekconsent';


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

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Template Name', accessor: 'templateName' },
  { header: 'Template Type', accessor: 'templateType' },
  { header: 'Language', accessor: 'language' },
  { header: 'Sub Type', accessor: 'subType' },
  { header: 'Created On', accessor: 'createdOn' },
  { header: 'Last updated on', accessor: 'lastUpdatedOn' },
  { header: 'Extra', accessor: 'extra' },
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

const AllConsentRequest = () => {
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

  const handleExport = () => {
    const maxId = Math.max(...tableData.map(d => d.id));
    const duplicated = selectedRows.map((row, i) => ({
      ...row,
      id: maxId + i + 1,
    }));
    setTableData(prev => [...prev, ...duplicated]);
    toast.success(`${duplicated.length} row(s) duplicated.`);
  };


const [open, setOpen] = useState(false);

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

  return (
    <>
  
      <SelectHeader
        title="All Consent Request"
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
        onImport={handleImport}
        onExport={handleExport}
        // onDuplicate={handleDuplicate}
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
        />
      </div>
      <div className='createicons'>



      </div>

      <div className="text-sm text-gray-600 mt-2 text-right bg">
        Showing {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, filteredData.length)} of {filteredData.length} entries
      </div>
      <Noticetoseekconsent
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Notice to seek consent"
  tabs={[
    {
      label: "Legacy (Historic Data)",
  content: (
  <div className="space-y-4">
    {/* Communication Channel */}
    <div className="flex items-center gap-4">
      <label className="w-1/2 text-sm font-medium text-gray-700">
        Communication Channel :
      </label>
      <select className="w-1/2 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
        <option>SMS & Mail</option>
      </select>
    </div>

    {/* Consent Type */}
    <div className="flex items-center gap-4">
      <label className="w-1/2 text-sm font-medium text-gray-700">
        Consent Type :
      </label>
      <select className="w-1/2 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
        <option>Legacy</option>
      </select>
    </div>

    {/* Send Consent Via */}
    <div className="flex items-center gap-4">
      <label className="w-1/2 text-sm font-medium text-gray-700">
        Send Consent Via :
      </label>
      <select className="w-1/2 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
        <option>Import</option>
      </select>
    </div>

    {/* Subject */}
    <div className="flex items-center gap-4">
      <label className="w-1/2 text-sm font-medium text-gray-700">
        Subject :
      </label>
      <input
        placeholder="Type..."
        className="w-1/2 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>

    {/* Buttons */}
    <div className="flex justify-center gap-4 mt-4">
      <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
        Upload Document
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        Download Sample
      </button>
    </div>
  </div>
),

    },
    {
      label: "Based on privacy served",
      content: (
        <div className="p-4 text-gray-600"> {/* Replace with actual form */} Coming Soon... </div>
      ),
    },
  ]}
  footer={
    <>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Send</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setOpen(false)}>
        Cancel
      </button>
    </>
  }
/>
    </>
  );
};

export default AllConsentRequest;
