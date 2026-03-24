import React from "react";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";

const AgeVerificationProgress: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4">
      <div className="text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Clock size={46} strokeWidth={1.5} className="text-red-500" />
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-black">
          Age Verification in Progress
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          We have started the age verification process <br />
          for you. We’ll notify you once it’s done.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/nominee-age-verified")}
          className="mt-5 bg-red-500 hover:bg-red-600 text-white text-sm px-10 py-2 rounded-md transition"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default AgeVerificationProgress;
