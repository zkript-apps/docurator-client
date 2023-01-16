import type { NextPage } from 'next'
import useCreateAccount from '../../hooks/useCreateAccount';
import { useRef, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';


const AdminForm: NextPage = () => {
    const [isValid, setIsValid] = useState(false);
    const inputElement = useRef(null)
    const formRef = useRef(null)
    const { triggerCreateAccount, isCreateAccountLoading } = useCreateAccount()
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const [schoolIdInput, setSchoolIdInput] = useState("")
    const [schoolNameInput, setSchoolNameInput] = useState("")
    const [schoolEmailInput, setSchoolEmailInput] = useState("")
    const [schoolPhoneNumberInput, setSchoolPhoneNumberInput] = useState("")
    const [curricularOffersInput, setCurricularOffersInput] = useState("")
    const [typeOfSchoolInput, setTypeOfSchoolInput] = useState("")
    const [isSchoolInfoComplete, setIsSchoolInfoComplete] = useState(false)
    const [isUnderstood, setIsUnderstood] = useState(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true)

    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus()
        }
    }, []);

    const continueHandler = () => {
        setIsValid(formRef?.current?.checkValidity());
        if (!isValid) {
            formRef?.current?.reportValidity()
        } else {
            setIsSchoolInfoComplete(!isSchoolInfoComplete);
            setIsUnderstood(!isUnderstood)
        }
    }

    const _submitHandler = (e) => {
        e.preventDefault();
        const lastName = e.target.lastName?.value
        const firstName = e.target.firstName?.value
        const middleName = e.target.middleName?.value
        const email = e.target.email?.value
        const password = e.target.password?.value
        const phoneNumber = e.target.phoneNumber?.value
        const confirmPassword = e.target.confirmPassword?.value
        const userType = 'Admin'

        if (password === confirmPassword) {
            triggerCreateAccount({
                schoolId: schoolIdInput,
                schoolName: schoolNameInput,
                schoolPhoneNumber: schoolPhoneNumberInput,
                schoolEmail: schoolEmailInput,
                curricularOffers: curricularOffersInput,
                schoolClassification: typeOfSchoolInput,
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
                    <form onSubmit={_submitHandler} id="adminForm" className="space-y-6 shrink" ref={formRef}>
                        {isSchoolInfoComplete ? <>
                            <div className="space-y-1">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
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
                                        type="text"
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
                                        type="text"
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
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="relative mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type={isPasswordVisible ? "password" : "text"}
                                        disabled={isCreateAccountLoading}
                                        placeholder={'Password'}
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
                                <p className="mt-2 text-sm text-gray-500">Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</p>
                            </div>
                        </> :
                            <div >
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    School Information
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="schoolId"
                                        name="schoolInformation"
                                        type="text"
                                        defaultValue={schoolIdInput}
                                        onChange={(e) => setSchoolIdInput(e.target.value)}
                                        disabled={isCreateAccountLoading}
                                        placeholder={'School ID'}
                                        required
                                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="mt-1">
                                    <input
                                        id="schoolName"
                                        name="schoolInformation"
                                        type="text"
                                        defaultValue={schoolNameInput}
                                        onChange={(e) => setSchoolNameInput(e.target.value)}
                                        disabled={isCreateAccountLoading}
                                        placeholder={'School Name'}
                                        required
                                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="mt-1">
                                    <input
                                        id="schoolEmail"
                                        name="schoolInformation"
                                        type="email"
                                        defaultValue={schoolEmailInput}
                                        onChange={(e) => setSchoolEmailInput(e.target.value)}
                                        disabled={isCreateAccountLoading}
                                        placeholder={'School Email'}
                                        required
                                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="mt-1">
                                    <input
                                        id="schoolPhoneNumber"
                                        name="schoolInformation"
                                        type="text"
                                        defaultValue={schoolPhoneNumberInput}
                                        onChange={(e) => setSchoolPhoneNumberInput(e.target.value)}
                                        disabled={isCreateAccountLoading}
                                        placeholder={'School Phone Number'}
                                        maxLength={11}
                                        required
                                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="mt-1">
                                    <label
                                        htmlFor="curricularOffers"
                                        className="block mt-4 font-medium text-gray-700 text-md"
                                    >
                                        Curricular Offers:
                                    </label>
                                    <select
                                        id="curricularOffers"
                                        name="curricularOffers"
                                        defaultValue={curricularOffersInput}
                                        onChange={(e) => setCurricularOffersInput(e.target.value)}
                                        required
                                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option defaultValue={undefined} label={"Select"} />
                                        <option value="Elementary">Elementary</option>
                                        <option value="Secondary">Secondary</option>
                                        <option value="Elementary to Secondary">Elementary to Secondary</option>
                                    </select>
                                </div>

                                <div className="mt-1">
                                    <label
                                        htmlFor="schoolClassification"
                                        className="block mt-4 font-medium text-gray-700 text-md"
                                    >
                                        School General Classification:
                                    </label>
                                    <select
                                        id="schoolClassification"
                                        name="schoolClassification"
                                        defaultValue={typeOfSchoolInput}
                                        onChange={(e) => setTypeOfSchoolInput(e.target.value)}
                                        required
                                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option defaultValue={undefined} label={"Select"} />
                                        <option value="Private">Private</option>
                                        <option value="Public">Public</option>
                                    </select>
                                </div>
                            </div>}

                        {!isSchoolInfoComplete ? <>
                            <div>
                                <div className="flex items-center mt-6 mb-2">
                                    <input
                                        id="isUnderstood"
                                        name="isUnderstood"
                                        onClick={() => setIsUnderstood(!isUnderstood)}
                                        type="checkbox"
                                        className="w-4 h-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                    <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                                        I accept
                                    </label>

                                </div>
                                <p className="mb-4 text-sm text-gray-500">By checking this, you are giving us permission to process these information you have entered.<strong> Further instructions will be sent to your email</strong>.</p>
                                <div>
                                    <button
                                        disabled={!isUnderstood}
                                        type="button"
                                        onClick={() => continueHandler()}
                                        className={isUnderstood ? "flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" :
                                            "flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-500 border border-transparent rounded-md shadow-sm"}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </> : <div className='mt-4'>
                            <label>
                                <a onClick={() => setIsSchoolInfoComplete(!isSchoolInfoComplete)} className="font-medium text-indigo-500 cursor-pointer hover:text-indigo-700">
                                    <span className='flex'>
                                        <ArrowLeftIcon className='w-5 h-5 mr-2' />Return to School Information
                                    </span>
                                </a>
                            </label>
                            <div className='mt-2'>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminForm
