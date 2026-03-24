import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitDataRightRequest: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* HEADER */}
      <h2 className="text-2xl font-semibold mb-1">Manage Data Rights Requests</h2>
      <p className="text-gray-600 text-sm mb-6">
        As a nominee, you can submit, track and withdraw data rights requests on behalf of the Data Principal.
      </p>

      {/* TABS */}
      <div className="border-b flex gap-6 text-sm">
        <button className="pb-2 border-b-2 border-red-500 text-red-500 font-medium">
          Submit Request
        </button>
        <button className="pb-2 text-gray-500 hover:text-black">
          Track Requests
        </button>
      </div>

      {/* FORM */}
      <div className="mt-6 bg-white p-6 rounded-lg border">
        <h3 className="font-semibold text-lg mb-4">Submit a New Request</h3>
        <p className="text-gray-600 text-sm mb-4">
          Please fill out the form below to submit a new data rights request.
        </p>

        <div className="space-y-4">

          {/* Data Principal */}
          <div>
            <label className="text-sm font-medium">Select Data Principal</label>
            <select className="form-select mt-1 w-full border rounded p-2 text-sm">
              <option>Select Data Principal</option>
            </select>
          </div>

          {/* Activity */}
          <div>
            <label className="text-sm font-medium">Select Processing Activity</label>
            <select className="form-select mt-1 w-full border rounded p-2 text-sm">
              <option>Select Processing Activity</option>
            </select>
          </div>

          {/* Request Type */}
          <div>
            <label className="text-sm font-medium">Select Request Type</label>
            <select className="form-select mt-1 w-full border rounded p-2 text-sm">
              <option>Select Request Type</option>
            </select>
          </div>

          {/* Details */}
          <div>
            <label className="text-sm font-medium">Request Details</label>
            <textarea
              className="w-full mt-1 border rounded p-2 text-sm"
              rows={4}
              placeholder="Provide any specific details for your request..."
            />
          </div>

          {/* Submit */}
          <button onClick={()=> navigate("/request-details")} className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded text-sm">
            Submit Request
          </button>
        </div>

      </div>
    </div>
  );
};

export default SubmitDataRightRequest;
