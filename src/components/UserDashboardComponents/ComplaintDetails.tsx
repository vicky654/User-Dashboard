import React, { useEffect } from "react";
import { Card, Badge, Text } from "@mantine/core";
import { FileText, CheckCircle, CircleDot, Clock, XCircle } from "lucide-react";
import withApiHandler from "../../api/withApiHandler";
import { ConsentAPI } from "../../api/domains/consent.api";
import { useParams } from "react-router-dom";

interface ApiProps {
  execute: <T>(apiCall: () => Promise<T>) => Promise<T>;
  isLoading?: boolean;
}


interface ComplaintDetails {
  TrackAssigneeStatus: {
    id: number;
    from_user: string;
    to_user: string;
    status: string;
    comment: string | null;
    dpo_comment: string | null;
    attachment: string | null;
    created_at: string;
  }[];

  actionButtons: {
    assign: boolean;
    mark_completed: boolean;
    reassign: boolean;
    update_task: boolean;
  };

  assignedUsers: {
    id: number;
    name: string;
  }[];

  close_comment: {
    closed_comment: string | null;
    closed_attachment: string | null;
    closed_on: string | null;
  };

  consents: any[];

  dataPrincipalInformation: {
    name: string;
    email: string;
    phone: string;
  };

  escalation: {
    isEscalated: boolean;
    escalatedComment: string | null;
    escalatedDate: string | null;
  };

  nomineeDetails: {
    nominee_name: string;
    nominee_dob: string;
    nominee_email: string | null;
    nominee_number: string | null;
    nominee_address: string | null;
    nominee_relation_id: number;
  };

  requestInformation: {
    currentStatus: string;
    processingActivity: string[];
    requestNo: string;
    requestType: string;
    slaRisk: "Low" | "Medium" | "High";
  };

  requestWorkflow: {
    date: string;
    stage: string;
  }[];

  timeline: {
    createdOn: string;
    lastUpdated: string;
    completedOn: string | null;
    daysOpen: number;
    daysRemaining: number | null;
  };
}



const ComplaintDetails: React.FC<ApiProps> = ({ execute, isLoading }) => {

    const { id } = useParams<{ id: string }>();
    console.log("Complaint ID:", id);

  const [complaintDetails, setComplaintDetails] = React.useState<ComplaintDetails|null>(null);


  const complaintData = async () => {
    if (!id) return;

    const res = await execute(() => ConsentAPI.myRequestDetials(id));
    const api = res.data.data;

    console.log("Complaint Details API Response:", api);
    setComplaintDetails(api);
  };


  useEffect(() => {
    complaintData();
  }, [id]);





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
            <Text>{complaintDetails?.requestInformation?.requestNo}</Text>
          </div>
          <div>
            <Text c="dimmed" size="xs">Date Received</Text>
            <Text>{complaintDetails?.timeline?.createdOn}</Text>
          </div>
          <div>
            <Text c="dimmed" size="xs">Status</Text>
            <Badge color="yellow" variant="light">{complaintDetails?.requestInformation?.currentStatus}</Badge>
          </div>
          <div>
            <Text c="dimmed" size="xs">Data Principal</Text>
            <Text>{complaintDetails?.dataPrincipalInformation?.name}</Text>
          </div>
          <div>
            <Text c="dimmed" size="xs">Data Fiduciary</Text>
            <Text>{complaint.dataFiduciary}</Text>
          </div>
          <div>
            <Text c="dimmed" size="xs">Complaint Type</Text>
            <Text>{complaintDetails?.requestInformation?.requestType}</Text>
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

export default withApiHandler(ComplaintDetails); // Wrap with withApiHandlerComplaintDetails;
