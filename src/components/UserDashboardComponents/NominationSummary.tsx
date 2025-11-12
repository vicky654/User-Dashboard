import React, { useState } from "react";
import { Card, Text, Checkbox, Button } from "@mantine/core";
import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Nominee {
  name: string;
  dob: string;
  gender: string;
  contactNumber: string;
  address: string;
  email: string;
  relationship: string;
  startDate: string;
  endDate: string | null;
}

const NominationSummary: React.FC = () => {
  const [confirmed, setConfirmed] = useState(false);

  // Static example data
  const nominee: Nominee = {
    name: "Ethan Harper",
    dob: "12/05/1985",
    gender: "Male Harper",
    contactNumber: "9876543210",
    address: "123 Maple Street, Anytown, USA",
    email: "Ethan.Harper@email.com",
    relationship: "Brother",
    startDate: "01/01/2025",
    endDate: "N/A",
  };
  const navigate = useNavigate();

  const handleAddNominee = () => {
    navigate("/nominee/status");
    // if (!confirmed) {
    //   alert("Please confirm before proceeding.");
    //   return;
    // }
    // alert("Nominee added successfully!");
  };

  return (
    <main className="bg-gray-50 min-h-screen p-8 flex justify-center">
      <div className="max-w-3xl w-full">
        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Nomination Summary
        </h1>

        {/* Nominee Card */}
        <Card withBorder radius="md" shadow="sm" className="bg-white">
          {/* Section 1 */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-medium text-gray-800">Nominee Details</h2>
            <button className="flex items-center text-sm text-gray-500 hover:text-red-600 transition">
              <Pencil size={14} className="mr-1" />
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-sm mb-4">
            <div>
              <Text fw={500} size="sm">
                Name
              </Text>
              <Text size="sm">{nominee.name}</Text>
            </div>
            <div>
              <Text fw={500} size="sm">
                Date of Birth
              </Text>
              <Text size="sm">{nominee.dob}</Text>
            </div>

            <div>
              <Text fw={500} size="sm">
                Gender
              </Text>
              <Text size="sm">{nominee.gender}</Text>
            </div>
            <div>
              <Text fw={500} size="sm">
                Contact Number
              </Text>
              <Text size="sm">{nominee.contactNumber}</Text>
            </div>

            <div className="md:col-span-2">
              <Text fw={500} size="sm">
                Address
              </Text>
              <Text size="sm">{nominee.address}</Text>
            </div>

            <div className="md:col-span-2">
              <Text fw={500} size="sm">
                Email Address
              </Text>
              <Text size="sm">{nominee.email}</Text>
            </div>
          </div>

          <hr className="my-3" />

          {/* Section 2 */}
          <div className="mb-3">
            <h3 className="font-medium text-gray-800 mb-2">
              Relationship with Data Principal
            </h3>
            <div>
              <Text fw={500} size="sm">
                Relationship
              </Text>
              <Text size="sm">{nominee.relationship}</Text>
            </div>
          </div>

          <hr className="my-3" />

          {/* Section 3 */}
          <div className="mb-3">
            <h3 className="font-medium text-gray-800 mb-2">
              Nominee Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-sm">
              <div>
                <Text fw={500} size="sm">
                  Nomination Start Date
                </Text>
                <Text size="sm">{nominee.startDate}</Text>
              </div>
              <div>
                <Text fw={500} size="sm">
                  Nomination End Date
                </Text>
                <Text size="sm">{nominee.endDate}</Text>
              </div>
            </div>
          </div>
        </Card>

        {/* Confirmation */}
        <div className="mt-4 flex items-start">
          <Checkbox
            checked={confirmed}
            onChange={(e) => setConfirmed(e.currentTarget.checked)}
            color="red"
            size="sm"
            className="mr-2 mt-1"
          />
          <p className="text-sm text-gray-600 leading-snug">
            I confirm that the above details are accurate and I wish to nominate{" "}
            <span className="font-medium">{nominee.name}</span> as my
            representative for managing my consents under the DPDP Act, 2023.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Button
            color="red"
            radius="md"
            onClick={handleAddNominee}
            className="px-6 primary-btn"
           
          >
            Add Nominee
          </Button>
          <Button
            variant="outline"
            color="red"
            radius="md"
            className="px-6"
            onClick={() => alert("Cancelled")}
          >
            Cancel
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NominationSummary;
