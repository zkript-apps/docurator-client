import type { NextPage } from 'next'
import { useState } from "react";
import { useRouter } from "next/router";
import AdminForm from './AdminForm';
import StudentForm from './StudentForm';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Signup: NextPage = () => {
    const router = useRouter()
    const [accountType, setAccountType] = useState('')

    return (
        <>
            <div className="flex min-h-full">
                <div className="relative flex-1 hidden w-0 lg:block">
                    <img
                        className="absolute inset-0 object-cover w-screen h-screen"
                        src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center flex-1 h-screen lg:flex-none lg:px-20 xl:px-24">
                    <div className="w-full max-w-sm mx-auto lg:w-96">
                        <div>
                            <h1 className="text-6xl font-bold tracking-tight text-indigo-500">DoCurator</h1>
                            <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">Sign up a new account
                                {accountType === 'Student' ? ' as a Student' : null}
                                {accountType === 'School' ? ' as a School' : null}
                            </h2>
                        </div>
                        {accountType === '' ?
                            <div className='my-12'>
                                <h2 className="mt-6 text-2xl tracking-tight text-gray-900">Register an account as a</h2>
                                <div className='flex mt-4 sm:gap-4'>
                                    <button
                                        onClick={() => setAccountType('Student')}
                                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Student
                                    </button>
                                    <button
                                        onClick={() => setAccountType('School')}
                                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        School
                                    </button>
                                </div>
                            </div> : null}

                        {accountType === 'Student' ? <StudentForm /> : null}
                        {accountType === 'School' ? <AdminForm /> : null}
                        {accountType !== '' ? <div className='py-8'>
                            <label>
                                <a onClick={() => setAccountType('')} className="font-medium text-indigo-500 cursor-pointer hover:text-indigo-700">
                                    <span className='flex'>
                                        <ArrowLeftIcon className='w-5 h-5 mr-2' />Change account type
                                    </span>
                                </a>
                            </label>
                        </div> : null}
                        <div className='py-4'>
                            <label>
                                Already have an account? <a onClick={() => router.push('/')} className="font-medium text-indigo-500 cursor-pointer hover:text-indigo-700">
                                    Sign in here
                                </a>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
