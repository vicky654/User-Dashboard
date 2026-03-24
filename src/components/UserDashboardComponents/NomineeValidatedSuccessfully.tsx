import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NomineeValidatedSuccessfully: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="text-center w-[380px]">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
            <Check size={30} className="text-green-600" strokeWidth={2.5} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-black leading-tight">
          Nominee Validated <br /> Successfully
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-700 mt-3 leading-relaxed px-3">
          Your nominee, J**** S****, has been successfully validated. 
          To proceed, you must approve the nomination.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/nomination-request")}
          className="mt-5 bg-red-500 hover:bg-red-600 text-white text-sm py-2 px-5 rounded-md transition"
        >
          Approve Nomination
        </button>
      </div>
    </div>
  );
};

export default NomineeValidatedSuccessfully;
