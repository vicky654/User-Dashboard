import React, { useEffect, useState } from "react";
import { Tabs, Table, TextInput, Badge, TabsValue } from "@mantine/core";
import { Download, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import withApiHandler from "../../api/withApiHandler";
<<<<<<< HEAD
import { requestAPI } from '../../api/request';
import { ConsentAPI } from "../../api/domains/consent.api";
import { formatDate, formatDateTime } from "../../utils/HelperFunctions";
import LoaderImg from "../../utils/Loader";
=======
import { requestAPI } from "../../api/request";
import LoaderImg from "../../utils/Loader";

/* ================= TYPES ================= */
>>>>>>> bba60b802440fe120d7a8c2a57de1978841733b5

interface Consent {
  id: number;
  purpose: string;
  dateGranted: string;
   validTill: string;
  status: "Deemed Consent" | "Expired" | "Withdrawn";
}

interface ApiProps {
  execute: <T>(apiCall: () => Promise<T>) => Promise<T>;
  isLoading?: boolean;
}

/* ================= MAIN COMPONENT ================= */

<<<<<<< HEAD

const ConsentHistory = ({ execute, isLoading }: ApiProps) =>  {
=======
function ConsentHistory({ execute, isLoading }: ApiProps) {
>>>>>>> bba60b802440fe120d7a8c2a57de1978841733b5
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabsValue>("active");
  const [searchQuery, setSearchQuery] = useState("");

<<<<<<< HEAD
  const [user, setUserData] = useState<any>(null);
  const [consents, setConsents] = useState<Record<string, Consent[]>>({
  active: [],
  expired: [],
  withdrawn: [],
});
=======
  const [consentData, setConsentData] = useState<{
    active: Consent[];
    expired: Consent[];
    withdrawn: Consent[];
  }>({
    active: [],
    expired: [],
    withdrawn: [],
  });
>>>>>>> bba60b802440fe120d7a8c2a57de1978841733b5

  /* ================= API CALL ================= */

<<<<<<< HEAD
const fetchUserData = async () => {
  const res = await execute(() => ConsentAPI.userList());

  const api = res.data.data;

  const mapData = (arr: any[], status: "Active" | "Expired" | "Withdrawn") =>
    arr?.map((item) => ({
      id: item.id,
      purpose: item.processing_activity,
      dateGranted: item.date_granted,
      validTill: item.valid_till,
      status:item.status,
    }));

  setConsents({
    active: mapData(api?.active?.data, "Active"),
    expired: mapData(api?.expired?.data, "Expired"),
    withdrawn: mapData(api?.withdrawn?.data, "Withdrawn"),
  });
};

const fetchExport = async (type: string) => {
    const res = await execute(() => ConsentAPI.exportHistory(type));

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

=======
  const fetchUserData = async () => {
    const res = await execute(() => requestAPI.requestType());

    setConsentData({
      active: res.data.data.active.data,
      expired: res.data.data.expired.data,
      withdrawn: res.data.data.withdrawn.data,
    });
  };
>>>>>>> bba60b802440fe120d7a8c2a57de1978841733b5

  useEffect(() => {
    fetchUserData();
  }, []);

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

<<<<<<< HEAD


  const currentTab = (activeTab ?? "active") as string;

  const filteredData = consents[currentTab].filter((c) =>
    (c.purpose ?? "").toLowerCase().includes(searchQuery.toLowerCase())
  );
=======
  /* ================= UI ================= */
>>>>>>> bba60b802440fe120d7a8c2a57de1978841733b5



  console.log(consents,"consents");
  
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
<<<<<<< HEAD
       {isLoading ? <LoaderImg /> : null}
=======
      {isLoading ? <LoaderImg /> : null}
>>>>>>> bba60b802440fe120d7a8c2a57de1978841733b5
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Consent History data</h2>
          <p className="text-gray-500 text-sm">
            View and manage your data consent history.
          </p>
        </div>

<<<<<<< HEAD
        {/* Download Button */}
        <button onClick={() => fetchExport(currentTab)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition">
=======
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition">
>>>>>>> bba60b802440fe120d7a8c2a57de1978841733b5
          <Download size={16} />
          <span>Download History</span>
        </button>
      </div>

      {/* Search Bar (UI unchanged, logic not applied) */}
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
          <Tabs.Tab value="active">
            Active ({consentData.active.length})
          </Tabs.Tab>
          <Tabs.Tab value="expired">
            Expired ({consentData.expired.length})
          </Tabs.Tab>
          <Tabs.Tab value="withdrawn">
            Withdrawn ({consentData.withdrawn.length})
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="active" pt="xs">
          <ConsentTable
            data={consentData.active}
            showRevoke
            onRowClick={navigate}
          />
        </Tabs.Panel>

        <Tabs.Panel value="expired" pt="xs">
          <ConsentTable
            data={consentData.expired}
            onRowClick={navigate}
          />
        </Tabs.Panel>

        <Tabs.Panel value="withdrawn" pt="xs">
          <ConsentTable
            data={consentData.withdrawn}
            onRowClick={navigate}
          />
        </Tabs.Panel>
      </Tabs>
    </main>
  );
}

/* ================= TABLE ================= */

interface ConsentTableProps {
  data: Consent[];
  showRevoke?: boolean;
  onRowClick: (path: string) => void;
}

const ConsentTable: React.FC<ConsentTableProps> = ({
  data,
  showRevoke = false,
  onRowClick,
}) => {
  return (
    <div className="bg-white border rounded-2xl shadow-sm mt-4">
      <Table striped highlightOnHover>
        <thead>
          <tr>
<<<<<<< HEAD
            <th>Processing Activity</th>
            <th>Date Granted</th>
            <th>Valid Till</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((c) => (
            <tr
              key={c.id}
              className="cursor-pointer hover:bg-gray-100 transition"
              onClick={() => onRowClick(`/consent-details/${c.id}`)}
            >
              <td>{c.purpose}</td>
           <td>{formatDateTime(c.dateGranted)}</td>
             <td>{formatDateTime(c.validTill)}</td>
            
              <td>
                <Badge
                  color={
                    c.status === "Deemed Consent"
                      ? "green"
                      : c.status === "Expired"
                      ? "orange"
                      : c.status === "Withdrawn"
                      ? "red"
                      : "gray"
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
                      e.stopPropagation(); 
                      onRowClick("/revoke-consent/" + c.id);
=======
            <th className="!text-white">Purpose</th>
            <th className="!text-white">Date Granted</th>
            <th className="!text-white">Status</th>
            <th className="!text-white">Actions</th>
          </tr>
        </thead>
>>>>>>> bba60b802440fe120d7a8c2a57de1978841733b5

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-6 text-gray-500">
                No records found
              </td>
            </tr>
          ) : (
            data.map((c) => (
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
                        e.stopPropagation();
                        onRowClick(`/revoke-consent/${c.id}`);
                      }}
                    >
                      Revoke
                    </button>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default withApiHandler(ConsentHistory);
