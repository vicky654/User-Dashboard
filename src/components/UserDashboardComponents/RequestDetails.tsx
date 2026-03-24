const RequestDetails: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      <button className="text-sm text-gray-500 mb-4 hover:underline">
        ← Back to Requests Tracking
      </button>

      <h2 className="text-xl font-semibold mb-1">Request Details</h2>
      <p className="text-gray-600 text-sm mb-6">
        Detailed information for request ID REQ12344
      </p>

      <div className="bg-white border rounded-lg p-6">

        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-xs text-gray-500">Request ID</p>
            <p className="font-medium mb-4">REQ12344</p>

            <p className="text-xs text-gray-500">Request Type</p>
            <p className="font-medium mb-4">Correction</p>

            <p className="text-xs text-gray-500">Estimated Time for Resolution</p>
            <p className="font-medium">September 23, 2025</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Status</p>
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
              Pending
            </span>

            <p className="text-xs text-gray-500 mt-4">Submission Date</p>
            <p className="font-medium">August 23, 2025</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs text-gray-500">Request Details</p>
          <p className="text-sm mt-1">
            User requested to correct their mailing address associated with their account.
          </p>
        </div>

        <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded text-sm flex items-center gap-2 disabled:bg-gray-300" disabled>
          🚫 Escalate Grievance
        </button>
      </div>

      <div className="mt-4 bg-gray-50 border rounded p-4 text-xs text-gray-600">
        The “Escalate Grievance” button will be enabled after the ETA for the resolution has passed.
        <br />
        Current ETA: September 23, 2025
      </div>
    </div>
  );
};

export default RequestDetails;
