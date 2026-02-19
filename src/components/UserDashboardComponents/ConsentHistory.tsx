import React, { useEffect, useState } from "react";
import { Tabs, Table, TextInput, Badge, TabsValue } from "@mantine/core";
import { Download, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import withApiHandler from "../../api/withApiHandler";
import { requestAPI } from '../../api/request';
import { ConsentAPI } from "../../api/domains/consent.api";
import { formatDate, formatDateTime } from "../../utils/HelperFunctions";
import LoaderImg from "../../utils/Loader";

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



const ConsentHistory = ({ execute, isLoading }: ApiProps) =>  {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabsValue>("active");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [user, setUserData] = useState<any>(null);
  const [consents, setConsents] = useState<Record<string, Consent[]>>({
  active: [],
  expired: [],
  withdrawn: [],
});


const fetchUserData = async () => {
  const res = await execute(() => ConsentAPI.userList());

  const api = res.data.data;

  const mapData = (arr: any[], status: "Active" | "Expired" | "Withdrawn") =>
    arr.map((item) => ({
      id: item.id,
      purpose: item.processing_activity,
      dateGranted: item.date_granted,
      validTill: item.valid_till,
      status:item.status,
    }));

  setConsents({
    active: mapData(api.active.data, "Active"),
    expired: mapData(api.expired.data, "Expired"),
    withdrawn: mapData(api.withdrawn.data, "Withdrawn"),
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


  useEffect(()=>{

    fetchUserData();

  },[])
  



  const currentTab = (activeTab ?? "active") as string;

  const filteredData = consents[currentTab].filter((c) =>
    c.purpose.toLowerCase().includes(searchQuery.toLowerCase())
  );



  console.log(consents,"consents");
  
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
       {isLoading ? <LoaderImg /> : null}
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Consent History data</h2>
          <p className="text-gray-500 text-sm">
            View and manage your data consent history.
          </p>
        </div>

        {/* Download Button */}
        <button onClick={() => fetchExport(currentTab)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition">
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
  onRevoke?: () => void;
}

const ConsentTable: React.FC<ConsentTableProps> = ({ data, showRevoke = false, onRowClick, }) => {
  return (
    <div className="bg-white border rounded-2xl shadow-sm mt-4">
      <Table striped highlightOnHover >
        <thead>
          <tr>
            <th>Processing Activity</th>
            <th>Date Granted</th>
            <th>Valid Till</th>
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

                      // alert(`Revoking consent for ${c.purpose}`);
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

export default withApiHandler(ConsentHistory);
