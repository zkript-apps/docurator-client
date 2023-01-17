import React, { useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import useUpateSchool from '../../hooks/useUpdateSchool';

const EditverifyLoginData = ({ isEditSchoolActive }: any) => {
    const { triggerUpdateSchool, isUpdateSchoolLoading } = useUpateSchool()
    const { verifyLoginData, refetchVerifyLogin } = useAuth();
    const [isEditSchoolSuccess, setIsEditSchoolSuccess] = useState(false)

    useEffect(() => {
        refetchVerifyLogin
    }, [refetchVerifyLogin, isEditSchoolActive])

    const _submitHandler = (e: any) => {
        e.preventDefault()
        const inputSchoolId = e.target.schoolId.value;
        const inputSchoolName = e.target.schoolName.value;
        const inputSchoolEmail = e.target.schoolEmail.value;
        const inputSchoolPhoneNumber = e.target.schoolPhoneNumber.value;
        const inputSchoolAddress = e.target.schoolAddress.value;
        if (inputSchoolId && inputSchoolName && inputSchoolEmail && inputSchoolPhoneNumber) {
            if (
                inputSchoolId === verifyLoginData?.schoolId?.schoolId &&
                inputSchoolName === verifyLoginData?.schoolId?.schoolName &&
                inputSchoolEmail === verifyLoginData?.schoolId?.schoolEmail &&
                inputSchoolPhoneNumber === verifyLoginData?.schoolId?.schoolPhoneNumber &&
                inputSchoolAddress === verifyLoginData?.schoolId?.schoolAddress
            ) {
                toast.error("No changes has been made", {
                    id: "editSchool",
                    duration: 3000
                });
            } else {
                triggerUpdateSchool([{
                    schoolId: inputSchoolId,
                    schoolName: inputSchoolName,
                    schoolEmail: inputSchoolEmail,
                    schoolPhoneNuumber: inputSchoolPhoneNumber,
                    schoolAddress: inputSchoolAddress
                }, verifyLoginData?.schoolId?._id], { onSuccess: () => { refetchVerifyLogin; setIsEditSchoolSuccess(true) } }
                )
            }
        } else {
            toast.error("Required fields can not be empty", {
                id: "editSchool",
                duration: 3000
            });
        }
    }

    const setIsEditSchoolActive = (e: any) => {
        isEditSchoolActive(e)
    }

    return (
        <>
            <form id="editUserForm" onSubmit={_submitHandler} >
                <div className="flex-col max-w-2xl mt-16 bg-white border rounded-lg shadow ring-1 ring-black ring-opacity-5">
                    <label htmlFor="lastName" className="block px-6 py-4 font-semibold bg-white border-b">
                        Edit School Information
                    </label>
                    <div className='flex flex-row'>
                        <ul role="list" className="w-64 divide-y divide-gray-200 bg-slate-100">
                            <li className="px-6 py-4">
                                School ID
                            </li>
                            <li className="px-6 py-4">
                                Name
                            </li>
                            <li className="px-6 py-4">
                                Email
                            </li>
                            <li className="px-6 py-4">
                                Mobile Number
                            </li>
                            <li className="px-6 py-4">
                                Full Address
                            </li>
                        </ul>
                        <ul role="list" className="w-full divide-y divide-gray-200">
                            <li className="px-6 py-4">
                                <input
                                    type="text"
                                    name="schoolId"
                                    id="schoolId"
                                    required
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    defaultValue={verifyLoginData?.schoolId?.schoolId}
                                />
                            </li>
                            <li className="px-6 py-4">
                                <input
                                    type="text"
                                    name="schoolName"
                                    id="schoolName"
                                    required
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    defaultValue={verifyLoginData?.schoolId?.schoolName}
                                />
                            </li>
                            <li className="px-6 py-4">
                                <input
                                    type="text"
                                    name="schoolEmail"
                                    id="schoolEmail"
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    defaultValue={verifyLoginData?.schoolId?.schoolEmail}
                                />
                            </li>
                            <li className="px-6 py-4">
                                <input
                                    type="text"
                                    name="schoolPhoneNumber"
                                    id="schoolPhoneNumber"
                                    maxLength={11}
                                    required
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    defaultValue={verifyLoginData?.schoolId?.schoolPhoneNumber}
                                />
                            </li>
                            <li className="px-6 py-4 ">
                                <input
                                    type="text"
                                    name="schoolAddress"
                                    id="schoolAddress"
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    defaultValue={verifyLoginData?.schoolId?.schoolAddress}
                                />
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='flex justify-end max-w-2xl mt-3'>
                    <button
                        onClick={() => { setIsEditSchoolActive(false); setIsEditSchoolSuccess(false) }}
                        type="button"
                        className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium leading-4 text-white bg-gray-500 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                    >
                        {isEditSchoolSuccess ? 'Back' : 'Cancel'}
                    </button>
                    {isEditSchoolSuccess ? null : <button
                        type="submit"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                    >
                        Confirm
                    </button>}

                </div>
            </form >
        </>
    )
}

export default EditverifyLoginData