// ApiSettings.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Copy, RefreshCw } from "lucide-react";
import SelectHeader from "../../pages/Components/SelectHeader";

interface JWTFormValues {
  audience: string;
  issuer: string;
  algorithm: string;
  expiry: string;
  secretKey: string;
  jwtToken: string;
}

const ApiSettings: React.FC = () => {
  const formik = useFormik<JWTFormValues>({
    initialValues: {
      audience: "https://api.yourwhitelabel.com",
      issuer: "https://yourwhitelabel.com",
      algorithm: "HS256",
      expiry: "3600",
      secretKey: "your_super_secret_key_that_is_very_long_and_secure",
      jwtToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2Fw... (example token)",
    },
    validationSchema: Yup.object({
      audience: Yup.string().url("Invalid URL").required("Required"),
      issuer: Yup.string().url("Invalid URL").required("Required"),
      algorithm: Yup.string().required("Required"),
      expiry: Yup.string().required("Required"),
      secretKey: Yup.string()
        .min(32, "Must be at least 32 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("JWT Settings Saved:", values);
      alert("JWT Configuration Saved!");
    },
  });

  const handleGenerateSecret = () => {
    const randomKey = Array(48)
      .fill(null)
      .map(() => Math.random().toString(36).charAt(2))
      .join("");
    formik.setFieldValue("secretKey", randomKey);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <SelectHeader
        title="API Settings"
        subtitle="Our REST APIs use JWT for authentication. A JWT (JSON Web Token) must be sent with every API request. For detailed
instructions on how to generate and use JWTs, please read our   documentation."
        showRiskLevel={false}
        Selecttitle=""
      />


    <form
      onSubmit={formik.handleSubmit}
      className=" bg-white  "
    >
   
      {/* Audience + Issuer */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Audience</label>
          <input
            type="text"
            name="audience"
            disabled
            value={formik.values.audience}
            onChange={formik.handleChange}
            className="w-full border rounded-md p-2 bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Issuer</label>
          <input
            type="text"
            name="issuer"
            disabled
            value={formik.values.issuer}
            onChange={formik.handleChange}
            className="w-full border rounded-md p-2 bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>
      </div>

      {/* Algorithm + Expiry */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Algorithm</label>
          <input
            type="text"
            name="algorithm"
            value={formik.values.algorithm}
            onChange={formik.handleChange}
            disabled
            className="w-full border rounded-md p-2 bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Expiry (seconds)</label>
          <input
            type="text"
            name="expiry"
            value={formik.values.expiry}
            onChange={formik.handleChange}
            className="w-full border rounded-md p-2 bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>
      </div>

      {/* Secret Key */}
      <div>
        <label className="block text-sm font-medium mb-1">Secret Key</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="secretKey"
            value={formik.values.secretKey}
            onChange={formik.handleChange}
            className="flex-1 border rounded-md p-2 bg-gray-100 text-gray-600 cursor-not-allowed"
          />
          <button
            type="button"
            onClick={handleGenerateSecret}
            className="flex items-center gap-1 px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
          >
            <RefreshCw size={16} /> Generate
          </button>
        </div>

        <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-md">
          <p className="text-sm text-yellow-800 font-medium">
            ⚠️ Set a strong secret key
          </p>
          <p className="text-xs text-yellow-700">
            Your secret key must be at least 32 characters long. Treat your secret key
            like a password and keep it secure.
          </p>
        </div>
      </div>

      {/* JWT Token (Disabled) */}
      <div>
        <label className="block text-sm font-medium mb-1">JWT Token</label>
        <div className="flex items-center gap-2">
          <textarea
            name="jwtToken"
            value={formik.values.jwtToken}
            disabled
            className="flex-1 border rounded-md p-2 bg-gray-100 text-gray-600 h-20 resize-none cursor-not-allowed"
          />
          <button
            type="button"
            onClick={() => handleCopy(formik.values.jwtToken)}
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <Copy size={16} />
          </button>
        </div>
      </div>

      {/* Payload Details */}
      <div className="border-t pt-4">
        <h3 className="text-md font-medium mb-2">Payload Details</h3>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-md mb-3">
          <p className="text-sm text-blue-800 font-medium">
            ℹ️ Passing key/values correctly
          </p>
          <p className="text-xs text-blue-700">
            Ensure the key/value pairs in your JWT payload match the configuration above.
            Mismatched values will result in authentication failures.
          </p>
        </div>

        <pre className="bg-gray-100 text-sm p-3 rounded-md overflow-x-auto">
{`payload = {
  "aud": "${formik.values.audience}",
  "iss": "${formik.values.issuer}",
  "email": "jaspal.singh@dpdpconsultants.com",
  "expiry": "1758724200"
}`}
        </pre>
             <button
            type="button"
            onClick={() => handleCopy(formik.values.jwtToken)}
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <Copy size={16} />
          </button>

        <ul className="text-sm text-gray-700 mt-3 space-y-1">
          <li><b className="text-blue-800">aud</b>  <b className="ml-4 text-gray-400">Audience :</b> The recipient for which the JWT is intended.</li>
          <li><b className="text-blue-800">iss</b>  <b className="ml-4 text-gray-400">Issuer :</b> The principal that issued the JWT.</li>
          <li><b className="text-blue-800">email</b>  <b className="ml-4 text-gray-400">Email:</b> The email of the user on whose behalf the API call is made. Example :  <i>user@example.com</i> </li>
          <li><b className="text-blue-800">expiry</b>  <b className="ml-4 text-gray-400">Expiry:</b> The expiration time on or after which the JWT must not be accepted for processing. It's a timestamp.</li>
        </ul>
      </div>

      {/* Buttons */}
      {/* <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={() => formik.resetForm()}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Discard Changes
        </button>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div> */}
    </form>
    </div>
  );
};

export default ApiSettings;
