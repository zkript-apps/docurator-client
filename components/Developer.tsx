import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-hot-toast';
const Developer = () => {
    const { verifyLoginData } = useAuth();
    const [publicKey, setPublicKey] = useState("")
    const [privateKey, setPrivateKey] = useState("")
    useEffect(() => {
        if (!publicKey && !privateKey) {
            setPublicKey(verifyLoginData?.publicKey)
            setPrivateKey(verifyLoginData?.privateKey)
        }
    }, [privateKey, publicKey, verifyLoginData?.privateKey, verifyLoginData?.publicKey])

    const copyToast = (e: any) => {
        toast(`Copied ${e}`, {
            id: "copyToClipboard",
            duration: 3000,
            icon: <ClipboardDocumentIcon className="w-8 h-8 text-blue-400" />
        });
    }

    return (
        <div className="flex flex-col max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">
                Developer
            </h2>
            <div className="max-w-4xl mt-16 overflow-hidden bg-white shadow sm:rounded-lg ring-1 ring-black ring-opacity-5">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">API Key</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        {/* <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Public Key</dt>
                            <dd className="mt-1 text-sm text-gray-900 truncate sm:col-span-3 sm:mt-0">{publicKey}</dd>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0 justify-self-end"><ClipboardDocumentIcon
                                className="w-5 h-5 mx-2 text-blue-400 hover:cursor-pointer hover:text-blue-500"
                                onClick={() => { navigator.clipboard.writeText(publicKey); copyToast("Public Key") }}
                                title={"Copy text"}
                                aria-hidden="true"
                            /></dd>
                        </div> */}
                        <div className="px-4 py-5 bg-white border-t sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 ">Private Key</dt>
                            <dd className="mt-1 text-sm text-gray-900 truncate sm:col-span-3 sm:mt-0">{privateKey}</dd>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0 justify-self-end "><ClipboardDocumentIcon
                                className="w-5 h-5 mx-2 text-blue-400 hover:cursor-pointer hover:text-blue-500"
                                onClick={() => { navigator.clipboard.writeText(privateKey); copyToast("Private Key") }}
                                title={"Copy text"}
                                aria-hidden="true"
                            /></dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className='mt-12'>
                <a href='https://github.com/zkript-apps/docurator/blob/main/README.md' target={"_blank"} className="text-xl font-semibold text-gray-900 hover:underline text-sky-500" rel="noreferrer">
                    Read the documentation here
                </a>
            </div>

        </div>
    )
}

export default Developer