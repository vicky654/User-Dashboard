import { useNavigate } from "react-router-dom";

export default function NomineeConsentNotice() {
     const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-sm rounded-lg p-10">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Consent Notice
        </h1>

        {/* Content */}
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Purpose */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-1">
              Purpose of Data Processing
            </h2>
            <p>
              We collect and process your personal data to provide and improve our services,
              personalize your experience, communicate with you and comply with legal
              obligations under DPDP Act, 2023.
            </p>
          </div>

          {/* Types of Data */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-1">
              Types of Data Collected
            </h2>
            <p>
              We may collect contact information (e.g., name, email, phone number),
              demographic information (e.g., age, gender), usage data (e.g., website activity),
              and device information (e.g., IP address).
            </p>
          </div>

          {/* Legal Basis */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-1">
              Legal Basis for Processing
            </h2>
            <p>
              The legal basis for processing your personal data is your explicit consent.
              By clicking "I Agree", you agree to the collection and processing of your data as described.
            </p>
          </div>

          {/* Rights */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-1">
              Your Rights
            </h2>
            <p>
              You have the right to withdraw your consent at any time. You also have the
              right to access, rectify, erase, restrict, and object to the processing of
              your personal data.
            </p>
          </div>

          {/* Contact Information Box */}
          <div className="border rounded-md bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              {/* Left */}
              <div>
                <p className="font-semibold text-gray-900">Data Protection Officer</p>
                <p>Email: dpo@example.com</p>
                <p className="mt-1">Phone: +91-9876–543–210</p>
              </div>

              {/* Right */}
              <div>
                <p className="font-semibold text-gray-900">Grievance Officer</p>
                <p>Email: grievance@example.com</p>
                <p className="mt-1">Phone: +91-9876–543–210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={()=> navigate("/consent-declined")}
            className="px-8 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md flex items-center gap-2"
          >
            ✖ Disagree
          </button>

          <button
            className="px-8 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md flex items-center gap-2"
          >
            ✔ Agree
          </button>
        </div>
      </div>
    </div>
  );
}
