import React, { useState } from "react";
import ToggleSwitch from "../../CustomComponents/ToggleSwitch";

interface DPGRRow {
  name: string;
  slaExpected: number;
  slaAmberNotification: number;
  slaRedNotification: number;
  amberAlert: number;
  redAlert: number;
  description: string;
  updatedBy: string;
  department: string;
  mandatoryVendor: boolean;
}

const initialData: DPGRRow[] = [
  {
    name: "Right to Correction",
    slaExpected: 0,
    slaAmberNotification: 0,
    slaRedNotification: 0,
    amberAlert: 0,
    redAlert: 0,
    description:
      "Get your personal data corrected, completed, or updated for which you have previously given consent to Data Fiduciary.",
    updatedBy: "Jaspal Singh",
    department: "Accounts",
    mandatoryVendor: true,
  },
  {
    name: "Right of Grievance Redressal",
    slaExpected: 0,
    slaAmberNotification: 0,
    slaRedNotification: 0,
    amberAlert: 0,
    redAlert: 0,
    description:
      "Get your personal data corrected, completed, or updated for which you have previously given consent to Data Fiduciary.",
    updatedBy: "Jaspal Singh",
    department: "Accounts",
    mandatoryVendor: true,
  },
  {
    name: "Right to Withdraw Consent",
    slaExpected: 0,
    slaAmberNotification: 0,
    slaRedNotification: 0,
    amberAlert: 0,
    redAlert: 0,
    description: "Withdraw your consent.",
    updatedBy: "Jaspal Singh",
    department: "Accounts",
    mandatoryVendor: true,
  },
  {
    name: "Right to Nominate",
    slaExpected: 0,
    slaAmberNotification: 0,
    slaRedNotification: 0,
    amberAlert: 0,
    redAlert: 0,
    description: "Right to nominate.",
    updatedBy: "Jaspal Singh",
    department: "Accounts",
    mandatoryVendor: true,
  },
  {
    name: "Legacy Consent Revoke Request",
    slaExpected: 0,
    slaAmberNotification: 0,
    slaRedNotification: 0,
    amberAlert: 0,
    redAlert: 0,
    description: "Legacy consent revoke request.",
    updatedBy: "Jaspal Singh",
    department: "Accounts",
    mandatoryVendor: true,
  },
];

const DPGRSettings: React.FC = () => {
  const [otpValidity, setOtpValidity] = useState("15 minutes");
  const [data, setData] = useState<DPGRRow[]>(initialData);

  const handleToggle = (index: number) => {
    const newData = [...data];
    newData[index].mandatoryVendor = !newData[index].mandatoryVendor;
    setData(newData);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-gray-900 font-semibold text-base">DPGR Settings</h2>
        <p className="text-sm text-gray-500">
          These settings will be implemented in the grievance redressal module.
        </p>
      </div>

      {/* OTP Validity */}
      <div className="w-60">
        <label className="text-sm text-gray-600 mb-1 block">OTP Validity</label>
        <select
          value={otpValidity}
          onChange={(e) => setOtpValidity(e.target.value)}
          className="border rounded-md w-full px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100"
        >
          <option value="5 minutes">5 minutes</option>
          <option value="10 minutes">10 minutes</option>
          <option value="15 minutes">15 minutes</option>
          <option value="30 minutes">30 minutes</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-700 border-b">
            <tr>
              <th className="py-2 px-3 text-left">Name *</th>
              <th className="py-2 px-3">SLA Expected (Days)*</th>
              <th className="py-2 px-3">SLA Amber Notification (Days)*</th>
              <th className="py-2 px-3">SLA Red Notification (Days)*</th>
              <th className="py-2 px-3">Amber Alert (Days)*</th>
              <th className="py-2 px-3">Red Alert (Days)*</th>
              <th className="py-2 px-3">Description *</th>
              <th className="py-2 px-3">Last Updated By</th>
              <th className="py-2 px-3">Department</th>
              <th className="py-2 px-3">Mandatory Vendor</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-all"
              >
                <td className="px-3 py-3 font-medium text-gray-800">
                  {item.name}
                </td>
                <td className="px-3 py-3 text-center">{item.slaExpected}</td>
                <td className="px-3 py-3 text-center">
                  {item.slaAmberNotification}
                </td>
                <td className="px-3 py-3 text-center">
                  {item.slaRedNotification}
                </td>
                <td className="px-3 py-3 text-center">{item.amberAlert}</td>
                <td className="px-3 py-3 text-center">{item.redAlert}</td>
                <td className="px-3 py-3 text-gray-600 w-60">
                  {item.description}
                </td>
                <td className="px-3 py-3 text-center">{item.updatedBy}</td>
                <td className="px-3 py-3">
                  <select className="border rounded-md px-2 py-1 text-sm">
                    <option>Accounts</option>
                    <option>Admin</option>
                    <option>HR</option>
                  </select>
                </td>
                <td className="px-3 py-3 text-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                       <ToggleSwitch
                             checked={item.mandatoryVendor}
                      onChange={() => handleToggle(index)}
                        />
                </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DPGRSettings;
