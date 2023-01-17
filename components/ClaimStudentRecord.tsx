import { useRef } from 'react';
import useAddClaimAccess from '../hooks/useAddClaimAccess'

const ClaimStudentRecords = () => {
    const formRef = useRef(null)
    const { triggerAddClaimAccess } = useAddClaimAccess()
    const _submitHandler = (e: any) => {
        e.preventDefault();
        const lrn = e.target.lrn.value

        triggerAddClaimAccess({
            lrn,
        })
    }

    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <div className="mt-3">
                    <div className="max-w-6xl mx-auto lg:px-8">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Claim your records (Personal Information and Learner&apos;s Permanent Records)
                            </h2>
                            <div className="w-1/2 p-6 mt-8 mb-4 border rounded-md w-5/8">
                                <form id="claimAccessForm" onSubmit={_submitHandler} ref={formRef}>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClaimStudentRecords;
