import React, { useState } from "react";
import { Pencil, Trash2, Copy } from "lucide-react";

const DPTPASettings: React.FC = () => {
  const [approvalLevel, setApprovalLevel] = useState("Level 2");

  const [scaleData, setScaleData] = useState([
    {
      scoreLevel: "Not Acceptable",
      lowerLimit: 0,
      upperLimit: 20,
      year: 2025,
      status: "High Risk",
      color: "bg-red-100 text-red-700",
    },
    {
      scoreLevel: "Needs Improvement",
      lowerLimit: 21,
      upperLimit: 50,
      year: 2025,
      status: "Medium Risk",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      scoreLevel: "Acceptable with Conditions",
      lowerLimit: 51,
      upperLimit: 80,
      year: 2025,
      status: "Low Risk",
      color: "bg-green-100 text-green-700",
    },
    {
      scoreLevel: "Fully Acceptable",
      lowerLimit: 81,
      upperLimit: 100,
      year: 2025,
      status: "Low Risk",
      color: "bg-green-100 text-green-700",
    },
  ]);

  return (
    <div className="w-full p-6 bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-gray-900 font-semibold text-base">DPTPA Settings</h2>
        <p className="text-sm text-gray-500">
          These settings will be implemented in the vendor risk assessment only.
        </p>
      </div>

      {/* Approval Level */}
      <div className="mb-8 w-64">
        <label className="text-sm text-gray-600 mb-1 block">Approval Level (VRA)</label>
        <select
          value={approvalLevel}
          onChange={(e) => setApprovalLevel(e.target.value)}
          className="border rounded-md w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
        >
          <option value="Level 1">Level 1</option>
          <option value="Level 2">Level 2</option>
          <option value="Level 3">Level 3</option>
        </select>
      </div>

      {/* Scale Configuration */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700">Scale Configuration</h3>
        <p className="text-xs text-gray-500 mb-4">
          Define scoring ranges and risk statuses.
        </p>

        {/* Table */}
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-700 border-b">
              <tr>
                <th className="py-2 px-3 text-left font-medium text-xs uppercase tracking-wide">
                  Score Level
                </th>
                <th className="py-2 px-3 text-center font-medium text-xs uppercase tracking-wide">
                  Lower Limit
                </th>
                <th className="py-2 px-3 text-center font-medium text-xs uppercase tracking-wide">
                  Upper Limit
                </th>
                <th className="py-2 px-3 text-center font-medium text-xs uppercase tracking-wide">
                  Year
                </th>
                <th className="py-2 px-3 text-center font-medium text-xs uppercase tracking-wide">
                  Status
                </th>
                <th className="py-2 px-3 text-center font-medium text-xs uppercase tracking-wide">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {scaleData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-3">{row.scoreLevel}</td>
                  <td className="py-2 px-3 text-center">{row.lowerLimit}</td>
                  <td className="py-2 px-3 text-center">{row.upperLimit}</td>
                  <td className="py-2 px-3 text-center">{row.year}</td>
                  <td className="py-2 px-3 text-center">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${row.color}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-2 px-3 text-center flex items-center justify-center gap-2 text-gray-500">
                    <button className="hover:text-blue-600">
                      <Pencil size={16} />
                    </button>
                    <button className="hover:text-gray-600">
                      <Copy size={16} />
                    </button>
                    <button className="hover:text-red-600">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add line */}
        <button className="w-full text-blue-600 text-sm mt-3 py-2 hover:bg-blue-50 rounded-md flex items-center justify-center gap-1">
          + Add a line
        </button>
      </div>

      {/* Footer Buttons */}

    </div>
  );
};

export default DPTPASettings;
