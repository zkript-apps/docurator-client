import React, { useEffect, useState } from "react";
import Table from "../Table";
import useGetUnverifiedAccounts from "../../../hooks/useGetUnverifiedAccounts";
import {
    CheckIcon
} from '@heroicons/react/24/outline'
import useAuth from "../../../hooks/useAuth";
import useVerifyaccount from "../../../hooks/useVerifyAccount";

const VerifyAccountList = () => {
    const { verifyLoginData } = useAuth();
    const { unverifiedAccountsData, isUnverifiedAccountsLoading, refetchUnverifiedAccounts } = useGetUnverifiedAccounts();
    const { triggerVerifyAccount, triggerCancelVerification } = useVerifyaccount();
    const [unverifiedAccounts, setUnverifiedAccounts] = useState([]);

    useEffect(() => {
        if (verifyLoginData) {
            setUnverifiedAccounts(unverifiedAccountsData)
            refetchUnverifiedAccounts
        }
    }, [verifyLoginData, unverifiedAccountsData, refetchUnverifiedAccounts]);

    const verifyAccount = (accountId: any) => {
        triggerVerifyAccount([{
            isVerified: true,
        }, accountId])
    }

    const cancelVerification = (accountId: any) => {
        triggerCancelVerification(accountId, { onSuccess: () => refetchUnverifiedAccounts() })
    }

    const UNVERIFIED_ACCOUNTS_COLUMNS = [
        {
            Header: "School Name",
            accessor: "schoolId.schoolName",
            Cell: ({ value }: any) => {
                if (value) {
                    return value
                } else {
                    return "..."
                }
            },
        },
        {
            Header: "Email",
            accessor: "schoolId.schoolEmail",
            Cell: ({ value }: any) => {
                if (value) {
                    return value
                } else {
                    return "..."
                }
            },
        },
        {
            Header: "Mobile Number",
            accessor: "schoolId.schoolPhoneNumber",
            Cell: ({ value }: any) => {
                if (value) {
                    return value
                } else {
                    return "..."
                }
            },
        },
        {
            Header: 'Action',
            Cell: ({ row }: any) => (
                <div className="flex gap-4">
                    <button
                        disabled={row.original._id === "6397e78ad4c2d6ff826c356f" ? true : false}
                        onClick={() => verifyAccount(row.original?._id?.toString())}
                        className={row.original._id === "6397e78ad4c2d6ff826c356f" ?
                            "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none" : "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-700"}
                    >
                        Verify
                    </button >
                    <button
                        disabled={row.original._id === "6397e78ad4c2d6ff826c356f" ? true : false}
                        onClick={() => cancelVerification(row.original?._id?.toString())}
                        className={row.original._id === "6397e78ad4c2d6ff826c356f" ?
                            "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none" : "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-700"}
                    >
                        Cancel
                    </button >
                </div>

            ),
        },
    ];

    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Verify Account
                </h2>
            </div>
            <div className="mt-3">
                <div className="max-w-6xl mx-auto lg:px-8">
                    <div className="flex flex-col">
                        <Table tableData={unverifiedAccounts} tableColumns={UNVERIFIED_ACCOUNTS_COLUMNS} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyAccountList;