import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useClaimStudentRecord from '../hooks/useClaimStudentRecord'

export default function ClaimRecordModal() {
    const [open, setOpen] = useState(true)
    const { triggerClaimStudentRecord } = useClaimStudentRecord()
    const _submitHandler = (e: any) => {
        e.preventDefault();
        const lrn = e.target.lrn.value

        triggerClaimStudentRecord([{ lrn }, lrn], { onSuccess: () => setOpen(false) })
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    Claim your records (Personal Information and Learner&apos;s Permanent Records)
                                </h2>
                                <div className="mt-8 mb-4">
                                    <form id="claimAccessForm" onSubmit={_submitHandler}>
                                        <label
                                            htmlFor="email"
                                            className="block mt-4 font-medium text-gray-700 text-md"
                                        >
                                            Your LRN
                                        </label>
                                        <input
                                            id="lrn"
                                            name="lrn"
                                            type="text"
                                            placeholder={"198765150721"}
                                            maxLength={12}
                                            required
                                            className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                className="flex justify-center px-4 py-2 mt-8 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm w-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Claim
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
