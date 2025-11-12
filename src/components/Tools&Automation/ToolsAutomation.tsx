import React, { useState } from "react";
import DPCMSettings from "./DPCMSettings";
import SelectHeader from "../../pages/Components/SelectHeader";
import DPGRSettings from "./DPGRSettings";
import DPIASettings from "./DPIASettings";
import DPTPASettings from "./DPTPASettings";
import DPAPSettings from "./DPAPSettings";

const tools = ["ALL", "DPCM", "DPGR", "DPAP", "DPIA", "DPTPA"];

const ToolsAutomation: React.FC = () => {
  const [activeTool, setActiveTool] = useState("ALL");
  const [showChildActivity, setShowChildActivity] = useState("Yes");
  const [communicationMedium, setCommunicationMedium] = useState("SMS & Email");

  const handleSave = () => {
    alert(`${activeTool} Settings saved successfully!`);
  };

  const handleDiscard = () => {
    setShowChildActivity("Yes");
    setCommunicationMedium("SMS & Email");
  };

  return (
       <div className="p-6 space-y-6">
      {/* Header */}
      <SelectHeader
        title="Tools  & Automation"
        subtitle="Configure your tools and automation settings."
        showRiskLevel={false}
        Selecttitle=""
      />
    <div className="bg-white rounded-2xl shadow-sm border p-5  mt-6">
      {/* Tabs */}
      <div className="flex gap-2 mb-5 border-b pb-2">
        {tools.map((tool) => (
          <button
            key={tool}
            onClick={() => setActiveTool(tool)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTool === tool
                ? "bg-blue-50 text-blue-600 border border-blue-200"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tool}
          </button>
        ))}
      </div>

      {/* Conditional Content */}
{activeTool === "DPIA" ? (
  <DPIASettings />
) : activeTool === "DPGR" ? (
  <DPGRSettings />
) : activeTool === "DPCM" ? (
  <DPCMSettings />
) : activeTool === "DPAP" ? (
  <DPAPSettings />
) : activeTool === "DPTPA" ? (
  <DPTPASettings />
) : (
  // your ALL tab content

        <div className="space-y-4">
          <h2 className="text-gray-900 font-semibold text-base">All Settings</h2>
          <p className="text-sm text-gray-500">
            These settings will be implemented across all tools.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">
                Show Child Processing Activity
              </label>
              <select
                value={showChildActivity}
                onChange={(e) => setShowChildActivity(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">
                Communication Medium
              </label>
              <select
                value={communicationMedium}
                onChange={(e) => setCommunicationMedium(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="SMS & Email">SMS & Email</option>
                <option value="Email Only">Email Only</option>
                <option value="SMS Only">SMS Only</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Footer Buttons */}
      <div className="flex justify-end gap-3 pt-6 border-t mt-6">
        <button
          onClick={handleDiscard}
          className="px-4 py-2 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          Discard Changes
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
  );
};

export default ToolsAutomation;
