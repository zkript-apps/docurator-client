import React, { useEffect, useState } from "react";
import Table from "../Table";
import useSchools from "../../../hooks/useSchools";
import useAuth from "../../../hooks/useAuth";
import useGetStudent from '../../../hooks/useGetStudent';
import useAddClaimAccess from "../../../hooks/useAddClaimAccess";
import useClaimAccess from "../../../hooks/useClaimAccess";

const SchoolsList = () => {
    const { studentInformation } = useGetStudent();
    const { triggerAddClaimAccess } = useAddClaimAccess()
    const { claimAccessData } = useClaimAccess()
    const { verifyLoginData } = useAuth();
    const [schools, setSchools] = useState([]);
    const { schoolsData, refetchSchools } = useSchools();

    useEffect(() => {
        if (verifyLoginData) {
            setSchools(schoolsData)
        }
    }, [verifyLoginData, schools, schoolsData, refetchSchools]);

    const sendData = (e) => {
        const lrn = studentInformation?.lrn
        const schoolId = e
        triggerAddClaimAccess({
            lrn,
            schoolId
        }, { onSuccess: () => { document?.getElementById("claimAccessForm")?.reset() } })
    }

    const SCHOOLS_COLUMNS = [
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
            Cell: ({ row }) => (
                <button
                    disabled={row.original._id === "6397e78ad4c2d6ff826c356f" ? true : false}
                    onClick={() => sendData(row.original._id)}
                    className={row.original._id === "6397e78ad4c2d6ff826c356f" ?
                        "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none" : "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"}
                >
                    Send Records
                </button >
            ),
        },
    ];

    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Schools
                </h2>
            </div>
            <div className="mt-3">
                <div className="max-w-6xl mx-auto lg:px-8">
                    <div className="flex flex-col">
                        <Table tableData={schools} tableColumns={SCHOOLS_COLUMNS} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SchoolsList;