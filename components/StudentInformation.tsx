import { format } from 'date-fns';
import React, { useState, useEffect } from 'react'
import useGetStudent from '../hooks/useGetStudent';

export const StudentInformation = () => {
    const { studentInformation } = useGetStudent();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [middleName, setMiddleName] = useState("")
    useEffect(() => {
        if (studentInformation?.userId) {
            setFirstName(studentInformation?.userId?.firstName.charAt(0).toUpperCase() + studentInformation?.userId?.firstName.slice(1))
            setLastName(studentInformation?.userId?.lastName.charAt(0).toUpperCase() + studentInformation?.userId?.lastName.slice(1))
        }
        if (studentInformation?.userId?.middleName) {
            setMiddleName(studentInformation?.userId?.middleName.charAt(0).toUpperCase() + studentInformation?.userId?.middleName.slice(1))
        }
    }, [studentInformation?.userId])

    return (
        <>
            <div className="mt-3">
                <div className="mx-auto lg:max-w-6xl md:max-w-2xl sm:max-w-xl lg:px-8 md:px-4 sm:px-2">
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Student's Information</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">Personal details and contacts</p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {lastName && firstName ? lastName + ", " + firstName + " " + middleName : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">LRN</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.lrn ? studentInformation?.lrn : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.dateOfBirth ? format(new Date(studentInformation?.dateOfBirth), "dd/MM/yyyy") : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Place of Birth</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        {studentInformation?.placeOfBirthProvince && studentInformation?.placeOfBirthTown && studentInformation?.placeOfBirthBarangay ?
                                            studentInformation?.placeOfBirthProvince + " " + studentInformation?.placeOfBirthTown + " " + studentInformation?.placeOfBirthBarangay :
                                            "----"}
                                    </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Age</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.age ? studentInformation?.age : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Gender</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.gender ? studentInformation?.gender : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Civil Status</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.civilStatus ? studentInformation?.civilStatus : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.phoneNumber ? studentInformation?.phoneNumber : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.userId.email ? studentInformation?.userId.email : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Mother's Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.mothersName ? studentInformation?.mothersName : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Mother's Occupation</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.mothersOccupation ? studentInformation?.mothersOccupation : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Father's Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.fathersName ? studentInformation?.fathersName : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Father's Occupation</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.fathersOccupation ? studentInformation?.fathersOccupation : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Guardian's Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.guardiansName ? studentInformation?.guardiansName : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Guardian's Occupation</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.guardiansOccupation ? studentInformation?.guardiansOccupation : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Guardian's Phone Number</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.guardiansPhoneNumber ? studentInformation?.guardiansPhoneNumber : "----"} </dd>
                                </div>

                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">House Number</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.houseNumber ? studentInformation?.houseNumber : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Street</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.street ? studentInformation?.street : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Barangay</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.barangay ? studentInformation?.barangay : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Town/Municipality</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.town ? studentInformation?.town : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Province</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.province ? studentInformation?.province : "----"} </dd>
                                </div>
                                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Zip Code/Postal Code</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {studentInformation?.zipCode ? studentInformation?.zipCode : "----"} </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}