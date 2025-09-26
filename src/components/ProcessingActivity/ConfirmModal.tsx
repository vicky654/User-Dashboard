import React from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string; // can include HTML
  note?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
  message,
  note,
  confirmText = "Yes",
  cancelText = "No",
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center box-shadow-lg bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[800px] text-center">
        {/* Title */}
        <h2 className="text-orange-600 text-lg font-semibold mb-4">{title}</h2>

        {/* Message (with HTML support) */}
        <p
          className="text-gray-700 mb-2"
          dangerouslySetInnerHTML={{ __html: message }}
        />

        {/* Note */}
        {note && <p className="text-xs text-red-500 mb-4">{note}</p>}

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            {confirmText}
          </button>
          <button
            onClick={onCancel}
            className="bg-red-600 text-white px-6 py-2 rounded"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
