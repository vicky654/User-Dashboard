// SMSSettingsForm.tsx
import React, {useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectHeader from "../../pages/Components/SelectHeader";
import { useTranslation } from "react-i18next";
import useErrorHandler from "../../CustomHooks/useErrorHandler";
import withApiHandler from "../../api/withApiHandler";
import LoaderImg from "../../utils/Loader";

interface SMSFormValues {
  smsGateway: string;
  route: string;
  senderId: string;
  countryCode: string;
  auth_token: string;
  sms_number: string;
  otp_template: string;
  namespaceKey: string;
  linkTemplateName: string;
}


interface ApiProps {
    getData: (url: string) => Promise<any>;
    postedData?: any;
    isLoading?: boolean;
    postData: (url: string, body: any) => Promise<any>;
}

const SMSSettingsForm: React.FC<ApiProps> = ({ postedData, postData, getData,isLoading }) => {
   const { t } = useTranslation();
      const handleApiError = useErrorHandler();
  const formik = useFormik<SMSFormValues>({
    initialValues: {
      smsGateway: "MSG91",
      route: "",
      senderId: "",
      countryCode: "91",
      auth_token: "",
      sms_number: "",
      otp_template: "",
      namespaceKey: "",
      linkTemplateName: "",
    },
    validationSchema: Yup.object({
      smsGateway: Yup.string().required(t("SMSGatewayIsRequired")),
      senderId: Yup.string().required(t("SenderIDIsRequired")),
      route: Yup.string().required(t("RouteIsRequired")),
      countryCode: Yup.string().required(t("CountryCodeIsRequired")),
      auth_token: Yup.string().required(t("auth_tokenIsRequired")),
      sms_number: Yup.string().required(t("sms_numberIsRequired")),
      otp_template: Yup.string().required(t("otp_templateIsRequired")),
      namespaceKey: Yup.string().required(t("NamespaceKeyIsRequired")),
      linkTemplateName: Yup.string().required(t("LinkTemplateNameIsRequired")),
    }),
    onSubmit: (values) => {
      console.log("SMS Settings Submitted:", values);
      alert("Connection tested successfully!");
    },
  });


  const GetSMSDetails = async () => {
  
    console.log("Called GetSMSDetails");
    try {
      const response = await getData('/settings/msg91');
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
    GetSMSDetails();
  
  }, []);

  return (
        <div className="p-6 space-y-6">

             {isLoading ? <LoaderImg /> : null}
      {/* Header */}
      <SelectHeader
        title={t("SMSSettings")}
        subtitle={t("ConfigureYourSMS")}
        showRiskLevel={false}
        Selecttitle=""
      />
    <form
      onSubmit={formik.handleSubmit}
      className=" bg-white shadow-lg rounded-2xl p-6 space-y-6"
    >
    

      {/* SMS Gateway */}
      <div>
        <label className="block text-sm font-medium mb-1">{t('SMSGateway')} <span className="text-red-500">*</span></label>
        <select
          name="smsGateway"
          onChange={formik.handleChange}
          value={formik.values.smsGateway}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
        >
          <option value="MSG91">MSG91</option>
          <option value="Twilio">Twilio</option>
          <option value="TextLocal">TextLocal</option>
        </select>
      </div>

      {/* Route + Sender ID */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t('Route')} <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="route"
            placeholder="4"
            onChange={formik.handleChange}
            value={formik.values.route}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
          {formik.touched.route && formik.errors.route && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.route}</p>
        )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t('SenderID')} <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="senderId"
            placeholder="MSGAPI"
            onChange={formik.handleChange}
            value={formik.values.senderId}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
          {formik.touched.senderId && formik.errors.senderId && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.senderId}</p>
        )}
        </div>
      </div>

      {/* Country Code + Auth Token */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t('CountryCode')} <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="countryCode"
            placeholder="91"
            onChange={formik.handleChange}
            value={formik.values.countryCode}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        {formik.touched.countryCode && formik.errors.countryCode && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.countryCode}</p>
        )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('auth_token')} <span className="text-red-500">*</span></label>
          <input
            type="password"
            name="auth_token"
            onChange={formik.handleChange}
            value={formik.values.auth_token}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        {formik.touched.auth_token && formik.errors.auth_token && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.auth_token}</p>
        )}
        </div>
      </div>

      {/* WhatsApp Settings */}
      <hr className="my-3" />
      <h3 className="text-md font-medium">{t('WhatsAppSettings')} </h3>

      {/* Integrated Number + OTP Template Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t('sms_number')} <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="sms_number"
            placeholder="919354195067"
            onChange={formik.handleChange}
            value={formik.values.sms_number}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        {formik.touched.sms_number && formik.errors.sms_number && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.sms_number}</p>
        )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t('otp_template')} <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="otp_template"
            placeholder="othpath"
            onChange={formik.handleChange}
            value={formik.values.otp_template}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        {formik.touched.otp_template && formik.errors.otp_template && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.otp_template}</p>
        )}
        </div>
      </div>

      {/* Namespace Key + Link Template Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t('NamespaceKey')} <span className="text-red-500">*</span></label>
          <input
            type="password"
            name="namespaceKey"
            onChange={formik.handleChange}
            value={formik.values.namespaceKey}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        {formik.touched.namespaceKey && formik.errors.namespaceKey && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.namespaceKey}</p>
        )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t('LinkTemplateName')} <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="linkTemplateName"
            placeholder={t("EnterTemplateName")}
            onChange={formik.handleChange}
            value={formik.values.linkTemplateName}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        {formik.touched.linkTemplateName && formik.errors.linkTemplateName && (
          <p className="text-red-500 text-sm mt-2">{formik.errors.linkTemplateName}</p>
        )}
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
  );
};

export default withApiHandler(SMSSettingsForm);
