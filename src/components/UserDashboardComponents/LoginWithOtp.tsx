import React, { useState } from "react";
import { Card, Button, TextInput, Text, Radio, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const LoginWithOtp: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [loginAs, setLoginAs] = useState("nominee"); // default selected
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!inputValue.trim()) {
      alert("Please enter your Email or Mobile number.");
      return;
    }

    console.log("Login As:", loginAs);
    console.log("OTP sent to:", inputValue);

    navigate("/verify-otp");
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
        <h1 className="text-2xl font-bold mb-1">Perfect!</h1>
        <Text size="sm" c="dimmed" mb={15}>
          Now let’s get you logged in.
        </Text>

        {/* Radio Section */}
        <Text size="sm" mb={8}>
          Login as:
        </Text>

        <Radio.Group
          value={loginAs}
          onChange={setLoginAs}
          mb={20}
        >
          <div className="w-full flex justify-center">
            <Group>
              <Radio
                value="principal"
                label="Data Principal"
                styles={{
                  radio: {
                    width: 17,
                    height: 17,
                  },
                  icon: {
                    width: 9,
                    height: 9,
                  },
                }}
              />

              <Radio
                value="nominee"
                label="Nominee"
                color="red"
                styles={{
                  radio: {
                    width: 17,
                    height: 17,
                  },
                  icon: {
                    width: 9,
                    height: 9,
                  },
                }}
              />
            </Group>
          </div>
        </Radio.Group>

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
          className="bg-red-500 hover:bg-red-600"
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