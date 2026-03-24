import React, { useState } from "react";
import RevokeNomineeConsentModal from "./RevokeNomineeConsentModal";
import { useNavigate } from "react-router-dom";

const NomineeSettings = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("nominee@email.com");
  const [phone, setPhone] = useState("+91-98765-43210");
  const [language, setLanguage] = useState("english");
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
        <button  onClick={() => setOpenModal(true)} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded">
          Withdraw Nominee Consent
        </button>
      </div>
   {openModal && (
        <RevokeNomineeConsentModal
          onClose={() => setOpenModal(false)}
          onConfirm={(otp) => {
            console.log("OTP Submitted:", otp);
            setOpenModal(false);
          }}
        />
      )}
      {/* Contact Info */}
      <div className="bg-white border rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm text-gray-700">Email</label>
            <input
              type="text"
              value={email}
              className="w-full border rounded px-3 py-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phone}
              className="w-full border rounded px-3 py-2"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Language */}
      <div className="bg-white border rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Language</h3>
        <label className="block mb-2 text-sm text-gray-700">Preferred Language</label>

        <select
          className="border rounded px-3 py-2 w-full md:w-60"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="english">English (India)</option>
          <option value="hindi">Hindi</option>
          <option value="tamil">Tamil</option>
        </select>
      </div>

      {/* Notifications */}
      <div className="bg-white border rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold mb-6">Notifications</h3>

        {/* Email Notifications */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="font-medium text-gray-700">Email Notifications</p>
            <p className="text-sm text-gray-500">
              Receive notifications about consent requests and updates.
            </p>
          </div>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={emailNotif}
              onChange={() => setEmailNotif(!emailNotif)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 relative">
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition ${
                  emailNotif ? "translate-x-5" : ""
                }`}
              ></span>
            </div>
          </label>
        </div>

        {/* SMS Notifications */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-700">SMS Notifications</p>
            <p className="text-sm text-gray-500">
              Receive urgent alerts and updates via SMS.
            </p>
          </div>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={smsNotif}
              onChange={() => setSmsNotif(!smsNotif)}
              className="sr-only peer"
            />
            <div
              className={`w-11 h-6 rounded-full relative ${
                smsNotif ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition ${
                  smsNotif ? "translate-x-5" : ""
                }`}
              ></span>
            </div>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <button onClick={()=> navigate("/revoke-Nominee-consent-modal")} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded">
        Save Changes
      </button>
    </div>
  );
};

export default NomineeSettings;
