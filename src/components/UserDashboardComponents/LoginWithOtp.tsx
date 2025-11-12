import React, { useState } from "react";
import { Card, Button, TextInput, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const LoginWithOtp: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!inputValue.trim()) {
      alert("Please enter your Email or Mobile number.");
      return;
    }

    // Normally you'd call an API here to send the OTP
    console.log("OTP sent to:", inputValue);
    navigate("/verify-otp"); // navigate to OTP verification screen
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card
        withBorder
        shadow="sm"
        radius="md"
        className="w-full max-w-sm p-8 text-center bg-white"
      >
        {/* Title */}
        <h1 className="text-xl font-semibold mb-1">Perfect!</h1>
        <Text size="sm" c="dimmed" mb={20}>
          Now let’s get you logged in.
        </Text>

        {/* Input Field */}
        <TextInput
          placeholder="Email / Mobile"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          radius="md"
          mb={20}
        />

        {/* Login Button */}
        <Button
          fullWidth
          color="red"
          radius="md"
          className="primary-btn"
          onClick={handleLogin}
        >
          Login with OTP
        </Button>

        {/* Footer Note */}
        <Text size="xs" c="dimmed" mt={20}>
          Manage your consents, nominate someone, raise grievances, and control
          how your data is used — all in one place.
        </Text>
      </Card>
    </main>
  );
};

export default LoginWithOtp;
