import React, { useState } from 'react';
import { useFormik } from 'formik';
import SelectHeader from '../../pages/Components/SelectHeader';
import ConsentIcon from '../DPDPIcons/ConsentIcon';
import { Link } from 'react-router-dom';
import PrimaryColorPicker from '../Layouts/PrimaryColorPicker';
import ConfirmModal from './ConfirmModal';

const CreateManageProcessingActivity = () => {
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
                title="Create new processing activity"
                showRiskLevel={false}

                leftIcon={<ConsentIcon width={30} height={30} />}


            />



            <form onSubmit={formik.handleSubmit} className="p-6 bg-white rounded-xl shadow-md">


                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">Processing Activity Name :</label>
                            <input
                                type="text"
                                name="activityName"
                                onChange={formik.handleChange}
                                value={formik.values.activityName}
                                className="border px-3 py-2 rounded w-full"
                                placeholder="Enter Text"
                            />
                        </div>

                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">Parent Processing Activity :</label>
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
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">Description :</label>
                            <input
                                type="text"
                                name="description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                className="border px-3 py-2 rounded w-full"
                                placeholder="Enter Text"
                            />
                        </div>

                        <div className="flex items-center">
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">Processing Activity Manager :</label>
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
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">Processing Activity Type :</label>
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
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">Validity of Consent (in Months) :</label>
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
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">Active :</label>
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
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">Is OTP Mandatory? :</label>
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
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">Show on DPGR :</label>
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
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">Show on Privacy :</label>
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
                            <label className="w-[440px] font-medium text-gray-700 flex justify-between pr-2">OTP Validity for Consent REST API :</label>
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
                        Submit
                    </button>
                    <Link to="/processingActivity">
                        <button
                            type="button"
                            className="btn btn-secondary text-white px-6 py-2 rounded"
                        >
                            Discard
                        </button>
                    </Link>
                </div>


            </form>
            {/* <PrimaryColorPicker /> */}
            <div className="grid grid-cols-2 gap-4 mt-10">
                {['Consent Email Template', 'Privacy Template', 'Consent SMS Template'].map((label, idx) => (
                    <div
                        key={idx}
                        className="bg-white border rounded-lg shadow p-4 text-gray-700"
                    >
                        <div className="flex justify-between">
                            <span>{label} :</span>
                            <span>NA</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span>Effective From :</span>
                            <span>NA</span>
                        </div>
                    </div>
                ))}

                {['Consent Email Template', 'Privacy Template', 'Consent SMS Template'].map((label, idx) => (
                    <div
                        key={idx + 3}
                        className="bg-white border rounded-lg shadow p-4 text-gray-700"
                    >
                        <div className="flex justify-between">
                            <span>{label} :</span>
                            <span>NA</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span>Effective From :</span>
                            <span>NA</span>
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
