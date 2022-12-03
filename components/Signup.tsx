import type { NextPage } from 'next'
import addUser from "../hooks/addUser";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'

const Signup: NextPage = () => {
    const router = useRouter();
    const inputElement = useRef(null);
    const { triggerAddUser, isAddUserLoading } = addUser();
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true)
    const [num, setNum] = useState('');
    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, []);

    const _submitHandler = (e) => {
        e.preventDefault();
        const lastName = e.target.lastName.value;
        const firstName = e.target.firstName.value;
        const middleName = e.target.middleName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const phoneNumber = e.target.phoneNumber.value
        const confirmPassword = e.target.confirmPassword.value

        if (password === confirmPassword) {
            triggerAddUser({
                lastName,
                firstName,
                middleName,
                email,
                password,
                phoneNumber
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

    const handleNumChange = (e) => {
        const limit = 11;
        setNum(e.target.value.slice(0, limit));
    }
    return (
        <>
            <div className="flex min-h-full">
                <div className="relative flex-1 hidden w-0 lg:block">
                    <img
                        className="absolute inset-0 object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center flex-1 h-screen sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="w-full max-w-sm mx-auto lg:w-96">
                        <div>
                            <h1 className="text-6xl font-bold tracking-tight text-indigo-500">DoCurator</h1>
                            <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">Sign up a new account</h2>
                        </div>

                        <div className="mt-8">

                            <div className="mt-6">
                                <form onSubmit={_submitHandler} className="space-y-6">

                                    <div className="space-y-1">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="lastName"
                                                name="lastName"
                                                type="lastName"
                                                disabled={isAddUserLoading}
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
                                                disabled={isAddUserLoading}
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
                                                disabled={isAddUserLoading}
                                                placeholder={'Middle Name'}
                                                required
                                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                disabled={isAddUserLoading}
                                                placeholder={'juandelacruz@samplemail.com'}
                                                required
                                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                type="number"
                                                disabled={isAddUserLoading}
                                                placeholder={'09XXXXXXXXX'}
                                                onChange={handleNumChange}
                                                value={num}
                                                required
                                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1" >
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div className="relative mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type={isPasswordVisible ? "password" : "text"}
                                                disabled={isAddUserLoading}
                                                placeholder={'●●●●●●●●●●●●●'}
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
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                            Confirm Password
                                        </label>
                                        <div className="relative mt-1">
                                            <input
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={isConfirmPasswordVisible ? "password" : "text"}
                                                disabled={isAddUserLoading}
                                                placeholder={'●●●●●●●●●●●●●'}
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
                                        <button
                                            type="submit"
                                            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Sign up
                                        </button>
                                    </div>
                                    <div className='py-8'>
                                        <label>
                                            Already have an account? <a onClick={() => router.push('/')} className="font-medium text-indigo-500 cursor-pointer hover:text-indigo-500">
                                                Sign in here
                                            </a>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup

