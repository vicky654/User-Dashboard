import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { MultiSelect } from '@mantine/core';
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
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

interface RoleRow {
  id: number;
  role: string;
  createdOn: string;
  updatedOn: string;
  updatedBy: string;
}

export default function StackCreate() {
  const today = new Date().toISOString().split("T")[0];

  const initialValues = {
    roles: [
      {
        id: 1,
        role: "Cookie Admin",
        createdOn: "",
        updatedOn: "",
        updatedBy: "Admin User"
      },
      {
        id: 2,
        role: "DPCM Template Approval",
     createdOn: "",
        updatedOn: "",
        updatedBy: "John Doe"
      }
    ] as RoleRow[]
  };
const selectedOption = useSelector((state: IRootState) => state.header.selectedOption);
console.log('Selected in dashboard:', selectedOption);
  return (
    <div className="p-4 border rounded shadow">

  
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("Submitted Values:", values.roles);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            
            <FieldArray name="roles">
              {({ push, remove }) => (
                <>
                <div className=" py-4 flex justify-between items-center">
                         <h2 className="font-bold ">User Roles</h2>
               
                 
                </div>


                  <table className="w-full border-collapse border">
                    <thead>
                      <tr className="bg-blue-600">
                        <th className="border p-2">Role</th>
                        <th className="border p-2">Created On</th>
                        <th className="border p-2">Last Updated On</th>
                        <th className="border p-2">Last Updated By</th>
                        <th className="border p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {values.roles.map((row, index) => (
                        <tr key={row.id}>
                          {/* Role Dropdown */}
                          <td className="border p-2">
                            <Field
                              as="select"
                              name={`roles.${index}.role`}
                              className="border p-1 rounded w-full"
                              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                const newRole = e.target.value;
                                setFieldValue(`roles.${index}.role`, newRole);
                                if (newRole) {
                                  setFieldValue(`roles.${index}.updatedOn`, today);
                                  setFieldValue(`roles.${index}.updatedBy`, "Current User");
                                }
                              }}
                            >
                              <option value="">Select Role</option>
                              {roleOptions.map((role) => (
                                <option key={role} value={role}>
                                  {role}
                                </option>
                              ))}
                            </Field>
                          </td>

                          {/* Created On */}
                          <td className="border p-2">
                            <Field
                              type="date"
                              name={`roles.${index}.createdOn`}
                              className="border p-1 rounded w-full"
                            />
                          </td>

                          {/* Updated On */}
                          <td className="border p-2">
                            <Field
                              type="date"
                              name={`roles.${index}.updatedOn`}
                              className="border p-1 rounded w-full"
                            />
                          </td>

                          {/* Updated By */}
                          <td className="border p-2">
                            <Field
                              type="text"
                              name={`roles.${index}.updatedBy`}
                              className="border p-1 rounded w-full"
                            />
                          </td>

                          {/* Actions */}
                          <td className="border p-2 text-center">
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="text-red-600 hover:text-red-800"
                            >
                              🗑
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mt-4 flex gap-2">
                 
                 <button
                      type="button"
                      onClick={() =>
                        push({
                          id: Date.now(),
                          role: "", // Default empty role
                          createdOn: "",
                          updatedOn:"" ,
                          updatedBy: ""
                        })
                      }
                      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                    >
                      +  Click to Add Role
                    </button>
                
                  </div>
                </>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>

 
      
    </div>
  );
}
