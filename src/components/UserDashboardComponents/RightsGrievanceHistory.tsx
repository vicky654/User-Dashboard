import React, { useEffect, useState } from "react";
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
import withApiHandler from "../../api/withApiHandler";
import LoaderImg from "../../utils/Loader";
import { ConsentAPI } from "../../api/domains/consent.api";



const formatDate = (value?: string) => {
  if (!value) return "-";
  return new Date(value).toLocaleString();
};

interface Request {
  id: string;
  date: string;
  status: "Resolved" | "InProgress" | "Submitted";
  right: string;
}

interface OpenRequestItem {
  id: number;
  purpose: string;
  rag_status: string;
  request_no: string;
  status: string;
  created_at: string;
}

interface OpenRequestResponse {
  requests: {
    count: number;
    record: OpenRequestItem[];
  };
  grievance: {
    count: number;
    record: OpenRequestItem[];
  };
}


interface ApiProps {
    execute: <T>(apiCall: () => Promise<T>) => Promise<T>;
    isLoading?: boolean;
}

const RightsGrievanceHistory: React.FC<ApiProps> = ({ execute, isLoading }) => {
  const [activeTab, setActiveTab] = useState<string>("requests");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openData, setOpenData] = useState<OpenRequestResponse | null>(null);


  const userOpenRequest = async () => {
    const res = await execute(() => ConsentAPI.openRequest());
    const api = res.data.data;
    console.log("user data", api.records);
    setOpenData(api);
  };


  const fetchmyRequestExport = async (type: string) => {
    const res = await execute(() => ConsentAPI.myExportHistory(type));

   const blob = new Blob([res.data], {
      type: "application/vnd.ms-excel",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `consent-history-${type}.xlsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    userOpenRequest();
  }, []);

  // const requests: Request[] = [
  //   { id: "REQ12344", date: "2023-01-15", status: "Resolved", right: "Data Access Request" },
  //   { id: "REQ94348", date: "2023-02-20", status: "InProgress", right: "Data Erasure Request" },
  //   { id: "REQ34902", date: "2023-03-10", status: "Submitted", right: "Data Correction Request" },
  //   { id: "REQ59302", date: "2023-04-05", status: "Resolved", right: "Data Portability Request" },
  //   { id: "REQ43242", date: "2023-05-12", status: "Resolved", right: "Data Access Request" },
  // ];

  // const grievances: Request[] = [
  //   { id: "GRV123", date: "2023-06-10", status: "Resolved", right: "Grievance Redressal" },
  //   { id: "GRV456", date: "2023-06-18", status: "InProgress", right: "Right to Nominate" },
  // ];

  const requests = openData?.requests.record || [];
  const grievances = openData?.grievance.record || [];

  const data = activeTab === "requests" ? requests : grievances;

  const filteredData = data.filter(
    (item) =>
      item.request_no.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Assign to PA Manager":
        return <Badge color="green" variant="light">Assign to PA Manager</Badge>;
      case "Initiated":
        return <Badge color="yellow" variant="light">Initiated</Badge>;
      case "Assign to DPO":
        return <Badge color="blue" variant="light">Assign to DPO</Badge>;
      default:
        return <Badge color="gray" variant="light">Unknown</Badge>;
    }
  };
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      {isLoading ? <LoaderImg /> : null}
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
          <Button onClick={()=> fetchmyRequestExport(activeTab)}
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
          <Tabs.Tab value="requests">Requests ({openData?.requests.count ?? 0})</Tabs.Tab>
          <Tabs.Tab value="grievance">Grievance ({openData?.grievance.count ?? 0})</Tabs.Tab>
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
                {openData?.requests.record.length ? (
                  openData?.requests.record.map((item, index) => (
                    <tr key={index}  onClick={() => navigate(`/complaint-details/${item.id}`)} style={{"cursor":"pointer"}}>
                      <td>{item.request_no}</td>
                      <td>{formatDate(item?.created_at)}</td>
                      <td>{getStatusBadge(item?.status)}</td>
                      <td className="text-red-500 font-medium">{item?.purpose}</td>
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
                {openData?.grievance.record.length ? (
                  openData?.grievance.record.map((item, index) => (
                    <tr key={index}  onClick={() => navigate(`/complaint-details/${item.id}`)} style={{"cursor":"pointer"}}  >
                      <td>{item?.request_no}</td>
                      <td>{formatDate(item?.created_at)}</td>
                      <td>{getStatusBadge(item?.status)}</td>
                      <td className="text-red-500 font-medium">{item?.purpose}</td>
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

export default withApiHandler(RightsGrievanceHistory);
