
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
        accessor: "schoolEmail",
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
        accessor: "schoolPhoneNumber",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
];