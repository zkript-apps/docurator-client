import React, { useEffect, useState } from "react";
import Table from "../Table";
import useForm138 from "../../../hooks/useGetForm138";
import useAuth from "../../../hooks/useAuth";
import { FORM138_COLUMNS } from "./form138Columns";

const Form138List = () => {
    const { verifyLoginData } = useAuth();
    const [form138, setForm138] = useState([]);
    const { form138Data, refetchForm138 } = useForm138();

    useEffect(() => {
        if (verifyLoginData) {
            setForm138(form138Data)
        }
    }, [form138Data, verifyLoginData]);

    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Form 138
                </h2>
            </div>
            <div className="mt-3">
                <div className="max-w-6xl mx-auto lg:px-8">
                    <div className="flex flex-col">
                        <Table tableData={form138} tableColumns={FORM138_COLUMNS} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form138List;