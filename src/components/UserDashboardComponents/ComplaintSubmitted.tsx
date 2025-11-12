import React, { useState } from "react";
import { Card, Text, Button } from "@mantine/core";
import { CheckCircle, Copy } from "lucide-react";

const ComplaintSubmitted: React.FC = () => {
  const [referenceId] = useState("CMPLNT-2025-XYZ123");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referenceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleDone = () => {
    // Navigate to dashboard or home page if needed
    window.location.href = "/";
  };

  return (
    <main className="bg-gray-50 flex flex-col items-center justify-center min-h-screen px-4">
      {/* ✅ Success Icon */}
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" strokeWidth={2.5} />

      {/* ✅ Title and Message */}
      <h1 className="text-xl font-semibold text-gray-900 mb-2">
        Complaint Submitted
      </h1>
      <p className="text-gray-500 text-sm text-center mb-6 max-w-sm">
        Your complaint has been successfully submitted. Please keep the following
        reference ID for your records.
      </p>

      {/* ✅ Reference ID Card */}
      <Card
        shadow="sm"
        radius="md"
        p="md"
        withBorder
        className="w-full max-w-md bg-white mb-8"
      >
        <div className="flex flex-col space-y-2">
          <Text size="xs" c="dimmed">
            Reference ID
          </Text>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              value={referenceId}
              readOnly
              className="flex-1 px-3 py-2 text-sm text-gray-700 outline-none bg-transparent"
            />
            <button
              onClick={handleCopy}
              className="px-3 py-2 hover:bg-gray-100 transition"
            >
              <Copy size={16} />
            </button>
          </div>
          {copied && (
            <Text size="xs" className="text-green-600 mt-1">
              Copied to clipboard!
            </Text>
          )}
        </div>
           <Button
      fullWidth
         color="red"
                        radius="md"
                        variant="filled"
                        className="primary-btn mt-4"
        onClick={handleDone}
      >
        Done
      </Button>
      </Card>

      {/* ✅ Done Button */}
   
    </main>
  );
};

export default ComplaintSubmitted;
