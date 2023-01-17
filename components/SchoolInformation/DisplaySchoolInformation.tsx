import React, { useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth';
import EditSchoolInformation from './EditSchoolInformation';

const DisplaySchoolInformation = () => {
    const { verifyLoginData, refetchVerifyLogin } = useAuth();
    const [isEditSchoolActive, setIsEditSchoolActive] = useState(false)

    const editSchoolProps = (data: any) => {
        setIsEditSchoolActive(data)
    }

    return (
        <>

            {isEditSchoolActive ? <EditSchoolInformation isEditSchoolActive={editSchoolProps} /> : <div className="max-w-2xl mt-16 bg-white border rounded-lg shadow ring-1 ring-black ring-opacity-5">
                <div className='flex flex-row'>
                    <ul role="list" className="w-64 divide-y divide-gray-200 bg-slate-100">
                        <li className="px-6 py-4 font-semibold bg-white">
                            School
                        </li>
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
                        <li className="flex justify-end px-6 py-4">
                            <a onClick={() => setIsEditSchoolActive(true)} className="font-medium text-indigo-500 underline cursor-pointer hover:text-indigo-700">Edit</a>
                        </li>
                        <li className="px-6 py-4">
                            {verifyLoginData?.schoolId?.schoolId ? verifyLoginData?.schoolId?.schoolId : '...'}
                        </li>
                        <li className="px-6 py-4 capitalize">
                            {verifyLoginData?.schoolId?.schoolName ? verifyLoginData?.schoolId?.schoolName : '...'}
                        </li>
                        <li className="px-6 py-4">
                            {verifyLoginData?.schoolId?.schoolEmail ? verifyLoginData?.schoolId?.schoolEmail : '...'}
                        </li>
                        <li className="px-6 py-4">
                            {verifyLoginData?.schoolId?.schoolPhoneNumber ? verifyLoginData?.schoolId?.schoolPhoneNumber : '...'}
                        </li>
                        <li className="px-6 py-4">
                            {verifyLoginData?.schoolId?.schoolAddress ? verifyLoginData?.schoolId?.schoolAddress : '...'}
                        </li>
                    </ul>
                </div>
            </div>}

        </>
    )
}

export default DisplaySchoolInformation