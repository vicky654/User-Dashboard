import React, { useState } from "react";
import { Select, Button, Card, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const LanguageSelection: React.FC = () => {
  const [language, setLanguage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!language) {
      alert("Please select your preferred language.");
      return;
    }
    localStorage.setItem("preferredLanguage", language);
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center relative ">
      <Card
        withBorder
        shadow="md"
        radius="md"
        className="w-full max-w-sm p-8 text-center bg-white relative z-10"
      >
        {/* Header */}
        <h1 className="text-xl font-semibold mb-2">Welcome!</h1>
        <Text size="sm" c="dimmed" mb={20}>
          Let’s get you started. First, select your language.
        </Text>

        {/* Language Dropdown — FIXED */}
        <div className="relative z-50">
          <Select
            placeholder="Select your preferred language"
            data={[
              { value: "english", label: "English" },
              { value: "hindi", label: "हिन्दी" },
              { value: "marathi", label: "मराठी" },
              { value: "tamil", label: "தமிழ்" },
              { value: "telugu", label: "తెలుగు" },
              { value: "gujarati", label: "ગુજરાતી" },
              { value: "punjabi", label: "ਪੰਜਾਬੀ" },
              { value: "bengali", label: "বাংলা" },
            ]}
            value={language}
            onChange={setLanguage}
            radius="md"
            mb={20}
            withinPortal
            dropdownPosition="bottom"
          />
        </div>

        {/* Continue Button */}
        <Button fullWidth color="red" radius="md"  className="primary-btn" onClick={handleContinue}>
          Continue
        </Button>

        <Text size="xs" c="dimmed" mt={16}>
          Manage your consents, data requests, and grievances — all in one place.
        </Text>
      </Card>
    </main>
  );
};

export default LanguageSelection;
