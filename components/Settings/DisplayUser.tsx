import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';

const DisplayUser = ({ isChangePasswordActive, isEditUserActive }) => {
    const { verifyLoginData, isVerifyLoginLoading, refetchVerifyLogin } = useAuth();
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    useEffect(() => {
        refetchVerifyLogin
    }, [refetchVerifyLogin, isEditUserActive])

    const setIsChangePasswordActive = (e) => {
        isChangePasswordActive(e)
    }

    const setIsEditUserActive = (e) => {
        isEditUserActive(e)
    }

    useEffect(() => {
        if (verifyLoginData) {
            setLastName(verifyLoginData?.lastName)
            setFirstName(verifyLoginData?.firstName)
            setMiddleName(verifyLoginData?.middleName)
            setEmail(verifyLoginData?.email)
            setPhoneNumber(verifyLoginData?.phoneNumber)

            if (middleName) {
                setFullName(firstName + ' ' + middleName.slice(0, 1) + '. ' + lastName)
            } else {
                setFullName(firstName + ' ' + lastName)
            }
        }
    }, [firstName, lastName, middleName, verifyLoginData])

    return (
        <div className="max-w-2xl mt-16 bg-white border rounded-lg shadow ring-1 ring-black ring-opacity-5">
            <div className='flex flex-row'>
                <ul role="list" className="w-64 divide-y divide-gray-200 bg-slate-100">
                    <li className="px-6 py-4 font-semibold bg-white">
                        User
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
                        Password
                    </li>
                </ul>
                <ul role="list" className="w-full divide-y divide-gray-200">
                    <li className="flex justify-end px-6 py-4">
                        <a onClick={() => setIsEditUserActive(true)} className="font-medium text-indigo-500 underline cursor-pointer hover:text-indigo-700">Edit</a>
                    </li>
                    <li className="px-6 py-4 capitalize">
                        {fullName ? fullName : '...'}
                    </li>
                    <li className="px-6 py-4">
                        {email ? email : '...'}
                    </li>
                    <li className="px-6 py-4">
                        {phoneNumber ? phoneNumber : '...'}
                    </li>
                    <li className="px-6 py-4">
                        <a onClick={() => setIsChangePasswordActive(true)} className="font-medium text-indigo-500 underline cursor-pointer hover:text-indigo-700">Change Password</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DisplayUser