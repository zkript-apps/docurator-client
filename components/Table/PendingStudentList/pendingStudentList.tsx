import React, { useEffect, useState } from "react";
import Table from "../Table";
import useClaimAccess from "../../../hooks/useClaimAccess";
import useAuth from "../../../hooks/useAuth";
import { format } from "date-fns";
import usePendingStudents from "../../../hooks/usePendingStudents";
import useAcceptStudent from "../../../hooks/useAcceptStudent";

const PendingStudentList = () => {
    const { verifyLoginData } = useAuth();
    const [pendingStudents, setPendingStudents] = useState([]);
    const { pendingClaimAccessData, refetchPendingClaimAccess } = usePendingStudents()
    const { triggerAcceptStudent, triggerRejectStudent } = useAcceptStudent()

    useEffect(() => {
        if (verifyLoginData) {
            setPendingStudents(pendingClaimAccessData)
        }
    }, [verifyLoginData, pendingClaimAccessData]);

    const acceptStudent = (studentId: any) => {
        triggerAcceptStudent([{
            isAccepted: true,
        }, studentId, { onSuccess: () => refetchPendingClaimAccess }])
    }

    const rejectStudent = (studentId: any) => {
        triggerRejectStudent(studentId), { onSuccess: () => refetchPendingClaimAccess }
    }

    const STUDENT_COLUMNS = [
        {
            Header: "LRN",
            accessor: "studentId.lrn",
            Cell: ({ value }: any) => {
                if (value) {
                    return value
                } else {
                    return "..."
                }
            },
        },
        {
            Header: "Last Name",
            accessor: "studentId.lastName",
            Cell: ({ value }: any) => {
                if (value) {
                    return value
                } else {
                    return "..."
                }
            },
        },
        {
            Header: "First Name",
            accessor: "studentId.firstName",
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
            accessor: "studentId.userId.email",
            Cell: ({ value }: any) => {
                if (value) {
                    return value
                } else {
                    return "..."
                }
            },
        },
        {
            Header: "Date of Birth (dd/mm/yyyy)",
            accessor: "studentId.dateOfBirth",
            Cell: ({ value }: any) => {
                if (value) {
                    return format(new Date(value), "dd/MM/yyyy");
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
                        onClick={() => acceptStudent(row.original._id)}
                        className={"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-700"}
                    >
                        Accept
                    </button >
                    <button
                        onClick={() => rejectStudent(row.original._id)}
                        className={"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-700"}
                    >
                        Reject
                    </button >
                </div>

            ),
        },
    ];

    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Pending Students
                </h2>
            </div>
            <div className="mt-3">
                <div className="max-w-6xl mx-auto lg:px-8">
                    <div className="flex flex-col">
                        <Table tableData={pendingStudents} tableColumns={STUDENT_COLUMNS} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PendingStudentList;