import React from "react";
import DataTable from "react-data-table-component";
import { useTranslation } from "react-i18next";

function CommonTable() {
  const { t } = useTranslation();
  const columns = [
    {
      name: t("ID"),
      selector: (row) => row.id,
      sortable: true,
      width: "70px",
    },
    {
      name: "Dept. Name",
      selector: (row) => row.deptName,
      sortable: true,
    },
    {
      name: "Active",
      selector: (row) => row.active,
      sortable: true,
      width: "90px",
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "PA Manager",
      selector: (row) => row.paManager,
      sortable: true,
    },
    {
      name: "PA Type",
      selector: (row) => row.paType,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    
  ];

  const data = Array.from({ length: 50 }, (_, index) => {
    const deptNames = ["Car Insurance", "Travel Insurance", "Health Insurance"];
    return {
      id: index + 1,
      deptName: deptNames[index % deptNames.length],
      active: "Yes",
      description: "Accounts Department",
      paManager: "Satyam Sinha",
      paType: "Mandatory/Regulatory",
      email: "Satyam.sinha@yopomail.com",
      phone: "9876543210",
    };
  });

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        backgroundColor: "#1976d2",
        color: "white",
        fontSize: "14px",
      },
    },
    rows: {
      style: {
        fontSize: "13px",
        borderBottom: "1px solid #ddd",
      },
    },
    table: {
      style: {
        border: "1px solid #ccc",
      },
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows
      pagination
      paginationPerPage={10}
      highlightOnHover
      customStyles={customStyles}
    />
  );
}

export default CommonTable;
