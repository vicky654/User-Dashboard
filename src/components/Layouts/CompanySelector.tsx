import { useState } from "react";

const CompanySelector = () => {
  const [selected, setSelected] = useState("DPDP Consultants");

  return (
    <div className="flex items-center gap-2">
      <label className="font-semibold text-gray-800 whitespace-nowrap">
        Select Company:
      </label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="rounded-md shadow-md border border-gray-300 px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option>DPDP Consultants</option>
        <option>ABC Corporation</option>
        <option>XYZ Solutions</option>
      </select>
    </div>
  );
};

export default CompanySelector;
