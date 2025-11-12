import React from "react";
import { Button, Card, Text, Divider } from "@mantine/core";
import { CheckCircle, Bell, AlertTriangle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ConsentDetails: React.FC = () => {
      const { id } = useParams<{ id: string }>();
      const navigate = useNavigate();
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Consent History</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Consent Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Text fw={600} mb="md">
              Consent Details
            </Text>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-sm">
              <Detail label="Name" value="Ramanuj Singh" />
              <Detail label="PA Manager" value="Ashwini21" />
              <Detail label="Processing Activity" value="Delhi Account" />
              <Detail label="Email" value="ramanuj.singh29@yopmail.com" />
              <Detail label="Phone" value="3212887323" />
              <Detail label="Email Status" value="Sent" />
              <Detail label="IP Address" value="-" />
              <Detail label="Device Type" value="-" />
              <Detail label="Legacy / Live" value="Legacy" />
              <Detail label="Digital / Paper" value="Digital" />
              <Detail label="Valid Till" value="2025-09-29 06:23:11" />
              <Detail label="Created On" value="2025-08-29 06:23:12" />
              <Detail label="Last Updated" value="2025-08-29 06:23:23" />
              <Detail label="Consented / Rejected On" value="-" />
              <Detail label="Template" value="Consent Mail Template (copy)" />
              <Detail label="Closed On" value="-" />
            </div>
          </Card>

          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Text fw={600} mb="md">
              Template Body
            </Text>
            <div className="p-4 border rounded-md bg-gray-50 text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">
              {`Dear Madam/Sir,

We are writing to you to request your consent for the processing of your personal data for the purpose of personalized marketing communications. This will allow us to provide you with more relevant and targeted information about our products and services.

By providing your consent, you agree that we may collect, use, and store your personal data, including your name, email address, and browsing history, to create a profile of your interests and preferences. This will help us to personalize the marketing materials we send you and to ensure that you only receive communications that are of interest to you.

You have the right to withdraw your consent at any time. If you wish to do so, you can click on the "unsubscribe" link at the bottom of any of our marketing emails or by contacting us directly. Please note that withdrawing your consent will not affect the lawfulness of any processing that has taken place prior to your withdrawal.

For more information about how we process your personal data, please see our privacy policy.

Thank you for your time and consideration.

Sincerely,
[Company’s Signature, etc.]`}
            </div>
          </Card>
        </div>

        {/* Right Side - Withdraw Consent */}
        <div className="space-y-4">
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
              Withdrawing consent will stop Tech Solutions Inc. from processing your
              data for the specified purposes.
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
          </Card>

          <Card shadow="sm" p="lg" radius="md" withBorder>
            <div className="flex items-start mb-3">
              <CheckCircle className="text-green-500 mr-2 mt-0.5 h-5 w-5" />
              <div>
                <Text fw={600}>Confirmation</Text>
                <Text size="sm" c="dimmed">
                  You will receive a confirmation once the withdrawal is processed successfully.
                </Text>
              </div>
            </div>

            <Divider my="sm" />

            <div className="flex items-start">
              <Bell className="text-blue-500 mr-2 mt-0.5 h-5 w-5" />
              <div>
                <Text fw={600}>Real-time Notifications</Text>
                <Text size="sm" c="dimmed">
                  Tech Solutions Inc. receives an instant notification to comply with your request.
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
  value: string;
}

const Detail: React.FC<DetailProps> = ({ label, value }) => (
  <div>
    <Text size="xs" c="dimmed" tt="uppercase">
      {label}
    </Text>
    <Text fw={500}>{value || "-"}</Text>
  </div>
);

export default ConsentDetails;
