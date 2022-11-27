import React, { useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import useUser from '../../hooks/useUser';

const EditUser = ({ isEditUserActive }) => {
    const { verifyLoginData, refetchVerifyLogin } = useAuth();
    const { triggerUpdateUser, isUpdateUserLoading } = useUser()
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isEditUserSuccess, setIsEditUserSuccess] = useState(false)

    useEffect(() => {
        setLastName(verifyLoginData?.lastName)
        setFirstName(verifyLoginData?.firstName)
        setMiddleName(verifyLoginData?.middleName)
        setEmail(verifyLoginData?.email)
        setPhoneNumber(verifyLoginData?.phoneNumber)
    }, [
        verifyLoginData?.email,
        verifyLoginData?.firstName,
        verifyLoginData?.lastName,
        verifyLoginData?.middleName,
        verifyLoginData?.phoneNumber
    ])


    const _submitHandler = (e) => {
        e.preventDefault()
        const inputLastName = e.target.lastName.value;
        const inputFirstName = e.target.firstName.value;
        const inputMiddleName = e.target.middleName.value;
        const inputEmail = e.target.email.value;
        const inputPhoneNumber = e.target.phoneNumber.value;
        if (inputLastName && inputFirstName && inputEmail && inputPhoneNumber) {
            if (
                inputLastName === lastName &&
                inputFirstName === firstName &&
                inputMiddleName === middleName &&
                inputEmail === email &&
                inputPhoneNumber === phoneNumber
            ) {
                toast.error("No changes has been made", {
                    id: "editUser",
                    duration: 3000
                });
            } else {
                triggerUpdateUser([{
                    lastName: inputLastName,
                    firstName: inputFirstName,
                    middleName: inputMiddleName,
                    email: inputEmail,
                    phoneNumber: inputPhoneNumber
                }, verifyLoginData._id], { onSuccess: () => { refetchVerifyLogin; setIsEditUserSuccess(true) } }
                )
            }
        }
    }

    const setIsEditUserActive = (e) => {
        isEditUserActive(e)
    }

    return (
        <>
            <form id="editUserForm" onSubmit={_submitHandler} >
                <div className="flex-col max-w-2xl mt-16 bg-white border rounded-lg shadow ring-1 ring-black ring-opacity-5">
                    <div className='flex flex-row'>
                        <ul role="list" className="w-64 divide-y divide-gray-200 bg-slate-100">
                            <li className="px-6 py-4">
                                Last name
                            </li>
                            <li className="px-6 py-4">
                                First name
                            </li>
                            <li className="px-6 py-4">
                                Middle name
                            </li>
                            <li className="px-6 py-4">
                                Email
                            </li>
                            <li className="px-6 py-4">
                                Mobile Number
                            </li>
                        </ul>
                        <ul role="list" className="w-full divide-y divide-gray-200">
                            <li className="px-6 py-4">
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    required
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    defaultValue={lastName}
                                />
                            </li>
                            <li className="px-6 py-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    required
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    defaultValue={firstName}
                                />
                            </li>
                            <li className="px-6 py-4">
                                <input
                                    type="text"
                                    name="middleName"
                                    id="middleName"
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    defaultValue={middleName}
                                />
                            </li>
                            <li className="px-6 py-4 ">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    defaultValue={email}
                                />
                            </li>
                            <li className="px-6 py-4">
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    required
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    defaultValue={phoneNumber}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-end max-w-2xl mt-3'>
                    <button
                        onClick={() => { setIsEditUserActive(false); setIsEditUserSuccess(false) }}
                        type="button"
                        className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium leading-4 text-white bg-gray-500 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                    >
                        {isEditUserSuccess ? 'Back' : 'Cancel'}
                    </button>
                    {isEditUserSuccess ? null : <button
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

export default EditUser