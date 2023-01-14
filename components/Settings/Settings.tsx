import React from 'react'
import useAuth from '../../hooks/useAuth';
import SchoolInformation from '../SchoolInformation/SchoolInformation'
import SettingsList from './SettingsList'

const Settings = () => {
    const { verifyLoginData } = useAuth();
    return (
        <>
            <div className="flex flex-col max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Settings
                </h2>

                <SettingsList />
                {verifyLoginData?.userType === 'Admin' ? <SchoolInformation /> : null}

            </div>
        </>

    )
}

export default Settings