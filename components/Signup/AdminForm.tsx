import type { NextPage } from 'next'
import useCreateAccount from '../../hooks/useCreateAccount';
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'

const AdminForm: NextPage = () => {
    const router = useRouter()
    const inputElement = useRef(null)
    const { triggerCreateAccount, isCreateAccountLoading } = useCreateAccount()
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true)

    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus()
        }
    }, []);


    const _submitHandler = (e) => {
        e.preventDefault();
        const schoolName = e.target.schoolName.value
        const schoolPhoneNumber = e.target.schoolPhoneNumber.value
        const schoolEmail = e.target.schoolEmail.value
        const lastName = e.target.lastName.value
        const firstName = e.target.firstName.value
        const middleName = e.target.middleName.value
        const email = e.target.email.value
        const password = e.target.password.value
        const phoneNumber = e.target.phoneNumber.value
        const confirmPassword = e.target.confirmPassword.value
        const userType = 'Admin'

        if (password === confirmPassword) {
            triggerCreateAccount({
                schoolName,
                schoolPhoneNumber,
                schoolEmail,
                lastName,
                firstName,
                middleName,
                email,
                password,
                phoneNumber,
                userType,
            })
        } else {
            toast.error("Passwords do not match", {
                id: "password",
                duration: 3000
            });
            const passwordField = document.getElementById('password')
            passwordField?.focus()
        }
    }

    return (
        <>
            <div className="mt-8">
                <div className="mt-6">
                    <form onSubmit={_submitHandler} className="space-y-6 shrink">
                        <div className="space-y-1">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="lastName"
                                    disabled={isCreateAccountLoading}
                                    placeholder={'Last Name'}
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mt-1">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="firstName"
                                    disabled={isCreateAccountLoading}
                                    placeholder={'First Name'}
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mt-1">
                                <input
                                    id="middleName"
                                    name="middleName"
                                    type="middleName"
                                    disabled={isCreateAccountLoading}
                                    placeholder={'Middle Name'}
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Contact Information
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    disabled={isCreateAccountLoading}
                                    placeholder={'juandelacruz@samplemail.com'}
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mt-1">
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    disabled={isCreateAccountLoading}
                                    placeholder={'09XXXXXXXXX'}
                                    maxLength={11}
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-1" >
                            <div className="relative mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type={isPasswordVisible ? "password" : "text"}
                                    disabled={isCreateAccountLoading}
                                    placeholder={'Password'}
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    {isPasswordVisible ? (
                                        <EyeIcon
                                            className="w-5 h-5 text-gray-400 hover:cursor-pointer hover:text-gray-500"
                                            onClick={() => setIsPasswordVisible(false)}
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <EyeSlashIcon
                                            className="w-5 h-5 text-gray-400 hover:cursor-pointer hover:text-gray-500"
                                            onClick={() => setIsPasswordVisible(true)}
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="relative mt-1">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={isConfirmPasswordVisible ? "password" : "text"}
                                    disabled={isCreateAccountLoading}
                                    placeholder={'Confirm Password'}
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    {isConfirmPasswordVisible ? (
                                        <EyeIcon
                                            className="w-5 h-5 text-gray-400 hover:cursor-pointer hover:text-gray-500"
                                            onClick={() => setIsConfirmPasswordVisible(false)}
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <EyeSlashIcon
                                            className="w-5 h-5 text-gray-400 hover:cursor-pointer hover:text-gray-500"
                                            onClick={() => setIsConfirmPasswordVisible(true)}
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                School Information
                            </label>
                            <div className="mt-1">
                                <input
                                    id="schoolName"
                                    name="schoolName"
                                    type="text"
                                    disabled={isCreateAccountLoading}
                                    placeholder={'School Name'}
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mt-1">
                                <input
                                    id="schoolEmail"
                                    name="schoolEmail"
                                    type="text"
                                    disabled={isCreateAccountLoading}
                                    placeholder={'School Email'}
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mt-1">
                                <input
                                    id="schoolPhoneNumber"
                                    name="schoolPhoneNumber"
                                    type="text"
                                    disabled={isCreateAccountLoading}
                                    placeholder={'School Phone Number'}
                                    maxLength={11}
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminForm
