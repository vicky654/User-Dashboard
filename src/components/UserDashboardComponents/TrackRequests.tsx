const TrackRequests: React.FC = () => {
  const data = [
    { id: "REQ12344", date: "2025-09-13", status: "Resolved", type: "Data Access Request" },
    { id: "REQ49483", date: "2025-07-10", status: "In Progress", type: "Data Access Request" },
    { id: "REQ94802", date: "2025-05-10", status: "Submitted", type: "Data Correction Request" },
    { id: "REQ49802", date: "2025-03-05", status: "Resolved", type: "Data Portability Request" },
    { id: "REQ43542", date: "2025-05-12", status: "Resolved", type: "Data Access Request" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="border-b flex gap-6 text-sm mb-4">
        <button className="pb-2 text-gray-500">Submit Request</button>
        <button className="pb-2 border-b-2 border-red-500 text-red-500 font-medium">
          Track Requests
        </button>
      </div>

      <h3 className="font-semibold text-lg mb-3">Manage Requests</h3>
      <p className="text-gray-600 text-sm mb-4">
        View and manage all requests submitted on behalf of the Data Principal.
      </p>

      <div className="bg-white border rounded-lg p-4">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="py-2 px-3 text-left">Request ID</th>
              <th className="py-2 px-3 text-left">Date</th>
              <th className="py-2 px-3 text-left">Status</th>
              <th className="py-2 px-3 text-left">Request Type</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3">{row.id}</td>
                <td className="py-2 px-3">{row.date}</td>
                <td className="py-2 px-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      row.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : row.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-2 px-3 text-red-500">{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackRequests;
