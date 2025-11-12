// MailSettings.tsx
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectHeader from "../../pages/Components/SelectHeader";
import { useTranslation } from "react-i18next";
import withApiHandler from "../../api/withApiHandler";
import useErrorHandler from "../../CustomHooks/useErrorHandler";
import { use } from "i18next";
import LoaderImg from "../../utils/Loader";

interface SMTPFormValues {
  // smtp_username: string;
  smtp_server: string;
  smtp_port: string;
  smtp_from: string;
  smtp_username: string;
  smtp_password: string;
  encryption: "none" | "tls" | "ssl";
}

interface ApiProps {
    getData: (url: string) => Promise<any>;
    postedData?: any;
    isLoading?: boolean;
    postData: (url: string, body: any) => Promise<any>;
}
// const MailSettings: React.FC = () => {
  const MailSettings: React.FC<ApiProps> = ({ postedData, postData, getData,isLoading }) => {
    
    const { t } = useTranslation();

    const handleApiError = useErrorHandler();



const GetSmtpDetails = async () => {
  try {
    const response = await getData('/settings/smtp');
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
  GetSmtpDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  const formik = useFormik<SMTPFormValues>({
    initialValues: {
      smtp_username: "",
      smtp_server: "",
      smtp_port: "587",
      smtp_from: "",
      // smtp_username: "",
      smtp_password: "",
      encryption: "tls",
    },
    validationSchema: Yup.object({
      smtp_username: Yup.string().required(t("CompanyNameisRequired")),
      smtp_server: Yup.string().required(t("SMTPServerisRequired")),
      smtp_port: Yup.string().required(t("SMTPPortisRequired")),
      smtp_from: Yup.string().email(t("InvalidEmail")).required(t("EmailisRequired")),
      // smtp_username: Yup.string().required(t("UsernameisRequired")),
      smtp_password: Yup.string().required(t("PasswordisRequired")),
    }),
    onSubmit: (values) => {
      console.log("SMTP Settings Submitted:", values);
      alert("Connection test successful!");
    },
  });

  return (
     <>
            {isLoading ? <LoaderImg /> : null}

        <div className="p-6 space-y-6">
      {/* Header */}
      <SelectHeader
        title={t("MailSettings")}
        subtitle={t("ConfigureYour")}
        showRiskLevel={false}
        Selecttitle=""
      />
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 space-y-5"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">{t('Name')} <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="smtp_username"
          placeholder={t("MarketingEmails")}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.smtp_username}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <p className="my-2 text-gray">Use your username and password to connect to the server. Basic SMTP authentication is required.</p>
        {formik.touched.smtp_username && formik.errors.smtp_username && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.smtp_username}</p>
        )}
      </div>

      {/* SMTP Server + Port */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t('SMTPServer')} <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="smtp_server"
            placeholder="smtp.example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.smtp_server}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
          {formik.touched.smtp_server && formik.errors.smtp_server && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.smtp_server}</p>
        )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('SMTPPort')} <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="smtp_port"
            placeholder="587"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.smtp_port}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
          {formik.touched.smtp_port && formik.errors.smtp_port && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.smtp_port}</p>
        )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">{t('email')} <span className="text-red-500">*</span></label>
        <input
          type="email"
          name="smtp_from"
          placeholder="you@example.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.smtp_from}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
        {formik.touched.smtp_from && formik.errors.smtp_from && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.smtp_from}</p>
        )}
      </div>

      {/* Username + Password */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t('Username')} <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="smtp_username"
            placeholder={t("yourusername")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.smtp_username}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
          {formik.touched.smtp_username && formik.errors.smtp_username && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.smtp_username}</p>
        )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('Password')} <span className="text-red-500">*</span></label>
          <input
            type="password"
            name="smtp_password"
            placeholder="********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.smtp_password}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
          {formik.touched.smtp_password && formik.errors.smtp_password && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.smtp_password}</p>
        )}
        </div>
      </div>

      {/* Connection Encryption */}
      <div>
        <p className="text-sm font-medium mb-2">{t('ConnectionEncryption')} <span className="text-red-500">*</span></p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="encryption"
              value="none"
              checked={formik.values.encryption === "none"}
              onChange={formik.handleChange}
            />
            {t('None')}
          </label>


          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="encryption"
              value="tls"
              checked={formik.values.encryption === "tls"}
              onChange={formik.handleChange}
            />
            {t('Tls')}
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="encryption"
              value="ssl"
              checked={formik.values.encryption === "ssl"}
              onChange={formik.handleChange}
            />
            {t('Sstls')}
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={() => formik.resetForm()}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          {t('DiscardChanges')}
        </button>
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {t('SaveAndTestConnection')}
        </button>
      </div>
    </form>
    </div>
    </>
  );
};

export default withApiHandler(MailSettings);