import React, { useEffect, useState } from "react";
import { Table } from "../Table";
import useClaimAccess from "../../../hooks/useClaimAccess";
import useAuth from "../../../hooks/useAuth";
import { STUDENT_COLUMNS } from "./studentColumns";

const StudentList = () => {
    const { verifyLoginData } = useAuth();
    const [students, setStudents] = useState([]);
    const { claimAccessData, refetchClaimAccess } = useClaimAccess()

    useEffect(() => {
        if (verifyLoginData) {
            setStudents(claimAccessData)
        }
    }, [verifyLoginData, students, claimAccessData, refetchClaimAccess]);

    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Students
                </h2>
            </div>
            <div className="mt-3">
                <div className="max-w-6xl mx-auto lg:px-8">
                    <div className="flex flex-col">
                        <Table tableData={students} tableColumns={STUDENT_COLUMNS} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentList;