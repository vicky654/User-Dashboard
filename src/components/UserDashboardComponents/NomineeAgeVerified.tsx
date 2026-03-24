import React from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const NomineeAgeVerified: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="bg-white rounded-lg shadow-sm p-10 text-center w-[380px]">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100">
            <Check size={28} className="text-green-600" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-black">
          Nominee Age Verified
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          The nominee’s age has been successfully
          verified. You can now proceed with the next
          steps in managing your consents.
        </p>

        {/* Continue Button */}
        <button
          onClick={() => navigate("/nominee-request-failed")}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white text-sm px-6 py-2 rounded-md transition"
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NomineeAgeVerified;
