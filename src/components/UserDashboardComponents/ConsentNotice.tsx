import React, { useState } from "react";
import { Card, Alert, Button, Checkbox, Text } from "@mantine/core";
import { Info } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ConsentNotice: React.FC = () => {
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleAgree = () => {
    if (!confirmed) {
      alert("Please confirm you understand the consequences before agreeing.");
      return;
    }
    alert(`Consent ${id} granted successfully.`);
    navigate("/consent-history");
  };

  return (
    <main className=" bg-gray-50  flex justify-center">
      <Card shadow="sm" radius="md" p="lg" className="max-w-2xl w-full bg-white border">
        {/* Header */}
        <Text fw={600} size="xl" mb="sm">
          Consent Notice
        </Text>

        <Text size="sm" c="dimmed" mb="md">
          You are about to give consent for{" "}
          <span className="font-semibold text-gray-900 bg-blue-100 px-1 rounded">
            'Personalized Advertising'
          </span>{" "}
          with <span className="font-semibold text-gray-900">'Retailer Co.'</span>.
        </Text>

        {/* Info Box */}
        <Alert
          icon={<Info size={18} />}
          title="Thank you for contacting DPDP Consultants"
          color="blue"
          variant="light"
          radius="md"
          mb="lg"
        >
          <p className="text-sm text-gray-700 leading-relaxed">
            We request your explicit consent to process your personal data in accordance with
            the DPDP Act, 2023. Kindly read and understand our Privacy Notice detailing the purpose
            for which your personal information will be used and your data principal rights. A copy
            of the Privacy Notice will also be emailed to you.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mt-2">
            You may withdraw your consent and also exercise your principal rights by raising a
            request on your Principal Rights Page.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mt-2">
            Kindly contact our DPO at{" "}
            <a
              href="mailto:dpo@dpdpconsultants.com"
              className="text-blue-600 underline"
            >
              dpo@dpdpconsultants.com
            </a>{" "}
            in case you have any further queries only with regard to your personal data shared with
            us. We will do our best to address your concerns within a reasonable time period. In
            case you are not satisfied with our redressal efforts for digital personal data
            protection, you may approach the Data Protection Board of India.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mt-2">
            Click on <strong>Agree</strong> below to provide your consent and continue. Click on{" "}
            <strong>Cancel</strong> to discontinue.
          </p>
        </Alert>

        {/* Confirmation Checkbox */}
        <Checkbox
          label="I understand the consequences and wish to proceed."
          checked={confirmed}
          onChange={(e) => setConfirmed(e.currentTarget.checked)}
          className="mb-6"
        />

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <Button
            variant="default"
            radius="md"
            onClick={() => navigate("/consent-history")}
          >
            Cancel
          </Button>
          <Button
          
              color="red"
              radius="md"
              variant="filled"
              className="primary-btn"
            onClick={handleAgree}
      
          >
            I Agree
          </Button>
        </div>
      </Card>
    </main>
  );
};

export default ConsentNotice;
