// CommonToolbar.tsx

import React from 'react';
import { toast } from 'react-toastify';
import Tooltip from './Tooltip';
import { useTranslation } from 'react-i18next';



interface CommonToolbarProps {
  searchText: string;
  setSearchText: (value: string) => void;
  onSearch: () => void;
  onReset?: () => void;
  onCreate?: () => void;
  onDelete?: () => void;
  onDuplicate?: () => void;
  onExport?: () => void;
  onImport?: () => void;
  onFilter?: () => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  perPage: number;
  setPerPage: (value: number) => void;
}

const CommonToolbar: React.FC<CommonToolbarProps> = ({
  searchText,
  setSearchText,
  onSearch,
  onReset,
  onCreate,
  onDelete,
  onDuplicate,
  onExport,
  onImport,
  onFilter,
  currentPage,
  totalPages,
  onPageChange,
  perPage,
  setPerPage,
}) => {
  const handleFilter = () => {
    // toast.info('Search triggered!');
    onFilter?.();
  };
  const handleSearch = () => {
    // toast.info('Search triggered!');
    onSearch();
  };

  const handleCreate = () => {
    // toast.success('Create button clicked');
    onCreate?.();
  };

  const handleDelete = () => {
    // toast.warn('Delete button clicked');
    onDelete?.();
  };

  const handleDuplicate = () => {
    // toast.success('Duplicate button clicked');
    onDuplicate?.();
  };
  const handleExport = () => {
    // toast.success('Export button clicked');
    onExport?.();
  };

  const handleImport = () => {
    // toast.success('Import button clicked');
    onImport?.();
  };
  const { t } = useTranslation();
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className="px-2 py-1 rounded text-sm text-gray-700 hover:bg-gray-200"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span key="start-ellipsis">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-2 py-1 rounded text-sm ${currentPage === i ? 'btn text-white' : 'text-gray-700 hover:bg-gray-200'
            }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="end-ellipsis">...</span>);
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className="px-2 py-1 rounded text-sm text-gray-700 hover:bg-gray-200"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };


  return (
    <div className="w-full flex flex-col my-8 ">
      {/* Top row with search and action buttons */}
      <div className="flex flex-wrap justify-between items-center gap-4">

        {/* Search and reset */}
        <div className="flex items-center gap-1">
          <div className="relative">
            <input type="text" placeholder={t("EnterText")} className="pl-9 pr-3 py-2 border border-gray-300 rounded  w-[250px]" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <i className="fa fa-search" /> </span> </div> <Tooltip text={t("Search")}>
            <button onClick={handleSearch} className="btn hover:bg-blue-700 text-white px-4 py-[10px] rounded shadow" > <i className="fa fa-search" /> </button>
          </Tooltip>
          {onReset && (
            <Tooltip text={t("Reset")}>
              <button
                onClick={onReset}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
              >
                <i className="fa fa-times" />
              </button>
            </Tooltip>
          )} </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1">


          {onCreate && (
            <Tooltip text={t('create')}>
              <button
                onClick={handleCreate}
                className="btn hover:bg-blue-700 text-white px-4 py-2 rounded shadow flex items-center gap-1"
              >
                <i className="fa fa-plus" />
              </button>
            </Tooltip>
          )}

          {onDuplicate && (
            <Tooltip text={t('duplicate')}>
              <button
                onClick={handleDuplicate}
                className="btn hover:bg-blue-700 text-white px-4 py-2 rounded shadow flex items-center gap-1"
              >
                <i className="fa fa-copy" />
              </button>
            </Tooltip>
          )}

          {onDelete && (
            <Tooltip text={t('delete')}>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow flex items-center gap-1"
              >
                <i className="fa fa-trash" />
              </button>
            </Tooltip>
          )}

          {onImport && (
            <Tooltip text={t('import')}>
              <button
                onClick={handleImport}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow flex items-center gap-1"
              >
                <i className="fa fa-download" />
              </button>
            </Tooltip>
          )}

          {onExport && (
            <Tooltip text={t('export')}>
              <button
                onClick={handleExport}
                className="bg-primary text-white px-4 py-2 rounded shadow flex items-center gap-1"
              >
                <i className="fa fa-upload" />
              </button>
            </Tooltip>
          )}

          {onFilter && (
            <Tooltip text={t('filter')}>
              <button
                onClick={handleFilter}
                className="bg-primary text-white px-4 py-2 rounded shadow flex items-center gap-1"
              >
                <i className="fa fa-filter" />
              </button>
            </Tooltip>
          )}

        </div>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          {/* Items per page selector */}
          <div className="flex items-center gap-2">
            {/* <span>Items per page:</span> */}
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                onPageChange(1); // Reset to first page
              }}
              className="border border-gray-300 rounded px-2 py-1 "
            >
              {[10, 25, 50, 100].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-gray-500 hover:underline disabled:opacity-50"
            >
              &lt; {t('Previous')}
            </button>

            {renderPageNumbers?.()}

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="text-gray-500 hover:underline disabled:opacity-50"
            >
              {t('Next')} &gt;
            </button>


          </div>
        </div>
      </div>

      {/* Bottom row with items per page + pagination */}

    </div>


  );
};

export default CommonToolbar;
