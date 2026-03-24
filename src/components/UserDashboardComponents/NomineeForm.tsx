import React, { useEffect, useState } from "react";
import {
  Card,
  Text,
  TextInput,
  Textarea,
  Button,
  Select,
} from "@mantine/core";
import VerifyIdentityModal from "./VerifyIdentityModal";
import { NomineeAPI } from "../../api/domains/nominee.api";
import withApiHandler from "../../api/withApiHandler";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { useNavigate } from "react-router-dom";
import LoaderImg from "../../utils/Loader";

export interface NomineeData {
  name: string;
  relationship: string;
  dob: string;
  contactNumber: string;
  address: string;
  email: string;
}

interface NomineeFormProps {
  initial?: Partial<NomineeData>;
  onSubmit?: (data: NomineeData) => void;
  onCancel?: () => void;
  execute: <T>(apiCall: () => Promise<T>) => Promise<T>;
  isLoading?: boolean

}

const validateEmail = (s: string) =>
  /^\S+@\S+\.\S+$/.test(s.trim());

const NomineeForm: React.FC<NomineeFormProps> = ({
  initial = {},
  onSubmit,
  onCancel,
  execute,
  isLoading

}) => {

  const request_type_id = useParams();

  const UserDetails = useSelector(
    (state: IRootState) => state.auth.user ?? null
  );

  const [verifyOpen, setVerifyOpen] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState<NomineeData>({
    name: initial.name ?? "",
    relationship: initial.relationship ?? "",
    dob: initial.dob ?? "",
    contactNumber: initial.contactNumber ?? "",
    address: initial.address ?? "",
    email: initial.email ?? "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof NomineeData, string>>
  >({});

  const [relationOptions, setRelationOptions] = useState<
    { value: string; label: string }[]
  >([]);

  // ================= FETCH RELATIONS =================

  const fetchRelations = async () => {
    const res = await execute(() => NomineeAPI.nomineerelations());

    const records = res.data.data || [];

    const options = records.map((r: any) => ({
      value: String(r.id),
      label: r.name,
    }));

    setRelationOptions(options);
  };

  useEffect(() => {
    fetchRelations();
  }, []);

  const handleChange = (
    key: keyof NomineeData,
    value: string
  ) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  // ================= VALIDATION =================

  const validateForm = () => {
    const newErrors: Partial<
      Record<keyof NomineeData, string>
    > = {};

    if (!form.name.trim())
      newErrors.name = "Please enter nominee's full name.";

    if (!form.relationship)
      newErrors.relationship = "Please select relationship.";

    if (!form.dob)
      newErrors.dob = "Please provide date of birth.";

    if (!form.address.trim())
      newErrors.address = "Please enter address.";

    if (!form.email.trim() || !validateEmail(form.email))
      newErrors.email = "Enter a valid email address.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ================= SEND OTP =================

  const handleAddNomineeClick = async () => {

    const isValid = validateForm();
    if (!isValid) return;

    await execute(() =>
      NomineeAPI.sendotp({
        email: UserDetails?.email,
        phone: UserDetails?.phone,
        context: "nominee",
      })
    );

    setVerifyOpen(true);
  };

  // ================= FINAL CREATE REQUEST =================

  const handleVerify = async (otp: string) => {

    try {
      const payload = {
        request_type_id: Number(request_type_id.id),
        nominee_otp_required: true,
        otp: Number(otp),

        name: UserDetails?.name ?? "",
        email: UserDetails?.email ?? "",
        phone: UserDetails?.phone ?? "",
        dp_comment: "Nominee request",

        nominee_name: form.name,
        nominee_dob: form.dob,
        nominee_relation_id: Number(form.relationship),
        nominee_email: form.email,
        nominee_address: form.address,
        nominee_number: form.contactNumber,
      };

      console.log("FINAL PAYLOAD", payload);

      await execute(() =>
        NomineeAPI.create(payload)
      );

      setVerifyOpen(false);

      // alert("Nominee created successfully");
      navigate("/nomination-summary")

      onSubmit?.(form);

    } catch (error) {
      console.error("Nominee create failed", error);
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      {isLoading ? <LoaderImg /> : null}

      <VerifyIdentityModal
        opened={verifyOpen}
        onClose={() => setVerifyOpen(false)}
        onVerify={handleVerify}
      />

      <div className="max-w-4xl mx-auto">

        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          Nominee
        </h1>

        <p className="text-sm text-yellow-600 mb-6">
          Add a nominee to access your data principal rights
          on your behalf in case of unforeseen circumstances.
        </p>

        <Card
          withBorder
          shadow="sm"
          radius="md"
          className="bg-white"
        >

          <div className="mb-4">
            <h2 className="font-medium text-gray-800">
              Nominee Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <Text size="xs" color="dimmed" className="mb-2">
                Name
              </Text>

              <TextInput
                placeholder="Enter nominee's full name"
                value={form.name}
                onChange={(e) =>
                  handleChange("name", e.currentTarget.value)
                }
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
                onChange={(value) =>
                  handleChange("relationship", value || "")
                }
                error={errors.relationship}
              />
            </div>

            <div>
              <Text size="xs" color="dimmed" className="mb-2">
                Date of Birth
              </Text>

              <TextInput
                type="date"
                value={form.dob}
                onChange={(e) =>
                  handleChange("dob", e.currentTarget.value)
                }
                error={errors.dob}
              />
            </div>

            <div>
              <Text size="xs" color="dimmed" className="mb-2">
                Contact Number
              </Text>

              <TextInput
                placeholder="Enter 10–digit mobile number"
                value={form.contactNumber}
                onChange={(e) =>
                  handleChange(
                    "contactNumber",
                    e.currentTarget.value
                  )
                }
              />
            </div>

            <div className="md:col-span-2">
              <Text size="xs" color="dimmed" className="mb-2">
                Address
              </Text>

              <Textarea
                minRows={2}
                value={form.address}
                onChange={(e) =>
                  handleChange("address", e.currentTarget.value)
                }
                error={errors.address}
              />
            </div>

            <div className="md:col-span-2">
              <Text size="xs" color="dimmed" className="mb-2">
                Email Address
              </Text>

              <TextInput
                value={form.email}
                onChange={(e) =>
                  handleChange("email", e.currentTarget.value)
                }
                error={errors.email}
              />
            </div>

          </div>

          <div className="mt-6 flex items-center gap-4">

            <Button
              color="red"
              radius="md"
              variant="filled"
              className="primary-btn"
              onClick={handleAddNomineeClick}
            >
              Add Nominee
            </Button>

            <Button
              variant="outline"
              color="red"
              radius="md"
              onClick={() => onCancel?.()}
            >
              Cancel
            </Button>

          </div>

        </Card>
      </div>
    </main>
  );
};

export default withApiHandler(NomineeForm);