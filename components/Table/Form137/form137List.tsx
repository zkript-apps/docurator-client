import React, { useEffect, useState } from "react";
import Table from "../Table";
import useForm137 from "../../../hooks/useForm137";
import useAuth from "../../../hooks/useAuth";
import { FORM137_COLUMNS } from "./form137Columns";

const Form137List = () => {
    const { verifyLoginData } = useAuth();
    const [form137, setForm137] = useState([]);
    const { form137Data, refetchForm137 } = useForm137();

    useEffect(() => {
        if (verifyLoginData) {
            setForm137(form137Data)
        }
    }, [form137Data, verifyLoginData]);

    return (
        <>
            <div className="flex items-center max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Form 137
                </h2>
            </div>
            <div className="mt-3">
                <div className="max-w-6xl mx-auto lg:px-8">
                    <div className="flex flex-col">
                        <Table tableData={form137} tableColumns={FORM137_COLUMNS} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form137List;