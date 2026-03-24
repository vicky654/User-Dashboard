import React from "react";
import { Ban } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NomineeAuthenticationFailed: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="bg-white rounded-lg shadow-sm p-10 text-center w-[380px]">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
            <Ban size={30} className="text-red-500" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-black">
          Nominee Authentication Failed
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3 leading-relaxed px-2">
          Your nomination could not be validated as your data principal has
          rejected your nomination under the DPDP Act, 2023. No further
          action is required.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white text-sm py-2 rounded-md transition"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default NomineeAuthenticationFailed;
