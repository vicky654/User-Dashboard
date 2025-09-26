import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import FilterIcon from "../../../../components/DPDPIcons/FilterIcon";

type FilterNode = {
  id: string;
  label: string;
  children?: FilterNode[];
};

type DataPrincipalFilterModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const filterTree: FilterNode[] = [
  {
    id: "processing",
    label: "Processing Activity",
    children: [
      {
        id: "organization",
        label: "Organization",
        children: [
          {
            id: "accounts",
            label: "Accounts",
            children: [
              { id: "car_insurance", label: "Car Insurance" },
              { id: "merchant", label: "Merchant" },
              { id: "travel_insurance", label: "Travel Insurance" },
              { id: "extra", label: "Extra" },
            ],
          },
          { id: "admin", label: "Admin" },
          { id: "buyer_onboarding", label: "Buyer Onboarding" },
        ],
      },
      { id: "purchase", label: "Purchase" },
    ],
  },
  {
    id: "status",
    label: "Status",
    children: [
      { id: "active", label: "Active" },
      { id: "pending", label: "Pending" },
      { id: "completed", label: "Completed" },
    ],
  },
  {
    id: "template_versions",
    label: "Template Versions",
    children: [
      { id: "v1", label: "V1" },
      { id: "v2", label: "V2" },
      { id: "v3", label: "V3" },
    ],
  },
];

export default function DataPrincipalFilterModal({ open, setOpen }: DataPrincipalFilterModalProps) {
  const [selectedPath, setSelectedPath] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState<Record<string, boolean>>({});

  const getColumns = (): FilterNode[][] => {
    const cols: FilterNode[][] = [];
    let current: FilterNode[] = filterTree;
    cols.push(current);

    for (let i = 0; i < selectedPath.length; i++) {
      const id = selectedPath[i];
      const node = current.find((n) => n.id === id);
      if (!node || !node.children) break;
      current = node.children;
      cols.push(current);
    }
    return cols;
  };

  const columns = getColumns();

  const handleColumnNodeClick = (colIndex: number, nodeId: string, hasChildren?: boolean) => {
    if (!hasChildren) return;
    const newPath = [...selectedPath.slice(0, colIndex), nodeId];
    setSelectedPath(newPath);
  };

  const toggleSelect = (id: string) => {
    setSelectedValues((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleApply = () => {
    const selected = Object.keys(selectedValues).filter((k) => selectedValues[k]);
    console.log("✅ Selected filters:", selected);
    setOpen(false);
  };

  const modalWidth = Math.min(columns.length * 220, 1000);

  if (!open) return null;

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div
        className="bg-[#2C4042] text-black rounded-xl shadow-lg h-[400px] p-4 flex flex-col transition-all duration-300"
        style={{ width: `${modalWidth}px` }}
      >
    <div className="flex justify-between items-center mb-2 ">
      <h2 className="text-xl font-semibold  text-white"><i className="fa fa-filter"></i> Filter Menu</h2>

    <button
            onClick={handleApply}
            className="px-4 py-2 bg-teal-700 text-white rounded-md"
          >
            Apply
          </button>
    </div>

        <div className="flex-1 flex gap-1 overflow-x-auto">
          {columns.map((nodes, colIndex) => (
            <div
              key={colIndex}
              className="min-w-[209px]  max-h-full overflow-y-auto rounded-lg border border-gray-300 p-3 bg-white"
            >
              {nodes.map((node) => {
                const isActive = selectedPath[colIndex] === node.id;
                const checked = !!selectedValues[node.id];
                const hasChildren = !!node.children;

                return (
                  <div
                    key={node.id}
                    className={`flex items-center justify-between gap-2 px-2 py-2 rounded-md mb-1 cursor-pointer ${
                      isActive ? "bg-teal-100" : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 flex-1">
                     
                      <button
                        onClick={() =>
                          handleColumnNodeClick(colIndex, node.id, hasChildren)
                        }
                        className="text-left flex-1"
                      >
                        {node.label}
                      </button>
                    </div>

                    {hasChildren && (
                      <ChevronRight
                        size={16}
                        className={`transition-transform ${
                          isActive ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
