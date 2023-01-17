
export const FORM138_COLUMNS = [
    {
        Header: "LRN",
        accessor: "lrn",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Last Name",
        accessor: "studentId.lastName",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "First Name",
        accessor: "studentId.firstName",
        Cell: ({ value }: any) => {
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
        Cell: ({ value }: any) => {
            if (value) {
                return value.from + " - " + value.to
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Teacher",
        accessor: "teacher",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Principal",
        accessor: "principal",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
];