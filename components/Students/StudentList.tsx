import React, { useEffect, useState } from "react";
import Table from "../Table";
import useStudents from "../../hooks/useStudents";
import useAuth from "../../hooks/useAuth";

const StudentList = () => {
    const { verifyLoginData } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const [studentRows, setStudentsRows] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const { studentsPaginatedData, handleStudentRequest, refetchStudentsPaginated } = useStudents();

    useEffect(() => {
        if (verifyLoginData) {
            handleStudentRequest(currentPage, verifyLoginData._id);
        }
    }, [verifyLoginData, currentPage, handleStudentRequest]);

    useEffect(() => {
        if (studentsPaginatedData) {
            const studentsArr = studentsPaginatedData.items.map((student) => {
                let arr = [];
                arr.push(
                    <span>
                        {student.userId
                            ? `${student.lrn}`
                            : "..."}
                    </span>
                );
                arr.push(
                    <span>
                        {student.userId
                            ? `${student.statusOfApplicant}`
                            : "..."}
                    </span>
                );
                arr.push(
                    <span>
                        {student.userId.firstName && student.userId.lastName ? `${student.userId.firstName} ${student.userId.lastName}` : "..."}
                    </span>
                );
                arr.push(
                    <span>
                        {student.userId ? `${student.phoneNumber}` : "..."}
                    </span>
                );
                return arr;
            });
            setStudentsRows(studentsArr);
            setPageCount(studentsPaginatedData.pageCount);
        }
    }, [
        refetchStudentsPaginated,
        studentsPaginatedData,
    ]);

    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Students
                </h2>
            </div>
            <div className="mt-3">
                <div className="max-w-6xl mx-auto lg:px-8">
                    <div className="flex flex-col mt-2">
                        <Table
                            columns={[
                                "LRN",
                                "Status of Applicant",
                                "Student Name",
                                "Phone Number",
                                "Actions",
                            ]}
                            rows={studentRows}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            pageCount={pageCount}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentList;