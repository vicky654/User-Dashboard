import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectHeader from "../../pages/Components/SelectHeader";
import useErrorHandler from "../../CustomHooks/useErrorHandler";
import withApiHandler from "../../api/withApiHandler";
import LoaderImg from "../../utils/Loader";



interface ApiProps {
    getData: (url: string) => Promise<any>;
    postedData?: any;
    isLoading?: boolean;
    postData: (url: string, body: any) => Promise<any>;
}

const MailServerSettings: React.FC<ApiProps> = ({ postedData, postData, getData,isLoading }) =>{
  const [tokenValid, setTokenValid] = useState(false);
  const handleApiError = useErrorHandler();

  const formik = useFormik({
    initialValues: {
      name: "",
      server_type: "IMAP",
      serverName: "",
      imap_port: "",
      ssl_tls: false,
      username: "",
      password: "",
      outlook_client_id: "",
      outlook_client_secret: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      serverName: Yup.string().required("Required"),
      imap_port: Yup.number().required("Required").typeError("Must be a number"),
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert("Mail server configuration saved!");
      console.log(values);
    },
  });

  const handleTestConnection = () => {
    setTokenValid(true);
    alert("Connection successful!");
  };






  const GetCompanyDetails = async () => {
  
    console.log("Called GetCompanyDetails");
    try {
      const response = await getData('/settings/imap');
      if (response && response.data?.settings) {
        const settings = response.data.settings;
  
        console.log('Fetched Data:', settings);
  
        // Map API response fields to Formik fields
        // formik.setValues({
        //   smtp_username: settings.smtp_username || "",
        //   smtp_server: settings.smtp_server || "",
        //   smtp_port: settings.smtp_port || "",
        //   smtp_from: settings.smtp_from || "",
        //   smtp_username: settings.smtp_username || "",
        //   smtp_password: settings.smtp_password || "",
        //   encryption: normalizeEncryption(settings.encryption),
        // });
  
  formik.setValues(settings);
  
      } else {
        throw new Error('No data available in the response');
      }
    } catch (error) {
      handleApiError(error);
    }
  };
  
  
  
  useEffect(() => {
  
  
    console.log("Called");
    GetCompanyDetails();
  
  }, []);

  return (
       <div className="p-6 space-y-6">
      {/* Header */}
      <SelectHeader
        title="Incoming Mail Settings"
        subtitle="Configure the settings for your incoming mail server."
        showRiskLevel={false}
        Selecttitle=""
      />

    <form
      onSubmit={formik.handleSubmit}
      className=" bg-white rounded-2xl  "
    >
    
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter a name"
          className="w-full border rounded-md p-2"
        />
      </div>

      {/* Server Type */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">Server Type</label>
        <div className="flex items-center gap-4 mt-4">
          {["IMAP", "POP", "Local"].map((type) => (
            <label key={type} className="flex items-center gap-1">
              <input
                type="radio"
                name="server_type"
                value={type}
                checked={formik.values.server_type === type}
                onChange={formik.handleChange}
              />
              {type} Server
            </label>
          ))}
        </div>
      </div>

      <hr />

      {/* Server & Login */}
 <div className="mt-4">
        <h3 className="text-md font-semibold mb-3">Server & Login</h3>

        {/* Server Information */}
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <label className="block text-sm font-medium mb-1">Server Name</label>
            <input
              type="text"
              name="serverName"
              value={formik.values.serverName}
              onChange={formik.handleChange}
              placeholder="Enter server name"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Port</label>
            <input
              type="text"
              name="imap_port"
              value={formik.values.imap_port}
              onChange={formik.handleChange}
              placeholder="Enter port number"
              className="w-full border rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 mt-4">
          <input
            type="checkbox"
            name="ssl_tls"
            checked={formik.values.ssl_tls}
            onChange={formik.handleChange}
          />
          <label>SSL/TLS?</label>
        </div>

        {/* Login Information */}
        <h4 className="text-sm font-semibold mb-2">Login Information</h4>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Enter username"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter password"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Outlook Client ID
            </label>
            <input
              type="text"
              name="outlook_client_id"
              value={formik.values.outlook_client_id}
              onChange={formik.handleChange}
              placeholder="Enter client ID"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Outlook Client Secret
            </label>
            <input
              type="text"
              name="outlook_client_secret"
              value={formik.values.outlook_client_secret}
              onChange={formik.handleChange}
              placeholder="Enter client secret"
              className="w-full border rounded-md p-2"
            />
          </div>
        </div>

        {/* Token Status */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Outlook Token Valid
          </label>
          <input
            type="text"
            value={tokenValid ? "Valid" : "Not Valid"}
            readOnly
            className={`w-40 text-center rounded-md p-2 ${
              tokenValid
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-500"
            }`}
          />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t">
        <button
          type="button"
          className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200"
        >
          Disconnect
        </button>
        <button
          type="button"
          onClick={handleTestConnection}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
        >
          Fetch Now
        </button>
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save and Test Connection
        </button>
      </div>
    </form>
    </div>
  );
};


export default withApiHandler(MailServerSettings);
