import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NomineeAuthorization: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <div className="bg-white w-full max-w-sm border border-gray-200 rounded-md shadow-sm text-center px-6 py-8">

        {/* Success Icon */}
        <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
          <Check size={22} className="text-green-600" />
        </div>

        {/* Title */}
        <h2 className="text-base font-semibold mb-2">
          Nominee Authorization
        </h2>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed mb-5">
          You have been authorized to act on behalf of <span className="font-semibold">Ethan Harper</span>.
          Pending requests are now available for your action.
        </p>

        {/* Button */}
        <button onClick={()=> navigate("/submit-data-right-request")} className="w-32 mx-auto bg-red-500 hover:bg-red-600 text-white text-xs py-2 rounded-md">
          View Requests
        </button>

      </div>
    </div>
  );
};

export default NomineeAuthorization;
