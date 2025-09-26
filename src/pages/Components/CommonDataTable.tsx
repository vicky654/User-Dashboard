import React from 'react';

export interface TableColumn<T> {
  header: string;
  accessor: keyof T;
  className?: string;
}

interface CommonDataTableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
}

const CommonDataTable = <T extends object>({ columns, data }: CommonDataTableProps<T>) => {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded shadow">
      <table className="min-w-full text-sm text-left text-gray-700 bg-white">
        <thead className="bg-blue-500 text-white text-sm">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className={`px-4 py-2 ${col.className || ''}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-50">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-2">
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center px-4 py-4">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CommonDataTable;
