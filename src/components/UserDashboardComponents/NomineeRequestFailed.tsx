import React from "react";
import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";

const NomineeRequestFailed: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="bg-white rounded-lg shadow-sm p-10 text-center w-[380px]">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-100">
            <XCircle size={30} className="text-red-500" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-black">
          Nominee Request Failed
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          The nomination request cannot be processed.
          The nominee must be 18 years or older to be
          eligible under the DPDP Act, 2023.
        </p>

        {/* Primary Button */}
        <button
          onClick={() => navigate("/nominee-validation-failed")}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white text-sm py-2 rounded-md transition"
        >
          Acknowledge
        </button>

        {/* Secondary Button */}
        <button
          onClick={() => navigate("/choose-nominee")}
          className="w-full mt-3 border border-red-400 text-red-500 text-sm py-2 rounded-md transition hover:bg-red-50"
        >
          Choose Another Nominee
        </button>
      </div>
    </div>
  );
};

export default NomineeRequestFailed;
