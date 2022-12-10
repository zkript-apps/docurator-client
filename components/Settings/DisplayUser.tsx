import React from 'react'

const DisplayUser = ({ fullName, email, phoneNumber, isChangePasswordActive, isEditUserActive }) => {
    const setIsChangePasswordActive = (e) => {
        isChangePasswordActive(e)
    }

    const setIsEditUserActive = (e) => {
        isEditUserActive(e)
    }

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
                    <li className="px-6 py-4">
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