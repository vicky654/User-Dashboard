import React from "react";
import { X, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NominationRequest: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center py-12 bg-[#F9F9F9] px-4">
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-md shadow-sm">

        {/* Header */}
        <div className="px-6 py-4 border-b">
          <h2 className="text-sm font-semibold">Nomination Requests</h2>
          <p className="text-xs text-gray-500 mt-1">
            You have received a nomination request. Please review the details below and take action.
          </p>
        </div>

        {/* Details */}
        <div className="px-6 py-4 text-sm">
          <div className="grid grid-cols-2 py-2 border-b">
            <div className="text-gray-600">Nominee Name</div>
            <div className="font-medium">Jaspal Singh</div>
          </div>

          <div className="grid grid-cols-2 py-2 border-b">
            <div className="text-gray-600">Relationship</div>
            <div className="font-medium">Brother</div>
          </div>

          <div className="grid grid-cols-2 py-2 border-b">
            <div className="text-gray-600">Contact Number</div>
            <div className="font-medium">+91 98231 43124</div>
          </div>

          <div className="grid grid-cols-2 py-2">
            <div className="text-gray-600">Email Address</div>
            <div className="font-medium">jaspal.singh@email.com</div>
          </div>
        </div>

        {/* Consequences Section */}
        <div className="px-6 py-4 border-t">
          <h3 className="text-sm font-semibold mb-2">Consequences of your actions:</h3>

          <p className="text-xs mb-2">
            <span className="text-green-600 font-semibold">Approve: </span>
            By approving, you authorise the nominee to exercise your rights under the DPDP Act, 2023 on your behalf in the event of your death or incapacity.
          </p>

          <p className="text-xs">
            <span className="text-red-600 font-semibold">Reject: </span>
            By rejecting, the nomination will be cancelled. You will need to nominate another individual if you wish to have a nominee.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button onClick={()=> navigate("/nominee-request-failed")} className="flex items-center justify-center w-28 bg-red-500 hover:bg-red-600 text-white text-xs py-2 rounded-md">
              <X size={14} className="mr-1" /> Reject
            </button>

            <button onClick={()=> navigate("/nominee-authorization")} className="flex items-center justify-center w-28 bg-green-500 hover:bg-green-600 text-white text-xs py-2 rounded-md">
              <Check size={14} className="mr-1" /> Approve
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NominationRequest;
