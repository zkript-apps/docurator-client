
export const FORM138_COLUMNS = [
    {
        Header: "LRN",
        accessor: "lrn",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Last Name",
        accessor: "studentId.userId.lastName",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "First Name",
        accessor: "studentId.userId.firstName",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "School Year",
        accessor: "academicYear",
        Cell: ({ value }) => {
            if (value) {
                return value.from + " - " + value.to
            } else {
                return "..."
            }
        },
    },
];