import React, { useEffect, useState } from "react";
import { Button, Card, Text, Divider } from "@mantine/core";
import { CheckCircle, Bell, AlertTriangle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import withApiHandler from "../../api/withApiHandler";
import { ConsentAPI } from "../../api/domains/consent.api";

interface ApiProps {
  execute: <T>(apiCall: () => Promise<T>) => Promise<T>;
  isLoading?: boolean;
}

const formatDate = (value?: string) => {
  if (!value) return "-";
  return new Date(value).toLocaleString();
};

const ConsentDetails = ({ execute, isLoading }: ApiProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [data, setData] = useState<any>(null);

  const fetchUserData = async () => {
    if (!id) return;

    const res = await execute(() => ConsentAPI.consentdetail(id));
    const api = res.data.data;

    console.log("Consent Details API Response:", api);
    setData(api);
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  if (isLoading || !data) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading consent details...
      </div>
    );
  }

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Consent Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-sm">
              <Detail label="Name" value={data?.name} />
              <Detail label="PA Manager" value={data?.manager?.name} />
              <Detail
                label="Processing Activity"
                value={data?.processing_activity?.name}
              />
              <Detail label="Email" value={data?.email} />
              <Detail label="Phone" value={data?.phone} />
              <Detail label="Status" value={data?.status} />
              <Detail label="IP Address" value={data?.ip_address} />
              <Detail label="Device Type" value={data?.user_agent} />
              <Detail label="Legacy / Live" value={data?.legacy_type} />
              <Detail label="Digital / Paper" value={data?.consent_type} />
              <Detail label="Valid Till" value={formatDate(data?.valid_till)} />
              <Detail label="Created On" value={formatDate(data?.created_at)} />
              <Detail
                label="Last Updated"
                value={formatDate(data?.updated_at)}
              />
              <Detail
                label="Consented On"
                value={formatDate(data?.consented_on)}
              />
              <Detail label="Closed On" value={formatDate(data?.closed_on)} />
              <Detail label="Template" value={data?.template?.name} />
            </div>
          </Card>

          {/* TEMPLATE BODY */}
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Text fw={600} mb="md">
              Template Body
            </Text>

            <div className="p-4 border rounded-md bg-gray-50 text-sm whitespace-pre-wrap">
       <p
          className="text-gray-700 mb-2"
          dangerouslySetInnerHTML={{ __html: data?.template?.body || `No template body available from API.` }}
        />
            </div>
          
          </Card>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-4">
          {
            data?.status !== "Expired"  && data?.status !== "Withdrawn" ? (
                 <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            className="border-red-200 bg-red-50"
          >
            <div className="flex items-center mb-2">
              <AlertTriangle className="text-red-500 mr-2 h-5 w-5" />
              <Text fw={600} className="text-red-600">
                Withdraw Consent
              </Text>
            </div>

            <Text size="sm" c="dimmed" mb="md">
              Withdrawing consent will stop processing of this user's data.
            </Text>

            <Button
              fullWidth
              color="red"
              radius="md"
              variant="filled"
                className="primary-btn"
              onClick={() => navigate(`/revoke-consent/${id}`)}
            >
              Withdraw Consent
            </Button>
          </Card> ) : null
          }
       

          <Card shadow="sm" p="lg" radius="md" withBorder>
            <div className="flex items-start mb-3">
              <CheckCircle className="text-green-500 mr-2 mt-0.5 h-5 w-5" />
              <div>
                <Text fw={600}>Confirmation</Text>
                <Text size="sm" c="dimmed">
                  You will receive confirmation once withdrawal is processed.
                </Text>
              </div>
            </div>

            <Divider my="sm" />

            <div className="flex items-start">
              <Bell className="text-blue-500 mr-2 mt-0.5 h-5 w-5" />
              <div>
                <Text fw={600}>Real-time Notifications</Text>
                <Text size="sm" c="dimmed">
                  System receives instant notification to comply with request.
                </Text>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

interface DetailProps {
  label: string;
  value?: string | number | null;
}

const Detail: React.FC<DetailProps> = ({ label, value }) => (
  <div>
    <Text size="xs" c="dimmed" tt="uppercase">
      {label}
    </Text>
    <Text fw={500}>{value || "-"}</Text>
  </div>
);

export default withApiHandler(ConsentDetails);


