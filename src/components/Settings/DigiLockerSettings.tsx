import React, { useState } from "react";
import SelectHeader from "../../pages/Components/SelectHeader";





const DigiLockerSettings: React.FC = () => {
  const [form, setForm] = useState({
    clientId: "",
    secretKey: "",
    ageLimit: "",
    redirectUrl: "",
    active: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckCredentials = () => {
    alert("DigiLocker credentials checked successfully!");
  };

  const handleDiscard = () => {
    setForm({
      clientId: "",
      secretKey: "",
      ageLimit: "",
      redirectUrl: "",
      active: true,
    });
  };

  return (
    
        <div className="p-6 space-y-6">
      {/* Header */}
      <SelectHeader
        title="DigiLocker Settings"
        subtitle="We have integrated DigiLocker API authentication into our system. To configure DigiLocker API settings, please enter the Client ID, Client Secret Key, and other required credentials."
        showRiskLevel={false}
        Selecttitle=""
      />
    <form className="">

      {/* Info */}
      <p className="text-sm text-gray-600 mb-4">
        For more details about DigiLocker API, please{" "}
        <a href="#" className="text-blue-600 hover:underline">
          click here
        </a>.
      </p>

      {/* Inputs grid */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Client ID</label>
          <input
            type="password"
            name="clientId"
            value={form.clientId}
            onChange={handleChange}
            placeholder="Enter Client ID"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Secret Key</label>
          <input
            type="password"
            name="secretKey"
            value={form.secretKey}
            onChange={handleChange}
            placeholder="Enter Secret Key"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Age Limit</label>
          <input
            type="number"
            name="ageLimit"
            value={form.ageLimit}
            onChange={handleChange}
            placeholder="Enter Age"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Redirect URL</label>
          <input
            type="url"
            name="redirectUrl"
            value={form.redirectUrl}
            onChange={handleChange}
            placeholder="Enter URL"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Toggle */}
      <div className="flex items-center gap-3 mt-4">
        <label className="text-sm font-medium">Active</label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="active"
            checked={form.active}
            onChange={handleChange}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
          <span className="sr-only">Toggle Active</span>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t">
        <button
          type="button"
          onClick={handleDiscard}
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200"
        >
          Discard Changes
        </button>

        <button
          type="button"
          onClick={handleCheckCredentials}
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Check DigiLocker Credentials
        </button>
      </div>
    </form>
    </div>
  );
};

export default DigiLockerSettings;
