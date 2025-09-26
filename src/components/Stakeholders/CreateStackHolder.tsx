import React, { useState } from "react";
import { useFormik } from "formik";
import SelectHeader from "../../pages/Components/SelectHeader";
import UserCreate from "../DPDPIcons/UserCreate";
import { CommonDataTable } from "../../CustomHooks/CustomDataTable";
import StackCreate from "./StackCreate";
import { MultiSelect } from "@mantine/core";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => (
  <button
    type="button"
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${checked ? "bg-green-500" : "bg-gray-300"
      }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${checked ? "translate-x-6" : "translate-x-1"
        }`}
    />
  </button>
);

interface DepartmentRow {
  id: number;
  roles: string;
  createdon: string;
  lastupdatedon: string;
  lastupdatedby: string;
  email: string;
  phone: string;
}

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Roles", accessor: "roles" },
  { header: "Created On", accessor: "createdon" },
  { header: "Last Updated On", accessor: "lastupdatedon" },
  { header: "Last Updated By", accessor: "lastupdatedby" },
  { header: "Email", accessor: "email" },
  { header: "Phone", accessor: "phone" },
];

const initialData: DepartmentRow[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  roles: ["Car Insurance", "Travel Insurance", "Health Insurance"][index % 3],
  createdon: '07/17/2024 18:05:45',
  lastupdatedon: '07/17/2024 18:05:45',
  lastupdatedby: 'Pawan Mishra',
  email: 'Satyam.sinha@yopmail.com',
  phone: '9876543210',
}));

const CreateStackHolder = () => {
  const [editMode, setEditMode] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [tableData] = useState<DepartmentRow[]>(initialData);
  const [selectedRows, setSelectedRows] = useState<DepartmentRow[]>([]);
  const [appliedSearch, setAppliedSearch] = useState("");
const roleOptions = [
  "User Roles",
  "Audit Log",
  "DPCM Template Approval",
  "Cookie Admin",
  "Senior Management",
  "Department Manager",
  "DPGR Admin",
  "DPCM Admin",
  "DPIA Admin",
  "DPAP Admin",
  "DPO"
];

  const formik = useFormik({
    initialValues: {
      name: "Osama",
      email: "pawanmishra@dpdpconsultants.com",
      phone: "+91-7042332987",
      designation: "DPO",
      active: true,
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      setEditMode(false);
    },
  });

  const filteredData = tableData.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(appliedSearch.toLowerCase())
    )
  );
  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <>
      <SelectHeader title="Create Stakeholder" showRiskLevel={false} />

      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start md:items-center relative">
        {/* Avatar Section */}


        {/* Details Section */}
        <div className="flex-1">
          {editMode ? (
            <form onSubmit={formik.handleSubmit} className="p-6 rounded-xl">
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">
                      Name <span>:</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      className="border px-3 py-2 rounded w-full"
                      placeholder="Enter Text"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">
                      Email Address <span>:</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="border px-3 py-2 rounded w-full"
                      placeholder="Enter Text"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">
                      Phone <span>:</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      className="border px-3 py-2 rounded w-full"
                      placeholder="Enter Text"
                    />
                  </div>
                    <div className="flex items-center">
                    <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">
                      User Roles <span>:</span>
                    </label>
                        <MultiSelect
    
      placeholder="User Roles"
      data={roleOptions}
      defaultValue={['Cookie Admin']}
      clearable
    />

                  </div>
                  <div className="flex items-center">
                    <label className="w-[300px] font-medium text-gray-700 flex justify-between pr-2">
                      Active Status <span>:</span>
                    </label>
                    <ToggleSwitch
                      checked={formik.values.active}
                      onChange={() =>
                        formik.setFieldValue("active", !formik.values.active)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 col-span-2 mt-4 justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="px-4 py-2 bg-red-300 text-white rounded-md hover:bg-red-400"
                >
                  Discard
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2">
              <span className="font-semibold">Name</span>
              <span>: {formik.values.name}</span>
              <span className="font-semibold">Email Address</span>
              <span>: {formik.values.email}</span>
              <span className="font-semibold">Phone</span>
              <span>: {formik.values.phone}</span>
              <span className="font-semibold">Designation</span>
              <span>: {formik.values.designation}</span> 
               <span className="font-semibold">Active Status</span>
              <span>:       <ToggleSwitch
              checked={formik.values.active}
           
              onChange={() =>
                formik.setFieldValue("active", !formik.values.active)
              }
            /></span>
            </div>
          )}
        </div>

        {!editMode && (
          <button
            onClick={() => setEditMode(true)}
            className="absolute top-4 right-4 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
          >
            <i className="fa fa-edit"></i> Edit
          </button>
        )}
      </div>

      {/* Table with Horizontal Scroll */}
      {/* <div className="overflow-x-auto mt-4">
        <div className="min-w-max">
          <CommonDataTable<DepartmentRow>
            columns={columns}
            data={paginatedData}
            pagination={false}
            onSelectionChange={setSelectedRows}
          />
        </div>
      </div>

      <div className="text-sm text-gray-600 mt-4 text-right">
        Showing {(currentPage - 1) * perPage + 1}–
        {Math.min(currentPage * perPage, filteredData.length)} of{" "}
        {filteredData.length} entries
      </div> */}
      <StackCreate/>
    </>
  );
};

export default CreateStackHolder;
