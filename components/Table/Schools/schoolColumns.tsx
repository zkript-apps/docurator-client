
export const SCHOOLS_COLUMNS = [
    {
        Header: "School Name",
        accessor: "schoolName",
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
        accessor: "email",
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
        accessor: "phoneNumber",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
];