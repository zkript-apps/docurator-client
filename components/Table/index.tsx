import React from "react";

const Table = ({ columns, rows, pageCount, currentPage, setCurrentPage }) => {
    return (
        <>
            <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow lg:rounded-t-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            {columns.map((column, index) => {
                                return (
                                    <th
                                        key={index}
                                        className="px-6 py-3 text-sm font-semibold text-left text-gray-900 bg-gray-50"
                                        scope="col"
                                    >
                                        {column}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {rows.map((students, index) => (
                            <tr key={index} className="bg-white">
                                {students.map((st) => {
                                    return (
                                        <td
                                            key={1}
                                            className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                                        >
                                            {st}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <nav
                className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6 lg:rounded-b-lg lg:shadow"
                aria-label="Pagination"
            >
                <div className="hidden sm:block">
                    {rows.length > 0 ? (
                        <p className="text-sm text-gray-700">
                            Showing{" "}
                            <span className="font-medium">
                                {currentPage === 1 ? 1 : (currentPage - 1) * 10 + 1}
                            </span>{" "}
                            to <span className="font-medium">{currentPage * 10}</span> of{" "}
                            <span className="font-medium">{pageCount}</span> results
                        </p>
                    ) : (
                        <p className="text-sm italic text-gray-400">No data to show</p>
                    )}
                </div>
                <div className="flex justify-between flex-1 sm:justify-end">
                    <button
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                        className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        disabled={currentPage === pageCount}
                        onClick={() =>
                            currentPage < pageCount && setCurrentPage(currentPage + 1)
                        }
                        className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Table;