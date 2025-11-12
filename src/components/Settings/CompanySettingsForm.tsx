// CompanySettingsForm.tsx
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectHeader from "../../pages/Components/SelectHeader";
import { useTranslation } from "react-i18next";
import useErrorHandler from "../../CustomHooks/useErrorHandler";
import withApiHandler from "../../api/withApiHandler";
import LoaderImg from "../../utils/Loader";

interface CompanySettingsValues {
  company_name: string;
  websiteDomain: string;
  supportMail: string;
  company_address: string;
  company_phoneno: string;
  withdrawWebhook: string;
}



interface ApiProps {
    getData: (url: string) => Promise<any>;
    postedData?: any;
    isLoading?: boolean;
    postData: (url: string, body: any) => Promise<any>;
}
// const MailSettings: React.FC = () => {
  const CompanySettingsForm: React.FC<ApiProps> = ({ postedData, postData, getData,isLoading }) => {
    



    const { t } = useTranslation();
    
    const handleApiError = useErrorHandler();

  const formik = useFormik<CompanySettingsValues>({
    initialValues: {
      company_name: "",
      websiteDomain: "",
      supportMail: "",
      company_address: "",
      company_phoneno: "",
      withdrawWebhook: "",
    },
    validationSchema: Yup.object({
      company_name: Yup.string().required(t("CompanyNameisRequired")),
      websiteDomain: Yup.string()
        .url(t("InvalidURL"))
        .required(t("WebsiteDomainisRequired")),
      supportMail: Yup.string()
        .email(t("InvalidEmail"))
        .required(t("SupportMailisRequired")),
      company_address: Yup.string().required(t("AddressisRequired")),
      company_phoneno: Yup.string().required(t("ContactNoisRequired")),
      withdrawWebhook: Yup.string().url(t("InvalidURL")).required(t("WithdrawWebhookisRequired")),
    }),
    onSubmit: (values) => {
      console.log("Company Settings Saved:", values);
      alert("Company settings saved successfully!");
    },
  });


  
const GetCompanyDetails = async () => {

  console.log("Called GetCompanyDetails");
  try {
    const response = await getData('/settings/company');
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
       <>
            {isLoading ? <LoaderImg /> : null}
        <div className="p-6 space-y-6">
      {/* Header */}
      <SelectHeader
        title={t("CompanySettings")}
        subtitle={t("ManageYour")}
        showRiskLevel={false}
        Selecttitle=""
      />
    <form
  onSubmit={formik.handleSubmit}
  className="bg-white shadow-lg rounded-2xl p-6 space-y-6"
>
  {/* Company Name */}
  <div>
    <label className="block text-sm font-medium mb-1">
      {t('CompanyName')} <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="company_name"
      placeholder={t("EnterCompanyName")}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.company_name}
      className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
    />
    {formik.touched.company_name && formik.errors.company_name && (
      <p className="text-red-500 text-sm mt-2">{formik.errors.company_name}</p>
    )}
  </div>

  {/* Website Domain + Company Support Mail */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium mb-1">
        {t('WebsiteDomain')} <span className="text-red-500">*</span>
      </label>
      <input
        type="url"
        name="websiteDomain"
        placeholder="https://www.example.com"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.websiteDomain}
        className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
      />
      {formik.touched.websiteDomain && formik.errors.websiteDomain && (
        <p className="text-red-500 text-sm mt-2">{formik.errors.websiteDomain}</p>
      )}
      <p className="text-xs text-gray-500 mt-1">
        For DPGR requests, use this link:{' '}
        <a href="#" className="text-blue-600 hover:underline">
          DPGR Request Link
        </a>
      </p>
    </div>

    <div>
      <label className="block text-sm font-medium mb-1">
        {t('CompanySupportMail')} <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="supportMail"
        placeholder="support@example.com"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.supportMail}
        className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
      />
      {formik.touched.supportMail && formik.errors.supportMail && (
        <p className="text-red-500 text-sm mt-2">{formik.errors.supportMail}</p>
      )}
    </div>
  </div>

  {/* Address + Contact No */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium mb-1">
        {t('Address')} <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="company_address"
        placeholder={t("123InnovationDriveTechCity")}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.company_address}
        className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
      />
      {formik.touched.company_address && formik.errors.company_address && (
        <p className="text-red-500 text-sm mt-2">{formik.errors.company_address}</p>
      )}
    </div>

    <div>
      <label className="block text-sm font-medium mb-1">
        {t('CompanyContactNo')} <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="company_phoneno"
        placeholder="+1 (555) 123-4567"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.company_phoneno}
        className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
      />
      {formik.touched.company_phoneno && formik.errors.company_phoneno && (
        <p className="text-red-500 text-sm mt-2">{formik.errors.company_phoneno}</p>
      )}
    </div>
  </div>

  {/* Withdraw Webhook URL */}
  <div>
    <label className="block text-sm font-medium mb-1">
      {t('WithdrawWebhookUrl')} <span className="text-red-500">*</span>
    </label>
    <input
      type="url"
      name="withdrawWebhook"
      placeholder="https://api.example.com/webhook/withdraw"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.withdrawWebhook}
      className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
    />
    {formik.touched.withdrawWebhook && formik.errors.withdrawWebhook && (
      <p className="text-red-500 text-sm mt-2">{formik.errors.withdrawWebhook}</p>
    )}
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
      {t('SaveChanges')}
    </button>
  </div>
</form>

    </div>
        </>
  );
};

export default withApiHandler(CompanySettingsForm);

