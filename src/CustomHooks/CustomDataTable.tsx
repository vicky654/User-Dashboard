// ✅ CommonDataTable.tsx
import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

interface Column<T> extends TableColumn<T> {}

interface CommonDataTableProps<T> {
  title?: string;
  columns: any;
  data: T[];
  pagination?: boolean;
  highlightOnHover?: boolean;
  pointerOnHover?: boolean;
  dense?: boolean;
  isRtl?: boolean;
  scrollHeight?: string;
  onSelectionChange?: (rows: T[]) => void;
  rowClickPath?: (row: T) => string | null;
}

export function CommonDataTable<T>({
  title,
  columns,
  data,
  pagination = true,
  highlightOnHover = true,
  pointerOnHover = true,
  dense = false,
  isRtl = false,
  scrollHeight = '400px',
  rowClickPath,
  onSelectionChange,
}: CommonDataTableProps<T>) {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  // ✅ Map column data
  const mappedColumns = columns.map((col: any) => ({
    name: col.header,
    cell: (row: any) => {
      const value = row[col.accessor];

      // Handle array-type data (e.g., tags)
      if (Array.isArray(value)) {
        const tagColors = [
          { bg: '#FFEE9380', text: '#B76E00CC' },
          { bg: '#002F9780', text: '#4285F4' },
          { bg: '#67FF9080', text: '#009F24' },
        ];

        return (
          <div className="flex flex-wrap gap-1">
            {value.map((item: string, i: number) => {
              const { bg, text } = tagColors[i % tagColors.length];
              return (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full font-medium"
                  style={{ backgroundColor: bg, color: text }}
                >
                  {item}
                </span>
              );
            })}
          </div>
        );
      }

      return value ?? '-';
    },
    sortable: true,
    wrap: true,
  }));

  // ✅ Custom table styles with dynamic primary color
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: 'rgb(var(--color-secondary))', // dynamic secondary color
        color: '#fff',
        fontWeight: 600,
        fontSize: '14px',
        borderBottom: '2px solid rgba(0,0,0,0.2)',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '16px',
        paddingRight: '16px',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.3px',
      },
    },
    rows: {
      style: {
        minHeight: '36px',
        fontSize: '13px',
        borderBottom: '1px solid #E5E7EB',
        paddingLeft: '16px',
        paddingRight: '16px',
        transition: 'background-color 0.2s ease',
        '&:hover': {
          backgroundColor: '#F3FAFD',
        },
      },
    },
    table: {
      style: {
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        overflow: 'hidden',
      },
    },
    tableWrapper: {
      style: {
        overflowX: 'auto' as const,
      },
    },
  };

  // ✅ Handle row click navigation
  const handleRowClicked = (row: T) => {
    if (rowClickPath) {
      const path = rowClickPath(row);
      if (path) navigate(path);
    }
  };

  // ✅ Handle selected rows
  const handleSelectedRowsChange = ({ selectedRows }: { selectedRows: T[] }) => {
    setSelectedRows(selectedRows);
    onSelectionChange?.(selectedRows);
  };

  return (
    <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
      <DataTable
        title={title}
        columns={mappedColumns}
        data={data}
        pagination={pagination}
        highlightOnHover={highlightOnHover}
        pointerOnHover={pointerOnHover}
        dense={dense}
        onRowClicked={handleRowClicked}
        fixedHeader
        fixedHeaderScrollHeight={scrollHeight}
        customStyles={customStyles}
        selectableRows={false}
        onSelectedRowsChange={handleSelectedRowsChange}
      />
    </div>
  );
}
