import React, { useEffect, useState } from "react";
import Table from "../Table";
import useGoodMoralCertificates from "../../../hooks/useGoodMoralCertificates"
import useAuth from "../../../hooks/useAuth";
import { GOOD_MORAL_CERTIFICATES_COLUMNS } from "./goodMoralCertificatesColumns";

const GoodMoralCertificatesList = () => {
    const { verifyLoginData } = useAuth();
    const [goodMoralCertificates, setGoodMoralCertificates] = useState([]);
    const { goodMoralCertificatesData, refetchGoodMoralCertificates } = useGoodMoralCertificates();

    useEffect(() => {
        if (verifyLoginData) {
            setGoodMoralCertificates(goodMoralCertificatesData)
        }
    }, [goodMoralCertificatesData, verifyLoginData, refetchGoodMoralCertificates]);

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
                        <Table tableData={goodMoralCertificates} tableColumns={GOOD_MORAL_CERTIFICATES_COLUMNS} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GoodMoralCertificatesList;