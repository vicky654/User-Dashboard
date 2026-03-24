import { useNavigate } from "react-router-dom";

export default function ConsentDeclined() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-sm rounded-lg p-10 text-center border">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center bg-red-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 5.636a9 9 0 11-12.728 0 9 9 0 0112.728 0zM15 9l-6 6m0-6l6 6"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Consent Declined
        </h2>

        {/* Message */}
        <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
          You declined consent. Your details will not be used for nomination. No further
          action is required.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/login")}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-md transition text-sm font-medium"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
