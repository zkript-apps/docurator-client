import React from 'react'
import useStudents from '../hooks/useStudents'
import { format } from "date-fns";


export const MyForm137 = () => {
    const { studentData } = useStudents()
    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    My Form 137
                </h2>
            </div>
            <div className="mt-3">
                <div className="mx-auto lg:max-w-6xl md:max-w-2xl sm:max-w-xl lg:px-8 md:px-4 sm:px-2">
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">Personal details and application.</p>
                        </div>
                        <div className="px-4 py-5 border-t border-gray-200 sm:px-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-4 sm:grid-cols-2">
                                <div className="sm:col-span-1 ">
                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {studentData?.userId?.firstName} {studentData?.userId?.middleName ? studentData?.userId?.middleName : null} {studentData?.userId?.lastName}
                                    </dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">LRN</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{studentData?.lrn ? studentData?.lrn : "..."}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{studentData?.userId?.email ? studentData?.userId?.email : "..."}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Mobile Number</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{studentData?.userId?.phoneNumber ? studentData?.userId?.phoneNumber : "..."}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Status of Applicant</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{studentData?.statusOfApplicant ? studentData?.statusOfApplicant : "..."}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">School Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{studentData?.schoolName}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{studentData?.dateOfBirth ? format(new Date(studentData.dateOfBirth), "dd/MM/yyyy") : "..."}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Age</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Gender</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Civil Status</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Mother's Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Mother's Occupation</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Father's Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Father's Occupation</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Guardian's Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Guardian's Mobile Number</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-4">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Address</h3>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">House Number</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Street</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Barangay</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Municipality</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Province</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Zip Code</dt>
                                    <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
