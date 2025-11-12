import React, { useState } from "react";
import { Alert, Button, Checkbox, Textarea, Card, Divider, Text } from "@mantine/core";
import { AlertTriangle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const RevokeConsent: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [details, setDetails] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleRevoke = () => {
    if (!confirmed) {
      navigate(`/consent-notice/${id}`);
      alert("Please confirm you understand the consequences before proceeding.");
      return;
    }
    alert(`Consent ${id} revoked successfully.`);
    navigate("/consent-history");
  };

  return (
    <main className="flex justify-center">
      <Card shadow="sm" radius="md" p="lg" className=" ">
        <Text fw={600} size="xl" mb="sm">
          Revoke Consent
        </Text>

        <Text size="sm" c="dimmed" mb="md">
          You are about to revoke consent for{" "}
          <span className="font-semibold  bg-blue-100 px-1 ">
            'Personalized Advertising'
          </span>{" "}
          with <span className="font-semibold text-gray-900">'Retailer Co.'</span>.
        </Text>

        <Divider my="sm" />

        {/* Alert Section */}
        <Alert
          icon={<AlertTriangle size={18} />}
          title="Consequences of Revoking Consent"
          color="red"
          variant="light"
          radius="md"
          mb="lg"
        >
          Revoking consent will stop Retailer Co from using your data for this purpose. This
          means you may see less relevant ads from them in the future.
        </Alert>

        {/* Request Details */}
        <div className="mb-4">
          <Text fw={500} mb={4}>
            Request Details
          </Text>
          <Textarea
            placeholder="Please provide a detailed description of your request."
            minRows={4}
            value={details}
            onChange={(e) => setDetails(e.currentTarget.value)}
          />
        </div>

        <Checkbox
          label="I understand the consequences and wish to proceed."
          checked={confirmed}
          onChange={(e) => setConfirmed(e.currentTarget.checked)}
          className="mb-6"
        />

        <div className="flex justify-end space-x-3">
          <Button
            variant="default"
            radius="md"
            onClick={() => navigate(`/consent-details/${id}`)}
          >
            Cancel
          </Button>
          <Button
           color="red"
              radius="md"
              variant="filled"
              className="primary-btn"
            onClick={handleRevoke}
          
           
          >
            Revoke Consent
          </Button>
        </div>
      </Card>
    </main>
  );
};

export default RevokeConsent;
