import { use } from "i18next";
import React from "react";
import { useNavigate } from "react-router-dom";

const AccountClosedSuccess = () => {

    const navigate= useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white p-6 w-[420px] rounded-md shadow text-center">

        <div className="mx-auto bg-green-100 text-green-600 p-4 rounded-full text-2xl w-fit mb-4">
          ✓
        </div>

        <h2 className="text-lg font-semibold mb-2">
          Account Closed Successfully
        </h2>

        <p className="text-sm text-gray-600 mb-5">
          Your account has been closed and you have been logged out.
          Thank you for using our services.
        </p>

        <button onClick={() => navigate("/")}  className="px-6 py-2 bg-red-500 text-white rounded-md">
          Return to Login
        </button>
      </div>
    </div>
  );
};

export default AccountClosedSuccess;
