import React from "react";
import { toast } from "react-toastify";
import { CommonDataTable } from "../../CustomHooks/CustomDataTable";

interface RowData {
  id: number;
  deptName: string;
  description: string;
  paManager: string;
  paType: string;
  email: string;
  phone: string;
  active: string;
}

interface Props {
  data: RowData[];
  setData: React.Dispatch<React.SetStateAction<RowData[]>>;
}

const StakeholdersTable: React.FC<Props> = ({ data, setData }) => {
  const handleToggleActive = (id: number) => {
    setData((prev) =>
      prev.map((row) =>
        row.id === id
          ? { ...row, active: row.active === "Yes" ? "No" : "Yes" }
          : row
      )
    );
    toast.success("Active status updated!");
  };

  const columns = [
    { Header: "Department Name", accessor: "deptName" },
    { Header: "Description", accessor: "description" },
    { Header: "PA Manager", accessor: "paManager" },
    {
      Header: "PA Type",
      accessor: "paType",
      Cell: ({ value }: { value: string }) => (
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            value === "Mandatory/Regulatory"
              ? "bg-blue-100 text-blue-800"
              : value === "Optional"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {value}
        </span>
      ),
    },
    { Header: "Email", accessor: "email" },
    { Header: "Phone", accessor: "phone" },
    {
      Header: "Active",
      accessor: "active",
      Cell: ({ row }: any) => (
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={row.original.active === "Yes"}
            onChange={() => handleToggleActive(row.original.id)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 relative transition">
            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></span>
          </div>
        </label>
      ),
    },
  ];

  return <CommonDataTable columns={columns} data={data} />;
};

export default StakeholdersTable;
