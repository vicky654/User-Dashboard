import React, { useState } from "react";
import {
  Tabs,
  Table,
  Button,
  TextInput,
  Badge,
  Card,
} from "@mantine/core";
import { Search, Plus, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Request {
  id: string;
  date: string;
  status: "Resolved" | "InProgress" | "Submitted";
  right: string;
}

const RightsGrievanceHistory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("requests");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const requests: Request[] = [
    { id: "REQ12344", date: "2023-01-15", status: "Resolved", right: "Data Access Request" },
    { id: "REQ94348", date: "2023-02-20", status: "InProgress", right: "Data Erasure Request" },
    { id: "REQ34902", date: "2023-03-10", status: "Submitted", right: "Data Correction Request" },
    { id: "REQ59302", date: "2023-04-05", status: "Resolved", right: "Data Portability Request" },
    { id: "REQ43242", date: "2023-05-12", status: "Resolved", right: "Data Access Request" },
  ];

  const grievances: Request[] = [
    { id: "GRV123", date: "2023-06-10", status: "Resolved", right: "Grievance Redressal" },
    { id: "GRV456", date: "2023-06-18", status: "InProgress", right: "Right to Nominate" },
  ];

  const data = activeTab === "requests" ? requests : grievances;

  const filteredData = data.filter(
    (item) =>
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.right.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Resolved":
        return <Badge color="green" variant="light">Resolved</Badge>;
      case "InProgress":
        return <Badge color="yellow" variant="light">In Progress</Badge>;
      case "Submitted":
        return <Badge color="blue" variant="light">Submitted</Badge>;
      default:
        return <Badge color="gray" variant="light">Unknown</Badge>;
    }
  };
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Rights & Grievance History</h2>
          <p className="text-gray-500 text-sm">
            View and manage your data request history.
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            color="red"
            radius="md"
            leftIcon={<Plus size={16} />}
          >
            Access Rights
          </Button>
          <Button
              color="red"
                        radius="md"
                        variant="filled"
                        className="primary-btn"
            leftIcon={<Download size={16} />}
          >
            Download History
          </Button>
        </div>
      </div>

      {/* Search Input */}
      <TextInput
        placeholder="Search by purpose, date, or status"
        icon={<Search size={16} />}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
        className="max-w-md mb-6"
      />

      {/* Tabs */}
      <Tabs value={activeTab} onTabChange={(value) => setActiveTab(value ?? "requests")}>
        <Tabs.List>
          <Tabs.Tab value="requests">Requests ({requests.length})</Tabs.Tab>
          <Tabs.Tab value="grievance">Grievance ({grievances.length})</Tabs.Tab>
        </Tabs.List>

        {/* Table Panel */}
        <Tabs.Panel value="requests" pt="xs">
          <Card shadow="sm" radius="md" withBorder className="bg-white mt-4">
            <Table striped highlightOnHover>
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Rights</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index}  onClick={() => navigate(`/complaint-details/${item.id}`)} style={{"cursor":"pointer"}}>
                      <td>{item.id}</td>
                      <td>{item.date}</td>
                      <td>{getStatusBadge(item.status)}</td>
                      <td className="text-red-500 font-medium">{item.right}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center text-gray-500 py-4">
                      No matching records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Card>
        </Tabs.Panel>

        <Tabs.Panel value="grievance" pt="xs">
          <Card shadow="sm" radius="md" withBorder className="bg-white mt-4">
            <Table striped highlightOnHover>
              <thead>
                <tr >
                  <th>Request ID</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Rights</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index}  onClick={() => navigate(`/complaint-details/${item.id}`)} style={{"cursor":"pointer"}}  >
                      <td>{item.id}</td>
                      <td>{item.date}</td>
                      <td>{getStatusBadge(item.status)}</td>
                      <td className="text-red-500 font-medium">{item.right}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center text-gray-500 py-4">
                      No matching records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </main>
  );
};

export default RightsGrievanceHistory;
