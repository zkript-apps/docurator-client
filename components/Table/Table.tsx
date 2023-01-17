/* eslint-disable react/jsx-key */
import React, { useMemo, useState, useEffect } from "react";
import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { GlobalFilter } from "./GlobalFilter";


const Table = ({ tableData, tableColumns }: any) => {
  const [newTableData, setNewTableData] = useState([])
  const [newTableColumns, setNewTableColumns] = useState([])

  const columns = useMemo(() => newTableColumns, [newTableColumns]);
  const data = useMemo(() => newTableData, [newTableData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter
  } = useTable({
    columns,
    data,
  }, useGlobalFilter, useSortBy, usePagination);

  const { pageIndex, globalFilter } = state;

  useEffect(() => {
    if (tableColumns && tableData?.items) {
      setNewTableColumns(tableColumns)
      setNewTableData(tableData?.items)
      setPageSize(15)
    }
  }, [setPageSize, tableColumns, tableData?.items])

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="mt-3 overflow-auto divide-y divide-gray-300 shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table {...getTableProps()} className="min-w-full divide-y divide-gray-300 table-auto">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} className="py-3.5 pl-4 text-left text-sm font-semibold sm:pl-6">
                    <span className="flex">
                      {column.render("Header")}
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <ArrowDownIcon className="w-5 h-5 text-blue-500" />
                          : <ArrowUpIcon className="w-5 h-5 text-blue-500" />
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()} className="py-4 pl-4 pr-3 text-sm text-gray-900 whitespace-nowrap sm:pl-6 ">{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-end">
          <span className="inline-flex py-2 mr-5 rounded-md isolate">
            <span className="mr-4 place-self-center drop-shadow-none">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              type="button"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 shadow-sm rounded-l-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <span className="sr-only">Previous</span>
              <ChevronDoubleLeftIcon className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              type="button"
              className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              Previous
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              type="button"
              className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              type="button"
              className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 shadow-sm rounded-r-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <span className="sr-only">Next</span>
              <ChevronDoubleRightIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};
export default Table