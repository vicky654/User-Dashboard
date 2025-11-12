import React from "react";
import { Card, Badge, Text } from "@mantine/core";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

interface NomineeRequest {
  id: number;
  nomineeName: string;
  status: "Pending" | "Successful" | "Rejected";
  submittedOn: string;
  lastUpdated: string;
  message: string;
}

const NomineeRequestStatus: React.FC = () => {
  const requests: NomineeRequest[] = [
    {
      id: 1,
      nomineeName: "Ananya Sharma",
      status: "Pending",
      submittedOn: "12 May 2023",
      lastUpdated: "13 May 2023, 10:30 AM",
      message:
        "Your request to nominate a representative is currently under review. You will receive an update once the process is complete.",
    },
    {
      id: 2,
      nomineeName: "Rohan Verma",
      status: "Successful",
      submittedOn: "14 July 2023",
      lastUpdated: "14 July 2023, 02:45 PM",
      message:
        "Your nomination request has been successfully approved.",
    },
    {
      id: 3,
      nomineeName: "Priya Singh",
      status: "Rejected",
      submittedOn: "11 June 2023",
      lastUpdated: "13 June 2023, 10:00 AM",
      message:
        "Your nomination request was rejected. Reason: Mismatched signature.",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Pending":
        return {
          color: "yellow",
          icon: <Clock className="text-yellow-500 w-5 h-5" />,
          badgeColor: "yellow",
        };
      case "Successful":
        return {
          color: "green",
          icon: <CheckCircle2 className="text-green-500 w-5 h-5" />,
          badgeColor: "green",
        };
      case "Rejected":
        return {
          color: "red",
          icon: <XCircle className="text-red-500 w-5 h-5" />,
          badgeColor: "red",
        };
      default:
        return { color: "gray", icon: null, badgeColor: "gray" };
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen p-8 flex justify-center">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <h1 className="text-xl font-semibold text-gray-900 mb-1">
          Nominee Request Status
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Track the status of your nominee requests and view updates.
        </p>

        {/* List of Requests */}
        <div className="space-y-4">
          {requests.map((req) => {
            const { color, icon, badgeColor } = getStatusStyle(req.status);
            return (
              <Card
                key={req.id}
                withBorder
                radius="md"
                className={`bg-white border-l-4 border-${color}-500`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    {icon}
                    <div>
                      <Text fw={500} size="sm">
                        Request to Nominate {req.nomineeName}
                      </Text>
                      <Text size="xs" c="dimmed">
                        Submitted on {req.submittedOn}
                      </Text>
                    </div>
                  </div>
                  <Badge color={badgeColor} variant="light">
                    {req.status}
                  </Badge>
                </div>

                <div className="mt-3 pl-8">
                  <Text size="sm" className="text-gray-700">
                    {req.message}
                  </Text>
                  <Text size="xs" c="dimmed" mt={4}>
                    Last updated on {req.lastUpdated}
                  </Text>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default NomineeRequestStatus;
