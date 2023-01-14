import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import DisplayUser from './DisplayUser';
import EditUser from './EditUser';
import UpdatePassword from './UpdatePassword';

const SettingsList = () => {
    const { verifyLoginData, isVerifyLoginLoading, refetchVerifyLogin } = useAuth();
    const [isChangePasswordActive, setIsChangePasswordActive] = useState(false)
    const [isEditUserActive, setIsEditUserActive] = useState(false)

    useEffect(() => {
        refetchVerifyLogin
    }, [refetchVerifyLogin, verifyLoginData, isEditUserActive])

    const changePasswordProps = (data) => {
        setIsChangePasswordActive(data)
    }

    const editUserProps = (data) => {
        setIsEditUserActive(data)
    }

    return (
        <>
            {isEditUserActive ?
                <EditUser isEditUserActive={editUserProps} /> : null
            }
            {isChangePasswordActive ?
                <UpdatePassword isChangePasswordActive={changePasswordProps} /> : null
            }
            {!isEditUserActive && !isChangePasswordActive ?
                <DisplayUser
                    isChangePasswordActive={changePasswordProps}
                    isEditUserActive={editUserProps} />
                :
                null}
        </>
    )
}

export default SettingsList