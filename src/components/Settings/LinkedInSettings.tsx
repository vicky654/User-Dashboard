import React, { useEffect } from "react";
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

const LinkedInSettings: React.FC<ApiProps> = ({ postedData, postData, getData,isLoading }) => {


  const handleApiError = useErrorHandler();
  const formik = useFormik({
    initialValues: {
      linkedin_access_token: "",
      linkedin_redirect_url: "",
      linkedin_client_id: "",
      linkedin_secret_key: "",
      accessToken: "",
      shareOption: "Yes",
    },
    validationSchema: Yup.object({
      linkedin_access_token: Yup.string().required("Scope is required"),
      linkedin_redirect_url: Yup.string().url("Enter valid URL").required("Redirect URL is required"),
      linkedin_client_id: Yup.string().required("Client ID is required"),
      linkedin_secret_key: Yup.string().required("Secret Key is required"),
      accessToken: Yup.string().required("Access Token is required"),
    }),
    onSubmit: (values) => {
      alert("LinkedIn Credentials Saved!");
      console.log(values);
    },
  });

  const handleCheckCredentials = () => {
    alert("LinkedIn credentials verified successfully!");
  };




  const GetLinkedInDetails = async () => {
  
    console.log("Called GetLinkedInDetails");
    try {
      const response = await getData('/settings/linkedin');
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
    GetLinkedInDetails();
  
  }, []);
  

  return (
    
    

        <div className="p-6 space-y-6">
           {isLoading ? <LoaderImg /> : null}
      {/* Header */}
      <SelectHeader
        title="LinkedIn Settings"
        subtitle="Configure your SMTP server to send emails from your platform."
        showRiskLevel={false}
        Selecttitle=""
      />
    <form
      onSubmit={formik.handleSubmit}
      className=" bg-white "
    >
      <h2 className="text-xl font-semibold">LinkedIn Integration Settings</h2>

      {/* LinkedIn Scope & Redirect URL */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">LinkedIn Scope</label>
          <input
            type="text"
            name="linkedin_access_token"
            value={formik.values.linkedin_access_token}
            onChange={formik.handleChange}
            placeholder="Enter Scope"
            className="w-full border rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Redirect URL</label>
          <input
            type="text"
            name="linkedin_redirect_url"
            value={formik.values.linkedin_redirect_url}
            onChange={formik.handleChange}
            placeholder="Enter URL"
            className="w-full border rounded-md p-2"
          />
        </div>
      </div>

      {/* Client ID & Secret Key */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Client ID</label>
          <input
            type="password"
            name="linkedin_client_id"
            value={formik.values.linkedin_client_id}
            onChange={formik.handleChange}
            placeholder="Enter Client ID"
            className="w-full border rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Secret Key</label>
          <input
            type="password"
            name="linkedin_secret_key"
            value={formik.values.linkedin_secret_key}
            onChange={formik.handleChange}
            placeholder="Enter Secret Key"
            className="w-full border rounded-md p-2"
          />
        </div>
      </div>

      {/* Access Token */}
      <div>
        <label className="block text-sm font-medium mb-1">Access Token</label>
        <input
          type="text"
          name="accessToken"
          value={formik.values.accessToken}
          onChange={formik.handleChange}
          placeholder="Enter Access Token"
          className="w-full border rounded-md p-2"
        />
        <p className="text-xs text-gray-500 mt-1">
          Use your username and password to connect to the server. Basic SMTP authentication is required.
        </p>
      </div>

      {/* Share Option */}
      <div>
        <label className="block text-sm font-medium mb-2">Show Share option in DPAP?</label>
        <div className="flex gap-4">
          {["No", "Yes"].map((option) => (
            <label key={option} className="flex items-center gap-1">
              <input
                type="radio"
                name="shareOption"
                value={option}
                checked={formik.values.shareOption === option}
                onChange={formik.handleChange}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t">
        <button
          type="button"
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200"
        >
          Discard Changes
        </button>
        <button
          type="button"
          onClick={handleCheckCredentials}
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Check LinkedIn Credentials
        </button>
      </div>
    </form>
    </div>
  );
};

export default withApiHandler(LinkedInSettings);
