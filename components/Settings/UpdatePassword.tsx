import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import toast from 'react-hot-toast';
import useUser from '../../hooks/useUser';

const UpdatePassword = ({ isChangePasswordActive }) => {
    const { verifyLoginData } = useAuth();
    const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false)
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)
    const [isChangePasswordSuccess, setIsChangePasswordSuccess] = useState(false)
    const { triggerUpdateUserPassword } = useUser()


    const _submitHandler = (e) => {
        e.preventDefault();
        const oldPassword = e.target.oldPassword.value;
        const newPassword = e.target.newPassword.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (oldPassword && newPassword && confirmPassword) {
            if (newPassword === confirmPassword) {
                triggerUpdateUserPassword([{ oldPassword, newPassword }, verifyLoginData._id],
                    { onSuccess: () => { document?.getElementById("changePasswordForm")?.reset(); setIsChangePasswordSuccess(true) } })
            } else {
                toast.error("New passwords does not match", {
                    id: "settings",
                    duration: 3000
                });
            }
        }
    }

    const setIsChangePasswordActive = (e) => {
        isChangePasswordActive(e)
    }

    return (
        <>
            <form id="changePasswordForm" onSubmit={_submitHandler}>
                <div className="max-w-2xl mt-16 bg-white border rounded-lg shadow ring-1 ring-black ring-opacity-5">
                    <div className='flex flex-row'>
                        <ul role="list" className="divide-y divide-gray-200 w-80 bg-slate-100">
                            <li className="px-6 py-4">
                                Old Password
                            </li>
                            <li className="px-6 py-4">
                                New Password
                            </li>
                            <li className="px-6 py-4">
                                Confirm New Password
                            </li>
                        </ul>
                        <ul role="list" className="w-full divide-y divide-gray-200">
                            <li className="flex px-6 py-4 max-h-60">
                                <input
                                    type={isOldPasswordVisible ? "text" : "password"}
                                    name="oldPassword"
                                    id="oldPassword"
                                    required
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    placeholder={'●●●●●●●●●●●●●'}
                                />
                                {isOldPasswordVisible ? (
                                    <EyeSlashIcon
                                        className="w-6 h-6 text-gray-400 hover:cursor-pointer hover:text-gray-500"
                                        onClick={() => setIsOldPasswordVisible(false)}
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <EyeIcon
                                        className="w-6 h-6 text-gray-400 hover:cursor-pointer hover:text-gray-500"
                                        onClick={() => setIsOldPasswordVisible(true)}
                                        aria-hidden="true"
                                    />
                                )}
                            </li>
                            <li className="flex px-6 py-4 ">
                                <input
                                    type={isNewPasswordVisible ? "text" : "password"}
                                    name="newPassword"
                                    id="newPassword"
                                    required
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    placeholder={'●●●●●●●●●●●●●'}
                                />
                                {isNewPasswordVisible ? (
                                    <EyeSlashIcon
                                        className="w-6 h-6 text-gray-400 hover:cursor-pointer hover:text-gray-500"
                                        onClick={() => setIsNewPasswordVisible(false)}
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <EyeIcon
                                        className="w-6 h-6 text-gray-400 hover:cursor-pointer hover:text-gray-500"
                                        onClick={() => setIsNewPasswordVisible(true)}
                                        aria-hidden="true"
                                    />
                                )}
                            </li>
                            <li className="relative flex px-6 py-4">
                                <input
                                    type={isConfirmPasswordVisible ? "text" : "password"}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    required
                                    className="w-full px-0 py-0 border-0 border-transparent focus:border-indigo-500 focus:ring-0 sm:text-sm"
                                    placeholder={'●●●●●●●●●●●●●'}
                                />
                                {isConfirmPasswordVisible ? (
                                    <EyeSlashIcon
                                        className="w-6 h-6 text-gray-400 hover:cursor-pointer hover:text-gray-500"
                                        onClick={() => setIsConfirmPasswordVisible(false)}
                                        aria-hidden="true"
                                        data-tooltip-target="tooltip-right"
                                    />
                                ) : (
                                    <EyeIcon
                                        className="w-6 h-6 text-gray-400 hover:cursor-pointer hover:text-gray-500"
                                        onClick={() => setIsConfirmPasswordVisible(true)}
                                        aria-hidden="true"
                                    />
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-end max-w-2xl mt-3'>
                    <button
                        onClick={() => { setIsChangePasswordActive(false); setIsChangePasswordSuccess(false) }}
                        type="button"
                        className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium leading-4 text-white bg-gray-500 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                    >
                        {isChangePasswordSuccess ? 'Back' : 'Cancel'}
                    </button>
                    {isChangePasswordSuccess ? null : <button
                        type="submit"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                    >
                        Confirm
                    </button>}
                </div>
            </form>
        </>
    )
}

export default UpdatePassword