import React from "react";
import { Card, Badge, Text } from "@mantine/core";
import { FileText, CheckCircle, CircleDot, Clock, XCircle } from "lucide-react";

const ComplaintDetails: React.FC = () => {
  const complaint = {
    id: "CMP-2024-000123",
    dateReceived: "July 15, 2024",
    status: "In Review",
    dataPrincipal: "Ethan Harper",
    dataFiduciary: "Tech Solutions Inc.",
    complaintType: "Data Breach",
    description:
      "Ethan Harper reported a data breach involving his personal information. He claims that Tech Solutions Inc. failed to adequately protect his data, leading to unauthorized access and potential misuse. The complaint details the nature of the breach, the information compromised, and the potential impact on Ethan.",
    history: [
      {
        icon: <FileText size={16} />,
        title: "Complaint Received",
        date: "July 15, 2024",
        color: "text-blue-600",
      },
      {
        icon: <CheckCircle size={16} />,
        title: "Complaint Assigned",
        date: "July 16, 2024",
        color: "text-green-500",
      },
      {
        icon: <CircleDot size={16} />,
        title: "In Review",
        date: "July 17, 2024",
        color: "text-yellow-500",
      },
      {
        icon: <XCircle size={16} />,
        title: "Closed",
        date: "July 17, 2024",
        color: "text-green-600",
      },
    ],
  };

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-start py-10 px-6">
      {/* Header */}
      <div className="w-full max-w-4xl mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Complaint Details</h1>
        <p className="text-gray-500 text-sm mt-1">
          View detailed information about the complaint, including history, status
          updates, and actions taken.
        </p>
      </div>

      {/* Complaint Overview */}
      <Card shadow="sm" radius="md" withBorder className="max-w-4xl w-full mb-6">
        <h2 className="font-medium text-gray-800 mb-3">Complaint Overview</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 mb-4 text-sm">
          <div>
            <Text c="dimmed" size="xs">Complaint ID</Text>
            <Text>{complaint.id}</Text>
          </div>
          <div>
            <Text c="dimmed" size="xs">Date Received</Text>
            <Text>{complaint.dateReceived}</Text>
          </div>
          <div>
            <Text c="dimmed" size="xs">Status</Text>
            <Badge color="yellow" variant="light">{complaint.status}</Badge>
          </div>
          <div>
            <Text c="dimmed" size="xs">Data Principal</Text>
            <Text>{complaint.dataPrincipal}</Text>
          </div>
          <div>
            <Text c="dimmed" size="xs">Data Fiduciary</Text>
            <Text>{complaint.dataFiduciary}</Text>
          </div>
          <div>
            <Text c="dimmed" size="xs">Complaint Type</Text>
            <Text>{complaint.complaintType}</Text>
          </div>
        </div>

        <div className="mt-3">
          <Text c="dimmed" size="xs">Description</Text>
          <Text className="text-gray-700 leading-relaxed mt-1 text-sm">
            {complaint.description}
          </Text>
        </div>
      </Card>

      {/* Complaint History */}
      <Card shadow="sm" radius="md" withBorder className="max-w-4xl w-full">
        <h2 className="font-medium text-gray-800 mb-4">Complaint History</h2>

        <div className="relative border-l border-gray-200 pl-6">
          {complaint.history.map((item, index) => (
            <div key={index} className="mb-6 relative">
              <div
                className={`absolute -left-[10px] top-1 flex items-center justify-center w-5 h-5 bg-white rounded-full border ${item.color}`}
              >
                <div className={`${item.color} `}>{item.icon}</div>
              </div>
              <div className="ms-4">
                      <p className="font-medium text-gray-800 mr-4">{item.title}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
              </div>
        
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
};

export default ComplaintDetails;
