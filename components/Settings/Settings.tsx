import React from 'react'
import SettingsList from './SettingsList'

const Settings = () => {
    return (
        <>
            <div className="flex flex-col max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Settings
                </h2>
                <SettingsList />
            </div>
        </>

    )
}

export default Settings