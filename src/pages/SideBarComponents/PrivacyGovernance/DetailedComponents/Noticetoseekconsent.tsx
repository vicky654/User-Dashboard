// src/components/CommonModal.tsx
import { useState } from "react";
import { X } from "lucide-react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tabs: Tab[];
  footer?: React.ReactNode;
}

const Noticetoseekconsent: React.FC<CommonModalProps> = ({ isOpen, onClose, title, tabs, footer }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[600px] max-w-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-orange-600">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 text-sm font-medium ${
                i === activeTab ? "border-b-2 border-orange-500 text-orange-600" : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4">{tabs[activeTab].content}</div>

        {/* Footer */}
        {footer && <div className="flex justify-end gap-2 p-4 border-t">{footer}</div>}
      </div>
    </div>
  );
};

export default Noticetoseekconsent;
