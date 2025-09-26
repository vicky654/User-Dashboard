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
  title = 'Data Table',
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

  const mappedColumns = columns.map((col: any) => ({
    name: col.header,
    selector: (row: any) => row[col.accessor],
    sortable: true,
    wrap: true,
  }));

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#2D8BBA',
        color: '#fff',
        fontWeight: 'bold',
        minHeight: '28px',
        paddingTop: '4px',
        paddingBottom: '4px',
      },
    },
    rows: {
      style: {
        minHeight: '32px',
        fontSize: '13px',
      },
    },
    tableWrapper: {
      style: {
        overflowX: 'auto' as const,
      },
    },
  };

const handleRowClicked = (row: T) => {
  if (rowClickPath) {
    const path = rowClickPath(row);
    if (path) {
      navigate(path);
    }
  }
  // else 👉 do nothing, stay on same component
};


  const handleSelectedRowsChange = ({ selectedRows }: { selectedRows: T[] }) => {
    setSelectedRows(selectedRows);
    onSelectionChange?.(selectedRows);
  };

  return (
    <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
      <DataTable
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


