import React, { useState } from "react";
import { Tabs, Table, TextInput, Badge, TabsValue } from "@mantine/core";
import { Download, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Consent {
  id: number;
  purpose: string;
  dateGranted: string;
  status: "Active" | "Expired" | "Withdrawn";
}

const ConsentHistory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabsValue>("active");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const consents: Record<string, Consent[]> = {
    active: [
      { id: 1, purpose: "Marketing Emails", dateGranted: "2023-01-15", status: "Active" },
      { id: 2, purpose: "Product Updates", dateGranted: "2023-02-20", status: "Active" },
      { id: 3, purpose: "Customer Surveys", dateGranted: "2023-03-10", status: "Active" },
      { id: 4, purpose: "Personalized Ads", dateGranted: "2023-04-05", status: "Active" },
      { id: 5, purpose: "Loyalty Program", dateGranted: "2023-05-12", status: "Active" },
    ],
    expired: [
      { id: 6, purpose: "Promotional Offers", dateGranted: "2022-09-10", status: "Expired" },
      { id: 7, purpose: "User Feedback", dateGranted: "2022-10-22", status: "Expired" },
    ],
    withdrawn: [
      { id: 8, purpose: "Analytics Data", dateGranted: "2023-01-01", status: "Withdrawn" },
    ],
  };

  const currentTab = (activeTab ?? "active") as string;

  const filteredData = consents[currentTab].filter((c) =>
    c.purpose.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Consent History</h2>
          <p className="text-gray-500 text-sm">
            View and manage your data consent history.
          </p>
        </div>

        {/* Download Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition">
          <Download size={16} />
          <span>Download History</span>
        </button>
      </div>

      {/* Search Bar */}
      <TextInput
        placeholder="Search by purpose, date, or status"
        icon={<Search size={16} />}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
        className="max-w-md mb-6"
      />

      {/* Tabs */}
      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="active">Active ({consents.active.length})</Tabs.Tab>
          <Tabs.Tab value="expired">Expired ({consents.expired.length})</Tabs.Tab>
          <Tabs.Tab value="withdrawn">Withdrawn ({consents.withdrawn.length})</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="active" pt="xs">
          <ConsentTable data={filteredData} showRevoke onRowClick={navigate} />
        </Tabs.Panel>

        <Tabs.Panel value="expired" pt="xs">
          <ConsentTable data={filteredData} onRowClick={navigate} />
        </Tabs.Panel>

        <Tabs.Panel value="withdrawn" pt="xs">
          <ConsentTable data={filteredData} onRowClick={navigate} />
        </Tabs.Panel>
      </Tabs>
    </main>
  );
};

interface ConsentTableProps {
  data: Consent[];
  showRevoke?: boolean;
  onRowClick: (path: string) => void;
}

const ConsentTable: React.FC<ConsentTableProps> = ({ data, showRevoke = false, onRowClick }) => {
  return (
    <div className="bg-white border rounded-2xl shadow-sm mt-4">
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Date Granted</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c) => (
            <tr
              key={c.id}
              className="cursor-pointer hover:bg-gray-100 transition"
              onClick={() => onRowClick(`/consent-details/${c.id}`)}
            >
              <td>{c.purpose}</td>
              <td>{c.dateGranted}</td>
              <td>
                <Badge
                  color={
                    c.status === "Active"
                      ? "green"
                      : c.status === "Expired"
                      ? "yellow"
                      : "red"
                  }
                  variant="light"
                >
                  {c.status}
                </Badge>
              </td>
              <td>
                {showRevoke ? (
                  <button
                    className="text-red-500 hover:underline font-medium"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent navigation
                      alert(`Revoking consent for ${c.purpose}`);
                    }}
                  >
                    Revoke
                  </button>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ConsentHistory;
