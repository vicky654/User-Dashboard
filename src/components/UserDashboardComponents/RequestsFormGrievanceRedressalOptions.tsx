import React, { useState } from "react";
import {
  Card,
  Textarea,
  Button,
  Text,
  FileButton,
} from "@mantine/core";
import { UploadCloud } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* 🔸 Custom RadioCard component */
interface RadioCardProps {
  label: string;
  value: string;
  selected: string;
  onSelect: (value: string) => void;
}

const RadioCard: React.FC<RadioCardProps> = ({ label, value, selected, onSelect }) => {
  const isActive = selected === value;

  return (
    <div
      onClick={() => onSelect(value)}
      className={`border rounded-lg w-full px-4 py-3 flex items-center cursor-pointer transition-all duration-150 ${
        isActive
          ? "border-red-500 bg-red-50 shadow-sm"
          : "border-gray-300 hover:border-gray-400"
      }`}
    >
      <input
        type="radio"
        value={value}
        name="rights"
        checked={isActive}
        readOnly
        className="accent-red-600 w-4 h-4 mr-3"
      />
      <span
        className={`text-sm ${
          isActive ? "text-red-600 font-medium" : "text-gray-700"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

/* 🔸 Main Form Component */
const RequestsFormGrievanceRedressalOptions: React.FC = () => {
  const [requestCategory, setRequestCategory] = useState<string>("Right to grievance redressal");
  const [complaintCategory, setComplaintCategory] = useState<string>("Data Breach");
  const [details, setDetails] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
 const navigate = useNavigate();
  const handleSubmit = () => {

         navigate("/complaint-submitted");
    // if (!details.trim()) {
    //   alert("Please provide a detailed description of your complaint.");
    //   return;
    // }
    // alert(
    //   `Complaint submitted!\n\nRequest: ${requestCategory}\nComplaint: ${complaintCategory}\nDetails: ${details}\nFile: ${
    //     file ? file.name : "No attachment"
    //   }`
    // );
    setDetails("");
    setFile(null);
  };

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-start py-10">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Your Data Protection Rights
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          We take your concerns seriously. Please provide the details of your complaint below.
        </p>
      </div>

      {/* Card Form */}
      <Card shadow="sm" radius="md" p="xl" withBorder className="max-w-2xl w-full bg-white">
        {/* Requests Category */}
        <section className="mb-6">
          <Text fw={600} mb={4}>
            Requests Category
          </Text>
          <Text size="sm" c="dimmed" mb={10}>
            Select the category that best describes your complaint.
          </Text>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <RadioCard
              label="Right to grievance redressal"
              value="Right to grievance redressal"
              selected={requestCategory}
              onSelect={setRequestCategory}
            />
            <RadioCard
              label="Right to erasure"
              value="Right to erasure"
              selected={requestCategory}
              onSelect={setRequestCategory}
            />
            <RadioCard
              label="Right to nominate"
              value="Right to nominate"
              selected={requestCategory}
              onSelect={setRequestCategory}
            />
            <RadioCard
              label="Right to correction"
              value="Right to correction"
              selected={requestCategory}
              onSelect={setRequestCategory}
            />
          </div>
        </section>

        {/* Complaint Category */}
        <section className="mb-6">
          <Text fw={600} mb={4}>
            Complaint Category
          </Text>
          <Text size="sm" c="dimmed" mb={10}>
            Select the category that best describes your complaint.
          </Text>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <RadioCard
              label="Data Breach"
              value="Data Breach"
              selected={complaintCategory}
              onSelect={setComplaintCategory}
            />
            <RadioCard
              label="Consent Violation"
              value="Consent Violation"
              selected={complaintCategory}
              onSelect={setComplaintCategory}
            />
            <RadioCard
              label="Processing Errors"
              value="Processing Errors"
              selected={complaintCategory}
              onSelect={setComplaintCategory}
            />
            <RadioCard
              label="Other"
              value="Other"
              selected={complaintCategory}
              onSelect={setComplaintCategory}
            />
          </div>
        </section>

        {/* Complaint Details */}
        <section className="mb-6">
          <Text fw={600} mb={6}>
            Complaint Details
          </Text>
          <Textarea
            placeholder="Please provide a detailed description of your complaint."
            minRows={4}
            value={details}
            onChange={(e) => setDetails(e.currentTarget.value)}
            className="rounded-md"
          />
        </section>

        {/* File Upload */}
        <section className="mb-6">
          <Text fw={600} mb={6}>
            Attach Files (Optional)
          </Text>
          <div className="border-2 border-dashed border-gray-300 rounded-lg py-10 px-6 text-center hover:border-red-400 transition duration-200">
            <UploadCloud size={36} className="text-gray-400 mx-auto mb-2" />
            <FileButton
              onChange={setFile}
              accept="image/png,image/jpeg,image/gif,application/pdf"
            >
              {(props) => (
                <button
                  {...props}
                  className="text-red-600 hover:underline font-medium"
                >
                  Upload a file
                </button>
              )}
            </FileButton>
            <Text size="xs" c="dimmed" mt={4}>
              PNG, JPG, GIF up to 10MB
            </Text>
            {file && (
              <Text size="sm" mt="sm" className="text-gray-700">
                📎 {file.name}
              </Text>
            )}
          </div>
        </section>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
              color="red"
                        radius="md"
                        variant="filled"
                        className="primary-btn"



            onClick={handleSubmit}
          >
            Submit Complaint
          </Button>
        </div>
      </Card>
    </main>
  );
};

export default RequestsFormGrievanceRedressalOptions;
