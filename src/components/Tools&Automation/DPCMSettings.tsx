import React, { useState } from "react";
import ToggleSwitch from "../../CustomComponents/ToggleSwitch";

const DPCMSettings: React.FC = () => {
    const [legacyResponse, setLegacyResponse] = useState("Automated");
    const [otpValidity, setOtpValidity] = useState("15 minutes");
    const [templateApproval, setTemplateApproval] = useState(true);
    const [whatsappOtp, setWhatsappOtp] = useState(true);

    return (
        <div className="space-y-4">
            <div>
                <h2 className="text-gray-900 font-semibold text-base">DPCM Settings</h2>
                <p className="text-sm text-gray-500">
                    These settings will be implemented in the consent manager only.
                </p>
            </div>

            {/* Dropdown Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {/* Legacy Consent Response */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">
                        Legacy Consent Response
                    </label>
                    <select
                        value={legacyResponse}
                        onChange={(e) => setLegacyResponse(e.target.value)}
                        className="border rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="Automated">Automated</option>
                        <option value="Manual">Manual</option>
                    </select>
                </div>

                {/* OTP Validity */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">
                        OTP Validity (Consent REST API)
                    </label>
                    <select
                        value={otpValidity}
                        onChange={(e) => setOtpValidity(e.target.value)}
                        className="border rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="5 minutes">5 minutes</option>
                        <option value="10 minutes">10 minutes</option>
                        <option value="15 minutes">15 minutes</option>
                        <option value="30 minutes">30 minutes</option>
                    </select>
                </div>
            </div>

            {/* Toggles Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg w-fit">
                    <span className="text-sm text-gray-700">Template Approval</span>
                    <label className="relative inline-flex items-center cursor-pointer ">
                        <ToggleSwitch
                            checked={templateApproval}
                            onChange={() => setTemplateApproval(!templateApproval)}
                        />
 </label>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg w-fit">
                    <span className="text-sm text-gray-700">Whatsapp OTP</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                           <ToggleSwitch
                            checked={whatsappOtp}
                            onChange={() => setWhatsappOtp(!whatsappOtp)}
                        />
                  </label>
                </div>
            </div>
        </div>
    );
};

export default DPCMSettings;
