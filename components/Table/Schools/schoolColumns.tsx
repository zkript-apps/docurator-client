import React from 'react';


export const SCHOOLS_COLUMNS = [
    {
        Header: "School Name",
        accessor: "schoolName",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Email",
        accessor: "schoolEmail",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Mobile Number",
        accessor: "schoolPhoneNumber",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: 'Action',
        accessor: "_id",
        Cell: ({ value }) => (
            <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
            >
                Send Records
            </button>
        ),
    },
];