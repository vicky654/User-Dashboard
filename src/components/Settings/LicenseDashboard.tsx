import React from "react";
import { Eye, AlertCircle, BookOpen, FileText } from "lucide-react";
import SelectHeader from "../../pages/Components/SelectHeader";

interface LicenseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  purchased: number;
  available: number;
  consumed: number;
  expired: number;
  usage: number;
}

const LicenseCard: React.FC<LicenseCardProps> = ({
  icon,
  title,
  description,
  purchased,
  available,
  consumed,
  expired,
  usage,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 w-full max-w-sm transition hover:shadow-md">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 text-center mb-4">
        <div className="bg-blue-50 rounded-lg py-2">
          <p className="text-blue-600 font-semibold">{purchased}</p>
          <p className="text-xs text-gray-600">Purchased</p>
        </div>
        <div className="bg-green-50 rounded-lg py-2">
          <p className="text-green-600 font-semibold">{available}</p>
          <p className="text-xs text-gray-600">Available</p>
        </div>
        <div className="bg-yellow-50 rounded-lg py-2">
          <p className="text-yellow-600 font-semibold">{consumed}</p>
          <p className="text-xs text-gray-600">Consumed</p>
        </div>
        <div className="bg-red-50 rounded-lg py-2">
          <p className="text-red-600 font-semibold">{expired}</p>
          <p className="text-xs text-gray-600">Expired</p>
        </div>
      </div>

      {/* Usage Progress */}
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>Usage</span>
          <span>{usage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${usage}%` }}
          ></div>
        </div>
      </div>

      {/* Footer Button */}
      <button className="w-full border border-gray-300 rounded-lg py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition">
        <Eye className="w-4 h-4" />
        View Details
      </button>
    </div>
  );
};

const LicenseDashboard: React.FC = () => {
  const licenses = [
    {
      icon: <AlertCircle className="w-5 h-5 text-blue-600" />,
      title: "Data Principal Grievance Redressal",
      description: "Manage your DPGR license.",
      purchased: 100,
      available: 50,
      consumed: 50,
      expired: 0,
      usage: 50,
    },
    {
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      title: "Data Protection Awareness Program",
      description: "Manage your DPAP license.",
      purchased: 100,
      available: 50,
      consumed: 50,
      expired: 0,
      usage: 80,
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: "Data Protection Consent Management",
      description: "Manage your DPCM license.",
      purchased: 100,
      available: 50,
      consumed: 50,
      expired: 0,
      usage: 50,
    },
  ];

  return (


        <div className="p-6 space-y-6">
      {/* Header */}
      <SelectHeader
        title="License"
        subtitle="Manage your license settings for your organization."
        showRiskLevel={false}
        Selecttitle=""
      />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {licenses.map((item, index) => (
        <LicenseCard key={index} {...item} />
      ))}
    </div>
    </div>
  );
};

export default LicenseDashboard;
