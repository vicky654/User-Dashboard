// NomineeForm.tsx
import React, { useState } from "react";
import {
  Card,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  Notification,
} from "@mantine/core";
import VerifyIdentityModal from "./VerifyIdentityModal";

export interface NomineeData {
  name: string;
  relationship: string;
  dob: string; // ISO date string (yyyy-mm-dd) from input type="date"
  contactNumber: string;
  address: string;
  email: string;
}

interface NomineeFormProps {
  initial?: Partial<NomineeData>;
  onSubmit?: (data: NomineeData) => void;
  onCancel?: () => void;
}

const validatePhone = (s: string) => {
  // basic 10 digit validation (allow spaces/dashes)
  const digits = s.replace(/\D/g, "");
  return digits.length === 10;
};

const validateEmail = (s: string) =>
  /^\S+@\S+\.\S+$/.test(s.trim());

const NomineeForm: React.FC<NomineeFormProps> = ({
  initial = {},
  onSubmit,
  onCancel,
}) => {
  const [form, setForm] = useState<NomineeData>({
    name: initial.name ?? "",
    relationship: initial.relationship ?? "",
    dob: initial.dob ?? "",
    contactNumber: initial.contactNumber ?? "",
    address: initial.address ?? "",
    email: initial.email ?? "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof NomineeData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = <K extends keyof NomineeData>(key: K, value: NomineeData[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = () => {
    handleNomineeSubmit();
    const newErrors: Partial<Record<keyof NomineeData, string>> = {};
    if (!form.name.trim()) newErrors.name = "Please enter nominee's full name.";
    if (!form.relationship.trim()) newErrors.relationship = "Please enter relationship.";
    if (!form.dob.trim()) newErrors.dob = "Please provide date of birth.";
    if (!form.contactNumber.trim() || !validatePhone(form.contactNumber))
      newErrors.contactNumber = "Enter a valid 10-digit mobile number.";
    if (!form.address.trim()) newErrors.address = "Please enter address.";
    if (!form.email.trim() || !validateEmail(form.email))
      newErrors.email = "Enter a valid email address.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onSubmit?.(form);
    setSubmitted(true);

    // reset after small delay to show success (optional)
    setTimeout(() => {
      setForm({
        name: "",
        relationship: "",
        dob: "",
        contactNumber: "",
        address: "",
        email: "",
      });
      setSubmitted(false);
    }, 1200);
  };
    const [verifyOpen, setVerifyOpen] = useState(false);

  const handleNomineeSubmit = () => {
    // open verify modal before finalizing
    setVerifyOpen(true);
  };

  const handleVerify = (otp: string) => {
    console.log("Verified OTP:", otp);
    setVerifyOpen(false);
    alert("Nominee added successfully!");
  };



  return (
    <main className="bg-gray-50 min-h-screen p-8">
          <VerifyIdentityModal
        opened={verifyOpen}
        onClose={() => setVerifyOpen(false)}
        onVerify={handleVerify}
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Nominee</h1>
        <p className="text-sm text-yellow-600 mb-6">
          Add a nominee to access your data principal rights on your behalf in case of unforeseen circumstances.
        </p>

        <Card withBorder shadow="sm" radius="md" className="bg-white">
          <div className="mb-4">
            <h2 className="font-medium text-gray-800">Nominee Details</h2>
          </div>

          {/* Grid form: 2 columns on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Text size="xs" color="dimmed" className="mb-2">Name</Text>
              <TextInput
                placeholder="Enter nominee's full name"
                value={form.name}
                onChange={(e) => handleChange("name", e.currentTarget.value)}
                error={errors.name}
              />
            </div>

            <div>
              <Text size="xs" color="dimmed" className="mb-2">Relationship</Text>
              <TextInput
                placeholder="e.g., Spouse, Son, Daughter"
                value={form.relationship}
                onChange={(e) => handleChange("relationship", e.currentTarget.value)}
                error={errors.relationship}
              />
            </div>

            <div>
              <Text size="xs" color="dimmed" className="mb-2">Date of Birth</Text>
              <TextInput
                type="date"
                placeholder="mm/dd/yy"
                value={form.dob}
                onChange={(e) => handleChange("dob", e.currentTarget.value)}
                error={errors.dob}
              />
            </div>

            <div>
              <Text size="xs" color="dimmed" className="mb-2">Contact Number</Text>
              <TextInput
                placeholder="Enter 10–digit mobile number"
                value={form.contactNumber}
                onChange={(e) => handleChange("contactNumber", e.currentTarget.value)}
                error={errors.contactNumber}
              />
            </div>

            <div className="md:col-span-2">
              <Text size="xs" color="dimmed" className="mb-2">Address</Text>
              <Textarea
                placeholder="Enter complete address"
                minRows={2}
                value={form.address}
                onChange={(e) => handleChange("address", e.currentTarget.value)}
                error={errors.address}
              />
            </div>

            <div className="md:col-span-2">
              <Text size="xs" color="dimmed" className="mb-2">Email Address</Text>
              <TextInput
                placeholder="Enter valid email address"
                value={form.email}
                onChange={(e) => handleChange("email", e.currentTarget.value)}
                error={errors.email}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <Button
             color="red"
                        radius="md"
                        variant="filled"
                        className="primary-btn"
             
             onClick={handleSubmit}>
              Add Nominee
            </Button>

            <Button variant="outline" color="red" radius="md" onClick={() => { onCancel?.(); }}>
              Cancel
            </Button>

            {submitted && (
              <Notification color="teal" className="ml-auto" title="Success">
                Nominee added successfully.
              </Notification>
            )}
          </div>
        </Card>
      </div>
    </main>
  );
};

export default NomineeForm;
