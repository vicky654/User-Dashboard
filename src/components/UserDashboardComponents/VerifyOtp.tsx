import React, { useState, useEffect, useRef } from "react";
import { Button, Text, Card } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const VerifyOtp: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState(45);
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const navigate = useNavigate();

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      alert("Please enter the 6-digit code.");
      return;
    }

    console.log("OTP verified:", enteredOtp);
    navigate("/dashboard"); // ✅ redirect after success
  };

  const handleResend = () => {
    setTimer(45);
    setOtp(Array(6).fill(""));
    inputsRef.current[0]?.focus();
    console.log("Resent OTP");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card
        shadow="sm"
        radius="md"
        withBorder
        className="w-full max-w-sm text-center bg-white p-8"
      >
        {/* Header */}
        <h1 className="text-xl font-semibold mb-1">Enter Authentication Code</h1>
        <Text size="sm" c="dimmed" mb={24}>
          We’ve sent a 6-digit code to your registered device.
          <br />
          Please enter it below.
        </Text>

        {/* OTP Boxes */}
        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputsRef.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          ))}
        </div>

        {/* Verify Button */}
        <Button
          fullWidth
          color="red"
          radius="md"
          size="md"
          className="primary-btn"
          mb={16}
          onClick={handleVerify}
        >
          Verify
        </Button>

        {/* Timer and Resend */}
        <Text size="xs" mb={6}>
          Code expires in <span className="font-semibold">00:{timer.toString().padStart(2, "0")}</span>
        </Text>
        <Text size="xs" c="dimmed" className="cursor-pointer" onClick={handleResend}>
          Didn’t receive the code? <span className="text-red-600 font-medium hover:underline">Resend Code</span>
        </Text>

        {/* Support Link */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <Text size="xs" c="dimmed">
            Need help?{" "}
            <a href="#" className="text-red-600 font-medium hover:underline">
              Contact Support
            </a>
          </Text>
        </div>
      </Card>
    </main>
  );
};

export default VerifyOtp;
