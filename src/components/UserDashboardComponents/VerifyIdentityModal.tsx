import React, { useEffect, useState } from "react";
import { Modal, Button, Text, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface VerifyIdentityModalProps {
  opened: boolean;
  onClose: () => void;
  onVerify: (otp: string) => void;
}

const VerifyIdentityModal: React.FC<VerifyIdentityModalProps> = ({
  opened,
  onClose,
  onVerify,
}) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(60);
  const [resendActive, setResendActive] = useState(false);

  // ⏱ Countdown timer
  useEffect(() => {
    if (!opened) return;
    setTimeLeft(60);
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setResendActive(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [opened]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };
  const navigate = useNavigate();

  const handleVerify = () => {

    navigate("/nominee/summary");
    // const code = otp.join("");
    // if (code.length === 6) {
    //   onVerify(code);
    //   setOtp(Array(6).fill(""));
    // } else {
    //   alert("Please enter all 6 digits of the code.");
    // }
  };

  const handleResend = () => {
    setTimeLeft(60);
    setResendActive(false);
    alert("Verification code resent!");
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      radius="md"
      withCloseButton={false}
      overlayOpacity={0.55}
      overlayBlur={3}
      classNames={{
        body: "p-6",
      }}
    >
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-1">Verify your identity</h2>
        <p className="text-gray-600 text-sm mb-5">
          We’ve sent a 6-digit code to your registered device. <br /> Please
          enter it below.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-10 h-12 text-center border border-gray-300 rounded-md text-lg font-semibold focus:border-red-500 focus:outline-none"
            />
          ))}
        </div>

        {/* Verify Button */}
        <Button
          fullWidth
             color="red"
                        radius="md"
                        variant="filled"
                        className="primary-btn mb-4"
          onClick={handleVerify}
      
        >
          Verify
        </Button>

        {/* Timer + Resend */}
        <div className="text-sm text-gray-600 mb-2">
          {resendActive ? (
            <button
              onClick={handleResend}
              className="text-red-500 hover:underline font-medium"
            >
              Resend Code
            </button>
          ) : (
            <>
              Code expires in{" "}
              <span className="font-semibold text-gray-800">
                00:{timeLeft.toString().padStart(2, "0")}
              </span>
            </>
          )}
        </div>

        {/* Help Link */}
        <p className="text-xs text-gray-500 mt-3">
          Need help?{" "}
          <a href="#" className="text-red-500 hover:underline font-medium">
            Contact Support
          </a>
        </p>
      </div>
    </Modal>
  );
};

export default VerifyIdentityModal;
