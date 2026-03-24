import React, { useState } from "react";
import AccountClosedSuccess from "./AccountClosedSuccess";

const OtpVerifyModal = () => {
  const [success, setSuccess] = useState(false);

  return (
    <>
      {!success ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white p-6 w-[420px] rounded-md shadow">

            <h2 className="text-center text-lg font-semibold mb-3">
              Revoke Nominee Consent
            </h2>

            <p className="text-center text-sm text-gray-600 mb-4">
              Enter the OTP sent to your registered number to confirm.
            </p>

            {/* OTP BOXES */}
            <div className="flex justify-between mb-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <input
                  key={i}
                  maxLength="1"
                  className="w-10 h-10 border rounded-md text-center text-lg"
                />
              ))}
            </div>

            <button
              className="w-full bg-red-500 text-white py-2 rounded-md mb-3"
              onClick={() => setSuccess(true)}
            >
              Revoke Consent
            </button>

            <p className="text-center text-xs text-gray-500">
              Code expires in <span className="font-semibold">00:45</span>
              <br />
              Didn’t receive the code? <span className="underline cursor-pointer">Resend</span>
            </p>

            <p   onClick={() => setSuccess(true)} className="text-center text-sm mt-4 cursor-pointer">Cancel</p>
          </div>
        </div>
      ) : (
        <AccountClosedSuccess />
      )}
    </>
  );
};

export default OtpVerifyModal;
