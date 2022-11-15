

export const BIRTH_CERTIFICATE_COLUMNS = [
    {
        Header: "lrn",
        accessor: "studentId.lrn",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Email",
        accessor: "studentId.email",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Mobile Number",
        accessor: "studentId.phoneNumber",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "School Name",
        accessor: "studentId.schoolName",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }

        },
    },
];