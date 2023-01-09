import React, { useEffect, useState } from "react";
import Table from "../Table";
import useAuth from "../../../hooks/useAuth";
import { STUDENT_FORM138_COLUMNS } from "./studentForm138Columns";
import useGetStudentsForm138 from "../../../hooks/useGetStudentsForm138";

const StudentForm138List = () => {
    const { verifyLoginData } = useAuth();
    const [studentsForm138, setStudentsForm138] = useState([]);
    const { studentsForm138Data, refetchStudentsForm138 } = useGetStudentsForm138();

    useEffect(() => {
        if (verifyLoginData) {
            setStudentsForm138(studentsForm138Data)
        }
    }, [studentsForm138Data, verifyLoginData]);

    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Form 138
                </h2>
            </div>
            <div className="mt-3">
                <div className="max-w-6xl mx-auto lg:px-8">
                    <div className="flex flex-col">
                        <Table tableData={studentsForm138} tableColumns={STUDENT_FORM138_COLUMNS} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentForm138List;