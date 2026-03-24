import React from "react";
import { useNavigate } from "react-router-dom";
import { Ban } from "lucide-react";

const NomineeValidationFailed: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="bg-white rounded-lg shadow-sm p-10 text-center w-[380px]">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-100">
            <Ban size={30} className="text-red-500" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-black">
          Nominee Validation Failed
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          Your nomination could not be validated as you do not meet the 
          minimum age requirement of 18 years under the DPDP Act, 2023.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/nominee-authentication-failed")}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white text-sm py-2 rounded-md transition"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default NomineeValidationFailed;
