import React, { useState, useEffect } from "react";
import { Card, Textarea, Button, Text, FileButton } from "@mantine/core";
import { UploadCloud } from "lucide-react";
import { useNavigate } from "react-router-dom";
import withApiHandler from "../../api/withApiHandler";
import { ConsentAPI } from "../../api/domains/consent.api";
import LoaderImg from "../../utils/Loader";
import showMessage from "../../utils/showMessage";
import { DataProtectionRightsAPI } from "../../api/domains/dataprotectionrights.api";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { RadioCard, SimpleRadio } from "../../pages/Components/RadioCard";

interface RequestType {
  nominee_access: boolean;
  id: number;
  name: string;
}


interface ApiProps {
  execute: <T>(apiCall: () => Promise<T>) => Promise<T>;
  isLoading?: boolean;
}

const DataProtectionRights = ({ execute, isLoading }: ApiProps) => {
  const [category, setCategory] = useState<RequestType | null>(null);
  const [details, setDetails] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [requestTypes, setRequestTypes] = useState<RequestType[]>([]);
  const [complaintCategory, setComplaintCategory] = useState<string>("");

  const UserDetails = useSelector(
    (state: IRootState) => state.auth.user ?? null
  );

  const navigate = useNavigate();

  // ================== FETCH REQUEST TYPES ==================
  const fetchRightsList = async () => {
    const res = await execute(() => ConsentAPI.managerights());
    const records = res.data.data.records || [];
    setRequestTypes(records);
  };

  useEffect(() => {
    fetchRightsList();
  }, []);

useEffect(() => {
      if (category?.nominee_access == true) {  
        navigate(`/NomineeForm/${category.id}`);
      }
console.log("CATEGORY CHANGED", category);


  }, [category]);

  console.log(category,"category")

  // ================== SUBMIT ==================
  const handleSubmit = async () => {
    if (!category) {
      showMessage("Please select request category", "error");
      return;
    }

    if (!details.trim()) {
      showMessage("Please enterf complaint details", "error");
      return;
    }

    try {
      const payload: any = {
        request_type_id: category.id,
        category_name: category.name,
        name: UserDetails?.name ?? "",
        email: UserDetails?.email ?? "",
        phone: UserDetails?.phone ?? "",
        dp_comment: details,
        file: file?.name || null,
      };

      if (complaintCategory) {
        payload.complaint_category = complaintCategory;
      }

      console.log("FINAL PAYLOAD", payload);

      await execute(() => DataProtectionRightsAPI.create(payload));

      showMessage("Complaint submitted successfully", "success");


      if (category.nominee_access == true) {
        navigate(`/NomineeForm/${category.id}`);
      } else {
        navigate("/complaint-submitted");
      }


      // reset
      setCategory(null);
      setDetails("");
      setFile(null);
      setComplaintCategory("");
    } catch (error) {
      console.error(error);
      showMessage("Something went wrong", "error");
    }
  };

  // ================== UI ==================
  return (
    <>
      {isLoading ? <LoaderImg /> : null}

      <main className="bg-gray-50 flex flex-col items-center py-10 min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Your Data Protection Rights
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Please provide the details of your complaint.
          </p>
        </div>

        <Card shadow="sm" radius="md" p="xl" withBorder className="max-w-2xl w-full bg-white">
          {/* CATEGORY */}
          <div className="mb-6">
            <Text fw={600} mb={4}>Request Category</Text>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requestTypes.map((item) => (
                <RadioCard
                  key={item.id}
                  label={item.name}
                  value={item}
                  selected={category}
                  onSelect={setCategory}
                />
              ))}

            </div>

            {/* GRIEVANCE CATEGORY */}
            {category?.name === "Right to grievance redressal" && (
              <section className="mt-6">
                <Text fw={600} mb={4}>Complaint Category</Text>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Data Breach", "Consent Violation", "Processing Errors", "Other"].map((c) => (
                    <SimpleRadio
                      key={c}
                      label={c}
                      value={c}
                      selected={complaintCategory}
                      onSelect={setComplaintCategory}
                    />

                  ))}
                </div>
              </section>
            )}
          </div>

          {/* DETAILS */}
          <div className="mb-6">
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
          </div>

          {/* FILE */}
          <div className="mb-6">
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
                  <button {...props} className="text-red-600 hover:underline font-medium">
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
          </div>

          {/* SUBMIT */}
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
    </>
  );
};

export default withApiHandler(DataProtectionRights);



