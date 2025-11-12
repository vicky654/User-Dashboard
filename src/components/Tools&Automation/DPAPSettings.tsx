import React, { useState } from "react";
import { Upload } from "lucide-react";
import ToggleSwitch from "../../CustomComponents/ToggleSwitch";

const DPAPSettings: React.FC = () => {
  const [trainingValidity, setTrainingValidity] = useState("12 months");
  const [consentEnabled, setConsentEnabled] = useState(true);
  const [processingActivity, setProcessingActivity] = useState("Accounts");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setUploadedFile(file);
  };

  const removeFile = () => setUploadedFile(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-gray-900 font-semibold text-base">DPAP Settings</h2>
        <p className="text-sm text-gray-500">
          These settings will be implemented in the awareness program only.
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Training Validity */}
        <div>
          <label className="text-sm text-gray-600 mb-1 block">
            Training Validity (months)
          </label>
          <select
            value={trainingValidity}
            onChange={(e) => setTrainingValidity(e.target.value)}
            className="border rounded-md w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            <option value="6 months">6 months</option>
            <option value="12 months">12 months</option>
            <option value="18 months">18 months</option>
            <option value="24 months">24 months</option>
          </select>
        </div>

        {/* Processing Activity */}
        <div>
          <label className="text-sm text-gray-600 mb-1 block">
            Processing Activity
          </label>
          <select
            value={processingActivity}
            onChange={(e) => setProcessingActivity(e.target.value)}
            className="border rounded-md w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            <option value="Accounts">Accounts</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Operations">Operations</option>
          </select>
        </div>
      </div>

      {/* Consent Toggle */}
      <div className="flex items-center gap-4">
        <label className="text-sm text-gray-700 font-medium">
          DPAP Consent
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
                  <ToggleSwitch
                                      checked={consentEnabled}
            onChange={() => setConsentEnabled(!consentEnabled)}
                                    />
     </label>
      </div>

      {/* File Upload */}
      <div>
        <label className="text-sm text-gray-700 font-medium mb-2 block">
          DPAP Additional Resources
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center hover:border-blue-300 transition-colors">
          {!uploadedFile ? (
            <label className="text-sm text-gray-500 cursor-pointer">
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Upload className="inline w-4 h-4 mr-1 text-blue-500" />
              <span className="text-blue-600 hover:underline">Upload a file</span> or drag and drop
            </label>
          ) : (
            <div className="flex justify-center items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
                <span className="text-sm text-gray-700">{uploadedFile.name}</span>
                <button
                  onClick={removeFile}
                  className="text-gray-500 hover:text-red-500 text-sm"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default DPAPSettings;
