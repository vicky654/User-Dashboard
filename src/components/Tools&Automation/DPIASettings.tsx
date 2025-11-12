import React, { useState } from "react";
import { Download, Upload } from "lucide-react";

const DPIASettings: React.FC = () => {
  const [mailReminder, setMailReminder] = useState("Weekly");

  const [riskMatrix, setRiskMatrix] = useState([
    { name: "Very Low", lower: 0.0, upper: 2.0, color: "bg-green-400", active: true },
    { name: "Low", lower: 2.0, upper: 4.0, color: "bg-lime-400", active: true },
    { name: "High", lower: 9.0, upper: 12.0, color: "bg-orange-400", active: true },
    { name: "Very High", lower: 12.0, upper: 16.0, color: "bg-red-500", active: true },
    { name: "Extreme", lower: 16.0, upper: 25.0, color: "bg-red-700", active: true },
  ]);

  const toggleActive = (index: number) => {
    const updated = [...riskMatrix];
    updated[index].active = !updated[index].active;
    setRiskMatrix(updated);
  };

  const riskMatrixValues = [
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10],
    [3, 6, 9, 12, 15],
    [4, 8, 12, 16, 20],
    [5, 10, 15, 20, 25],
  ];

  const getColor = (value: number) => {
    if (value <= 4) return "bg-green-400";
    if (value <= 8) return "bg-yellow-400";
    if (value <= 12) return "bg-orange-400";
    if (value <= 20) return "bg-red-500";
    return "bg-red-700";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-gray-900 font-semibold text-base">DPIA Settings</h2>
        <p className="text-sm text-gray-500">
          These settings will be implemented in the impact assessment only.
        </p>
      </div>

      {/* Mail Reminder */}
      <div className="w-72">
        <label className="text-sm text-gray-600 mb-1 block">DPIA Mail Reminder</label>
        <select
          value={mailReminder}
          onChange={(e) => setMailReminder(e.target.value)}
          className="border rounded-md w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      {/* Interactive Risk Matrix */}
      <div className="border rounded-lg p-5 shadow-sm bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold text-gray-700">Interactive Risk Matrix</h3>
     
        </div>

        {/* Full Width Grid */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-8">
          {/* Matrix Table */}
          <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-6 gap-1 w-full max-w-2xl">
              <div></div>
              {[1, 2, 3, 4, 5].map((sev) => (
                <div
                  key={sev}
                  className="text-center text-xs font-medium text-gray-500 py-1"
                >
                  {sev}
                </div>
              ))}

              {riskMatrixValues.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  <div className="flex items-center justify-center text-xs text-gray-500 font-medium">
                    {rowIndex + 1}
                  </div>
                  {row.map((val, colIndex) => (
                    <div
                      key={colIndex}
                      className={`h-10 flex items-center justify-center text-white text-sm font-semibold rounded ${getColor(
                        val
                      )}`}
                    >
                      {val}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">Severity →</div>
          </div>

          {/* Risk Levels Legend */}
          <div className="min-w-[180px]">
            <h4 className="text-sm font-semibold mb-2 text-gray-700">Risk Levels</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-400"></span> Very Low
              </li>
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-lime-400"></span> Low
              </li>
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-yellow-400"></span> Medium
              </li>
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-orange-400"></span> High
              </li>
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500"></span> Very High
              </li>
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-700"></span> Extreme
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Risk Matrix Status */}
      <div className="border rounded-lg p-5 shadow-sm bg-white">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Risk Matrix Status</h3>
            <p className="text-xs text-gray-500 mb-3">
              Manage your risk matrix criteria.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-md">
              <Upload className="w-4 h-4" /> Import records
            </button>
            <button className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-md">
              <Download className="w-4 h-4" /> Export All
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-700 border-b">
              <tr>
                <th className="py-2 px-3 text-left">Name</th>
                <th className="py-2 px-3 text-center">Lower Limit</th>
                <th className="py-2 px-3 text-center">Upper Limit</th>
                <th className="py-2 px-3 text-center">Color</th>
                <th className="py-2 px-3 text-center">Active</th>
              </tr>
            </thead>
            <tbody>
              {riskMatrix.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-all">
                  <td className="px-3 py-2">{item.name}</td>
                  <td className="px-3 py-2 text-center">{item.lower.toFixed(2)}</td>
                  <td className="px-3 py-2 text-center">{item.upper.toFixed(2)}</td>
                  <td className="px-3 py-2 text-center">
                    <span
                      className={`inline-block h-3 w-3 rounded-full ${item.color}`}
                    ></span>
                  </td>
                  <td className="px-3 py-2 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={item.active}
                        onChange={() => toggleActive(index)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                      <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></div>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="w-full text-blue-600 text-sm mt-3 py-2 hover:bg-blue-50 rounded-md">
          + Add a line
        </button>
      </div>

  
    </div>
  );
};

export default DPIASettings;
