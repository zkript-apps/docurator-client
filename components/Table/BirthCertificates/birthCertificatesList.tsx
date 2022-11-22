import React, { useEffect, useState } from "react";
import Table from "../Table";
import useBirthCertificates from "../../../hooks/useBirthCertificates";
import useAuth from "../../../hooks/useAuth";
import { BIRTH_CERTIFICATE_COLUMNS } from "./birthCertificatesColumns";

const BirthCertificatesList = () => {
    const { verifyLoginData } = useAuth();
    const [birthCertificates, setBirthCertificates] = useState([]);
    const { birthCertificatesData, refetchBirthCertificates } = useBirthCertificates();

    useEffect(() => {
        if (verifyLoginData) {
            setBirthCertificates(birthCertificatesData)
        }
    }, [birthCertificatesData, verifyLoginData, refetchBirthCertificates]);

    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Birth Certificates
                </h2>
            </div>
            <div className="mt-3">
                <div className="max-w-6xl mx-auto lg:px-8">
                    <div className="flex flex-col">
                        <Table tableData={birthCertificates} tableColumns={BIRTH_CERTIFICATE_COLUMNS} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BirthCertificatesList;