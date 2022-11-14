/* eslint-disable react/jsx-key */
import React, { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";

export const Table = (tableData) => {
  const [newTableData, setNewTableData] = useState([])
  const [newTableColumns, setNewTableColumns] = useState([])

  useEffect(() => {
    if (tableData.tableColumns && tableData.tableData.items) {
      setNewTableColumns(tableData.tableColumns)
      setNewTableData(tableData.tableData.items)
    }
  }, [newTableColumns, newTableData, tableData.tableColumns, tableData.tableData.items])

  const columns = useMemo(() => newTableColumns, [newTableColumns]);
  const data = useMemo(() => newTableData, [newTableData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <>
      <div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table {...getTableProps()} className="min-w-full divide-x divide-gray-300">
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()} className="w-full py-4 pl-4 pr-3 text-sm text-gray-900 max-w-0 sm:w-auto sm:max-w-none sm:pl-6">{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
