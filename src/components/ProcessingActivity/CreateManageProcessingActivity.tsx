import React, { useState, useTransition } from 'react';
import { useFormik } from 'formik';
import SelectHeader from '../../pages/Components/SelectHeader';
import ConsentIcon from '../DPDPIcons/ConsentIcon';
import { Link } from 'react-router-dom';
import PrimaryColorPicker from '../Layouts/PrimaryColorPicker';
import ConfirmModal from './ConfirmModal';
import { useTranslation } from 'react-i18next';

const CreateManageProcessingActivity = () => {
   const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState<"deactivate" | "delete">("deactivate");

    const handleConfirm = () => {
        console.log(`Confirmed ${mode} ✅`);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        console.log("❌ Cancelled");
        setIsModalOpen(false);
    };
    const modalContent = {
        deactivate: {
            title: "Are you sure you want to deactivate this processing activity?",
            message: `Deactivating this processing activity will result in future consents not being captured.
Please click on <b>YES</b> to confirm the action and <b>NO</b> to go back.`,
            note: "*Please note that the breach notice can be sent to the inactive processing activity as well",
        },
        delete: {
            title: "Parent Processing Activity cannot be deactivated without deactivating child processing activities.",
            message: `Would you like to deactivate all the related child processing activities along with the parent?
Please click on <b>YES</b> to confirm the action and <b>NO</b> to go back.`,
            note: "*Please note that the breach notice can be sent to the inactive processing activity as well",
        },
    };

    const formik = useFormik({
        initialValues: {
            activityName: '',
            parentActivity: 'Accounts Parent',
            description: '',
            manager: 'Satyam Sinha',
            type: 'Mandatory',
            validity: '12 Months',
            active: 'Yes',
            otpMandatory: 'Yes',
            showOnDPGR: 'Yes',
            showOnPrivacy: 'Yes',
            otpValidity: '24 hrs',
        },
        onSubmit: (values) => {
            setMode(values?.parentActivity == 'Accounts Parent' ? "deactivate" : "delete");
            setIsModalOpen(true);
            console.log('Form Data:', values);
        },
    });


    return (
        <>
            <SelectHeader
                title={t("Createnewprocessingactivity")}
                showRiskLevel={false}

                leftIcon={<ConsentIcon width={30} height={30} />}


            />



            <form onSubmit={formik.handleSubmit} className="p-6 bg-white rounded-xl shadow-md">


                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">{t("ProcessingActivityName")} :</label>
                            <input
                                type="text"
                                name="activityName"
                                onChange={formik.handleChange}
                                value={formik.values.activityName}
                                className="border px-3 py-2 rounded w-full"
                                placeholder={t("EnterText")}
                            />
                        </div>

                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">{t("ParentProcessingActivity")} :</label>
                            <select
                                name="parentActivity"
                                onChange={formik.handleChange}
                                value={formik.values.parentActivity}
                                className="border px-3 py-2 rounded w-full"
                            >
                                <option>Accounts Parent </option>
                                <option>Finance Child</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">{t("description")} :</label>
                            <input
                                type="text"
                                name="description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                className="border px-3 py-2 rounded w-full"
                                placeholder={t("EnterText")}
                            />
                        </div>

                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">{t("ProcessingActivityManager")} :</label>
                            <select
                                name="manager"
                                onChange={formik.handleChange}
                                value={formik.values.manager}
                                className="border px-3 py-2 rounded w-full"
                            >
                                <option>Satyam Sinha</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">{t("ProcessingActivityType")} :</label>
                            <select
                                name="type"
                                onChange={formik.handleChange}
                                value={formik.values.type}
                                className="border px-3 py-2 rounded w-full"
                            >
                                <option>Mandatory</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">{t("ValidityofConsent")} :</label>
                            <select
                                name="validity"
                                onChange={formik.handleChange}
                                value={formik.values.validity}
                                className="border px-3 py-2 rounded w-full"
                            >
                                <option>12 Months</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">{t("Active")} :</label>
                            <select
                                name="active"
                                onChange={formik.handleChange}
                                value={formik.values.active}
                                className="border px-3 py-2 rounded w-full"
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">{t("IsOTPMandatory")} :</label>
                            <select
                                name="otpMandatory"
                                onChange={formik.handleChange}
                                value={formik.values.otpMandatory}
                                className="border px-3 py-2 rounded w-full"
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">{t("ShowonDPGR")} :</label>
                            <select
                                name="showOnDPGR"
                                onChange={formik.handleChange}
                                value={formik.values.showOnDPGR}
                                className="border px-3 py-2 rounded w-full"
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">{t("ShowonPrivacy")} :</label>
                            <select
                                name="showOnPrivacy"
                                onChange={formik.handleChange}
                                value={formik.values.showOnPrivacy}
                                className="border px-3 py-2 rounded w-full"
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">{t("OTPValidityforConsentRESTAPI")} :</label>
                            <select
                                name="otpValidity"
                                onChange={formik.handleChange}
                                value={formik.values.otpValidity}
                                className="border px-3 py-2 rounded w-full"
                            >
                                <option>24 hrs</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-4">
                    <button type="submit" className="btn btn-primary text-white px-6 py-2 rounded">
                        {t("Submit")}
                    </button>
                    <Link to="/processingActivity">
                        <button
                            type="button"
                            className="btn btn-secondary text-white px-6 py-2 rounded"
                        >
                            {t("Discard")}
                        </button>
                    </Link>
                </div>


            </form>
            {/* <PrimaryColorPicker /> */}
            <div className="grid grid-cols-2 gap-4 mt-10">
                {[t('ConsentEmailTemplate'), t('PrivacyTemplate'), t('ConsentSMSTemplate')].map((label, idx) => (
                    <div
                        key={idx}
                        className="bg-white border rounded-lg shadow p-4 text-gray-700"
                    >
                        <div className="flex justify-between">
                            <span>{label} :</span>
                            <span>{t("NA")}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span>{t("EffectiveFrom")} :</span>
                            <span>{t("NA")}</span>
                        </div>
                    </div>
                ))}

                {[t('ConsentEmailTemplate'), t('PrivacyTemplate'), t('ConsentSMSTemplate')].map((label, idx) => (
                    <div
                        key={idx + 3}
                        className="bg-white border rounded-lg shadow p-4 text-gray-700"
                    >
                        <div className="flex justify-between">
                            <span>{label} :</span>
                            <span>{t("NA")}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span>{t("EffectiveFrom")} :</span>
                            <span>{t("NA")}</span>
                        </div>
                    </div>
                ))}
            </div>
            <ConfirmModal
                isOpen={isModalOpen}
                title={modalContent[mode].title}
                message={modalContent[mode].message}
                note={modalContent[mode].note}
                confirmText="Yes"
                cancelText="No"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />

        </>



    );
};

export default CreateManageProcessingActivity;
