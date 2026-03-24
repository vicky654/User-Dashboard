import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface RevokeNomineeConsentModalProps {
  onClose: () => void;
  onConfirm: (otp: string) => void;
}

const RevokeNomineeConsentModal = ({ onClose, onConfirm }: RevokeNomineeConsentModalProps) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(45);

  // Countdown Timer
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // Handle OTP Input
  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const resendCode = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(45);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-[380px] rounded-lg shadow-lg p-8 text-center">

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Revoke Nominee Consent
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6 px-4">
          Revoking consent would mean that you will no longer be able to manage
          consents on the Data Principal’s behalf. This action is irreversible.
          <br /><br />
          Please enter OTP sent to your registered number below to confirm your action.
        </p>

        {/* OTP Boxes */}
        <div className="flex justify-center gap-2 mb-5">
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              className="w-10 h-12 border rounded text-center text-lg focus:ring-2 focus:ring-red-400"
            />
          ))}
        </div>

        {/* Revoke Button */}
        <button
          onClick={() => {
            onConfirm(otp.join(""));
            navigate("/withdraw-consent-modal");
          }}
          className="w-full bg-red-500 text-white py-2 rounded-md font-medium hover:bg-red-600 transition"
        >
          Revoke Consent
        </button>

        {/* Timer + Resend */}
        <p className="text-xs text-gray-500 mt-3">
          Code expires in{" "}
          <span className="font-semibold text-black">
            00:{timer < 10 ? `0${timer}` : timer}
          </span>
        </p>

        <button
          onClick={resendCode}
          disabled={timer > 0}
          className={`text-xs mt-1 ${timer > 0 ? "text-gray-300 cursor-not-allowed" : "text-red-500"
            }`}
        >
          Didn’t receive the code? Resend Code
        </button>

        {/* Divider */}
        <div className="border-t my-5"></div>

        {/* Cancel */}
        <button
          onClick={onClose}
          className="text-sm text-red-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RevokeNomineeConsentModal;
