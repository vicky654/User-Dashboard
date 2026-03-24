import React, { useState } from "react";
import OtpVerifyModal from "./OtpVerifyModal";
import { useNavigate } from "react-router-dom";

const WithdrawConsentModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [showOtp, setShowOtp] = useState(false);

  return (
    <>
      {!showOtp ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white p-6 rounded-md shadow-md w-[430px]">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 text-red-500 p-3 rounded-full text-xl">
                ⚠
              </div>
            </div>

            <h2 className="text-center text-lg font-semibold mb-2">
              Consent Nominee Deactivation
            </h2>

            <p className="text-center text-sm text-gray-600 mb-4">
              Are you sure you want to deactivate this nominee account?
              <br />This action is permanent and cannot be undone.
            </p>

            {/* Yellow Warning Box */}
            <div className="bg-yellow-50 border border-yellow-300 text-yellow-700 p-3 rounded-md text-sm mb-5">
              <strong>Data Purging:</strong> All data associated with the nominee
              will be permanently deleted to comply with DPDP Act, 2023.
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                className="px-4 py-2 border rounded-md"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => {setShowOtp(true);
                  navigate("/account-closed-success")

                }}
              >
                Confirm Deactivation
              </button>
            </div>
          </div>
        </div>
      ) : (
        <OtpVerifyModal />
      )}
    </>
  );
};

export default WithdrawConsentModal;
