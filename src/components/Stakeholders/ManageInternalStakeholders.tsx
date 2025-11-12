import React, { useState } from "react";
import SelectHeader from "../../pages/Components/SelectHeader";
import { useGetApiCall } from "../../CustomHooks/useGetApiCall";
import CommonToolbar from "../../pages/Components/CommonToolbar";
import { toast } from "react-toastify";
import { CommonDataTable } from "../../CustomHooks/CustomDataTable";
import ToggleSwitch from "../../CustomComponents/ToggleSwitch";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface StakeholderRow {
  id: number;
  name: string;
  active: boolean;
  email: string;
  phone: string;
  roles: string;
  latestAuth: string;
  extras: string;
}

export default function ManageInternalStakeholders() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<string>("one");
  const [search, setSearch] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<StakeholderRow[]>([]);
  const [tableData, setTableData] = useState<StakeholderRow[]>([
    {
      id: 1,
      name: "Pawan Mishra",
      active: false,
      email: "Priyanshu.kumar@yopmail.com",
      phone: "9876543210",
      roles: "Department Manager",
      latestAuth: "07/17/2024 18:05:45",
      extras: "9876543210",
    },
    {
      id: 2,
      name: "Ankit Sharma",
      active: true,
      email: "ankit.sharma@yopmail.com",
      phone: "9876501234",
      roles: "Team Lead",
      latestAuth: "07/18/2024 09:12:30",
      extras: "1234567890",
    },
    {
      id: 3,
      name: "Ravi Kumar",
      active: false,
      email: "ravi.kumar@yopmail.com",
      phone: "9123456789",
      roles: "Analyst",
      latestAuth: "07/16/2024 14:25:10",
      extras: "9988776655",
    },
  ]);

  const { data: optionsData } = useGetApiCall({
    url: "/processing_activities",
    onSuccess: (res: any) => console.log("Options List:", res),
  });

  const options =
    optionsData?.processingActivities?.map((item: any) => ({
      label: item?.processingActivitiesName,
      value: item?.id,
    })) || [];

  const handleDelete = () => {
    const selectedIds = selectedRows.map((row) => row.id);
    const newData = tableData.filter((row) => !selectedIds.includes(row.id));
    setTableData(newData);
    setSelectedRows([]);
    toast.success(`${selectedIds.length} row(s) deleted.`);
  };

  const handleDuplicate = () => {
    const maxId = tableData.length ? Math.max(...tableData.map((d) => d.id)) : 0;
    const duplicated = selectedRows.map((row, i) => ({
      ...row,
      id: maxId + i + 1,
    }));
    setTableData((prev) => [...prev, ...duplicated]);
    toast.success(`${duplicated.length} row(s) duplicated.`);
  };

  const handleSearch = () => {
    setAppliedSearch(search);
    setCurrentPage(1);
  };

  const handleResetSearch = () => {
    setSearch("");
    setAppliedSearch("");
    setCurrentPage(1);
  };

  const handleToggleActive = (id: number) => {
    setTableData((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, active: !row.active } : row
      )
    );
  };

  const filteredData = tableData.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(appliedSearch.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const formattedData = paginatedData.map((row) => ({
    ...row,
    active: (
      <ToggleSwitch
        checked={row.active}
        onChange={() => handleToggleActive(row.id)}
      />
    ),
  }));

  const columns = [

   { header: t('id'), accessor: 'id' },
    { header: t("name"), accessor: "name" },
    { header: t("active"), accessor: "active" },
    { header: t("email"), accessor: "email" },
    { header: t("phone"), accessor: "phone" },
    { header: t("roles"), accessor: "roles" },
    { header: t("latestAuth"), accessor: "latestAuth" },
    { header: t("extras"), accessor: "extras" },
  ];
  
// const columns = [
//   { header: t('id'), accessor: 'id' },
//   { header: t('deptName'), accessor: 'deptName' },
//   { header: t('active'), accessor: 'active' },
//   { header: t('description'), accessor: 'description' },
//   { header: t('paManager'), accessor: 'paManager' },
//   { header: t('paType'), accessor: 'paType' },
//   { header: t('email'), accessor: 'email' },
//   { header: t('phone'), accessor: 'phone' },
// ];

  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/create-stakeholders");
  }
  return (
    <div>
      <SelectHeader
        title={t("ManageInternalStakeholders")}
        showRiskLevel={false}
        Selecttitle="Roles:"
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
        <CommonDataTable
          columns={columns}
          data={formattedData}
          pagination={false}
          onSelectionChange={setSelectedRows}
        />
      </div>

      <div className="text-sm text-gray-600 mt-2 text-right">
        {t('Showing')} {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, filteredData.length)} {t('of')} {filteredData.length} {t('entries')}
      </div>
    </div>
  );
}
