// NomineeForm.tsx
import React, { useEffect, useState } from "react";
import {
  Card,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  Notification,
  Select,
} from "@mantine/core";
import VerifyIdentityModal from "./VerifyIdentityModal";
import { NomineeAPI } from "../../api/domains/nominee.api";
import withApiHandler from "../../api/withApiHandler";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

export interface NomineeData {
  name: string;
  relationship: string;
  dob: string; // ISO date string (yyyy-mm-dd) from input type="date"
  contactNumber: string;
  address: string;
  email: string;
}

interface ApiProps {
  execute: <T>(apiCall: () => Promise<T>) => Promise<T>;
  isLoading?: boolean;
}

interface NomineeFormProps {
  initial?: Partial<NomineeData>;
  onSubmit?: (data: NomineeData) => void;
  onCancel?: () => void;
  execute: <T>(apiCall: () => Promise<T>) => Promise<T>;
  isLoading?: boolean;
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
  execute,
  isLoading
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
  const [relations, setRelations] = useState<string[]>([]);
  const [relationOptions, setRelationOptions] = useState<
    { value: string; label: string }[]
  >([]);
const request_type_id = useParams();


  // ================= FETCH RELATIONS =================
  const fetchRelations = async () => {
    const res = await execute(() => NomineeAPI.nomineerelations());
    const records = res.data.data || [];

    const options = records.map((r: any) => ({
      value: r.name,   // or r.id if backend needs id
      label: r.name,
    }));

    setRelationOptions(options);
  };


  useEffect(() => {
    fetchRelations();
  }, []);

  const handleChange = <K extends keyof NomineeData>(key: K, value: NomineeData[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };
 const UserDetails = useSelector(
    (state: IRootState) => state.auth.user ?? null
  );

const handleSubmit = async () => {
  const newErrors: Partial<Record<keyof NomineeData, string>> = {};

  if (!form.name.trim()) newErrors.name = "Please enter nominee's full name.";
  if (!form.relationship.trim()) newErrors.relationship = "Please select relationship.";
  if (!form.dob.trim()) newErrors.dob = "Please provide date of birth.";

  if (!form.contactNumber.trim() || !validatePhone(form.contactNumber))
    newErrors.contactNumber = "Enter a valid 10-digit mobile number.";

  if (!form.address.trim()) newErrors.address = "Please enter address.";

  if (!form.email.trim() || !validateEmail(form.email))
    newErrors.email = "Enter a valid email address.";

  setErrors(newErrors);

  // ❌ stop if validation fails
  if (Object.keys(newErrors).length > 0) return;

  try {
    // ================= PAYLOAD =================
// {
//   "request_type_id": 3,
  // "name": "Sneha gupta",
  // "email": "sneha.gupta@yopmail.com",
  // "phone": "9888123457",
 
//   "dp_comment": "Test request from API",
 
//   "nominee_name": "Rahul Singh",
//   "nominee_dob": "2000-01-01",
//   "nominee_relation_id": 1,
//   "nominee_email": "rahul.dpdp@yopmail.com",
//   "nominee_address": "Delhi India",
//   "nominee_number": "9999999999"
// }

 

    const payload = {
            request_type_id: request_type_id.id, // from URL param
  // "name": "Sneha gupta",
  // "email": "sneha.gupta@yopmail.com",
  // "phone": "9888123457",
   name: UserDetails?.name ?? "",
        email: UserDetails?.email ?? "",
        phone: UserDetails?.phone ?? "",
         nominee_name: form.name,
         nominee_dob: form.dob,
         nominee_email: form.email,
         nominee_address: form.address,
         nominee_number: form.contactNumber,
     nominee_relation_id: request_type_id.id, // or .id if backend needs id
      relationship: form.relationship, // or relationship_id if backend expects id
 
};

    console.log("NOMINEE PAYLOAD", payload);

    // ================= API CALL =================
    const res = await execute(() =>
      NomineeAPI.create(payload)
    );

    console.log("API RESPONSE", res);


    onSubmit?.(form);
    setSubmitted(true);

  

  } catch (error) {
    console.error("Nominee create failed", error);
  
  }
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
              <Text size="xs" c="dimmed" className="mb-2">
                Relationship
              </Text>

              <Select
                placeholder="Select relationship"
                data={relationOptions}
                value={form.relationship}
                onChange={(value) => handleChange("relationship", value || "")}
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

         
          </div>
        </Card>
      </div>
    </main>
  );
};

export default withApiHandler(NomineeForm);
