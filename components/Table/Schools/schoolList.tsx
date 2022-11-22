import React, { useEffect, useState } from "react";
import Table from "../Table";
import useSchools from "../../../hooks/useSchools";
import useAuth from "../../../hooks/useAuth";
import { SCHOOLS_COLUMNS } from "./schoolColumns";

const SchoolsList = () => {
    const { verifyLoginData } = useAuth();
    const [schools, setSchools] = useState([]);
    const { schoolsData, refetchSchools } = useSchools();

    useEffect(() => {
        if (verifyLoginData) {
            setSchools(schoolsData)
        }
    }, [verifyLoginData, schools, schoolsData, refetchSchools]);

    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Schools
                </h2>
            </div>
            <div className="mt-3">
                <div className="max-w-6xl mx-auto lg:px-8">
                    <div className="flex flex-col">
                        <Table tableData={schools} tableColumns={SCHOOLS_COLUMNS} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SchoolsList;