import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import SelectHeader from "../../pages/Components/SelectHeader";

interface Source {
  name: string;
}

interface Integration {
  name: string;
  type: string;
  apiUrl: string;
  key: string;
  secret: string;
  productType: string;
  activity: string;
}

const IntegrationsTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"source" | "integrations">("source");

  const [sources, setSources] = useState<Source[]>([
    { name: "Workday" },
    { name: "Salesforce" },
  ]);

  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      name: "Emp to DPAP",
      type: "Workday",
      apiUrl: "https://dpdp.company-workday.portal.com",
      key: "WEQLSKDJFHGRYCOCBNDZ",
      secret: "A{So9#wxH2%Aes&UndIO",
      productType: "DPAP",
      activity: "HR",
    },
    {
      name: "Emp to DPAP",
      type: "Workday",
      apiUrl: "https://dpdp.company-workday.portal.com",
      key: "WEQLSKDJFHGRYCOCBNDZ",
      secret: "A{So9#wxH2%Aes&UndIO",
      productType: "DPAP",
      activity: "HR",
    },
    {
      name: "Leads to DPCM",
      type: "Salesforce",
      apiUrl: "https://dpdp.company-workday.portal.com",
      key: "WEQLSKDJFHGRYCOCBNDZ",
      secret: "A{So9#wxH2%Aes&UndIO",
      productType: "DPCM",
      activity: "Buyer-Onboarding",
    },
  ]);

  const addIntegration = () => {
    setIntegrations([
      ...integrations,
      {
        name: "",
        type: "",
        apiUrl: "",
        key: "",
        secret: "",
        productType: "",
        activity: "",
      },
    ]);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <SelectHeader
        title="Integration Settings"
        subtitle="Configure your integration settings from here."
        showRiskLevel={false}
        Selecttitle=""
      />


    <div className="bg-white rounded-xl border shadow-sm p-4">
      {/* Tabs */}
      <div className="flex border-b text-sm font-medium mb-4">
        <button
          onClick={() => setActiveTab("source")}
          className={`px-4 py-2 border-b-2 transition ${
            activeTab === "source"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-800"
          }`}
        >
          Source Master
        </button>
        <button
          onClick={() => setActiveTab("integrations")}
          className={`px-4 py-2 border-b-2 transition ${
            activeTab === "integrations"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-800"
          }`}
        >
          Integrations
        </button>
      </div>

      {/* Source Master Tab */}
      {activeTab === "source" && (
        <div>
          <div className="bg-gray-50 font-semibold text-gray-700 py-2 px-4 rounded-t">
            Name
          </div>
          <div className="divide-y">
            {sources.map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-50"
              >
                <span className="text-gray-700 text-sm">{src.name}</span>
                <button
                  onClick={() =>
                    setSources(sources.filter((_, idx) => idx !== i))
                  }
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <button
            
            className="flex items-center justify-center w-full bg-blue-50 text-blue-600 text-sm font-medium py-2 rounded-md mt-2 hover:bg-blue-100 transition"
          >
            <Plus className="w-4 h-4 mr-1" /> Add a line
          </button>
        </div>
      )}

      {/* Integrations Tab */}
      {activeTab === "integrations" && (
        <div>
          {/* Header */}
          <div className="grid grid-cols-7 bg-gray-50 font-semibold text-gray-700 py-2 px-4 rounded-t text-sm">
            <div>Name</div>
            <div>Type</div>
            <div>API URL</div>
            <div>Key</div>
            <div>Secret</div>
            <div>Product Type</div>
            <div>Processing Activity</div>
          </div>

          {/* Rows */}
          <div className="divide-y">
            {integrations.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-7 items-center px-4 py-3 text-sm hover:bg-gray-50"
              >
                <div className="font-medium text-gray-800">{item.name}</div>
                <div>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {item.type}
                  </span>
                </div>
                <div className="text-blue-600 truncate">{item.apiUrl}</div>
                <div className="text-gray-700">{item.key}</div>
                <div className="text-gray-700 truncate">{item.secret}</div>
                <div className="text-gray-800">{item.productType}</div>
                <div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.activity === "HR"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.activity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Add a Line Button */}
          <button
        
            className="flex items-center justify-center w-full bg-blue-50 text-blue-600 text-sm font-medium py-2 rounded-md mt-2 hover:bg-blue-100 transition"
          >
            <Plus className="w-4 h-4 mr-1" /> Add a line
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default IntegrationsTable;
