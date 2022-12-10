import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import DisplayUser from './DisplayUser';
import EditUser from './EditUser';
import UpdatePassword from './UpdatePassword';

const SettingsList = () => {
    const { verifyLoginData, isVerifyLoginLoading, refetchVerifyLogin } = useAuth();
    const [isChangePasswordActive, setIsChangePasswordActive] = useState(false)
    const [isEditUserActive, setIsEditUserActive] = useState(false)
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    useEffect(() => {
        if (isVerifyLoginLoading) {
            refetchVerifyLogin
        }
    }, [isVerifyLoginLoading, refetchVerifyLogin, verifyLoginData])

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
                    isEditUserActive={editUserProps}
                    fullName={fullName}
                    email={email}
                    phoneNumber={phoneNumber} />
                :
                null}
        </>
    )
}

export default SettingsList