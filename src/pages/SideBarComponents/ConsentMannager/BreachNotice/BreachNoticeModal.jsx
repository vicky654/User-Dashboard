import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// ✅ Validation Schema
const validationSchema = Yup.object({
  noticeType: Yup.string().required("Notice Type is required"),
  noticeName: Yup.string().required("Privacy Notice Name is required"),
  subject: Yup.string().required("Subject is required"),
  file: Yup.mixed().required("CSV/XLSX file is required"),
});

const BreachNoticeModal = ({ open, onClose, onSave }) => {
  const formik = useFormik({
    initialValues: {
      noticeType: "",
      noticeName: "",
      subject: "",
      file: null,
    },
    validationSchema,
    onSubmit: (values) => {
      onSave(values);
      onClose();
    },
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-orange-600 mb-6">
          Send Privacy Notice
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Horizontal Fields */}
<div className="space-y-4">
  {/* Notice Type */}
  <div className="flex items-center gap-2">
    <label className="w-1/3 text-sm font-medium flex justify-between pr-2">
      <span>Notice Type</span>
      <span>:</span>
    </label>
    <div className="w-2/3">
      <select
        name="noticeType"
        value={formik.values.noticeType}
        onChange={formik.handleChange}
        className="w-full border rounded-lg px-3 py-2"
      >
        <option value="">Select Notice Type</option>
        <option value="mail">Mail</option>
        <option value="sms">SMS</option>
        <option value="push">Push Notification</option>
      </select>
      {formik.errors.noticeType && formik.touched.noticeType && (
        <p className="text-red-500 text-sm">{formik.errors.noticeType}</p>
      )}
    </div>
  </div>

  {/* Privacy Notice Name */}
  <div className="flex items-center gap-2">
    <label className="w-1/3 text-sm font-medium flex justify-between pr-2">
      <span>Privacy Notice Name</span>
      <span>:</span>
    </label>
    <div className="w-2/3">
      <input
        type="text"
        name="noticeName"
        value={formik.values.noticeName}
        onChange={formik.handleChange}
        placeholder="Enter Privacy Notice Name"
        className="w-full border rounded-lg px-3 py-2"
      />
      {formik.errors.noticeName && formik.touched.noticeName && (
        <p className="text-red-500 text-sm">{formik.errors.noticeName}</p>
      )}
    </div>
  </div>

  {/* Subject */}
  <div className="flex items-center gap-2">
    <label className="w-1/3 text-sm font-medium flex justify-between pr-2">
      <span>Subject</span>
      <span>:</span>
    </label>
    <div className="w-2/3">
      <input
        type="text"
        name="subject"
        value={formik.values.subject}
        onChange={formik.handleChange}
        placeholder="Enter Subject"
        className="w-full border rounded-lg px-3 py-2"
      />
      {formik.errors.subject && formik.touched.subject && (
        <p className="text-red-500 text-sm">{formik.errors.subject}</p>
      )}
    </div>
  </div>
</div>



          {/* Upload + Download Buttons */}
          <div className="flex items-center gap-4">
            {/* Hidden File Input */}
            <input
              type="file"
              accept=".csv,.xlsx"
              id="fileUpload"
              className="hidden"
              onChange={(event) =>
                formik.setFieldValue("file", event.currentTarget.files[0])
              }
            />
            {/* Upload Button */}
            <label
              htmlFor="fileUpload"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-gray-900"
            >
                <i className="fa fa-upload p-2"></i>
              {formik.values.file ? formik.values.file.name : "Upload Document"}
            </label>

            {/* Download Button */}
            <button
              type="button"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              onClick={() => {
                const blob = new Blob(["name,email,phone"], {
                  type: "text/csv",
                });
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "sample.csv";
                link.click();
              }}
            >
       <i className="fa fa-download p-2"></i>
      Download Sample
            </button>
          </div>
          {formik.errors.file && formik.touched.file && (
            <p className="text-red-500 text-sm">{formik.errors.file}</p>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-6">
               <button
              type="submit"
              className="px-4 py-2 btn text-white rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Cancel
            </button>
         
          </div>
        </form>
      </div>
    </div>
  );
};

export default BreachNoticeModal;
