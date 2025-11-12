import React from "react";
import { Package, User } from "lucide-react";

interface ConsumedLicense {
  user: string;
  licenseId: string;
  usedOn: string;
  quantity: number;
  usedFor: string;
}

const LicenseDetails: React.FC = () => {
  const consumedLicenses: ConsumedLicense[] = [
    {
      user: "Jaspal Singh",
      licenseId: "LID-79501",
      usedOn: "Oct 1, 2025, 04:44 PM",
      quantity: 1,
      usedFor: "27092024095906000004",
    },
    {
      user: "Jaspal Singh",
      licenseId: "LID-79501",
      usedOn: "Oct 1, 2025, 04:44 PM",
      quantity: 1,
      usedFor: "27092024095906000004",
    },
    {
      user: "Jaspal Singh",
      licenseId: "LID-79501",
      usedOn: "Oct 1, 2025, 04:44 PM",
      quantity: 1,
      usedFor: "27092024095906000004",
    },
  ];

  return (
    <div className="space-y-6">
      {/* License Information */}
      <div className="bg-white   p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <Package className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">
            License Information
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg py-3 text-center">
            <p className="text-blue-600 text-lg font-semibold">50,000</p>
            <p className="text-xs text-gray-600">Purchased</p>
          </div>
          <div className="bg-green-50 rounded-lg py-3 text-center">
            <p className="text-green-600 text-lg font-semibold">49,803</p>
            <p className="text-xs text-gray-600">Available</p>
          </div>
          <div className="bg-yellow-50 rounded-lg py-3 text-center">
            <p className="text-yellow-600 text-lg font-semibold">197</p>
            <p className="text-xs text-gray-600">Consumed</p>
          </div>
          <div className="bg-red-50 rounded-lg py-3 text-center">
            <p className="text-red-600 text-lg font-semibold">0</p>
            <p className="text-xs text-gray-600">Expired</p>
          </div>
        </div>

        {/* Details Row */}
        <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700 mb-5">
          <div>
            <p className="font-semibold">Company</p>
            <p>DPDP Consultants</p>
          </div>
          <div>
            <p className="font-semibold">License Type</p>
            <p>Data Principal Grievance Redressal (DPGR)</p>
          </div>
          <div>
            <p className="font-semibold">Purchase Date</p>
            <p>Sep 24, 2024, 04:44 PM</p>
          </div>
          <div>
            <p className="font-semibold">Expiry Date</p>
            <p>Sep 24, 2025, 04:44 PM</p>
          </div>
        </div>

        {/* Usage Progress */}
        <div className="bg-blue-200 rounded p-3">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Usage</span>
            <span>0% utilized</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: "0%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">0 / 50,000</p>
        </div>
      </div>

      {/* Consumed License Table */}
      <div className="bg-white  p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Package className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">
            Consumed License
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b text-gray-500 text-left">
                <th className="py-2 px-3 font-medium">Responsible User</th>
                <th className="py-2 px-3 font-medium">License ID</th>
                <th className="py-2 px-3 font-medium">License Used On</th>
                <th className="py-2 px-3 font-medium text-center">Quantity</th>
                <th className="py-2 px-3 font-medium">Used For</th>
              </tr>
            </thead>
            <tbody>
              {consumedLicenses.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-2 px-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-semibold">
                      {item.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    {item.user}
                  </td>
                  <td className="py-2 px-3 text-blue-600">{item.licenseId}</td>
                  <td className="py-2 px-3">{item.usedOn}</td>
                  <td className="py-2 px-3 text-center">{item.quantity}</td>
                  <td className="py-2 px-3">{item.usedFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LicenseDetails;
