import { Fragment, useEffect, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    Bars3BottomLeftIcon,
    BellIcon,
    DocumentTextIcon,
    XMarkIcon,
    CodeBracketIcon,
    AdjustmentsHorizontalIcon,
    BuildingLibraryIcon,
    AcademicCapIcon
} from '@heroicons/react/24/outline'
import Cookies from 'js-cookie'
import { useRouter } from "next/router";
import StudentList from './Table/Students/studentList'
import BirthCertificatesList from './Table/BirthCertificate/birthCertificateList';
import Form137List from './Table/Form137/form137List';
import useAuth from '../hooks/useAuth';


const Dashboard = ({ currentPage }: any) => {
    const { verifyLoginData } = useAuth();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [firstNameLetter, setFirstNameLetter] = useState("")
    const [lastNameLetter, setLastNameLetter] = useState("")
    const [namePlaceHolder, setNamePlaceHolder] = useState("")

    useEffect(() => {
        if (verifyLoginData?.firstName && verifyLoginData?.lastName) {
            setFirstName(verifyLoginData?.firstName)
            setLastName(verifyLoginData?.lastName)
            setFirstNameLetter(firstName.slice(0, 1).toUpperCase())
            setLastNameLetter(lastName?.slice(0, 1).toUpperCase())
            setNamePlaceHolder(firstNameLetter + lastNameLetter)
        }
    }, [firstName, firstNameLetter, lastName, lastNameLetter, namePlaceHolder, verifyLoginData])

    const navigation = [
        { name: 'Students', href: '/students', icon: AcademicCapIcon, current: currentPage === "Students" ? true : false },
        { name: 'Schools', href: '/schools', icon: BuildingLibraryIcon, current: currentPage === "Schools" ? true : false },
        { name: 'Form 137', href: '/form137', icon: DocumentTextIcon, current: currentPage === "Form 137" ? true : false },
        { name: 'Form 138', href: '/form138', icon: DocumentTextIcon, current: currentPage === "Form 138" ? true : false },
        { name: 'Good Moral Certificates', href: '/good-moral-certificates', icon: DocumentTextIcon, current: currentPage === "Good Moral Certificates" ? true : false },
        { name: 'Birth Certificates', href: '/birth-certificates', icon: DocumentTextIcon, current: currentPage === "Birth Certificates" ? true : false },
        { name: 'Developer', href: '/developer', icon: CodeBracketIcon, current: currentPage === "Developer" ? true : false },
        { name: 'Settings', href: '/settings', icon: AdjustmentsHorizontalIcon, current: currentPage === "Settings" ? true : false }
    ]
    const userNavigation = [
        { name: 'Sign out' },
    ]

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ')
    }

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const router = useRouter();
    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-indigo-500">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 pt-2 -mr-12">
                                            <button
                                                type="button"
                                                className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="w-6 h-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex items-center flex-shrink-0 px-4">
                                        <h1 className="text-3xl font-bold tracking-tight text-white">DoCurator</h1>
                                    </div>
                                    <div className="flex-1 h-0 mt-5 overflow-y-auto cursor-pointer">
                                        <nav className="px-2 space-y-1 cursor-pointer">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    className={classNames(
                                                        item.current ? 'bg-indigo-800 text-white cursor-pointer' : 'text-indigo-100 hover:bg-indigo-600',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer'
                                                    )}
                                                >
                                                    <item.icon className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-300 cursor-pointer" aria-hidden="true" />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14" aria-hidden="true">
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-indigo-500">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <h1 className="text-3xl font-bold tracking-tight text-white">DoCurator</h1>
                        </div>
                        <div className="flex flex-col flex-1 mt-40">
                            <nav className="flex-1 px-2 pb-4 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-indigo-800 text-white' : 'text-white hover:bg-indigo-600',
                                            'group flex items-center px-2 py-2 text-m font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon className="flex-shrink-0 w-6 h-6 mr-3 text-indigo-300" aria-hidden="true" />
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 md:pl-64">
                    <div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white shadow">
                        <button
                            type="button"
                            className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3BottomLeftIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                        <div className="flex justify-between flex-1 px-4">
                            <div className="flex flex-1">
                                <form className="flex w-full md:ml-0" action="#" method="GET">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                </form>
                            </div>
                            <div className="flex items-center ml-4 md:ml-6">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src={`https://placehold.jp/24/6366f1/ffffff/50x50.png?text=${namePlaceHolder}`}
                                                alt=""
                                            />
                                            <span className='px-2 font-semibold sm:text-xl'>
                                                {firstName + " " + lastName}
                                            </span>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <a
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                                            )}
                                                            onClick={() => { Cookies.remove('l_auth'); router.push('/') }}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                            </div>
                        </div>
                    </div>
                    <main>
                        <div className="py-6">
                            {currentPage === "Students" ? <StudentList /> : null}
                            {currentPage === "Birth Certificates" ? <BirthCertificatesList /> : null}
                            {currentPage === "Form 137" ? <Form137List /> : null}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Dashboard