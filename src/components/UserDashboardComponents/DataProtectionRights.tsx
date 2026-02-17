import React, { useState, useEffect } from "react";
import {
    Card,
    Textarea,
    Button,
    Text,
    FileButton,
} from "@mantine/core";
import { UploadCloud } from "lucide-react";
import { useNavigate } from "react-router-dom";
import withApiHandler from "../../api/withApiHandler";
import { ConsentAPI } from "../../api/domains/consent.api";
import LoaderImg from "../../utils/Loader";



interface userManageData {
    name: string;
    email: string;
    phone: string;
}


interface ApiProps {
    execute: <T>(apiCall: () => Promise<T>) => Promise<T>;
    isLoading?: boolean;
}

const DataProtectionRights = ({ execute, isLoading }: ApiProps) => {
    const [category, setCategory] = useState<string>("");
    const [details, setDetails] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [userData, setUserData] = useState<userManageData[]>([]);

    const [complaintCategory, setComplaintCategory] = useState<string>("");


    console.log("category", category);
    const navigate = useNavigate();




    const manageUserData = async () => {
        const res = await execute(() => ConsentAPI.managerights());

        const api = res.data.data;
        setUserData(res.data.data.records);
        console.log("user data", api.records);

    };


    useEffect(() => {
        manageUserData();

       
    }, []);
    const handleSubmit = () => {

        if (category === "Right to Nominate") {
            navigate("/NomineeForm");
            return;
        }

        navigate("/complaint-submitted");
        // if (!details.trim()) {

        //     navigate("/complaint-submitted");
        //     alert("Please provide a detailed description of your complaint.");
        //     return;
        // }
        // alert(
        //     `Complaint submitted under "${category}" with details:\n\n${details}${file ? `\nAttached file: ${file.name}` : ""
        //     }`
        // );
        setDetails("");
        setFile(null);
        setCategory("Right to correction");

    };
    console.log("category", category, complaintCategory);
    return (
        <>
         {isLoading ? <LoaderImg /> : null}
     
        <main className="bg-gray-50 flex flex-col items-center justify-start py-10 min-h-screen">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Your Data Protection Rights
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                    We take your concerns seriously. Please provide the details of your complaint below.
                </p>
            </div>

            {/* Form Card */}
            <Card shadow="sm" radius="md" p="xl" withBorder className="max-w-2xl w-full bg-white">
                {/* Request Category */}
                <div className="mb-6">
                    <Text fw={600} mb={4}>
                        Request Category
                    </Text>
                    <Text size="sm" c="dimmed" mb={10}>
                        Select the category that best describes your complaint.
                    </Text>

                    {/* ✅ FIXED GRID LAYOUT */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                         {userData?.map((item) => (
                        <RadioCard
                            label={item.name}
                            value={item.name}
                            name="rights"
                            selected={category}
                            onSelect={setCategory}
                        />

                        ))}
                        {/* <RadioCard
                            label="Right to erasure"
                            value="Right to erasure"
                              name="rights"
                            selected={category}
                            onSelect={setCategory}
                        />
                        <RadioCard label="Right to nominate"
                            value="Right to nominate"
                              name="rights"
                            selected={category}
                            onSelect={setCategory} />


                        <RadioCard
                            label="Right to grievance redressal"
                            value="Right to grievance redressal"
                            selected={category}
                              name="rights"
                            onSelect={setCategory} /> */}
                    </div>



                    {/* 🔽 Show ONLY when Right to grievance redressal is selected */}
                    {category === "Right to grievance redressal" && (
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
                                      name="complaintCategory"
                                    selected={complaintCategory}
                                    onSelect={setComplaintCategory}
                                />
                                <RadioCard
                                    label="Consent Violation"
                                    value="Consent Violation"
                                      name="complaintCategory"
                                    selected={complaintCategory}
                                    onSelect={setComplaintCategory}
                                />
                                <RadioCard
                                    label="Processing Errors"
                                    value="Processing Errors"
                                      name="complaintCategory"
                                    selected={complaintCategory}
                                    onSelect={setComplaintCategory}
                                />
                                <RadioCard
                                    label="Other"
                                    value="Other"
                                      name="complaintCategory"
                                    selected={complaintCategory}
                                    onSelect={setComplaintCategory}
                                />
                            </div>
                        </section>
                    )}


                </div>

                {/* Complaint Details */}
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

                {/* File Upload */}
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
           </>
    );
};

// ✅ Custom RadioCard Component
interface RadioCardProps {
    label: string;
    value: string;
    selected: string;
    name: string;
    onSelect: (value: string) => void;
}

const RadioCard: React.FC<RadioCardProps> = ({ label, value, selected, name, onSelect }) => {
    const isActive = selected === value;

    return (
        <div
            onClick={() => onSelect(value)}
            className={`border rounded-lg w-full px-4 py-3 flex items-center cursor-pointer transition-all duration-150 ${isActive
                ? "border-red-500 bg-red-50 shadow-sm"
                : "border-gray-300 hover:border-gray-400"
                }`}
        >
            <input
                type="radio"
                value={value}
                name={name}
                checked={isActive}
                readOnly
                className="accent-red-600 w-4 h-4 mr-3"
            />
            <span
                className={`text-sm ${isActive ? "text-red-600 font-medium" : "text-gray-700"
                    }`}
            >
                {label}
            </span>
        </div>
    );
};

export default withApiHandler(DataProtectionRights);
